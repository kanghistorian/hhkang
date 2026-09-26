import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const images = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1607546676966-B119QFMRY9Q7NB0DGUQI/LC-14_100_101-097.jpg",
    caption:
      'Gun inscribed with "Chosŏn" presumably used in the East Asian War of 1592–1598, gifted by Toyotomi Hideyoshi to Horio Yoshiharu, MET Museum',
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1604091734098-ZJ73ICOTGEIGJV0943JL/Lixivation+station.png",
    caption: "Lixivation vats, 19th century Japan",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1604091575717-NF4376LT5ERLRY11AQEP/00000006+copy.jpg",
    caption:
      "Map of Beijing, copied by a Korean painter, 19th century, National Library of Korea",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1604091314094-JPNYONUZI8F5FJXICOX3/133.jpeg",
    caption: "Niter bed in Germany, 1580, Bavarian State Library",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596942606781-36RVSTL3539ZZ9407S1O/imu-media.jpeg",
    caption:
      "Ivory scaphe dial made by officer-manager Kang Yun (姜潤, 1830–1898). History of Science Museum, Oxford, England.",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1603320963360-MITYJIFOKZP46YFK6H7Y/PS01001001_mno000_2017_0508112331765_mno000128-00-01.jpg",
    caption: "Drawing of an Elephant, National Museum of Korea",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1604091400307-FTNPNPFX75U9EY6MANN0/00000003+copy.jpg",
    caption:
      "World map with Aristotelian celestial spheres, 19th century, National Library of Korea",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1603321444885-K950R6UZGRRCP36VVVWD/PS01001001_mno000_2017_0508112331765_mno000128-00-02.jpg",
    caption: 'Depiction of a "Westerner," National Museum of Korea',
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1597785833120-9H1M218BMC1SAFXBMGSC/IMG_1313.jpg",
    caption:
      "Korean Map of Japan (19th century), National Library of Korea, 2019 ",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662700463-8ENUK8YC13AEYFK4VXZT/2018+malaysia.JPG",
    caption: "Disassembled Malaysian gun lock, home workshop, 2019",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1604091240845-2N0GFZX0X83MA3NLMV7X/%E1%84%92%E1%85%A2%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%AE%E1%86%A8%E1%84%83%E1%85%A9.jpg",
    caption: "Map of East Asia, 19th century, National Museum of Korea",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1597785568846-4RHDJYL858MS9ZR3ZI7R/seo019029-000-008.jpg",
    caption:
      "Shown are mechanical clock and eyeglasses among others, Portrait of Yi Haŭng (1820–1898), Painted in 1869, Ink and color on silk, Seoul Museum of History.",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596665114835-K9Z7HL7IKXPEIYJH0ZK4/IMG_0829.jpg",
    caption: "Astrolabe made for Yu Kŭm (柳琴, 1741–1788), Sirhak Museum, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664474109-A9CP7YZMRX6VXGIRAC0L/back.JPG",
    caption:
      "Chosŏn (also note the crab), Korean Map of Japan (19th century), National Library of Korea, 2019 ",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662658326-L2B3BOR6WR8BDRWWN78V/IMG_1335.jpg",
    caption:
      "Dutch & Chinese ships, Korean Map of Japan (19th century), National Library of Korea, 2019 ",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596665325685-QI1A98REX9TB0XL63IEL/IMG_1368.jpg",
    caption:
      "Portrait of Yi Sam (李森, 1677–1735), Ancestral home, Nonsan, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596665675544-D1YT1P5YQI0YY0I46P5J/2016-07-07+17.01.41.jpg",
    caption: "Garrison Records, Changsŏgak Archives, Seongnam, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596652389780-JKS4GD4LBQ0IVUPUOVDY/IMG_0442.JPG",
    caption: "Measuring bores, National Museum of Korea, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596941666351-V2YJUVO5QWS13SNHKLE9/IMG_5776.jpg",
    caption: "Disassembled Korean musket barrel, home workshop, 2019",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596661905444-PEDIAVA3G6L3H14V85F3/chichen+itza+2011.jpg",
    caption: "Stone staircase, Chichen Itza, 2011",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662011090-7IZXC4FPP7NH6E2GZ3IC/chicenitza2011.jpg",
    caption: "Temple, Chichen Itza, 2011",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662209142-JQH0JO73GY8D9LDHKAO6/2011manuscript.jpg",
    caption: "Rare nanyin music score, Quanzhou, 2011",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662264439-9FQT7CYWNM32CIOHUT8X/squiggles+2012.jpg",
    caption: "Scrapbook, Kyujanggak Archives, 2014",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662293875-R8E0PCOMQJN63AHQSGQ4/2012.jpg",
    caption: "Turtle-shaped stone with inscriptions, Kŏchang, 2012",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596662049389-17WL72P5FX0F80NHOF82/2011.jpg",
    caption: "Steles, Qingjing Mosque 清淨寺, Quanzhou, 2011",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664136410-7FVCS468QCVG9VB4F6O0/2018-08-28+20.01.41.jpg",
    caption: "Chosŏn Military equipment, Museum of Ethnology, Leiden, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596663085796-5HSBAUI8SNI9VX1HWU6D/2013-06-24+11.08.52tsushima.jpg",
    caption: "Chosŏn diplomatic envoy to Japan, Tsushima, 2013",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596663173164-L3YHNVMYY1J3E09LXXCT/2014-07-12+11.10.58.jpg",
    caption:
      "Korean pine transplanted by Japan-raised Kim Yŏch'ŏl (金如鐵, aka Wakita Naokata 脇田直賢, 1585–1660), Gyokusen-en, Kanazawa, 2014",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664045699-BLKUYO8KGW3YFW4VKS8T/IMG_6291.JPG",
    caption:
      "Ivory diptych sundial, by Leonhart miller (Nuremberg, c. 1636), Harvard Science Center Museum,  2019",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596663210536-57MUXB0N904RYEMWNEVV/2018-12-21+23.47.34ottoman+gun.jpg",
    caption: "Ottoman cannon captured by the Portuguese, Lisbon, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596663868145-M9EI1C6O5N54TDBU8KEW/2018-12-21%2B01.04.27.jpg",
    caption: "Ceylon barrel, 16th cent., welded breech with tang, Lisbon, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596663960543-2SMYP5QCHZ7EVY9MXRSZ/Prototype+of+gunpowder+mill%2C+Bacarena%2C+Portugal%2C+Museu+militar.jpg",
    caption:
      "Prototype of a powder milling machine by the Bacarena shop, Lisbon, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664824308-IHK914X1SNNI945THWAZ/2018.jpg",
    caption: "Portuguese clay pot bomb, Harvard Houghton Library, 2018 ",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664562009-E37W14AX3Z7UVWE8073L/2016-06-11+12.15.18.jpg",
    caption: "Stone inscriptions, Sillok archive of T'aebaek Mountain, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596942589706-MKPUPOWGM4W77NM89LS7/5.png",
    caption:
      "Architectural plan for the Robust and Brave Guards (1799), Janseogak Archives, 2018",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596664917944-75Z1FD3PAMCELE34E4HS/IMG_4993.jpg",
    caption:
      "Gunpowder flask (adapted from Chinese porcelain), Fuerte de San Diego, Acapulco, 2017",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1597789031327-RLNR6BRUON4CIUKCI562/Screen+Shot+2020-08-18+at+5.15.53+PM.png",
    caption:
      "Scholar’s Studio behind a Leopard Skin Curtain (19th century), Ink and color on paper, Leeum, Samsung Museum of Art",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1598150010769-RA9TDILU4C1BV8O0VRNF/Korean+pocket+compass+and+sundial.jpg",
    caption: "Pocket compass and sundial, Science museum, UK ",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596834211658-8OV5FUW3B2I6M6YLY2IX/IMG_5776.jpg",
    caption: "Disassembled Korean musket, author's collection",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5f2ae0448425b14b4989adb7/1596735577091-DSQK5TY6CM9V7XVWODC5/KakaoTalk_Photo_2019-06-16-12-42-40-1.jpeg",
    caption:
      "Jade seal made by Ch'oe Ch'ŏnyak, 18th century, National Museum of Korea",
  },
];


async function downloadImage(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status})`);
    const buffer = await res.buffer();
    fs.writeFileSync(filename, buffer);
    console.log(`✅ Downloaded: ${filename}`);
  } catch (err) {
    console.error(`❌ Error downloading ${url}: ${err.message}`);
  }
}

(async () => {
  const outputDir = path.resolve('downloads');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const ext = path.extname(img.image).split('?')[0] || '.jpg';
    const filename = path.join(outputDir, `image_${i + 1}${ext}`);
    await downloadImage(img.image, filename);
  }
})();

