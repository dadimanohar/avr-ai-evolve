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

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <img
            src={logo.url}
            alt="AVR Web Consulting logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg object-cover ring-2 ring-primary/40 lg:h-10 lg:w-10"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight lg:text-lg">
              AVR Web Consulting
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
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

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
          <Button asChild className="rounded-full">
            <Link to="/contact">Request audit</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full xl:hidden">
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
                    Book a consultation
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
