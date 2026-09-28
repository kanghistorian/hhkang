export type RecordedTalk = {
	title: string;
	venue: string;
	year: string;
	href: string;
	image: string;
};

export type TalkPoster = {
	title: string;
	venue: string;
	location: string;
	date: string;
	tone: "sage" | "clay" | "paper";
	image: string;
};

export const upcomingTalks = [
	{
		title: "Premodern Korean Studies in the Age of AI",
		venue: "Tateuchi East Asia Library (TEAL) Digital Scholarship Series, University of Washington",
	},
	{
		title: "By Virtue of Craft: Sciences of Making in Chosŏn Korea",
		venue: "Emerging Scholars Speakers Initiative Program, Asia in Depth Series, hosted by Asian Studies Program, History Department, and the School of Foreign Service, Georgetown University",
		href: "https://history.georgetown.edu/gigh/asiaindepth/"
	}
];

export const recordedTalks: RecordedTalk[] = [
	{
		title: "The Wicked Factory? Artisans, Ethics, and Reform in Sixteenth-Century Chosŏn",
		venue: "Korean Treasures at Harvard · Korea Institute",
		year: "2025",
		href: "https://www.youtube.com/watch?v=qXIt5WNpqWs",
		image: "/talks/Kang_Talk_Posters/2025-02-06_Harvard_The_Wicked_Factory_Poster.jpg"
	},
	{
		title: "Engineers of the Confucian State",
		venue: "George Washington University · Institute of Korean Studies",
		year: "2026",
		href: "https://www.youtube.com/results?search_query=Hyeok+Hweon+Kang",
		image: "/talks/Kang_Talk_Posters/2026-04-17_GWU_Engineers_of_the_Confucian_State_Banner.jpg"
	}
];

export const talkPosters: TalkPoster[] = [
	{
		title: "Engineers of the Confucian State",
		venue: "University of Hong Kong",
		location: "Hong Kong",
		date: "April 2026",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2026-04-28_HKU_Engineers_of_the_Confucian_State_Poster.jpg"
	},
	{
		title: "Engineers of the Confucian State",
		venue: "George Washington University",
		location: "Washington D.C.",
		date: "April 2026",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2026-04-17_GWU_Engineers_of_the_Confucian_State_Banner.jpg"
	},
	{
		title: "Reworking Chosŏn: 3D Modeling and Virtual Exhibitions",
		venue: "Digital Age Symposium, Center for East Asian Studies, University of Kansas",
		location: "Kansas",
		date: "April 2025",
		tone: "sage",
		image: "/talks/Kang_Talk_Posters/2025-04-04_Kansas_Digital_Age_Symposium_Banner.jpg"
	},
	{
		title: "Korea in the Global Silver Age",
		venue: "Kansas",
		location: "Kansas",
		date: "February 2025",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2025-02-24_Kansas_Korea_in_the_Global_Silver_Age_Poster.jpg"
	},
	{
		title: "The Wicked Factory?",
		venue: "Korean Treasures at Harvard",
		location: "Cambridge, Massachusetts",
		date: "February 2025",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2025-02-06_Harvard_The_Wicked_Factory_Poster.jpg"
	},
	{
		title: "Science, Technology, and Medicine in Chosŏn Korea",
		venue: "AATK",
		location: "Colloquium",
		date: "April 2024",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2024-04-05_AATK_Spring_Colloquium_Poster.jpg"
	},
	{
		title: "Artisan Squad",
		venue: "Barcelona",
		location: "Barcelona, Spain",
		date: "January 2022",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2022-01-13_Barcelona_Artisan_Squad_Flyer.jpg"
	},
	{
		title: "Out of Thick Air: Western Pneumatics in Nineteenth Century Korea",
		venue: "KoRN Inaugural Conference",
		location: "Iowa",
		date: "November 2021",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2021-11-05_Iowa_KoRN_Inaugural_Conference_Promo.jpg"
	},
	{
		title: "My Humble Explanation of Things (Somun sasŏl): A Source Reading",
		venue: "New Frontiers in Premodern Korea Studies",
		location: "Harvard University",
		date: "June 2021",
		tone: "sage",
		image: "/talks/Kang_Talk_Posters/2021-06-11_Harvard_New_Frontiers_Workshop_Poster.jpg"
	}
];
