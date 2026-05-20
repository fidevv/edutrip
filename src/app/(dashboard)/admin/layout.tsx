"use client"

import { ApplicationShell3 } from "@/components/Dashboard/app-shells"
import { ADMIN_SHELL_DATA } from "@/constants/dashboard"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <ApplicationShell3 data={ADMIN_SHELL_DATA}>{children}</ApplicationShell3>
}
