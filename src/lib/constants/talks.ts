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

export const upcomingTalk = {
	title: "Premodern Korean Studies in the Age of AI",
	venue: "Tateuchi East Asia Library (TEAL) Digital Scholarship Series, University of Washington",
};

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
		venue: "George Washington University / HKU",
		year: "Watch on YouTube",
		href: "https://www.youtube.com/results?search_query=Hyeok+Hweon+Kang",
		image: "/talks/Kang_Talk_Posters/2026-04-17_GWU_Engineers_of_the_Confucian_State_Banner.jpg"
	}
];

export const talkPosters: TalkPoster[] = [
	{
		title: "The Wicked Factory?",
		venue: "Korean Treasures at Harvard",
		location: "Cambridge, Massachusetts",
		date: "06 · 02 · 2025",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2025-02-06_Harvard_The_Wicked_Factory_Poster.jpg"
	},
	{
		title: "Engineers of the Confucian State",
		venue: "HKU / GWU",
		location: "Hong Kong / Washington D.C.",
		date: "April 2026",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2026-04-28_HKU_Engineers_of_the_Confucian_State_Poster.jpg"
	},
	{
		title: "Digital Age Symposium",
		venue: "Kansas",
		location: "Kansas",
		date: "04 · 04 · 2025",
		tone: "sage",
		image: "/talks/Kang_Talk_Posters/2025-04-04_Kansas_Digital_Age_Symposium_Banner.jpg"
	},
	{
		title: "Spring Colloquium",
		venue: "AATK",
		location: "Colloquium",
		date: "04 · 05 · 2024",
		tone: "clay",
		image: "/talks/Kang_Talk_Posters/2024-04-05_AATK_Spring_Colloquium_Poster.jpg"
	},
	{
		title: "Artisan Squad",
		venue: "Barcelona",
		location: "Barcelona, Spain",
		date: "01 · 13 · 2022",
		tone: "paper",
		image: "/talks/Kang_Talk_Posters/2022-01-13_Barcelona_Artisan_Squad_Flyer.pdf"
	}
];
