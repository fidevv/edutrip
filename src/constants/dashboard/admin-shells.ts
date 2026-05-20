import type { AppShellData } from "./umkm-shells"

export const ADMIN_SHELL_DATA = {
  logo: {
    src: "/edutrip-logo.svg",
    alt: "EduTrip",
    title: "EduTrip",
    description: "Admin Dashboard",
    href: "/admin",
  },
  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        { label: "Dashboard", icon: "dashboard" as const, href: "/admin", isActive: true },
        { label: "Destinasi", icon: "roadmap" as const, href: "/admin/destinasi" },
        { label: "Booking", icon: "tasks" as const, href: "/admin/booking" },
      ],
    },
    {
      title: "Manajemen",
      defaultOpen: true,
      items: [
        {
          label: "Program EduTrip",
          icon: "briefcase" as const,
          href: "/admin/program",
          children: [
            { label: "Semua Program", icon: "file" as const, href: "/admin/program" },
            { label: "Tambah Program", icon: "file" as const, href: "/admin/program/create" },
            { label: "Arsip Program", icon: "folder" as const, href: "/admin/program/archive" },
          ],
        },
        {
          label: "Pengguna",
          icon: "users" as const,
          href: "/admin/pengguna",
          children: [
            { label: "Sekolah", icon: "file" as const, href: "/admin/pengguna/sekolah" },
            { label: "Dinas", icon: "file" as const, href: "/admin/pengguna/dinas" },
            { label: "UMKM", icon: "file" as const, href: "/admin/pengguna/umkm" },
          ],
        },
        {
          label: "Verifikasi",
          icon: "badge-check" as const,
          href: "/admin/verifikasi",
        },
      ],
    },
    {
      title: "Operasional",
      defaultOpen: false,
      items: [
        { label: "Jadwal", icon: "clock" as const, href: "/admin/jadwal" },
        { label: "Review", icon: "star" as const, href: "/admin/review" },
        { label: "Laporan", icon: "file" as const, href: "/admin/laporan" },
      ],
    },
    {
      title: "Platform",
      defaultOpen: false,
      items: [
        { label: "Integrasi", icon: "globe" as const, href: "/admin/integrasi" },
        { label: "Pengaturan", icon: "settings" as const, href: "/admin/pengaturan" },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: "help" as const, href: "/admin/help" },
      { label: "Settings", icon: "settings" as const, href: "/admin/settings" },
    ],
  },
  user: {
    name: "Admin EduTrip",
    email: "admin@pritt.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  workspaces: [
    { id: "1", name: "EduTrip Admin", logo: "/edutrip-logo.svg", plan: "Admin" },
    { id: "2", name: "Dinas Portal", logo: "", plan: "Dinas" },
    { id: "3", name: "Sekolah Portal", logo: "", plan: "Sekolah" },
  ],
  activeWorkspace: "1",
} as const satisfies AppShellData
