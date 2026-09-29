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

export interface TalksPoster {
	title: string;
	year: string;
	image: string;
	link?: string;
	linkLabel?: string;
	description?: string;
}

export const upcomingTalks: UpcomingTalk[] = [
	{
		title: 'Premodern Korean Studies in the Age of AI',
		venue: 'Tateuchi East Asia Library (TEAL) Digital Scholarship Series, University of Washington',
		date: 'TBD',
	},
	{
		title: 'By Virtue of Craft: Sciences of Making in Chosŏn Korea',
		venue: 'Emerging Scholars Speakers Initiative Program, Asia in Depth Series, hosted by Asian Studies Program, History Department, and the School of Foreign Service, Georgetown University',
		date: 'October 2026',
		href: 'https://history.georgetown.edu/gigh/asiaindepth/',
	}
];

export const recordedTalks: RecordedTalk[] = [
	{
		title: 'The Wicked Factory? Artisans, Ethics, and Reform in Sixteenth-Century Chosŏn',
		venue: 'Korean Treasures at Harvard · Korea Institute',
		year: '2025',
		href: 'https://www.youtube.com/watch?v=qXIt5WNpqWs',
		image: 'https://i.ytimg.com/vi/qXIt5WNpqWs/hqdefault.jpg'
	},
	{
		title: 'Sciences of Making in Chosŏn Korea',
		venue: 'Selected lecture · H. H. Kang',
		year: 'Watch on YouTube',
		href: 'https://www.youtube.com/results?search_query=Hyeok+Hweon+Kang',
		image: '/reverse_engineering.png'
	}
];

export const talkPosters: TalksPoster[] = [
	{
		title: 'George Washington University',
		year: '2026',
		image: '/static/media/talks/gwu-poster.jpg',
		link: '/static/docs/gwu-program-flyer.pdf',
		linkLabel: 'View full program flyer',
		description: 'Guest lecture on craft and architecture.'
	},
	{
		title: 'Barcelona “Artisan Squad”',
		year: '2025',
		image: '/static/media/talks/barcelona-poster.jpg',
		link: '/static/docs/barcelona-flyer.pdf',
		linkLabel: 'View original PDF flyer',
		description: 'Workshop presentation in Barcelona.'
	},
	{
		title: 'Annual Craft Symposium',
		year: '2024',
		image: '/static/media/talks/symposium-poster.jpg',
		link: '/static/media/talks/symposium-full.jpg',
		linkLabel: 'View full resolution poster',
		description: 'Keynote presentation on systemic design.'
	}
];
