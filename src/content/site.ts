export const business = {
  name: "AVR Web Consulting",
  legalName: "AVR Web Consulting",
  tagline: "Hybrid SEO + AI visibility agency",
  description:
    "AVR Web Consulting is a hybrid SEO and AI visibility agency in Visakhapatnam, India, serving global clients with traditional SEO, GEO targeting, AEO, LLM SEO, LLMO and AI Overview optimisation.",
  email: "info@avrwebconsulting.com",
  phone: "+91-9182543249",
  phoneHref: "tel:+919182543249",
  whatsapp: "https://wa.me/919182543249",
  founded: "2016",
  address: {
    street:
      "Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Beside Sri Ram Insurance, Dondaparthy",
    city: "Visakhapatnam",
    region: "Andhra Pradesh",
    postalCode: "530016",
    country: "IN",
    countryName: "India",
  },
  geo: { lat: 17.7231, lng: 83.3012 },
  hours: "Mon–Sat 09:30–19:00 IST",
  priceRange: "$$",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city} – ${business.address.postalCode}, ${business.address.region}, ${business.address.countryName}`;

export type NavLink = { label: string; to: string; blurb?: string };
export type NavGroup = { label: string; to: string; children: NavLink[] };

export const navigation: NavGroup[] = [
  {
    label: "SEO Services",
    to: "/seo-services",
    children: [
      { label: "Global SEO", to: "/seo-services/global-seo", blurb: "Multi-country organic growth" },
      { label: "Local SEO", to: "/seo-services/local-seo", blurb: "Maps, GMB and near-me rankings" },
      {
        label: "Technical SEO",
        to: "/seo-services/technical-seo",
        blurb: "Crawl, index and Core Web Vitals",
      },
      {
        label: "GEO Targeting SEO",
        to: "/seo-services/geo-targeting-seo",
        blurb: "City and country level targeting",
      },
      {
        label: "Local Citations & GMB",
        to: "/seo-services/local-citations-gmb",
        blurb: "Manual citations in 3 days",
      },
    ],
  },
  {
    label: "AI SEO",
    to: "/ai-seo",
    children: [
      {
        label: "Answer Engine Optimization",
        to: "/ai-seo/answer-engine-optimization",
        blurb: "Win the answer box in AI search",
      },
      { label: "GEO SEO", to: "/ai-seo/geo-seo", blurb: "Generative Engine Optimisation" },
      { label: "LLM SEO", to: "/ai-seo/llm-seo", blurb: "ChatGPT, Gemini, Copilot visibility" },
      { label: "LLMO", to: "/ai-seo/llmo", blurb: "Make content retrievable by LLMs" },
      { label: "AI Visibility", to: "/ai-seo/ai-visibility", blurb: "Presence across AI engines" },
      { label: "AI Overviews", to: "/ai-seo/ai-overviews", blurb: "Google AI summary placement" },
      {
        label: "AI Citations & Mentions",
        to: "/ai-seo/ai-citations-mentions",
        blurb: "Be the cited source",
      },
      {
        label: "AI Retrieval Systems",
        to: "/ai-seo/ai-retrieval-systems",
        blurb: "Machine-readable data layers",
      },
    ],
  },
  {
    label: "Advertising",
    to: "/paid-advertising",
    children: [
      { label: "Google Ads", to: "/paid-advertising/google-ads", blurb: "Search, Shopping, PMax" },
      {
        label: "Social Media Ads",
        to: "/paid-advertising/social-media-ads",
        blurb: "Meta, LinkedIn, YouTube",
      },
      {
        label: "Social Media Marketing",
        to: "/paid-advertising/social-media-marketing",
        blurb: "Organic social growth",
      },
    ],
  },
  {
    label: "Content",
    to: "/content-marketing",
    children: [
      {
        label: "Blogging & Copywriting",
        to: "/content-marketing/blogging-copywriting",
        blurb: "Answer-first content at scale",
      },
      {
        label: "Guest Posting & Link Building",
        to: "/content-marketing/guest-posting-link-building",
        blurb: "Manual placements from $20",
      },
    ],
  },
  {
    label: "Web Design",
    to: "/web-design-development",
    children: [
      {
        label: "WordPress Development",
        to: "/web-design-development/wordpress-development",
        blurb: "Fast, SEO-ready builds",
      },
      {
        label: "E-commerce Development",
        to: "/web-design-development/ecommerce-development",
        blurb: "Stores built to rank and convert",
      },
    ],
  },
  {
    label: "Company",
    to: "/about",
    children: [
      { label: "Industries We Serve", to: "/industries", blurb: "10+ verticals" },
      { label: "Locations", to: "/locations", blurb: "India metros + global" },
      { label: "Case Studies", to: "/case-studies", blurb: "Real client outcomes" },
      { label: "Pricing", to: "/pricing", blurb: "From $100/month" },
      { label: "Blog", to: "/blog", blurb: "AI search playbooks" },
      { label: "FAQs", to: "/faqs", blurb: "200+ answers" },
      { label: "About Us", to: "/about", blurb: "Our story and team" },
      { label: "Contact", to: "/contact", blurb: "Free consultation" },
    ],
  },
];

export const footerColumns = [
  {
    title: "SEO Services",
    links: navigation[0].children,
  },
  {
    title: "AI SEO",
    links: navigation[1].children,
  },
  {
    title: "Growth",
    links: [
      ...navigation[2].children,
      ...navigation[3].children,
      ...navigation[4].children,
    ],
  },
  {
    title: "Company",
    links: [
      ...navigation[5].children,
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];
