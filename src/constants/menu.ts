export const navMenu = [
  { label: 'Home', path: '/' },
  { label: 'Order', path: '/order' },
  { label: 'About', path: '/' },
  { label: 'Blog', path: '/' },
  { label: 'Contact us', path: '/' },
]

export const footerSocmed = [
  { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  { label: 'Youtube', icon: 'youtube', url: 'https://youtube.com' },
]

export const footerNavMenu = [
  {
    items: [...navMenu.slice(0, 5)],
  },
  {
    items: [
      { label: 'Contact', path: '#' },
      { label: 'Login', path: '#' },
      { label: 'Register', path: '#' },
    ],
  },
]

export const footerContacts = [
  { icon: 'mail', label: 'Food.now@mail.com', url: 'mailto:Food.now@mail.com' },
  { icon: 'phone', label: '+62848477102943', url: 'tel:+62848477102943' },
  { icon: 'whatsapp', label: '+628184938494', url: 'https://wa.me/628184938494' },
]
