"use client";

import { Mail, MessageSquare, Phone, Search, type LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

import {
  HELP_CONTACT_ACTIONS,
  HELP_FAQS,
  type HelpContactIcon,
  type HelpFaq,
} from "@/constants/help";

import { Container, Grid, Section, Stack } from "@/components/layout";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface HelpProps {
  title?: string;
  description?: string;
  faqs?: readonly HelpFaq[];
  className?: string;
}

const contactIconMap: Record<HelpContactIcon, LucideIcon> = {
  chat: MessageSquare,
  mail: Mail,
  phone: Phone,
};

const Help = ({
  title = "Pusat Bantuan",
  description = "Temukan jawaban dari pertanyaan umum atau hubungi tim dukungan kami.",
  faqs = HELP_FAQS,
  className,
}: HelpProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const categories = useMemo(() => {
    return Array.from(new Set(faqs.map((faq) => faq.category)));
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    if (!normalizedSearchQuery) return [];

    return faqs.filter((faq) => {
      const searchableText = `${faq.category} ${faq.question} ${faq.answer}`;
      return searchableText.toLowerCase().includes(normalizedSearchQuery);
    });
  }, [faqs, normalizedSearchQuery]);

  const isSearching = normalizedSearchQuery.length > 0;

  return (
    <Section spacing="lg" bg="default" className={className}>
      <Container size="sm">
        <Stack gap="lg">
          <Stack gap="xs" align="center" className="text-center">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              {title}
            </h1>

            <p className="max-w-xl text-muted-foreground">
              {description}
            </p>
          </Stack>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              type="search"
              placeholder="Cari jawaban..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="h-11 rounded-full pl-9"
              aria-label="Search FAQ"
            />
          </div>

          {isSearching ? (
            <FaqSearchResults faqs={filteredFaqs} />
          ) : (
            <FaqCategoryList categories={categories} faqs={faqs} />
          )}

          <ContactFallback />
        </Stack>
      </Container>
    </Section>
  );
};

interface FaqSearchResultsProps {
  faqs: readonly HelpFaq[];
}

const FaqSearchResults = ({ faqs }: FaqSearchResultsProps) => {
  if (faqs.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed py-10 text-center text-sm text-muted-foreground">
        Tidak ditemukan hasil. Coba kata kunci lain atau hubungi kami di bawah.
      </p>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger className="text-left">
            <span>
              <span className="mr-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {faq.category}
              </span>
              {faq.question}
            </span>
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

interface FaqCategoryListProps {
  categories: string[];
  faqs: readonly HelpFaq[];
}

const FaqCategoryList = ({ categories, faqs }: FaqCategoryListProps) => {
  return (
    <Stack gap="lg">
      {categories.map((category) => (
        <Stack key={category} gap="xs">
          <h3 className="font-semibold">{category}</h3>

          <Accordion type="single" collapsible className="w-full">
            {faqs
              .filter((faq) => faq.category === category)
              .map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </Stack>
      ))}
    </Stack>
  );
};

const ContactFallback = () => {
  return (
    <Card className="gap-0 rounded-3xl bg-muted/30 p-0">
      <CardContent className="p-6">
        <Stack gap="md">
          <Stack gap="xs" align="center" className="text-center">
            <h3 className="font-semibold">Masih butuh bantuan?</h3>

            <p className="text-sm text-muted-foreground">
              Tim dukungan kami siap membantu Anda.
            </p>
          </Stack>

          <Grid cols={{ base: 1, sm: 2 }} gap="sm">
            {HELP_CONTACT_ACTIONS.map((action) => {
              const Icon = contactIconMap[action.icon];

              return (
                <Button
                  key={action.label}
                  variant="outline"
                  className="w-full rounded-full"
                  asChild
                >
                  <a href={action.href}>
                    <Icon className="mr-2 size-4" />
                    {action.label}
                  </a>
                </Button>
              );
            })}
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { Help };
