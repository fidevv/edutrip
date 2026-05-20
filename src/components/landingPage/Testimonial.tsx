"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useMemo } from "react";

import {
  TESTIMONIALS_ROW_1,
  TESTIMONIALS_ROW_2,
  type Testimonials,
} from "@/constants/testimonials";

import { Container, Section, Stack } from "@/components/layout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial7Props {
  title?: string;
  description?: string;
  ctaLabel?: string;
  testimonialsRow1?: readonly Testimonials[];
  testimonialsRow2?: readonly Testimonials[];
}

const Testi = ({
  title = "Apa Kata Mereka",
  description = "Sekolah dan komunitas yang telah menggunakan EduTrip",
  ctaLabel = "Mulai Jelajahi Sekarang",
  testimonialsRow1 = TESTIMONIALS_ROW_1,
  testimonialsRow2 = TESTIMONIALS_ROW_2,
}: Testimonial7Props) => {
  const forwardAutoScroll = useMemo(
    () =>
      AutoScroll({
        startDelay: 500,
        speed: 0.7,
      }),
    [],
  );

  const backwardAutoScroll = useMemo(
    () =>
      AutoScroll({
        startDelay: 500,
        speed: 0.7,
        direction: "backward",
      }),
    [],
  );

  return (
    <Section spacing="xl" bg="default">
      <Stack gap="xl">
        <Container size="lg">
          <Stack gap="md" align="center" className="text-center">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
              {title}
            </h2>

            <p className="max-w-2xl text-muted-foreground lg:text-lg">
              {description}
            </p>

            <Button className="mt-2 rounded-full">
              {ctaLabel}
            </Button>
          </Stack>
        </Container>

        <Container size="full" className="px-0 lg:px-8">
          <Stack gap="sm">
            <TestimonialCarousel
              testimonials={testimonialsRow1}
              plugin={forwardAutoScroll}
            />

            <TestimonialCarousel
              testimonials={testimonialsRow2}
              plugin={backwardAutoScroll}
            />
          </Stack>
        </Container>
      </Stack>
    </Section>
  );
};

interface TestimonialCarouselProps {
  testimonials: readonly Testimonials[];
  plugin: ReturnType<typeof AutoScroll>;
}

const TestimonialCarousel = ({
  testimonials,
  plugin,
}: TestimonialCarouselProps) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin]}
      onMouseEnter={() => plugin.stop()}
      onMouseLeave={() => plugin.play()}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={`${testimonial.name}-${testimonial.role}`}
            className="basis-auto"
          >
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonials;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="max-w-96 select-none rounded-3xl p-6">
      <div className="mb-4 flex gap-4">
        <Avatar className="size-9 rounded-full ring-1 ring-input">
          <AvatarImage
            src={testimonial.avatar}
            alt={testimonial.name}
          />
        </Avatar>

        <div className="text-sm">
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      <q className="text-sm leading-6 text-muted-foreground">
        {testimonial.content}
      </q>
    </Card>
  );
};

export { Testi };
