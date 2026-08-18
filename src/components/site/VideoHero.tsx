import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import heroVideo from "@/assets/avr-hero.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { business } from "@/content/site";

export function VideoHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative isolate min-h-[38rem] overflow-hidden bg-ink text-ink-foreground lg:min-h-[44rem]">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={heroVideo.url}
        poster={heroPoster.url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <img
        src={heroPoster.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[44rem]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/90 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-balance-pretty text-lg text-ink-foreground/80 lg:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Get a free AI + SEO audit
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <a href={business.phoneHref}>Call {business.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
