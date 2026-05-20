import { CornerDownRight } from "lucide-react";

import {
  CONTACT_CONTENT,
  CONTACT_SERVICE_OPTIONS,
} from "@/constants/contact";

import { Container, Grid, Section, Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

const inputClassName =
  "mt-8 rounded-none border-0 border-b border-b-foreground/10 !bg-transparent p-0 uppercase shadow-none placeholder:text-foreground/20 focus-visible:ring-0 lg:text-base";

const Contact = () => {
  return (
    <Section spacing="xl" bg="default">
      <Container size="xl">
        <Grid cols={{ base: 1, lg: 3 }} gap="xl" className="items-start">
          <Stack gap="md" className="w-full max-w-xs">
            <h1 className="text-5xl font-semibold tracking-tight lg:text-6xl">
              {CONTACT_CONTENT.title}
            </h1>

            <p className="text-sm uppercase text-foreground/50">
              {CONTACT_CONTENT.eyebrow}
            </p>
          </Stack>

          <Stack gap="xl" className="lg:col-span-2 lg:pl-10">
            <Grid cols={{ base: 1, lg: 3 }} gap="lg">
              <Stack gap="xs">
                <p className="text-sm uppercase text-foreground/40">
                  {CONTACT_CONTENT.addressLabel}
                </p>

                <p className="max-w-52 text-lg font-semibold leading-snug">
                  {CONTACT_CONTENT.address}
                </p>
              </Stack>

              <Stack gap="xs" className="lg:col-span-2">
                <a
                  href={`tel:${CONTACT_CONTENT.phone.replace(/[^\d+]/g, "")}`}
                  className="w-fit text-sm uppercase text-foreground/40 transition hover:text-foreground"
                >
                  {CONTACT_CONTENT.phone}
                </a>

                <a
                  href={`mailto:${CONTACT_CONTENT.email}`}
                  className="w-fit break-all text-3xl font-semibold tracking-tight transition hover:text-primary sm:text-4xl"
                >
                  {CONTACT_CONTENT.email}
                </a>
              </Stack>
            </Grid>

            <form className="grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name*"
                  autoComplete="name"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  autoComplete="email"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone
                </label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone*"
                  autoComplete="tel"
                  required
                  className={inputClassName}
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label htmlFor="contact-service" className="sr-only">
                  Service interested in
                </label>

                <Select name="service" required>
                  <SelectTrigger
                    id="contact-service"
                    className="mt-8 w-full rounded-none border-0 border-b border-b-foreground/10 !bg-transparent p-0 uppercase shadow-none data-[placeholder]:text-foreground/20 focus-visible:ring-0 lg:text-base"
                  >
                    <SelectValue placeholder="Layanan yang diminati*" />
                  </SelectTrigger>

                  <SelectContent className="rounded-none uppercase shadow-none">
                    {CONTACT_SERVICE_OPTIONS.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="rounded-none py-4"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <label htmlFor="contact-message" className="sr-only">
                  Describe your requirements
                </label>

                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Jelaskan kebutuhan Anda*"
                  required
                  className="mt-8 min-h-42 rounded-none border-0 border-b border-b-foreground/10 !bg-transparent p-0 uppercase shadow-none placeholder:text-foreground/20 focus-visible:ring-0 lg:text-base"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <Button
                  type="submit"
                  variant="ghost"
                  className="w-fit rounded-none px-0 uppercase hover:bg-transparent hover:text-primary"
                >
                  <CornerDownRight className="size-5" />
                  {CONTACT_CONTENT.submitLabel}
                </Button>
              </div>
            </form>
          </Stack>
        </Grid>
      </Container>
    </Section>
  );
};

export { Contact };