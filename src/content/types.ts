export type Faq = { question: string; answer: string };

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "steps"; title?: string; items: { title: string; text: string }[] }
  | { kind: "table"; title?: string; head: string[]; rows: string[][] }
  | { kind: "callout"; title: string; text: string };

export type PageSection = {
  id: string;
  heading: string;
  blocks: ContentBlock[];
};

export type PageContent = {
  slug: string;
  title: string; // <title>
  h1: string;
  description: string; // meta description
  eyebrow?: string;
  /** 40-60 word direct answer for AI/answer engines */
  answer: string;
  hero?: { image?: string; imageAlt?: string };
  highlights?: { label: string; value: string }[];
  sections: PageSection[];
  faqs: Faq[];
  serviceName?: string;
  related?: { label: string; to: string }[];
  breadcrumb: { label: string; to: string }[];
};
