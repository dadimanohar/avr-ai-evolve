import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/avr-logo.jpg.asset.json";
import { business, footerColumns, fullAddress } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="AVR Web Consulting logo"
                className="h-11 w-11 rounded-lg"
                loading="lazy"
              />
              <span className="font-display text-lg font-bold">{business.name}</span>
            </Link>
            <p className="mt-4 text-sm text-ink-foreground/70">{business.description}</p>
            <address className="mt-6 space-y-3 text-sm not-italic text-ink-foreground/80">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{fullAddress}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={business.phoneHref} className="hover:text-primary">
                  {business.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${business.email}`} className="hover:text-primary">
                  {business.email}
                </a>
              </p>
              <p className="text-ink-foreground/60">{business.hours}</p>
            </address>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
                  {col.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link to={link.to} className="hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}. Hybrid SEO + AI visibility, built in
            Visakhapatnam for the world.
          </p>
          <p>Serving India, USA, UK, UAE and Europe.</p>
        </div>
      </div>
    </footer>
  );
}
