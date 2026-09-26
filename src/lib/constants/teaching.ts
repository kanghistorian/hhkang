import imaginedpasts from '$lib/media/imaginedpasts.webp';
import kitchenstudio from '$lib/media/kitchenstudio.webp';
import material from '$lib/media/material.webp';
import kciv from '$lib/media/kciv.webp';
import stem from '$lib/media/stem.webp';
import rebels from '$lib/media/rebels.webp';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
  title: string,
  subtitle: string,
  type: string,
  url?: string,
};

export const images: Array<Image> = [
  {
    image: kitchenstudio,
    backgroundColor: '#e2cbb5',
    overlayColor: '#778379',
    title: 'Kitchen Studio Factory',
    subtitle: 'Cultures of Making in East Asia',
    type: 'Undergraduate Seminar',
    url: 'https://www.kitchenstudiofactory.com/',
  },
  {
    image: rebels,
    backgroundColor: '#1a2a1e',
    overlayColor: '#a8c4a0',
    title: 'Rebels and Healers',
    subtitle: 'Everyday Life in Early Modern Korea',
    type: 'Undergraduate Seminar',
  },
  {
    image: imaginedpasts,
    backgroundColor: '#24140F',
    overlayColor: '#adadab',
    title: 'Imagined Pasts',
    subtitle: 'Traditional Korean Culture Through Film',
    type: 'Undergraduate Seminar',
  },
  {
    image: material,
    backgroundColor: '#121212',
    overlayColor: '#D72638',
    title: 'Guns Tobacco & Sweet Potato',
    subtitle: 'A History of Material Culture',
    type: 'Undergraduate Seminar',
  },
  {
    image: kciv,
    backgroundColor: '#223061',
    overlayColor: '#D06A66',
    title: 'Korean Civilization',
    subtitle: '',
    type: 'Undergraduate Lecture',
  },
  {
    image: stem,
    backgroundColor: '#121212',
    overlayColor: '#aeb4ae',
    title: 'Nature Technology Medicine',
    subtitle: 'In Korea',
    type: 'Undergraduate / Graduate Seminar',
  },
];
