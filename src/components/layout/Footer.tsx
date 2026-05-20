import Link from "next/link";
import {
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import {
  type IconType
} from "react-icons";

import {
  footerBrandImage,
  footerLogo,
  footerSections,
  footerSocialLinks,
  type FooterSocialIcon,
} from "@/constants/footer";

import { Container, Grid, Section, Stack } from "@/components/layout";

const socialIconMap: Record<FooterSocialIcon, IconType> = {
  instagram: FaInstagram,
  twitter: FaTwitter,
};

const Footer = () => {
  return (
      <Section spacing="xl" bg="default" border="top">
        <Container size="xl">
          <Stack gap="xl">
            <div className="flex flex-col items-start justify-between gap-10 py-4 md:flex-row lg:py-8">
              <div className="w-full md:w-auto">
                <Link href={footerLogo.url}>
                  <img
                      src={footerLogo.src}
                      alt={footerLogo.alt}
                      title={footerLogo.title}
                      className="h-8 w-auto"
                  />
                </Link>
              </div>

              <Grid
                  cols={{ base: 2, sm: 4 }}
                  gap="lg"
                  className="w-full md:w-auto md:flex md:gap-12 lg:gap-16"
              >
                {footerSections.map((section) => (
                    <Stack
                        key={section.title}
                        gap="sm"
                        className="min-w-[120px]"
                    >
                      <h3 className="text-muted-foreground text-sm font-semibold">
                        {section.title}
                      </h3>

                      <ul className="space-y-3 text-sm">
                        {section.links.map((link) => (
                            <li key={`${section.title}-${link.name}`}>
                              <Link
                                  href={link.href}
                                  className="text-muted-foreground transition hover:text-primary"
                              >
                                {link.name}
                              </Link>
                            </li>
                        ))}
                      </ul>
                    </Stack>
                ))}

                <Stack gap="sm">
                  <h3 className="text-muted-foreground text-sm font-semibold">
                    Social
                  </h3>

                  <div className="text-muted-foreground flex gap-4">
                    {footerSocialLinks.map((social) => {
                      const Icon = socialIconMap[social.icon];

                      return (
                          <a
                              key={social.name}
                              href={social.href}
                              aria-label={social.name}
                              target="_blank"
                              rel="noreferrer"
                              className="transition hover:text-primary"
                          >
                            <Icon size={20} />
                          </a>
                      );
                    })}
                  </div>
                </Stack>
              </Grid>
            </div>

            <div>
              <img
                  src={footerBrandImage.src}
                  alt={footerBrandImage.alt}
                  className="w-full"
              />
            </div>
          </Stack>
        </Container>
      </Section>
  );
};

export { Footer };