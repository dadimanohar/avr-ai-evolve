import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { pricingPage } from "@/content/pages/company";

export const Route = createFileRoute("/pricing")({
  head: () => pageHead(pricingPage),
  component: () => <PageTemplate page={pricingPage} />,
});
