import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our showroom of toilets, vanities, tubs, and fixtures — supplied and installed by Bradshaw Plumbing.",
};

export default function OurProductsPage() {
  return (
    <PlaceholderPage
      title="Our Products"
      description="Our full bathroom fixture catalog — toilets, vanities, faucets, and more — is coming to this page soon."
    />
  );
}
