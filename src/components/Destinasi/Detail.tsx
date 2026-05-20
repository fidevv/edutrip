"use client";

import Link from "next/link";
import { CalendarDays, Lightbulb, MapPin, Star, Ticket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  DESTINATION_DETAILS,
  DESTINATION_TOC,
} from "@/constants/destinasi-detail";

import { Container, Grid, Section, Stack } from "@/components/layout";
import { cn } from "@/lib/utils";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

interface DestinationDetailProps {
  slug: string;
}

const DestinationDetail = ({ slug }: DestinationDetailProps) => {
  const detail = DESTINATION_DETAILS[slug];

  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sectionIds = Object.keys(sectionRefs.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            setActiveHeadings((prev) =>
              prev.includes(id) ? prev : [...prev, id],
            );
          } else {
            setActiveHeadings((prev) =>
              prev.filter((heading) => heading !== id),
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.2,
      },
    );

    sectionIds.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  if (!detail) {
    return (
      <Section spacing="xl" bg="default">
        <Container size="md" className="py-24 text-center">
          <h1 className="text-2xl font-semibold">Destinasi tidak ditemukan</h1>
          <p className="mt-2 text-muted-foreground">
            Destinasi yang kamu cari tidak tersedia atau telah dihapus.
          </p>
          <Button asChild className="mt-6">
            <Link href="/destinasi">Lihat Semua Destinasi</Link>
          </Button>
        </Container>
      </Section>
    );
  }

  return (
    <Section spacing="xl" bg="default">
      <Container size="xl" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/destinasi">Destinasi</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{detail.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Stack gap="lg" className="mt-10">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="rounded-full">
                {detail.category}
              </Badge>

              <Badge variant="outline" className="rounded-full">
                {detail.duration}
              </Badge>
            </div>

            <h1 className="max-w-5xl text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {detail.name}
            </h1>

            <p className="mt-5 max-w-2xl text-balance text-xl font-medium text-muted-foreground">
              {detail.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/instansi/daftar">
                {detail.ctaPrimary}
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/paket">{detail.ctaSecondary}</Link>
            </Button>
          </div>
        </Stack>

        <Grid
          cols={{ base: 1, lg: 5 }}
          gap="xl"
          className="relative mt-16 lg:mt-24"
        >
          <aside className="top-24 flex h-fit w-full flex-col gap-6 lg:sticky">
            <DestinationInfoCard detail={detail} />

            <div>
              <h2 className="font-semibold">Topik Edukasi</h2>

              <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col">
                {detail.topics.map((topic) => (
                  <li key={topic}>
                    <Badge variant="outline" className="rounded-full">
                      {topic}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Terakhir Diperbarui</h2>

              <time className="text-sm text-muted-foreground">
                {detail.lastUpdated}
              </time>
            </div>
          </aside>

          <article className="space-y-16 lg:col-span-3">
            <div className="mx-auto max-w-2xl">
              <img
                src={detail.heroImage}
                alt={detail.imageAlt}
                className="aspect-video w-full object-cover"
              />

              <div className="mt-12 space-y-16">
                <section id="overview" ref={(ref) => addSectionRef("overview", ref)} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{detail.overview}</p>
                </section>

                <section id="aktivitas-edukatif" ref={(ref) => addSectionRef("aktivitas-edukatif", ref)} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight">Aktivitas Edukatif</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Peserta dapat mengikuti beberapa aktivitas pembelajaran yang
                    dirancang agar kunjungan terasa lebih terarah dan tidak hanya
                    menjadi acara jalan-jalan yang diberi label edukasi.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {detail.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3">
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <Alert className="mt-6">
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Tips Kunjungan</AlertTitle>
                    <AlertDescription>
                      Siapkan lembar observasi atau pertanyaan panduan sebelum
                      berangkat agar siswa punya fokus belajar selama eksplorasi
                      destinasi.
                    </AlertDescription>
                  </Alert>
                </section>

                <section id="fasilitas" ref={(ref) => addSectionRef("fasilitas", ref)} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight">Fasilitas</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Fasilitas berikut dapat membantu sekolah atau instansi dalam
                    merencanakan kegiatan kunjungan dengan lebih nyaman.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {detail.facilities.map((facility) => (
                      <li key={facility} className="flex items-start gap-3">
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="rundown" ref={(ref) => addSectionRef("rundown", ref)} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight">Rundown Kunjungan</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Berikut contoh alur kegiatan yang bisa digunakan untuk
                    kunjungan satu hari. Jadwal dapat disesuaikan dengan kebutuhan
                    sekolah, jumlah peserta, dan kondisi lapangan.
                  </p>
                  <div className="mt-6 overflow-hidden rounded-xl border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Waktu</th>
                          <th className="px-4 py-3 text-left font-medium">Kegiatan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detail.rundown.map((item) => (
                          <tr key={item.time} className="border-t even:bg-muted/20">
                            <td className="px-4 py-3 text-muted-foreground">{item.time}</td>
                            <td className="px-4 py-3">{item.activity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="catatan" ref={(ref) => addSectionRef("catatan", ref)} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight">Catatan Kunjungan</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Untuk kunjungan rombongan, pihak sekolah atau instansi
                    disarankan melakukan pengajuan terlebih dahulu agar jadwal,
                    jumlah peserta, kebutuhan pendamping, dan dokumen administrasi
                    bisa diproses dengan rapi.
                  </p>
                  <blockquote className="my-6 border-l-2 border-primary pl-4 italic text-muted-foreground">
                    Kunjungan edukatif yang baik bukan hanya memindahkan siswa
                    dari kelas ke lokasi wisata, tetapi memberi mereka alasan
                    jelas tentang apa yang perlu diamati, dicatat, dan dipahami.
                  </blockquote>
                  <p className="leading-relaxed text-muted-foreground">
                    Setelah kunjungan selesai, siswa dapat diminta membuat laporan
                    singkat, dokumentasi visual, atau presentasi kelompok agar
                    pengalaman lapangan berubah menjadi hasil belajar yang bisa
                    dievaluasi.
                  </p>
                </section>
              </div>
            </div>
          </article>

          <DestinationTableOfContents activeHeadings={activeHeadings} />
        </Grid>
      </Container>
    </Section>
  );
};

interface DestinationInfoCardProps {
  detail: typeof DESTINATION_DETAILS[string];
}

const DestinationInfoCard = ({ detail }: DestinationInfoCardProps) => {
  return (
    <div>
      <h2 className="font-semibold">Informasi Destinasi</h2>

      <div className="mt-4 space-y-4 text-sm">
        <InfoItem
          icon={MapPin}
          label="Lokasi"
          value={detail.location}
        />

        <InfoItem
          icon={CalendarDays}
          label="Durasi"
          value={detail.duration}
        />

        <InfoItem
          icon={Ticket}
          label="Mulai dari"
          value={formatRupiah(detail.priceFrom)}
        />

        <InfoItem
          icon={Star}
          label="Rating"
          value={`${detail.rating}/5`}
        />
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: typeof MapPin;
  label: string;
  value: string;
}

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center text-primary">
        <Icon className="size-4" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

interface DestinationTableOfContentsProps {
  activeHeadings: string[];
}

const DestinationTableOfContents = ({
  activeHeadings,
}: DestinationTableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="sticky top-24 hidden h-fit lg:block">
      <p className="text-sm text-muted-foreground">DI HALAMAN INI</p>

      <ul className="mt-2 text-xs text-muted-foreground">
        {DESTINATION_TOC.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "block w-full cursor-pointer border-l border-border py-1.5 pl-3 text-left transition-colors duration-200",
                activeHeadings.includes(item.id)
                  ? "border-primary font-medium text-primary"
                  : "hover:text-primary",
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { DestinationDetail };
