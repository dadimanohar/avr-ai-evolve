import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { blogPostBySlug, blogSeedBySlug } from "@/content/pages/blog";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { articleSchema, buildHead, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const page = blogPostBySlug[params.slug];
    const seed = blogSeedBySlug[params.slug];
    if (!page || !seed) throw notFound();
    return { page, seed };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const { page, seed } = loaderData;
    return buildHead({
      title: page.title,
      description: page.description,
      path: page.slug,
      type: "article",
      ...(page.hero?.image ? { image: page.hero.image } : {}),
      schemas: [
        articleSchema({
          headline: page.h1,
          description: page.description,
          path: page.slug,
          datePublished: seed.date,
        }),
        faqSchema(page.faqs),
        breadcrumbSchema(page.breadcrumb),
      ],
    });
  },
  notFoundComponent: () => <NotFoundPage title="Article not found" backTo="/blog" backLabel="All articles" />,
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const { page } = Route.useLoaderData();
  return <PageTemplate page={page} />;
}
