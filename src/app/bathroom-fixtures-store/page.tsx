import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/bathroom-fixtures-store/");

export default function OurProductsPage() {
  return (
    <PlaceholderPage
      title="Our Products"
      description="Our full bathroom fixture catalog — toilets, vanities, faucets, and more — is coming to this page soon."
    />
  );
}
