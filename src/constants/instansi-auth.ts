export interface SignInForm {
  email: string
  password: string
}

export const INITIAL_SIGN_IN_FORM: SignInForm = {
  email: "",
  password: "",
}

export const INSTITUTION_AUTH_CONTENT = {
  signInTitle: "Masuk",
  signInDescription:
    "Masuk menggunakan email resmi instansi yang sudah terdaftar.",
  contactTitle: "Belum Daftar?",
  contactDescription:
    "Saat ini pendaftaran hanya bisa dilakukan melalui admin. Hubungi kami untuk mendaftarkan sekolah, UMKM, atau dinas Anda.",
  contactEmail: "hello@edutrip.id",
  contactWhatsApp: "0812-3456-7890",
} as const
