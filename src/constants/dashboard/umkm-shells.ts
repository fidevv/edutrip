export type AppShellIcon =
  | "dashboard"
  | "tasks"
  | "roadmap"
  | "briefcase"
  | "file"
  | "folder"
  | "users"
  | "clock"
  | "badge-check"
  | "star"
  | "globe"
  | "sparkles"
  | "help"
  | "settings";

export interface AppShellNavItem {
  label: string;
  icon: AppShellIcon;
  href: string;
  isActive?: boolean;
  children?: AppShellNavItem[];
}

export interface AppShellNavGroup {
  title: string;
  items: AppShellNavItem[];
  defaultOpen?: boolean;
}

export interface AppShellUser {
  name: string;
  email: string;
  avatar: string;
}

export interface AppShellWorkspace {
  id: string;
  name: string;
  logo: string;
  plan: string;
}

export interface AppShellData {
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
  };
  navGroups: AppShellNavGroup[];
  footerGroup: AppShellNavGroup;
  user?: AppShellUser;
  workspaces?: AppShellWorkspace[];
  activeWorkspace?: string;
}

export const APPLICATION_SHELL_DATA = {
  logo: {
    src: "/edutrip-logo.svg",
    alt: "EduTrip",
    title: "EduTrip",
    description: "EduTrip Dashboard",
    href: "/dashboard",
  },
  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        {
          label: "Dashboard",
          icon: "dashboard",
          href: "/dashboard",
          isActive: true,
        },
        {
          label: "Destinasi",
          icon: "roadmap",
          href: "/dashboard/destinasi",
        },
        {
          label: "Booking",
          icon: "tasks",
          href: "/dashboard/booking",
        },
      ],
    },
    {
      title: "Manajemen",
      defaultOpen: true,
      items: [
        {
          label: "Program EduTrip",
          icon: "briefcase",
          href: "/dashboard/program",
          children: [
            {
              label: "Semua Program",
              icon: "file",
              href: "/dashboard/program",
            },
            {
              label: "Tambah Program",
              icon: "file",
              href: "/dashboard/program/create",
            },
            {
              label: "Arsip Program",
              icon: "folder",
              href: "/dashboard/program/archive",
            },
          ],
        },
        {
          label: "Instansi",
          icon: "users",
          href: "/dashboard/instansi",
          children: [
            {
              label: "Sekolah",
              icon: "file",
              href: "/dashboard/instansi/sekolah",
            },
            {
              label: "Dinas",
              icon: "file",
              href: "/dashboard/instansi/dinas",
            },
          ],
        },
      ],
    },
    {
      title: "Operasional",
      defaultOpen: false,
      items: [
        {
          label: "Jadwal",
          icon: "clock",
          href: "/dashboard/jadwal",
        },
        {
          label: "Verifikasi",
          icon: "badge-check",
          href: "/dashboard/verifikasi",
        },
        {
          label: "Review",
          icon: "star",
          href: "/dashboard/review",
        },
      ],
    },
    {
      title: "Platform",
      defaultOpen: false,
      items: [
        {
          label: "Integrasi",
          icon: "globe",
          href: "/dashboard/integrasi",
        },
        {
          label: "Automasi",
          icon: "sparkles",
          href: "/dashboard/automasi",
        },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      {
        label: "Help Center",
        icon: "help",
        href: "/dashboard/help",
      },
      {
        label: "Settings",
        icon: "settings",
        href: "/dashboard/settings",
      },
    ],
  },
  user: {
    name: "Bagas Alfiandi",
    email: "bagas@example.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  workspaces: [
    {
      id: "1",
      name: "EduTrip Admin",
      logo: "/edutrip-logo.svg",
      plan: "Admin",
    },
    {
      id: "2",
      name: "Dinas Portal",
      logo: "/edutrip-logo.svg",
      plan: "Dinas",
    },
    {
      id: "3",
      name: "Sekolah Portal",
      logo: "/edutrip-logo.svg",
      plan: "Sekolah",
    },
  ],
  activeWorkspace: "1",
} as const satisfies AppShellData;