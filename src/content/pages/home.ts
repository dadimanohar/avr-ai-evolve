import type { Faq } from "@/content/types";

export const homeAnswer =
  "AVR Web Consulting is a hybrid SEO and AI visibility agency based in Visakhapatnam, India, serving clients across India, the USA, UK, UAE and Europe. We combine traditional SEO — technical, local and global — with AEO, GEO, LLM SEO and LLMO so your brand ranks on Google and gets cited inside AI answers.";

export const homeStats = [
  { label: "Years in search", value: "10+" },
  { label: "Projects delivered", value: "450+" },
  { label: "Avg. organic lift", value: "3.4x" },
  { label: "Starting price", value: "$100/mo" },
];

export const homeServices: { title: string; text: string; to: string }[] = [
  {
    title: "Global SEO",
    text: "Multi-country keyword strategy, hreflang, content clusters and authority building for international demand.",
    to: "/seo-services/global-seo",
  },
  {
    title: "Local SEO & GMB",
    text: "Google Business Profile, manual citations, review velocity and near-me rankings that fill your calendar.",
    to: "/seo-services/local-seo",
  },
  {
    title: "Technical SEO",
    text: "Crawl, index, schema and Core Web Vitals fixes so both search crawlers and AI retrievers can read you.",
    to: "/seo-services/technical-seo",
  },
  {
    title: "Answer Engine Optimization",
    text: "Answer-first structure, FAQ schema and entity clarity that win the answer box in AI search.",
    to: "/ai-seo/answer-engine-optimization",
  },
  {
    title: "LLM SEO & LLMO",
    text: "Get recommended inside ChatGPT, Gemini, Perplexity, Claude and Copilot when buyers ask for your category.",
    to: "/ai-seo/llm-seo",
  },
  {
    title: "AI Overviews & Citations",
    text: "Structured, sourceable content designed to be quoted and linked by Google AI Overviews.",
    to: "/ai-seo/ai-overviews",
  },
];

export const homePillars: { title: string; text: string }[] = [
  {
    title: "Answer-first content",
    text: "Every page opens with a 40–60 word direct answer, then depth — the exact shape answer engines and LLMs extract and quote.",
  },
  {
    title: "Machine-readable data layer",
    text: "Organization, LocalBusiness, Service, FAQPage, Article and BreadcrumbList schema on every page, plus llms.txt and AI-crawler-friendly robots rules.",
  },
  {
    title: "Entity consistency",
    text: "Identical brand name, NAP and service naming everywhere, so AI systems resolve one confident entity instead of guessing.",
  },
  {
    title: "Human quality, manual work",
    text: "No spam links, no auto-generated fluff. Manual citations, editorial placements and content written for people first.",
  },
];

export const homeIndustries = [
  "Startups",
  "E-commerce",
  "Healthcare",
  "Fashion & Retail",
  "SaaS & Tech",
  "Real Estate",
  "Education",
  "Travel",
  "Legal",
  "Manufacturing",
];

export const homeProcess = [
  {
    title: "Audit",
    text: "Technical, content, backlink and AI-visibility audit — we check how ChatGPT, Gemini and Perplexity currently describe you.",
  },
  {
    title: "Strategy",
    text: "Keyword and question map, entity plan, page architecture and a 90-day roadmap with clear KPIs.",
  },
  {
    title: "Execute",
    text: "Technical fixes, answer-first content, schema, manual citations and safe editorial link building.",
  },
  {
    title: "Report",
    text: "Monthly rankings, traffic, leads and AI-mention tracking — with what we changed and what comes next.",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What does AVR Web Consulting do?",
    answer:
      "AVR Web Consulting is a digital marketing agency specialising in hybrid SEO: traditional search optimisation (technical, local, global) combined with AI visibility work such as AEO, GEO, LLM SEO and LLMO. We also run Google Ads, social ads, content marketing and web design and development.",
  },
  {
    question: "Where is AVR Web Consulting located?",
    answer:
      "Our office is in Dondaparthy, Visakhapatnam, Andhra Pradesh 530016, India. We work remotely with clients across India, the USA, the UK, the UAE and Europe, with reporting calls scheduled in your timezone.",
  },
  {
    question: "How much does SEO cost with AVR Web Consulting?",
    answer:
      "Plans start at $100 per month for local and small-business SEO. Growth SEO and AI-visibility packages typically run $300–$900 per month depending on market size, number of target locations and content volume. Every plan is a fixed monthly price with no lock-in surprises.",
  },
  {
    question: "What is AI SEO, and do I actually need it?",
    answer:
      "AI SEO makes your brand visible inside AI answers — Google AI Overviews, ChatGPT, Gemini, Perplexity and Copilot. Buyers increasingly ask an assistant instead of scrolling ten blue links, so if AI systems cannot read, trust or cite your site, you lose those conversations even when you rank well.",
  },
  {
    question: "How is AI SEO different from traditional SEO?",
    answer:
      "Traditional SEO optimises for ranking positions on a results page. AI SEO optimises for extraction and citation: direct answers, structured data, clear entities, factual consistency and sources AI models trust. The technical foundation overlaps, but the content shape and measurement differ, so we do both together.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Technical wins and Google Business Profile improvements often show within 2–4 weeks. Meaningful keyword movement typically starts at 8–12 weeks, and competitive national or global terms take 4–6 months. AI citations frequently appear faster than rankings once schema and answer blocks are in place.",
  },
  {
    question: "Do you use safe, manual link building?",
    answer:
      "Yes. Every citation and placement is built manually on real, indexed sites with genuine editorial standards. We do not use PBNs, automated blasts or link farms, because those tactics create risk that outlives any short-term gain.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We serve startups, e-commerce, healthcare, fashion and retail, SaaS and tech, real estate, education, travel, legal and manufacturing. Each vertical gets its own keyword research, compliance considerations and content tone rather than a recycled template.",
  },
  {
    question: "Can you handle SEO and paid ads together?",
    answer:
      "Yes. Running Google Ads or Meta ads alongside SEO lets us test which messages and keywords convert before investing in long-form content, and paid data shortens the path to profitable organic pages. Both channels report into one dashboard.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send your website, target keywords and target markets through the contact form, or call +91-9182543249. You get a free audit covering technical health, content gaps and current AI visibility, plus a fixed-price proposal within one business day.",
  },
];
