import React from "react";

import { Container, Grid, Section, Stack } from "@/components/layout";

const AboutUs = () => {
  return (
    <Section spacing="xl" bg="default">
      <Container size="xl">
        <Stack gap="xl">
          <Grid cols={{ base: 1, lg: 6 }} gap="xl">
            <p className="font-medium lg:col-span-2">Misi Kami</p>

            <Stack
              gap="lg"
              className="max-w-4xl lg:col-span-4 lg:ml-auto lg:pl-12"
            >
              <h1 className="text-2xl font-medium tracking-tight">
                EduTrip hadir sebagai platform digital wisata edukatif yang
                menghubungkan budaya lokal, wisata, dan UMKM dalam satu
                media yang modern dan mudah diakses.
              </h1>

              <p className="text-foreground/40 w-fit text-lg lg:translate-y-2">
                Kami percaya wisata budaya tidak hanya menjadi sarana hiburan,
                tetapi juga media pembelajaran dan pendukung pertumbuhan ekonomi
                kreatif daerah secara berkelanjutan.
              </p>
            </Stack>
          </Grid>

          <Grid cols={{ base: 1, md: 2 }} gap="sm">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png"
              alt="Tim EduTrip bekerja sama"
              className="h-[420px] w-full object-cover saturate-0 md:h-[600px]"
            />

            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png"
              alt="Ruang kerja kreatif digital"
              className="h-[420px] w-full object-cover md:h-[600px]"
            />
          </Grid>

          <Grid cols={{ base: 1, lg: 6 }} gap="xl">
            <p className="font-medium lg:col-span-2">Yang Mendorong Kami</p>

            <Stack
              gap="lg"
              className="max-w-4xl lg:col-span-4 lg:ml-auto lg:pl-12"
            >
              <h1 className="text-2xl font-medium tracking-tight">
                Kami adalah tim yang percaya pada kekuatan teknologi untuk
                menghubungkan generasi muda dengan kekayaan budaya lokal dan
                mendorong pertumbuhan ekonomi yang berkelanjutan.
              </h1>

              <p className="text-foreground/40 w-fit text-lg lg:translate-y-2">
                Visi kami: Menciptakan ekosistem digital yang menghubungkan
                wisata edukatif, pelestarian budaya, dan pemberdayaan UMKM
                dalam satu platform yang saling mendukung.
              </p>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
};

export { AboutUs };
