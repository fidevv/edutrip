"use client"

import { ApplicationShell3 } from "@/components/Dashboard/app-shells"
import { SEKOLAH_SHELL_DATA } from "@/constants/dashboard"

export default function SekolahLayout({ children }: { children: React.ReactNode }) {
  return <ApplicationShell3 data={SEKOLAH_SHELL_DATA}>{children}</ApplicationShell3>
}
