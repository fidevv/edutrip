export type InstitutionRole = "dinas" | "sekolah" | "umkm"

export function detectRoleFromEmail(email: string): InstitutionRole {
  const domain = email.split("@")[1]?.toLowerCase() ?? ""

  if (domain.includes("sch.id")) return "sekolah"
  if (domain.endsWith("go.id")) return "dinas"

  return "umkm"
}

export const ROLE_LABELS: Record<InstitutionRole, string> = {
  sekolah: "Sekolah",
  dinas: "Dinas",
  umkm: "UMKM",
}

export const ROLE_DESCRIPTIONS: Record<InstitutionRole, string> = {
  sekolah: "Instansi pendidikan",
  dinas: "Pemerintahan",
  umkm: "Usaha Mikro Kecil Menengah",
}

export const ROLE_DASHBOARD_ROUTES: Record<InstitutionRole, string> = {
  sekolah: "/sekolah",
  dinas: "/dinas",
  umkm: "/umkm",
}
