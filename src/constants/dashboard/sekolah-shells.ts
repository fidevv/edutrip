import type { AppShellData } from "./umkm-shells"

export const SEKOLAH_SHELL_DATA = {
  logo: {
    src: "/edutrip-logo.svg",
    alt: "EduTrip",
    title: "EduTrip",
    description: "Sekolah Dashboard",
    href: "/sekolah",
  },
  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        { label: "Dashboard", icon: "dashboard" as const, href: "/sekolah", isActive: true },
        { label: "Destinasi", icon: "roadmap" as const, href: "/sekolah/destinasi" },
        { label: "Booking", icon: "tasks" as const, href: "/sekolah/booking" },
      ],
    },
    {
      title: "Program",
      defaultOpen: true,
      items: [
        {
          label: "EduTrip Saya",
          icon: "briefcase" as const,
          href: "/sekolah/program",
          children: [
            { label: "Aktif", icon: "file" as const, href: "/sekolah/program/aktif" },
            { label: "Riwayat", icon: "folder" as const, href: "/sekolah/program/riwayat" },
          ],
        },
        { label: "Jadwal", icon: "clock" as const, href: "/sekolah/jadwal" },
        { label: "Siswa", icon: "users" as const, href: "/sekolah/siswa" },
      ],
    },
    {
      title: "Lainnya",
      defaultOpen: false,
      items: [
        { label: "Review", icon: "star" as const, href: "/sekolah/review" },
        { label: "Laporan", icon: "file" as const, href: "/sekolah/laporan" },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: "help" as const, href: "/sekolah/help" },
      { label: "Settings", icon: "settings" as const, href: "/sekolah/settings" },
    ],
  },
  user: {
    name: "SMK Negeri 1 Malang",
    email: "admin@smkn1malang.sch.id",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  workspaces: [
    { id: "1", name: "Sekolah Portal", logo: "", plan: "Sekolah" },
  ],
  activeWorkspace: "1",
} as const satisfies AppShellData
