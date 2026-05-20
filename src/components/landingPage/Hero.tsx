"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Button } from "@/components/ui/button";
import { Container, Section, Stack } from "@/components/layout";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Section
      spacing="hero"
      bg="default"
      className="relative overflow-hidden"
    >
      <Container size="xl" className="relative z-10">
        <Stack gap="xl" align="center">
          <Stack
            gap="lg"
            align="center"
            className="mx-auto max-w-3xl text-center"
          >
            <div className="bg-muted-foreground/5 text-muted-foreground flex items-center justify-center gap-3 rounded-full p-1 pr-4 text-sm font-medium tracking-tight">
              <div className="bg-muted-foreground/10 flex items-center gap-3 rounded-full px-4 py-1.5">
                <span className="inline-block size-2 rounded-full bg-blue-500" />
                <span>SEFEST 2026</span>
              </div>

              <div className="flex items-center gap-2">
                Jelajahi Sekarang <ArrowRight className="size-4" />
              </div>
            </div>

            <Stack gap="md" align="center">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tighter lg:text-6xl">
                Platform Digital Wisata Edukatif{" "}
                <PointerHighlight containerClassName="inline-block">
                  <span>Pemberdayaan UMKM</span>
                </PointerHighlight>{" "}
                Budaya Berkelanjutan
              </h1>

              <p className="text-muted-foreground max-w-lg">
                EduTrip menghubungkan wisata edukatif, budaya lokal, dan UMKM
                dalam satu platform digital yang interaktif dan mudah diakses
                untuk generasi muda.
              </p>
            </Stack>

            <Stack gap="xs" align="center" className="w-full">
              <Button className="text-background rounded-2xl px-6 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40] md:rounded-3xl md:px-7 md:py-7 md:text-base">
                Jelajahi Destinasi
              </Button>

              <Button className="text-muted-foreground text-sm" variant="link">
                Pelajari Lebih Lanjut
              </Button>
            </Stack>
          </Stack>

          <div className="relative flex h-[70vh] min-h-[420px] w-full items-center justify-center overflow-hidden rounded-4xl border">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop"
              alt="Wisata edukatif Indonesia"
              className="size-full object-cover"
            />
          </div>
        </Stack>
      </Container>

      <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-between">
        {Array.from({ length: isMobile ? 8 : 18 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="to-muted/50 h-full w-10 bg-gradient-to-l from-transparent"
          />
        ))}
      </div>
    </Section>
  );
};

export { Hero };
