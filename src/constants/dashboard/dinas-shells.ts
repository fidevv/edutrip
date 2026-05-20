import type { AppShellData } from "./umkm-shells"

export const DINAS_SHELL_DATA = {
  logo: {
    src: "/edutrip-logo.svg",
    alt: "EduTrip",
    title: "EduTrip",
    description: "Dinas Dashboard",
    href: "/dinas",
  },
  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        { label: "Dashboard", icon: "dashboard" as const, href: "/dinas", isActive: true },
        { label: "Monitoring", icon: "roadmap" as const, href: "/dinas/monitoring" },
        { label: "Booking", icon: "tasks" as const, href: "/dinas/booking" },
      ],
    },
    {
      title: "Pengawasan",
      defaultOpen: true,
      items: [
        {
          label: "Sekolah Binaan",
          icon: "users" as const,
          href: "/dinas/sekolah",
          children: [
            { label: "Daftar Sekolah", icon: "file" as const, href: "/dinas/sekolah" },
            { label: "Kunjungan", icon: "clock" as const, href: "/dinas/sekolah/kunjungan" },
          ],
        },
        {
          label: "Program EduTrip",
          icon: "briefcase" as const,
          href: "/dinas/program",
          children: [
            { label: "Semua Program", icon: "file" as const, href: "/dinas/program" },
            { label: "Verifikasi", icon: "badge-check" as const, href: "/dinas/verifikasi" },
          ],
        },
      ],
    },
    {
      title: "Laporan",
      defaultOpen: false,
      items: [
        { label: "Rekap Kunjungan", icon: "file" as const, href: "/dinas/rekap" },
        { label: "Statistik", icon: "roadmap" as const, href: "/dinas/statistik" },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: "help" as const, href: "/dinas/help" },
      { label: "Settings", icon: "settings" as const, href: "/dinas/settings" },
    ],
  },
  user: {
    name: "Dinas Pendidikan",
    email: "dinas@pendidikan.go.id",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  workspaces: [
    { id: "1", name: "Dinas Portal", logo: "", plan: "Dinas" },
    { id: "2", name: "Sekolah Portal", logo: "", plan: "Sekolah" },
  ],
  activeWorkspace: "1",
} as const satisfies AppShellData
