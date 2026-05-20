export interface NavbarMenuLink {
  label: string;
  description?: string;
  url: string;
  image?: string;
}

export interface NavbarMenuItem {
  title: string;
  url?: string;
  className?: string;
  links?: readonly NavbarMenuLink[];
}

export type NavbarButtonVariant =
  | "ghost"
  | "default"
  | "link"
  | "destructive"
  | "outline"
  | "secondary";

export const NAVBAR_LOGO = {
  url: "/",
  src: "/edutrip-logo.svg",
  alt: "EduTrip logo",
  title: "EduTrip",
} as const;

export const DESKTOP_NAVIGATION = [
  {
    title: "Destinasi",
    links: [
      {
        label: "Eksplorasi Destinasi",
        description: "Temukan destinasi wisata edukatif pilihan",
        url: "/destinasi",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      },
    ],
  },
  {
    title: "Tentang",
    url: "/tentang-kami",
  },
  {
    title: "Kontak",
    url: "/kontak",
  },
] as const satisfies readonly NavbarMenuItem[];

export const MOBILE_NAVIGATION = [
  {
    title: "Destinasi",
    className: "col-span-2",
    links: [
      { label: "Eksplorasi Destinasi", url: "/destinasi" },
      { label: "Tentang EduTrip", url: "/tentang-kami" },
      { label: "Hubungi Kami", url: "/kontak" },
    ],
  },
  {
    title: "Akun",
    links: [
      { label: "Masuk", url: "/instansi/masuk" },
      { label: "Daftar", url: "/instansi/daftar" },
    ],
  },
] as const satisfies readonly NavbarMenuItem[];

export const NAVBAR_BUTTONS = [
  {
    label: "Masuk",
    url: "/instansi/masuk",
    variant: "ghost",
  },
  {
    label: "Daftar",
    url: "/instansi/daftar",
    variant: "default",
  },
] as const satisfies readonly {
  label: string;
  url: string;
  variant: NavbarButtonVariant;
}[];

export const NAVBAR_SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: "#",
  },
  {
    label: "TikTok",
    url: "#",
  },
  {
    label: "YouTube",
    url: "#",
  },
] as const;

export const NAVBAR_MOBILE_BREAKPOINT = 1024;
