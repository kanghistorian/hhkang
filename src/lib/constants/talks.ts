export interface TalksPoster {
  title: string;
  year: string;
  image: string;
  link?: string;
  linkLabel?: string;
  description?: string;
}

export const talksPosters: TalksPoster[] = [
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
