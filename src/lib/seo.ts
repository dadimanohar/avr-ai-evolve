import { business, fullAddress } from "@/content/site";

export type FaqItem = { question: string; answer: string };

type HeadInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  image?: string;
  noindex?: boolean;
  schemas?: Record<string, unknown>[];
};

export const ORG_ID = "https://avrwebconsulting.com/#organization";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: business.name,
    description: business.description,
    email: business.email,
    telephone: business.phone,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: [
      "India",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Europe",
    ],
    knowsAbout: [
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Large Language Model Optimization",
      "AI Visibility",
      "Local SEO",
      "Technical SEO",
      "Link Building",
    ],
    openingHours: "Mo-Sa 09:30-19:00",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    description: business.description,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: "/faqs?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { label: string; to: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: t.to,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: input.path,
    provider: { "@id": ORG_ID },
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Europe"],
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: input.path,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: input.author ?? business.name },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: input.path,
  };
}

export function localBusinessSchema(city: string, region?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${business.name} — SEO Agency ${city}`,
    description: `${business.name} provides SEO, AI SEO and digital marketing services in ${city}${region ? `, ${region}` : ""}.`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: city,
    parentOrganization: { "@id": ORG_ID },
  };
}

/** Builds a complete, self-referencing head() payload for a route. */
export function buildHead({
  title,
  description,
  path,
  type = "website",
  image,
  noindex,
  schemas = [],
}: HeadInput) {
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: business.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "geo.placename", content: business.address.city },
    { name: "geo.region", content: "IN-AP" },
    { name: "business.contact_data.street_address", content: fullAddress },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  return {
    meta,
    links: [{ rel: "canonical", href: path }],
    scripts: schemas.map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
