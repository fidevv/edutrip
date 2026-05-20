import { Badge } from "@/components/ui/badge";
import { Container, Grid, Section, Stack } from "@/components/layout";

const Feature = () => {
  return (
    <Section spacing="xl" bg="default">
      <Container size="xl">
        <Stack gap="xl">
          <Stack gap="md" align="center" className="text-center">
            <Badge variant="outline" className="rounded-full">
              Fitur Unggulan
            </Badge>

            <h2 className="text-4xl font-medium md:text-5xl">
              Solusi Digital untuk Wisata Edukatif
            </h2>

            <p className="text-muted-foreground max-w-2xl text-lg">
              EduTrip menghadirkan pengalaman wisata budaya yang lebih bermakna
              melalui teknologi digital yang terintegrasi.
            </p>
          </Stack>

          <Grid cols={{ base: 1, md: 2, xl: 4 }} gap="md">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
              alt="Eksplorasi wisata budaya"
              className="aspect-square size-full rounded-2xl object-cover md:order-1 xl:order-1"
            />

            <Stack
              gap="xl"
              className="justify-between rounded-2xl bg-muted/50 p-8 md:order-2 md:p-12 xl:order-2"
            >
              <h3 className="text-2xl">Eksplorasi Wisata Budaya</h3>

              <div>
                <p className="text-muted-foreground mb-8">
                  Temukan destinasi wisata edukatif dengan informasi lengkap,
                  galeri visual, dan nilai pembelajaran yang terstruktur.
                </p>

                <a href="#" className="text-sm underline">
                  Selengkapnya
                </a>
              </div>
            </Stack>

            <img
              src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1400&auto=format&fit=crop"
              alt="Produk UMKM lokal"
              className="aspect-square size-full rounded-2xl object-cover md:order-4 xl:order-3"
            />

            <Stack
              gap="xl"
              className="justify-between rounded-2xl bg-primary/10 p-8 md:order-3 md:p-12 xl:order-4"
            >
              <h3 className="text-2xl">Informasi UMKM Lokal</h3>

              <div>
                <p className="text-muted-foreground mb-8">
                  Profil lengkap UMKM budaya dengan transparansi harga,
                  jenis produk, dan dampak ekonomi yang dihasilkan.
                </p>

                <a href="#" className="text-sm underline">
                  Selengkapnya
                </a>
              </div>
            </Stack>

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
              alt="Pemesanan online"
              className="aspect-square size-full rounded-2xl object-cover md:order-5 xl:order-6"
            />

            <Stack
              gap="xl"
              className="justify-between rounded-2xl bg-primary/10 p-8 md:order-6 md:p-12 xl:order-5"
            >
              <h3 className="text-2xl">Pemesanan Online</h3>

              <div>
                <p className="text-muted-foreground mb-8">
                  Proses booking karyawisata yang terdokumentasi, terstandarisasi,
                  dan dapat dipertanggungjawabkan secara administratif.
                </p>

                <a href="#" className="text-sm underline">
                  Selengkapnya
                </a>
              </div>
            </Stack>

            <img
              src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1400&auto=format&fit=crop"
              alt="Verifikasi dinas"
              className="aspect-square size-full rounded-2xl object-cover md:order-8"
            />

            <Stack
              gap="xl"
              className="justify-between rounded-2xl bg-muted/50 p-8 md:order-7 md:p-12"
            >
              <h3 className="text-2xl">Verifikasi Dinas</h3>

              <div>
                <p className="text-muted-foreground mb-8">
                  Destinasi terverifikasi Dinas Pendidikan dengan badge resmi
                  untuk memudahkan persetujuan kegiatan sekolah.
                </p>

                <a href="#" className="text-sm underline">
                  Selengkapnya
                </a>
              </div>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
};

export { Feature };
