export const site = {
  name: 'Lamacca',
  legalName: 'PT Lamacca Kreatif Solusi',
  tagline: 'Smart Technology Solution for Your Business',
  descriptor: 'Software Development. Technology. Digital Solution.',
  founded: 2016,
  url: 'https://lamacca.com',
  description:
    'PT Lamacca Kreatif Solusi is an Indonesia-based technology company specialising in custom software development, IT consulting, and digital transformation for government institutions, private companies, and organisations.',
} as const;

export const contact = {
  email: 'info@lamacca.co.id',
  phone: '+62 813 4233 7729',
  phoneHref: 'tel:+6281342337729',
  whatsapp: 'https://wa.me/6281342337729',
  address: {
    street: 'Jl. SMA 14 No. 32, RT/RW 05/04',
    district: 'Cililitan, Kramat Jati',
    city: 'Jakarta Timur',
    region: 'DKI Jakarta',
    postcode: '13640',
    country: 'Indonesia',
  },
  hours: 'Monday – Friday, 09:00 – 17:00 WIB',
} as const;

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
] as const;

export const stats = [
  { value: 2016, suffix: '', label: 'Building since', format: 'year' },
  { value: 25, suffix: '+', label: 'Systems delivered' },
  { value: 40, suffix: '+', label: 'Client organisations' },
  { value: 10, suffix: '', label: 'In-house specialists' },
] as const;
