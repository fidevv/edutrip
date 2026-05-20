"use client";

import Link from "next/link";
import {
    Clock,
    Compass,
    MapPin,
    Search,
    Star,
    Ticket,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
    DESTINATION_CATEGORIES,
    DESTINATION_CATEGORY_LABELS,
    DESTINATIONS,
    type Destination,
    type DestinationCategory,
} from "@/constants/destinasi";

import { Container, Grid, Section, Stack } from "@/components/layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ExploreDestinationsProps {
    className?: string;
}

const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
};

const ExploreDestinations = ({ className }: ExploreDestinationsProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState<DestinationCategory>("all");

    const filteredDestinations = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return DESTINATIONS.filter((destination) => {
            const matchesCategory =
                selectedCategory === "all" ||
                destination.category === selectedCategory;

            const searchableText = [
                destination.name,
                destination.location,
                destination.category,
                DESTINATION_CATEGORY_LABELS[destination.category],
                destination.description,
                destination.duration,
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                normalizedQuery.length === 0 ||
                searchableText.includes(normalizedQuery);

            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <Section spacing="xl" bg="default" className={className}>
            <Container size="xl">
                <Stack gap="xl">
                    <Stack gap="md" align="center" className="text-center">
                        <Badge variant="outline" className="rounded-full">
                            Explore Destination
                        </Badge>

                        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                            Temukan Destinasi Edukatif Terbaik
                        </h2>

                        <p className="max-w-2xl text-lg text-muted-foreground">
                            Cari tempat kunjungan edukatif untuk sekolah, komunitas, atau
                            program pembelajaran berbasis pengalaman langsung.
                        </p>
                    </Stack>

                    <div className="rounded-[2rem] border bg-muted/30 p-3 shadow-sm">
                        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
                            <div className="relative">
                                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    type="search"
                                    placeholder="Cari destinasi, lokasi, atau tema edukasi..."
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    className="h-12 rounded-2xl bg-background pl-10"
                                    aria-label="Cari destinasi"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {DESTINATION_CATEGORIES.map((category) => (
                                    <Button
                                        key={category.value}
                                        type="button"
                                        variant={
                                            selectedCategory === category.value
                                                ? "default"
                                                : "outline"
                                        }
                                        className="rounded-2xl"
                                        onClick={() => setSelectedCategory(category.value)}
                                    >
                                        {category.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan{" "}
                            <span className="font-medium text-foreground">
                {filteredDestinations.length}
              </span>{" "}
                            destinasi
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Klik kartu untuk melihat detail program kunjungan.
                        </p>
                    </div>

                    {filteredDestinations.length > 0 ? (
                        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
                            {filteredDestinations.map((destination) => (
                                <DestinationCard
                                    key={destination.id}
                                    destination={destination}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <EmptyDestinationState
                            onReset={() => {
                                setSearchQuery("");
                                setSelectedCategory("all");
                            }}
                        />
                    )}
                </Stack>
            </Container>
        </Section>
    );
};

interface DestinationCardProps {
    destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
    return (
        <Card className="group overflow-hidden rounded-[2rem] border-0 bg-[#0b1f28] p-0 shadow-[0_24px_80px_rgba(11,31,40,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(11,31,40,0.26)]">
            <div className="relative">
                <AspectRatio ratio={0.82} className="overflow-hidden">
                    <img
                        src={destination.image.src}
                        alt={destination.image.alt}
                        className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                </AspectRatio>

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/90" />

                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                    {destination.badge ? (
                        <Badge className="rounded-full border-0 bg-white/15 px-3 py-1 text-white shadow-sm backdrop-blur-md hover:bg-white/20">
                            {destination.badge.text}
                        </Badge>
                    ) : (
                        <span />
                    )}

                    <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
                        {formatRupiah(destination.priceFrom)}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-4 flex justify-center gap-1">
                        <span className="h-1.5 w-5 rounded-full bg-white" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    </div>

                    <Stack gap="md">
                        <Stack gap="xs">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/70">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                    {destination.location}
                </span>

                                <span className="text-white/30">•</span>

                                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5 fill-white/80 text-white/80" />
                                    {destination.rating}
                </span>
                            </div>

                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                                {destination.name}
                            </h3>

                            <p className="line-clamp-3 text-sm leading-6 text-white/75">
                                {destination.description}
                            </p>
                        </Stack>

                        <div className="flex flex-wrap gap-2">
                            <Badge className="rounded-full border-0 bg-white/12 text-white/80 backdrop-blur-md hover:bg-white/15">
                                <Compass className="mr-1 size-3" />
                                {DESTINATION_CATEGORY_LABELS[destination.category]}
                            </Badge>

                            <Badge className="rounded-full border-0 bg-white/12 text-white/80 backdrop-blur-md hover:bg-white/15">
                                <Clock className="mr-1 size-3" />
                                {destination.duration}
                            </Badge>
                        </div>

                        <Button
                            asChild
                            className="h-12 w-full rounded-full bg-white text-[#12313d] shadow-none hover:bg-white/95"
                        >
                            <Link href={destination.link}>
                                <Ticket className="mr-2 size-4" />
                                Lihat Detail
                            </Link>
                        </Button>
                    </Stack>
                </div>
            </div>
        </Card>
    );
};

interface EmptyDestinationStateProps {
    onReset: () => void;
}

const EmptyDestinationState = ({ onReset }: EmptyDestinationStateProps) => {
    return (
        <div className="rounded-[2rem] border border-dashed bg-muted/20 px-6 py-16 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted">
                <Search className="size-5 text-muted-foreground" />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
                Destinasi tidak ditemukan
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Coba pakai kata kunci lain, pilih kategori berbeda, atau reset filter.
            </p>

            <Button
                type="button"
                variant="outline"
                className="mt-6 rounded-full"
                onClick={onReset}
            >
                Reset Filter
            </Button>
        </div>
    );
};

export { ExploreDestinations };