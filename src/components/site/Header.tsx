import { Link } from "@tanstack/react-router";
import { Menu, Phone, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/avr-logo.jpg.asset.json";
import { navigation, business } from "@/content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="hidden bg-ink text-ink-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p>Hybrid SEO + AI visibility · Visakhapatnam · Serving India, US, UK, UAE & Europe</p>
          <div className="flex items-center gap-5">
            <a className="hover:text-primary" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            <a className="hover:text-primary" href={business.phoneHref}>
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 flex-nowrap items-center justify-between gap-2 px-3 lg:h-20 lg:gap-4 lg:px-8">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:gap-3" aria-label={`${business.name} home`}>
          <img
            src={logo.url}
            alt="AVR Web Consulting logo"
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-primary/40 max-[400px]:h-8 max-[400px]:w-8 lg:h-11 lg:w-11"
          />
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap font-display text-[15px] font-bold leading-[1.15] max-[400px]:text-sm lg:text-lg">
              AVR Web Consulting
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[9px] uppercase tracking-[1px] text-muted-foreground max-[400px]:text-[8px] max-[400px]:tracking-[0.8px] lg:text-[11px] lg:tracking-[0.18em]">
              SEO · AI Visibility
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navigation.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                to={group.to}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
              >
                {group.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-border bg-popover p-2 shadow-xl">
                  {group.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        className="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"
                      >
                        <span className="block text-sm font-semibold">{child.label}</span>
                        {child.blurb && (
                          <span className="block text-xs text-muted-foreground">{child.blurb}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
          <Button asChild className="h-9 shrink-0 whitespace-nowrap rounded-full px-3.5 text-[13px] font-semibold max-[400px]:px-[11px] max-[400px]:text-xs max-[360px]:hidden lg:h-9 lg:px-4 lg:text-sm">
            <Link to="/contact">Free audit</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-[38px] w-[38px] shrink-0 rounded-full xl:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
              <SheetHeader className="flex-row items-center justify-between space-y-0">
                <SheetTitle className="font-display">Menu</SheetTitle>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>
              <div className="px-4 pb-10">
                <Accordion type="multiple">
                  {navigation.map((group) => (
                    <AccordionItem key={group.label} value={group.label}>
                      <AccordionTrigger className="font-display text-base">
                        {group.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to={group.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2 py-2 text-sm font-semibold text-primary"
                            >
                              {group.label} overview
                            </Link>
                          </li>
                          {group.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-2 py-2 text-sm hover:bg-mist"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button asChild className="mt-6 w-full rounded-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book a free consultation
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
