export type DestinationCategory =
    | "all"
    | "alam"
    | "budaya"
    | "sejarah"
    | "umkm"
    | "teknologi";

export interface Destination {
    id: string;
    name: string;
    location: string;
    category: Exclude<DestinationCategory, "all">;
    image: {
        src: string;
        alt: string;
    };
    description: string;
    duration: string;
    priceFrom: number;
    rating: number;
    badge?: {
        text: string;
    };
    link: string;
}

export const DESTINATION_CATEGORIES = [
    {
        label: "Semua",
        value: "all",
    },
    {
        label: "Alam",
        value: "alam",
    },
    {
        label: "Budaya",
        value: "budaya",
    },
    {
        label: "Sejarah",
        value: "sejarah",
    },
    {
        label: "UMKM",
        value: "umkm",
    },
    {
        label: "Teknologi",
        value: "teknologi",
    },
] as const satisfies readonly {
    label: string;
    value: DestinationCategory;
}[];

export const DESTINATION_CATEGORY_LABELS: Record<
    Exclude<DestinationCategory, "all">,
    string
> = {
    alam: "Alam",
    budaya: "Budaya",
    sejarah: "Sejarah",
    umkm: "UMKM",
    teknologi: "Teknologi",
};

export const DESTINATIONS = [
    {
        id: "kampung-warna-warni",
        name: "Kampung Warna-Warni Jodipan",
        location: "Kota Malang",
        category: "budaya",
        image: {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
            alt: "Kawasan wisata berwarna-warni dengan suasana kota",
        },
        description:
            "Eksplorasi transformasi kampung, kreativitas warga, mural, ekonomi lokal, dan wisata berbasis komunitas.",
        duration: "1 Hari",
        priceFrom: 75000,
        rating: 4.8,
        badge: {
            text: "Top Pick",
        },
        link: "/destinasi/kampung-warna-warni",
    },
    {
        id: "museum-angkut",
        name: "Museum Angkut",
        location: "Batu",
        category: "sejarah",
        image: {
            src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1400&auto=format&fit=crop",
            alt: "Museum transportasi dan kendaraan klasik",
        },
        description:
            "Belajar sejarah transportasi, teknologi kendaraan, desain visual, dan budaya populer dari berbagai era.",
        duration: "1 Hari",
        priceFrom: 120000,
        rating: 4.7,
        badge: {
            text: "Favorit Sekolah",
        },
        link: "/destinasi/museum-angkut",
    },
    {
        id: "wisata-petik-apel",
        name: "Wisata Petik Apel",
        location: "Batu",
        category: "alam",
        image: {
            src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1400&auto=format&fit=crop",
            alt: "Kebun apel untuk wisata edukatif",
        },
        description:
            "Kegiatan agrowisata untuk mengenal pertanian, proses panen, rantai produksi, dan pengelolaan hasil kebun.",
        duration: "Half Day",
        priceFrom: 65000,
        rating: 4.6,
        badge: {
            text: "Only 9 slots left",
        },
        link: "/destinasi/wisata-petik-apel",
    },
    {
        id: "sentra-keramik-dinoyo",
        name: "Sentra Keramik Dinoyo",
        location: "Kota Malang",
        category: "umkm",
        image: {
            src: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1400&auto=format&fit=crop",
            alt: "Kerajinan keramik lokal",
        },
        description:
            "Kunjungan edukatif untuk memahami proses produksi keramik, desain produk, ekonomi kreatif, dan UMKM lokal.",
        duration: "Half Day",
        priceFrom: 50000,
        rating: 4.5,
        badge: {
            text: "UMKM Lokal",
        },
        link: "/destinasi/sentra-keramik-dinoyo",
    },
    {
        id: "taman-pintar-teknologi",
        name: "Taman Pintar Teknologi",
        location: "Malang Raya",
        category: "teknologi",
        image: {
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
            alt: "Pelajar mengikuti kegiatan teknologi",
        },
        description:
            "Program eksplorasi teknologi, inovasi digital, sains terapan, dan pengenalan dunia industri kreatif.",
        duration: "1 Hari",
        priceFrom: 95000,
        rating: 4.9,
        badge: {
            text: "Rekomendasi",
        },
        link: "/destinasi/taman-pintar-teknologi",
    },
    {
        id: "coban-rondo",
        name: "Coban Rondo",
        location: "Kabupaten Malang",
        category: "alam",
        image: {
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
            alt: "Air terjun dan kawasan alam",
        },
        description:
            "Belajar ekosistem hutan, konservasi alam, pengelolaan wisata alam, dan pentingnya menjaga lingkungan.",
        duration: "1 Hari",
        priceFrom: 85000,
        rating: 4.6,
        link: "/destinasi/coban-rondo",
    },
] as const satisfies readonly Destination[];