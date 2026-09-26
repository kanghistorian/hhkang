import p1 from '$lib/media/p1.webp';
import p2 from '$lib/media/p2.webp';
import p3 from '$lib/media/p3.webp';

export type Work = {
  citation: string,
  image: string,
  index: number,
};

export type Works = Record<
  'MONOGRAPH' | 'PEER-REVIEWED ARTICLES' | 'BOOK CHAPTERS' | 'REVIEWS' | 'OTHER PUBLICATIONS',
  Array<Work>
>;

const imgs = [p1, p2, p3];
const rand = () => imgs[Math.floor(Math.random() * imgs.length)];

export const works: Works = {
  'MONOGRAPH': [
    {
      citation: '<i>Artisanal Heart: State, Craft, and Science in Early Modern Korea</i> (under contract with The University of Chicago Press)',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Monograph,%20Artisanal%20Heart.webp?updatedAt=1754240751365',
      index: 0,
    },
  ],
  'PEER-REVIEWED ARTICLES': [
    {
      citation: '<a class="no-underline" href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank">“Global History and the Measures of Early Modern Technology: Europe, East Asia, and the Case of Smoothbore Ballistics,”</a> <i>Journal of World History</i> 36, no. 2 (2025): 169–204',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Global%20history.webp?updatedAt=1754240750332',
      index: 1,
    },
    {
      citation: '<a class="no-underline" href="https://read.dukeupress.edu/journal-of-asian-studies/article-abstract/83/1/116/384189/Kingpins-at-CourtContraband-Diplomacy-between?redirectedFrom=fulltext" target="_blank">“Kingpins at Court: Contraband Diplomacy between Korea, Japan, and Tsushima, 1607–1671,”</a> <i>Journal of Asian Studies</i> 83, no. 1 (2024): 116–139',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Kingpins%20at%20court%20(flip%20it).webp?updatedAt=1754240750397',
      index: 2,
    },
    {
      citation: '<a class="no-underline" href="https://doi.org/10.1080/07341512.2022.2153206" target="_blank">“Reverse Engineering as History and Method: The Portuguese Espingarda in Chosŏn Korea,”</a> <i>History and Technology</i> 38, no. 2-3 (2023): 144–66',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/reverse%20engineering.webp?updatedAt=1754240751303',
      index: 3,
    },
    {
      citation: '<a class="no-underline" href="https://muse.jhu.edu/pub/5/article/908616" target="_blank">With Michelle Suh, “Korean Chronicles under a Macroscope: Towards a Digital Infrastructure in Premodern Korean Studies,”</a> <i>Korean Studies</i> 47, no. 1 (2023): 8–33',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Silloker.webp?updatedAt=1754240751220',
      index: 4,
    },
    {
      citation: '<a class="no-underline" href="https://doi.org/10.22148/001c.68188" target="_blank">“How Network Analysis Uncovers International Networks of Smuggling History: Criminals in Nagasaki, Japan circa 1667,”</a> <i>Journal of Cultural Analytics</i> 8, no. 1 (February 2023): 1–20',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/How%20Network.webp?updatedAt=1754240750244',
      index: 5,
    },
    {
      citation: '<a class="no-underline" href="https://www.journals.uchicago.edu/doi/abs/10.1086/718283?journalCode=isis" target="_blank">“Cooking Niter, Prototyping Nature: Saltpeter and Artisanal Experiment in Korea, 1592–1635,”</a> <i>Isis: A Journal of the History of Science Society</i> 113, no. 1 (March 2022): 1–21',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Cooking%20Niter.webp?updatedAt=1754240750151',
      index: 6,
    },
    {
      citation: '<a class="no-underline" href="https://www.jstor.org/stable/43286060" target="_blank">With Tonio Andrade and Kirtsen Cooper, “A Korean Military Revolution? Parallel Military Innovations in East Asia and Europe,”</a> <i>Journal of World History</i> 25, no. 1 (March 2014): 51–84',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/A%20Korean%20Military%20Revolution_.webp?updatedAt=1754240750160',
      index: 7,
    },
    {
      citation: '<a class="no-underline" href="https://brill.com/view/journals/jcmh/2/2/article-p127_2.xml?language=en" target="_blank">“Big Heads and Buddhist Demons: The Korean Musketry Revolution and the Northern Expeditions of 1654 and 1658,”</a> <i>Journal of Chinese Military History</i> 2, no. 2 (2013): 127–89',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Big%20Heads%20and%20Buddhist%20Demons.webp?updatedAt=1754240750266',
      index: 8,
    },
  ],
  'BOOK CHAPTERS': [
    {
      citation: '“Firearms, Fluidity, and the Global Technology Circuit: Conflict, 1450–1650,” for <i>A Cultural History of Technology in the Age of Encounters</i> (1450–1650), ed. Mackenzie Cooley (London: Bloomsbury; forthcoming)',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Firearms%20fluidity.webp?updatedAt=1754240750144',
      index: 9,
    },
    {
      citation: '<a class="no-underline" href="https://elmhurst.ecampus.com/military-revolution-revolutions-military/bk/9783110661415" target="_blank">“Difference in an Age of Parity: Technology and Global Military History,”</a> in <i>The Military Revolution and Revolutions in Military Affairs</i>, ed. Mark C. Fissel (Berlin: De Gruyter, 2022), 29–64',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Difference%20in%20an%20age%20of%20parity.webp?updatedAt=1754240750182',
      index: 10,
    },
    {
      citation: '<a class="no-underline" href="https://www.routledge.com/Routledge-Handbook-of-Asian-Music-Cultural-Intersections/Lee/p/book/9780367723262" target="_blank">“Nature of Narye: Sound, Spectacle, and the Politics of Performance in Fifteenth-Century Korea, 1392–1592,”</a> in <i>Routledge Handbook of Asian Music: Cultural Intersections</i>, ed. Tong Soon Lee (London: Routledge, 2021), 150–73',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Nature%20of%20Narye.webp?updatedAt=1754240751326',
      index: 11,
    },
  ],
  'REVIEWS': [
    {
      citation: '<a class="no-underline" href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003113238" target="_blank">Review of Lim Jongtae 임종태, <i>Travel, Reform, and Science and Technology in Eighteenth-Century Korea</i> 여행과 개혁, 그리고 18세기 조선의 과학기술,</a> <i>Journal of the Korean History of Science Society</i> 46, no. 2 (2024): 427–429',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/book%20review%20%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%90%E1%85%A2.webp?updatedAt=1754240749942',
      index: 12,
    },
    {
      citation: '<a class="no-underline" href="https://www.academia.edu/106227155/Review_of_Technical_Knowledge_in_Early_Modern_Japan_eds_Erich_Pauer_and_Ruselle_Meade" target="_blank">Review of Technical Knowledge in Early Modern Japan,</a> eds. Erich Pauer and Ruselle Meade, <i>Japan Review</i> 37 (2022): 190–2',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/Technical%20Knowledge%20in%20Early%20Modern%20Japan.webp?updatedAt=1754240751295',
      index: 13,
    },
    {
      citation: '<a class="no-underline" href="https://muse.jhu.edu/pub/252/article/623889/pdf" target="_blank">“In Pursuit of Truth and Justice: Legal History of Chosŏn Korea and the State of the Field,”</a> <i>Seoul Journal of Korean Studies</i> 29, no. 1 (June 2016): 219–27',
      image: 'https://ik.imagekit.io/easton/hhkang/images/works/In%20pursuit%20of%20truth.webp?updatedAt=1754240750202',
      index: 14,
    },
  ],
  'OTHER PUBLICATIONS': [
    {
      citation: '“Silloker,” database and search engine for Korean historical chronicles, June 1, 2022–present, https://silloker.com. Co-designed with Michelle Suh',
      image: rand(),
      index: 15,
    },
    {
      citation: '“Climate Change’s Fatal Synergy,” <i>Sense & Sustainability</i>, May 11, 2015',
      image: rand(),
      index: 16,
    },
    {
      citation: '“The Little Ice Age: Heterogeneity of Impact and Japan’s Success Story?”, <i>Sense & Sustainability</i>, December 5, 2014',
      image: rand(),
      index: 17,
    },
    {
      citation: '“The Little Ice Age: History of Climate-Induced Crisis in Europe and East Asia,” <i>Sense & Sustainability</i>, October 15, 2014',
      image: rand(),
      index: 18,
    },
  ],
};

