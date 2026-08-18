import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import aiEngines from "@/assets/ai-engines.png.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import { VideoHero } from "@/components/site/VideoHero";
import {
  AnswerBlock,
  CTABand,
  FaqAccordion,
  Section,
  SectionHeading,
  StatBand,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import {
  homeAnswer,
  homeFaqs,
  homeIndustries,
  homePillars,
  homeProcess,
  homeServices,
  homeStats,
} from "@/content/pages/home";
import { buildHead, faqSchema } from "@/lib/seo";

const title = "AVR Web Consulting | SEO & AI Visibility Agency in India";
const description =
  "Hybrid SEO and AI visibility agency in Visakhapatnam serving India, USA, UK, UAE and Europe. Rank on Google and get cited by ChatGPT, Gemini and AI Overviews. Plans from $100/month.";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title,
      description,
      path: "/",
      schemas: [faqSchema(homeFaqs)],
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <VideoHero
        eyebrow="SEO + AI visibility"
        title="Rank on Google. Get quoted by AI."
        subtitle="AVR Web Consulting blends traditional SEO with AEO, GEO, LLM SEO and LLMO so your brand wins search results and AI answers — affordable, fast and 100% manual safe work."
      />

      <Section className="pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A hybrid SEO agency built for the AI search era"
              intro="Search did not disappear — it split. Half your buyers still scroll results, the other half ask an assistant. We optimise for both on the same site, with the same content."
            />
            <div className="mt-8">
              <AnswerBlock text={homeAnswer} question="What is AVR Web Consulting?" />
            </div>
          </div>
          <img
            src={teamMeeting.url}
            alt="AVR Web Consulting strategists reviewing SEO and AI visibility reports"
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-sm"
          />
        </div>
        <div className="mt-12">
          <StatBand stats={homeStats} />
        </div>
      </Section>

      <Section tone="mist" id="services">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to be found — by people and by machines"
          intro="Pick one service or run the full hybrid programme. Every engagement is a fixed monthly price with transparent reporting."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                Explore
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="The AI difference"
              title="Why AI visibility work is not optional anymore"
              intro="ChatGPT, Gemini, Perplexity, Claude, Copilot and Google AI Overviews now answer a large share of commercial questions directly. We make sure the answer includes you."
            />
            <ul className="mt-8 space-y-5">
              {homePillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-full">
              <Link to="/ai-seo">
                See our AI SEO services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <img
            src={aiEngines.url}
            alt="ChatGPT, Gemini, Claude, DeepSeek, Perplexity and Grok — the AI engines we optimise for"
            loading="lazy"
            className="w-full rounded-3xl border border-border bg-card object-contain p-6 shadow-sm"
          />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="How we work"
          title="A four-step programme, repeated every quarter"
          align="center"
        />
        <ol className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeProcess.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-sm font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Vertical-specific strategies, not recycled templates"
          intro="Ten industries, each with their own keyword universe, buying cycle and compliance needs."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {homeIndustries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/85"
            >
              {industry}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion faqs={homeFaqs} heading="AVR Web Consulting — frequently asked questions" />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
