"use client"

import { ApplicationShell3 } from "@/components/Dashboard/app-shells"
import { DINAS_SHELL_DATA } from "@/constants/dashboard"

export default function DinasLayout({ children }: { children: React.ReactNode }) {
  return <ApplicationShell3 data={DINAS_SHELL_DATA}>{children}</ApplicationShell3>
}
