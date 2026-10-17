"""Build the site's regular serif with explicit O/o-breve glyphs.

Run from the repository root with Python and fontTools installed:
    python scripts/build_breve_font.py
The new glyphs use the source font's existing outlines and GPOS anchors.
The source and derived font are covered by static/fonts/baskervville/OFL.txt.
"""
from pathlib import Path

from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = ROOT / "static/fonts/baskervville"
font = instantiateVariableFont(
    TTFont(FONT_DIR / "Baskervville-VariableFont_wght.ttf"), {"wght": 400}, inplace=True
)


def mark_position(base, mark):
    for lookup in font["GPOS"].table.LookupList.Lookup:
        for subtable in lookup.SubTable:
            subtable = getattr(subtable, "ExtSubTable", subtable)
            if not hasattr(subtable, "MarkCoverage") or not hasattr(subtable, "BaseCoverage"):
                continue
            if mark not in subtable.MarkCoverage.glyphs or base not in subtable.BaseCoverage.glyphs:
                continue
            record = subtable.MarkArray.MarkRecord[subtable.MarkCoverage.glyphs.index(mark)]
            anchor = subtable.BaseArray.BaseRecord[subtable.BaseCoverage.glyphs.index(base)].BaseAnchor[record.Class]
            return (
                anchor.XCoordinate - record.MarkAnchor.XCoordinate,
                anchor.YCoordinate - record.MarkAnchor.YCoordinate,
            )
    raise ValueError(f"No attachment anchors for {base} and {mark}")


for codepoint, name, base, mark in [
    (0x014F, "obreve", "o", "uni0306"),
    (0x014E, "Obreve", "O", "uni0306.case"),
]:
    x, y = mark_position(base, mark)
    pen = TTGlyphPen(font.getGlyphSet())
    pen.addComponent(base, (1, 0, 0, 1, 0, 0))
    pen.addComponent(mark, (1, 0, 0, 1, x, y))
    font["glyf"][name] = pen.glyph()
    font["hmtx"][name] = font["hmtx"][base]
    if "vmtx" in font:
        font["vmtx"][name] = font["vmtx"][base]
    order = font.getGlyphOrder()
    if name not in order:
        font.setGlyphOrder(order + [name])
    for table in font["cmap"].tables:
        if table.isUnicode():
            table.cmap[codepoint] = name

# Give the derived font its own internal name; CSS retains the site's existing alias.
for record in font["name"].names:
    names = {
        1: "HHKang Serif", 2: "Regular", 3: "HHKangSerif-Regular-1.0",
        4: "HHKang Serif Regular", 6: "HHKangSerif-Regular",
        16: "HHKang Serif", 17: "Regular", 25: "HHKangSerif",
    }
    if record.nameID in names:
        record.string = names[record.nameID].encode(record.getEncoding())
font.save(FONT_DIR / "HHKangSerif-Regular.ttf")
