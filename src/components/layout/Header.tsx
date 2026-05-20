"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  DESKTOP_NAVIGATION,
  MOBILE_NAVIGATION,
  NAVBAR_BUTTONS,
  NAVBAR_LOGO,
  NAVBAR_MOBILE_BREAKPOINT,
  NAVBAR_SOCIAL_LINKS,
  type NavbarMenuItem,
} from "@/constants/navbar";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface DesktopMenuItemProps {
  item: NavbarMenuItem;
  index: number;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > NAVBAR_MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
      <>
        <header className="fixed inset-x-0 top-4 z-50 px-4">
          <Container size="xl" className="px-0">
            <div
                className={cn(
                    "mx-auto flex h-16 items-center justify-between gap-4 rounded-full border px-4 transition-all duration-300",
                    "border-border/60 bg-background/75 shadow-lg shadow-black/5 backdrop-blur-xl",
                    isScrolled &&
                    "border-border bg-background/90 shadow-xl shadow-black/10",
                )}
            >
              <Link
                  href={NAVBAR_LOGO.url}
                  className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight"
              >
                <img
                    src={NAVBAR_LOGO.src}
                    alt={NAVBAR_LOGO.alt}
                    className="h-6 w-auto md:h-7"
                />
              </Link>

              <NavigationMenu className="hidden lg:flex [&>div:nth-child(2)]:left-1/2 [&>div:nth-child(2)]:-translate-x-1/2">
                <NavigationMenuList className="rounded-full border border-border/50 bg-muted/50 p-1 shadow-inner">
                  {DESKTOP_NAVIGATION.map((item, index) => (
                      <DesktopMenuItem
                          key={item.title}
                          item={item}
                          index={index}
                      />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex shrink-0 items-center gap-2">
                <div className="hidden items-center gap-2 sm:flex">
                  {NAVBAR_BUTTONS.map((button) => (
                      <Button
                          key={button.label}
                          variant={button.variant}
                          size="lg"
                          className={cn(
                              "rounded-full",
                              button.variant === "default" &&
                              "shadow-sm shadow-black/10",
                          )}
                          asChild
                      >
                        <Link href={button.url}>{button.label}</Link>
                      </Button>
                  ))}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(true)}
                    className="rounded-full lg:hidden"
                    aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </div>
            </div>
          </Container>
        </header>

        <MobileNavigationMenu open={open} setOpen={setOpen} />
      </>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const activeIndex = Number(event.currentTarget.dataset.index);

    if (!item.links) return;

    imagesRef.current.forEach((img, imageIndex) => {
      img.classList.toggle("opacity-100", imageIndex === activeIndex);
      img.classList.toggle("opacity-0", imageIndex !== activeIndex);
    });
  };

  const handleMouseLeave = () => {
    imagesRef.current.forEach((img, imageIndex) => {
      img.classList.toggle("opacity-100", imageIndex === 0);
      img.classList.toggle("opacity-0", imageIndex !== 0);
    });
  };

  if (item.links) {
    return (
        <NavigationMenuItem value={`${index}`}>
          <NavigationMenuTrigger
              className={cn(
                  "h-10 rounded-full bg-transparent px-4 text-sm font-medium",
                  "hover:bg-background focus:bg-background data-[state=open]:bg-background",
              )}
          >
            {item.title}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="!rounded-3xl !border !bg-background/95 !p-0 !shadow-2xl !shadow-black/10 !backdrop-blur-xl">
            <div className="grid min-h-[18.75rem] w-[45.25rem] grid-cols-[22.5rem_1fr] gap-4 p-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
                {item.links.map((link, imageIndex) => (
                    <img
                        key={link.label}
                        ref={(el) => {
                          if (el) {
                            imagesRef.current[imageIndex] = el;
                          }
                        }}
                        src={link.image}
                        alt={link.label}
                        className={cn(
                            "absolute inset-0 size-full object-cover transition-opacity duration-300",
                            imageIndex === 0 ? "opacity-100" : "opacity-0",
                        )}
                    />
                ))}
              </div>

              <div>
                <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.title}
                </div>

                <ul>
                  {item.links.map((link, linkIndex) => (
                      <li key={link.label}>
                        <Link
                            href={link.url}
                            data-index={linkIndex}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="flex items-start gap-4 rounded-2xl px-4 py-3 transition hover:bg-muted"
                        >
                          <div>
                            <h3 className="font-medium leading-normal">
                              {link.label}
                            </h3>

                            {link.description ? (
                                <p className="text-sm leading-normal text-muted-foreground">
                                  {link.description}
                                </p>
                            ) : null}
                          </div>
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
    );
  }

  return (
      <NavigationMenuItem value={`${index}`}>
        <NavigationMenuLink
            asChild
            className={cn(
                navigationMenuTriggerStyle(),
                "h-10 rounded-full bg-transparent px-4 text-sm hover:bg-background focus:bg-background",
            )}
        >
          <Link href={item.url ?? "#"}>{item.title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({
                                open,
                                setOpen,
                              }: MobileNavigationMenuProps) => {
  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
            side="top"
            aria-describedby={undefined}
            className="inset-0 z-[60] h-dvh w-full border-none bg-background p-0 text-foreground [&>button]:hidden"
        >
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

          <div className="h-full overflow-y-auto">
            <Container size="xl" className="flex min-h-dvh flex-col px-4 py-4">
              <div className="flex h-16 items-center justify-between rounded-full border border-border/60 bg-background/80 px-4 shadow-lg shadow-black/5 backdrop-blur-xl">
                <Link
                    href={NAVBAR_LOGO.url}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-lg font-semibold tracking-tight"
                >
                  <img
                      src={NAVBAR_LOGO.src}
                      alt={NAVBAR_LOGO.alt}
                      className="h-6 w-auto md:h-7"
                  />
                </Link>

                <SheetClose asChild>
                  <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      aria-label="Close navigation menu"
                  >
                    <X className="size-5" />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-12 py-12">
                <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10">
                  {MOBILE_NAVIGATION.map((item, index) => (
                      <MobileMenuItem
                          key={item.title}
                          item={item}
                          index={index}
                          setOpen={setOpen}
                      />
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Social
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {NAVBAR_SOCIAL_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            onClick={() => setOpen(false)}
                            className="text-sm text-muted-foreground transition hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SheetContent>
      </Sheet>
  );
};

interface MobileMenuItemProps {
  item: NavbarMenuItem;
  index: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuItem = ({ item, index, setOpen }: MobileMenuItemProps) => {
  return (
      <div className={cn("flex flex-col gap-4", item.className)}>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {item.title}
        </div>

        <ul className="flex flex-col gap-3">
          {item.links?.map((link) => (
              <li key={link.label}>
                <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className={cn(
                        "font-medium leading-normal transition hover:text-primary",
                        index === 0 ? "text-2xl" : "text-base",
                    )}
                >
                  {link.label}
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
};

export { Header };