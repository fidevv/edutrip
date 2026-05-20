export const footerLogo = {
  url: "/",
  src: "/edutrip-logo.svg",
  alt: "EduTrip",
  title: "EduTrip",
} as const;

export const footerSections = [
  {
    title: "Destinasi",
    links: [
      { name: "Eksplorasi", href: "#" },
      { name: "Wisata Budaya", href: "#" },
      { name: "UMKM Lokal", href: "#" },
      { name: "Paket EduTrip", href: "#" },
    ],
  },
  {
    title: "Tentang",
    links: [
      { name: "Hubungi Kami", href: "#" },
      { name: "Pusat Bantuan", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Karir", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Ketentuan Layanan", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
    ],
  },
] as const;

export const footerSocialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: "twitter",
  },
] as const;

export const footerBrandImage = {
  src: "/edutrip-logo.svg",
  alt: "EduTrip",
} as const;

export type FooterSocialIcon = (typeof footerSocialLinks)[number]["icon"];
