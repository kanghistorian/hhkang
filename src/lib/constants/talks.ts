export interface UpcomingTalk {
	title: string;
	venue: string;
	date: string;
	href?: string;
	image?: string;
}

export interface RecordedTalk {
	title: string;
	venue: string;
	year: string;
	href: string;
	image: string;
}

export interface TalkPoster {
	title: string;
	series: string;
	institution: string;
	date: string;
	tone: "sage" | "clay" | "paper";
	image: string;
}

export const upcomingTalks: UpcomingTalk[] = [
	{
		title: "Premodern Korean Studies in the Age of AI",
		venue: "Tateuchi East Asia Library (TEAL) Digital Scholarship Series, University of Washington",
		date: "TBD",
	},
	{
		title: "By Virtue of Craft: Sciences of Making in Chosŏn Korea",
		venue: "Emerging Scholars Speakers Initiative Program, Asia in Depth Series, hosted by Asian Studies Program, History Department, and the School of Foreign Service, Georgetown University",
		date: "October 2026",
		href: "https://history.georgetown.edu/gigh/asiaindepth/",
	}
];

export const recordedTalks: RecordedTalk[] = [
	{
		title: "Sciences of Making in Chosŏn Korea",
		venue: "Premodern Korean Lecture Series · Institute for Korea Studies, George Washington University",
		year: "2026",
		href: "https://www.youtube.com/watch?v=Dv_ZLRERC2w&t=2s",
		image: "https://i.ytimg.com/vi/Dv_ZLRERC2w/hqdefault.jpg"
	},
	{
		title: "The Wicked Factory? Artisans, Ethics, and Reform in Sixteenth-Century Chosŏn",
		venue: "Korean Treasures at Harvard · Korea Institute, Harvard University",
		year: "2025",
		href: "https://www.youtube.com/watch?v=qXIt5WNpqWs",
		image: "https://i.ytimg.com/vi/qXIt5WNpqWs/hqdefault.jpg"
	}
];

export const talkPosters: TalkPoster[] = [
	{
		title: "The Wicked Factory? Artisans, Ethics, and Reform in Sixteenth-Century Chosŏn",
		series: "Korean Treasures at Harvard",
		institution: "Korea Institute, Harvard University",
		date: "February 2025",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2025-02-06_Harvard_The_Wicked_Factory_Poster.jpg"
	},
	{
		title: "Engineers of the Confucian State: The Making of Early Modern Korea",
		series: "Invited lecture",
		institution: "Korean Studies Programme, School of Modern Languages and Cultures, University of Hong Kong",
		date: "April 2026",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2026-04-28_HKU_Engineers_of_the_Confucian_State_Poster.jpg"
	},
	{
		title: "Engineers of the Confucian State: The Making of Early Modern Korea",
		series: "Premodern Korea Lecture Series",
		institution: "Institute for Korea Studies, George Washington University",
		date: "April 2026",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2026-04-17_GWU_Engineers_of_the_Confucian_State_Banner.jpg"
	},
	{
		title: "Digital Chosŏn: 3D Modeling and Virtual Exhibitions",
		series: "Digital Age Symposium",
		institution: "Center for East Asian Studies, University of Kansas",
		date: "April 2025",
		tone: "sage",
		image: "/talks/Kang_Talk_Posters/2025-04-04_Kansas_Digital_Age_Symposium_Banner.jpg"
	},
	{
		title: "The Artisanal Heart: Engineering and Statecraft in Early Modern Korea",
		series: "Spring Colloquium: Science, Technology, and Medicine in Chosŏn Korea",
		institution: "American Association of Teachers of Korean",
		date: "April 2024",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2024-04-05_AATK_Spring_Colloquium_Poster.jpg"
	},
	{
		title: "Artisan Squad: Technology, Innovation, and the Early Modern Craftscape in Post-Imjin Korea",
		series: "Aftermath of the East Asian War of 1592–1598 Research Webinar Series",
		institution: "Autonomous University of Barcelona",
		date: "January 2022",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2022-01-13_Barcelona_Artisan_Squad_Flyer.jpg"
	},
	{
		title: "My Humble Explanation of Things (Somun sasŏl): A Source Reading",
		series: "4th New Frontiers in Premodern Korea Studies Workshop",
		institution: "Korea Institute, Harvard University",
		date: "June 2021",
		tone: "sage",
		image: "/talks/Kang_Talk_Posters/2021-06-11_Harvard_New_Frontiers_Workshop_Poster.jpg"
	},
	{
		title: "Out of Thick Air: Western Pneumatics in Nineteenth Century Korea",
		series: "Korean Studies Research Network Inaugural Conference",
		institution: "University of Iowa",
		date: "November 2021",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2021-11-05_Iowa_KoRN_Inaugural_Conference_Promo.jpg"
	},
	{
		title: "Korea in the Global Silver Age: Pirates, Cannons, and Temple Bells",
		series: "Invited lecture",
		institution: "Department of History of Art, University of Kansas",
		date: "February 2025",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2025-02-24_Kansas_Korea_in_the_Global_Silver_Age_Poster.jpg"
	}
];
