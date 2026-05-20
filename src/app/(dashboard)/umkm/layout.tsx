"use client"

import { ApplicationShell3 } from "@/components/Dashboard/app-shells"
import { APPLICATION_SHELL_DATA } from "@/constants/dashboard"

export default function UmkmLayout({ children }: { children: React.ReactNode }) {
  return <ApplicationShell3 data={APPLICATION_SHELL_DATA}>{children}</ApplicationShell3>
}
