export const site = {
  name: 'CA Wood', fullName: 'CA Wood | Taxta Qablar Kolleksiyası',
  primaryContact: '+994558333390', phone: '070-833-24-33', whatsapp: '+994 55 833 33 90',
  instagram: 'https://www.instagram.com/cawood.az/', instagramHandle: '@cawood.az',
  address: 'Sədərək TM Şirniyyat, 15-ci sıra, 53-cü mağaza, Sədərək, Bakı',
  mapUrl: 'https://maps.google.com/?q=S%C9%99d%C9%99r%C9%99k+TM+Bak%C4%B1', hours: 'Hər gün · 09:00–17:00',
  hero: 'Ağacdan sofra və servis qabları. İstehsalçıdan.',
  description: 'Taxtanın təbii istiliyini süfrənizə gətirən servis və mətbəx kolleksiyası.'
} as const;
export const waLink = (message: string) => `https://wa.me/${site.primaryContact.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
