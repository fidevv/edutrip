export interface DestinationDetailData {
  name: string
  location: string
  category: string
  duration: string
  priceFrom: number
  rating: number
  lastUpdated: string
  heroImage: string
  imageAlt: string
  shortDescription: string
  overview: string
  topics: string[]
  ctaPrimary: string
  ctaSecondary: string
  activities: string[]
  facilities: string[]
  rundown: { time: string; activity: string }[]
}

export const DESTINATION_TOC = [
  { id: "overview", label: "Overview" },
  { id: "aktivitas-edukatif", label: "Aktivitas Edukatif" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "rundown", label: "Rundown Kunjungan" },
  { id: "catatan", label: "Catatan Kunjungan" },
] as const

export const DESTINATION_DETAILS: Record<string, DestinationDetailData> = {
  "museum-angkut": {
    name: "Museum Angkut",
    location: "Batu, Jawa Timur",
    category: "Sejarah & Teknologi Transportasi",
    duration: "1 Hari",
    priceFrom: 120000,
    rating: 4.8,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Museum transportasi dengan koleksi kendaraan klasik",
    shortDescription:
      "Destinasi edukatif untuk mempelajari perkembangan transportasi, sejarah kendaraan, teknologi mesin, desain, dan budaya populer dari berbagai era.",
    overview:
      "Museum Angkut merupakan destinasi edukatif yang cocok untuk kegiatan sekolah, komunitas, maupun program pembelajaran luar kelas. Tempat ini membantu peserta memahami perkembangan transportasi dari sisi sejarah, teknologi, desain, dan dampaknya terhadap kehidupan masyarakat. Kunjungan ke destinasi ini tidak hanya berfokus pada rekreasi, tetapi juga memberi pengalaman belajar langsung melalui observasi, diskusi, dokumentasi, dan refleksi kegiatan.",
    topics: ["Transportasi", "Sejarah", "Teknologi", "Kunjungan Sekolah"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Observasi koleksi kendaraan klasik dan modern",
      "Diskusi perkembangan teknologi transportasi",
      "Pengenalan desain, fungsi, dan sejarah kendaraan",
      "Dokumentasi pembelajaran untuk laporan siswa",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet umum",
      "Area makan dan istirahat",
      "Spot foto edukatif",
      "Pendampingan kunjungan berdasarkan paket",
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Kedatangan rombongan dan registrasi" },
      { time: "09.00 - 10.30", activity: "Tur area utama dan pengenalan koleksi transportasi" },
      { time: "10.30 - 11.30", activity: "Sesi edukasi sejarah dan teknologi kendaraan" },
      { time: "11.30 - 12.30", activity: "Istirahat, makan, dan dokumentasi" },
      { time: "12.30 - 14.00", activity: "Eksplorasi zona tematik dan penyusunan catatan siswa" },
    ],
  },

  "kampung-warna-warni": {
    name: "Kampung Warna-Warni Jodipan",
    location: "Kota Malang, Jawa Timur",
    category: "Budaya & Kreativitas Komunitas",
    duration: "1 Hari",
    priceFrom: 75000,
    rating: 4.8,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Kawasan wisata berwarna-warni dengan suasana kota",
    shortDescription:
      "Belajar tentang transformasi sosial melalui seni, kreativitas warga, ekonomi kreatif, dan wisata berbasis komunitas yang inspiratif.",
    overview:
      "Kampung Warna-Warni Jodipan merupakan destinasi unik yang mengajarkan peserta tentang kekuatan transformasi sosial melalui seni dan kreativitas. Berawal dari program sosial yang mengubah kampung biasa menjadi kawasan wisata penuh warna, tempat ini menjadi laboratorium hidup untuk mempelajari pemberdayaan masyarakat, ekonomi kreatif, dan pariwisata berbasis komunitas. Peserta dapat mengamati langsung bagaimana kolaborasi antara warga, pemerintah, dan sektor swasta mampu menciptakan dampak ekonomi dan sosial yang berkelanjutan.",
    topics: ["Budaya", "Ekonomi Kreatif", "Pemberdayaan", "Komunitas"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Observasi transformasi kampung dan mural tematik",
      "Diskusi dengan pengelola dan pelaku UMKM lokal",
      "Studi dampak ekonomi kreatif terhadap masyarakat",
      "Dokumentasi visual untuk laporan pembelajaran",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet umum",
      "Pusat informasi dan pemandu lokal",
      "Area istirahat dan spot foto",
      "Galeri UMKM dan pusat oleh-oleh",
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Kedatangan rombongan dan briefing" },
      { time: "09.00 - 10.30", activity: "Tur kampung dan pengenalan sejarah transformasi" },
      { time: "10.30 - 11.30", activity: "Sesi diskusi dengan pelaku UMKM dan pengelola" },
      { time: "11.30 - 12.30", activity: "Istirahat, eksplorasi, dan dokumentasi" },
      { time: "12.30 - 14.00", activity: "Workshop kreativitas dan penyusunan catatan" },
    ],
  },

  "wisata-petik-apel": {
    name: "Wisata Petik Apel",
    location: "Batu, Jawa Timur",
    category: "Agrowisata & Pertanian",
    duration: "Half Day",
    priceFrom: 65000,
    rating: 4.6,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Kebun apel untuk wisata edukatif",
    shortDescription:
      "Kegiatan agrowisata untuk mengenal pertanian, proses panen, rantai produksi, dan pengelolaan hasil kebun secara langsung.",
    overview:
      "Wisata Petik Apel menawarkan pengalaman belajar langsung di kebun apel yang masih aktif berproduksi. Peserta diajak memahami siklus pertanian mulai dari pembibitan, perawatan, panen, hingga pascapanen. Destinasi ini sangat cocok untuk mengenalkan konsep agrowisata, ketahanan pangan, dan kewirausahaan pertanian kepada siswa. Kegiatan memetik apel langsung dari pohonnya memberi pengalaman sensorik yang memperkuat pemahaman tentang asal-usul makanan dan proses produksi pertanian.",
    topics: ["Pertanian", "Agrowisata", "Ketahanan Pangan", "Kewirausahaan"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Pengenalan jenis-jenis apel dan teknik budidaya",
      "Kegiatan memetik apel langsung dari pohon",
      "Observasi proses sortasi dan pengemasan hasil panen",
      "Diskusi tentang peluang usaha di sektor pertanian",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet dan mushola",
      "Area istirahat dan gazebo",
      "Kios buah dan produk olahan apel",
      "Pemandu lapangan",
    ],
    rundown: [
      { time: "08.00 - 08.30", activity: "Kedatangan dan registrasi" },
      { time: "08.30 - 09.30", activity: "Pengenalan kebun dan teknik budidaya apel" },
      { time: "09.30 - 10.30", activity: "Kegiatan memetik apel" },
      { time: "10.30 - 11.00", activity: "Observasi sortasi dan pengemasan" },
      { time: "11.00 - 12.00", activity: "Diskusi dan penutupan" },
    ],
  },

  "sentra-keramik-dinoyo": {
    name: "Sentra Keramik Dinoyo",
    location: "Kota Malang, Jawa Timur",
    category: "UMKM & Kerajinan Lokal",
    duration: "Half Day",
    priceFrom: 50000,
    rating: 4.5,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Kerajinan keramik lokal",
    shortDescription:
      "Kunjungan edukatif untuk memahami proses produksi keramik, desain produk, ekonomi kreatif, dan UMKM lokal.",
    overview:
      "Sentra Keramik Dinoyo merupakan pusat kerajinan keramik tradisional yang telah menjadi ikon Kota Malang. Destinasi ini memberikan pemahaman tentang proses produksi keramik mulai dari pengolahan tanah liat, pembentukan, pembakaran, hingga finishing. Peserta dapat belajar tentang ekonomi kreatif, kewirausahaan UMKM, dan bagaimana produk lokal bisa bersaing di pasar modern. Sentra ini juga mengajarkan nilai-nilai ketekunan, kreativitas, dan pelestarian kerajinan tradisional.",
    topics: ["UMKM", "Kerajinan", "Ekonomi Kreatif", "Kewirausahaan"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Observasi proses produksi keramik dari awal hingga akhir",
      "Praktek membentuk keramik sederhana",
      "Diskusi dengan pengrajin tentang ekonomi kreatif",
      "Studi pemasaran produk UMKM lokal",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet umum",
      "Showroom dan galeri keramik",
      "Area workshop dan praktek",
      "Pemandu dan instruktur keramik",
    ],
    rundown: [
      { time: "08.00 - 08.30", activity: "Kedatangan dan registrasi" },
      { time: "08.30 - 09.30", activity: "Tur area produksi dan pengenalan bahan baku" },
      { time: "09.30 - 10.30", activity: "Praktek membentuk keramik" },
      { time: "10.30 - 11.00", activity: "Diskusi dengan pengrajin" },
      { time: "11.00 - 12.00", activity: "Kunjungan showroom dan penutupan" },
    ],
  },

  "taman-pintar-teknologi": {
    name: "Taman Pintar Teknologi",
    location: "Malang Raya, Jawa Timur",
    category: "Sains & Teknologi Digital",
    duration: "1 Hari",
    priceFrom: 95000,
    rating: 4.9,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Pelajar mengikuti kegiatan teknologi",
    shortDescription:
      "Program eksplorasi teknologi, inovasi digital, sains terapan, dan pengenalan dunia industri kreatif.",
    overview:
      "Taman Pintar Teknologi adalah destinasi yang dirancang untuk mengenalkan peserta pada dunia sains, teknologi, dan inovasi digital melalui pengalaman interaktif. Mulai dari robotika, pemrograman dasar, realitas virtual, hingga eksperimen sains sederhana — semua dikemas dalam kegiatan yang menyenangkan dan mudah dipahami. Destinasi ini bertujuan menumbuhkan minat peserta terhadap bidang STEM (Science, Technology, Engineering, Mathematics) sejak dini.",
    topics: ["Teknologi", "Sains", "Inovasi", "STEM"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Eksperimen sains interaktif dan demonstrasi teknologi",
      "Pengenalan robotika dan pemrograman dasar",
      "Simulasi realitas virtual untuk pembelajaran",
      "Diskusi karir di bidang teknologi dan industri kreatif",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet dan mushola",
      "Laboratorium dan studio interaktif",
      "Ruang presentasi dan diskusi",
      "Kantin dan area istirahat",
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Kedatangan dan registrasi" },
      { time: "09.00 - 10.00", activity: "Sesi pengenalan teknologi dan sains" },
      { time: "10.00 - 11.30", activity: "Eksperimen dan praktek interaktif" },
      { time: "11.30 - 12.30", activity: "Istirahat dan diskusi kelompok" },
      { time: "12.30 - 14.00", activity: "Workshop robotika atau coding dasar" },
    ],
  },

  "coban-rondo": {
    name: "Coban Rondo",
    location: "Kabupaten Malang, Jawa Timur",
    category: "Alam & Konservasi",
    duration: "1 Hari",
    priceFrom: 85000,
    rating: 4.6,
    lastUpdated: "21 Mei 2026",
    heroImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Air terjun dan kawasan alam",
    shortDescription:
      "Belajar ekosistem hutan, konservasi alam, pengelolaan wisata alam, dan pentingnya menjaga lingkungan.",
    overview:
      "Coban Rondo adalah kawasan air terjun yang dikelilingi hutan tropis, menjadikannya laboratorium alam yang ideal untuk pembelajaran ekosistem dan konservasi. Peserta dapat mempelajari keanekaragaman hayati, siklus air, hubungan rantai makanan, serta dampak aktivitas manusia terhadap lingkungan. Destinasi ini juga mengajarkan tentang pengelolaan wisata alam yang berkelanjutan — bagaimana menyeimbangkan aspek ekonomi, ekologi, dan edukasi dalam satu kawasan.",
    topics: ["Alam", "Konservasi", "Ekosistem", "Lingkungan"],
    ctaPrimary: "Ajukan Kunjungan",
    ctaSecondary: "Lihat Paket EduTrip",
    activities: [
      "Observasi ekosistem hutan dan keanekaragaman hayati",
      "Studi siklus air dan formasi air terjun",
      "Diskusi tentang konservasi dan pelestarian alam",
      "Dokumentasi ilmiah untuk laporan pembelajaran",
    ],
    facilities: [
      "Area parkir rombongan",
      "Toilet dan mushola",
      "Jalur tracking dan area observasi",
      "Area istirahat dan warung makan",
      "Pemandu wisata alam",
    ],
    rundown: [
      { time: "07.00 - 08.00", activity: "Kedatangan dan briefing" },
      { time: "08.00 - 09.30", activity: "Tracking dan observasi ekosistem hutan" },
      { time: "09.30 - 10.30", activity: "Eksplorasi kawasan air terjun" },
      { time: "10.30 - 11.30", activity: "Diskusi konservasi dan dokumentasi" },
      { time: "11.30 - 12.30", activity: "Istirahat dan penutupan" },
    ],
  },
}
