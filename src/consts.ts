export const ROUTES = [
  {
    href: '/',
    label: 'Photography',
  },
  {
    href: '/about',
    label: 'About',
  },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: 'Website',
    href: "https://bravecottrell.com",
    icon: "mdi:web"
  },
  {
    label: 'Modeling',
    href: 'https://photos.bravecottrell.com',
    icon: 'mdi:camera',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/modelcottrell/',
    icon: 'mdi:instagram',
  },
] as const;

export const PERSONAL_INFO = {
  name: 'Jonathan Cottrell',
  title: "Model Cottrell Studios",
  subtitle: 'A selection of Photographs and Art.',
  role: 'Photographer',
  contact: 'mailto:johnny@johnnyweho.com',
  avatar:
    'https://photos.bravecottrell.com/assets/jonathan-profile-compressed.jpg',
  about:
    'Software Engineer by day, but Artist & Photographer by night. I love when art & technology meet.',
} as const;

export const SEO_INFO = [
  {
    name: 'description',
    content: 'Art & Photography portfolio made by Jonathan Cottrell',
  },
  { name: 'keywords', content: 'Art portfolio, Digital art, gallery, photography, modelcottrell, model, jonathan cottrell' },
  { name: 'author', content: PERSONAL_INFO.name },
];
