import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { navigation, business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/site/SocialLinks";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 font-sans backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-[10px]" aria-label={`${business.name} home`}>
          <img
            src="/1790648464804.png"
            alt="AVR Web Consulting logo"
            className="h-[44px] w-auto bg-transparent object-contain md:h-[48px]"
          />
          <span className="flex flex-col justify-center">
            <span className="whitespace-nowrap text-[17px] font-[700] leading-[1.1] tracking-[-0.2px] lg:text-[20px]">
              AVR Web Consulting
            </span>
            <span className="mt-[3px] whitespace-nowrap text-[10px] font-[600] uppercase tracking-[1.5px] text-muted-foreground sm:text-[11px]">
              SEO · AI Visibility
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navigation.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                to={group.to}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-sm font-[500] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3"
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
          <Button asChild className="rounded-full font-[600]">
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
                <SheetTitle className="font-sans">Menu</SheetTitle>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>
              <div className="px-4 pb-10">
                <Accordion type="multiple">
                  {navigation.map((group) => (
                    <AccordionItem key={group.label} value={group.label}>
                      <AccordionTrigger className="font-sans text-base font-[500]">
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
                <Button asChild className="mt-6 w-full rounded-full font-[600]">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book a consultation
                  </Link>
                </Button>

                <div className="mt-8 flex flex-col items-center border-t border-border pt-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Follow Us
                  </h3>
                  <SocialLinks variant="dark" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
