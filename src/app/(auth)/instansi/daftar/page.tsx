"use client"

import { MailQuestion } from "lucide-react"

import { INSTITUTION_AUTH_CONTENT } from "@/constants/instansi-auth"

import { InstitutionAuthShell } from "@/components/Auth/Instansi"

export default function InstitutionContactPage() {
  return (
    <InstitutionAuthShell
      title={INSTITUTION_AUTH_CONTENT.contactTitle}
      description={INSTITUTION_AUTH_CONTENT.contactDescription}
      icon={MailQuestion}
    >
      <div className="w-full space-y-4 text-left">
        <InfoRow label="Email" value={INSTITUTION_AUTH_CONTENT.contactEmail} />
        <InfoRow label="WhatsApp" value={INSTITUTION_AUTH_CONTENT.contactWhatsApp} />
      </div>
    </InstitutionAuthShell>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}
