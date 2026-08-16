import type { PageContent } from "@/content/types";
import {
  AnswerBlock,
  Breadcrumbs,
  CTABand,
  ContentSections,
  FaqAccordion,
  RelatedLinks,
  Section,
  StatBand,
  TableOfContents,
} from "@/components/site/sections";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function pageHead(page: PageContent) {
  return buildHead({
    title: page.title,
    description: page.description,
    path: page.slug,
    ...(page.hero?.image ? { image: page.hero.image } : {}),
    schemas: [
      serviceSchema({
        name: page.serviceName ?? page.h1,
        description: page.description,
        path: page.slug,
      }),
      faqSchema(page.faqs),
      breadcrumbSchema(page.breadcrumb),
    ],
  });
}

export function PageTemplate({ page }: { page: PageContent }) {
  return (
    <>
      <Section className="pb-8 pt-10 lg:pb-10 lg:pt-14">
        <Breadcrumbs trail={page.breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            {page.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {page.eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-[1.08] lg:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-balance-pretty text-lg text-muted-foreground">
              {page.description}
            </p>
            <div className="mt-8">
              <AnswerBlock text={page.answer} />
            </div>
          </div>
          {page.hero?.image && (
            <img
              src={page.hero.image}
              alt={page.hero.imageAlt ?? page.h1}
              loading="eager"
              className="w-full rounded-3xl border border-border object-cover shadow-sm"
            />
          )}
        </div>
        {page.highlights && page.highlights.length > 0 && (
          <div className="mt-10">
            <StatBand stats={page.highlights} />
          </div>
        )}
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <ContentSections sections={page.sections} />
            <div className="mt-14">
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28">
            <TableOfContents sections={page.sections} />
            {page.related && page.related.length > 0 && <RelatedLinks links={page.related} />}
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
