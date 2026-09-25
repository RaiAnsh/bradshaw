import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { productsSubNav } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

const slugToLabel = new Map(
  productsSubNav.map((item) => [item.href.split("/").filter(Boolean).pop() as string, item.label])
);

export function generateStaticParams() {
  return Array.from(slugToLabel.keys()).map((slug) => ({ slug }));
}

type ProductCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slugToLabel.has(slug)) return {};
  return pageMetadata(`/product-category/${slug}/`);
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { slug } = await params;
  const label = slugToLabel.get(slug);
  if (!label) notFound();

  return (
    <PlaceholderPage
      title={label}
      description={`Our ${label.toLowerCase()} catalog is coming to this page soon — call us for current availability and pricing.`}
    />
  );
}
