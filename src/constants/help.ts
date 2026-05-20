export interface HelpFaq {
    question: string;
    answer: string;
    category: string;
}

export type HelpContactIcon = "chat" | "mail" | "phone";

export interface HelpContactAction {
    label: string;
    href: string;
    icon: HelpContactIcon;
}

export const HELP_FAQS = [
    {
        category: "Platform",
        question: "Apa itu EduTrip?",
        answer:
            "EduTrip adalah platform digital wisata edukatif yang menghubungkan budaya lokal, wisata edukatif, dan pemberdayaan UMKM dalam satu website terintegrasi untuk generasi muda.",
    },
    {
        category: "Platform",
        question: "Siapa target pengguna EduTrip?",
        answer:
            "Target pengguna utama EduTrip adalah pelajar, mahasiswa, wisatawan muda, sekolah, komunitas, serta pelaku UMKM budaya yang ingin menjelajahi wisata edukatif berbasis budaya lokal.",
    },
    {
        category: "Destinasi",
        question: "Bagaimana cara mencari destinasi wisata edukatif?",
        answer:
            "Anda dapat menggunakan fitur pencarian dan filter berdasarkan kategori seperti alam, budaya, sejarah, UMKM, atau teknologi untuk menemukan destinasi yang sesuai.",
    },
    {
        category: "Destinasi",
        question: "Apakah destinasi di EduTrip sudah terverifikasi?",
        answer:
            "Ya, destinasi yang telah memenuhi standar kelayakan edukatif dan keamanan akan mendapatkan badge 'Terverifikasi' dari Dinas Pendidikan dan Kebudayaan.",
    },
    {
        category: "Pemesanan",
        question: "Bagaimana cara melakukan booking kunjungan?",
        answer:
            "Pilih destinasi yang diinginkan, lihat detail paket yang tersedia, lalu klik tombol 'Ajukan Kunjungan' dan ikuti alur pemesanan yang terdokumentasi dengan jelas.",
    },
    {
        category: "Pemesanan",
        question: "Apada rincian biaya ditampilkan secara transparan?",
        answer:
            "Tentu. EduTrip menampilkan rincian biaya secara jelas antara tiket masuk, biaya pemandu, dan produk wajib dari UMKM agar tidak ada biaya tersembunyi.",
    },
] as const satisfies readonly HelpFaq[];

export const HELP_CONTACT_ACTIONS = [
    {
        label: "Email Kami",
        href: "mailto:hello@edutrip.id",
        icon: "mail",
    },
    {
        label: "Hubungi Kami",
        href: "tel:+6281234567890",
        icon: "phone",
    },
] as const satisfies readonly HelpContactAction[];
