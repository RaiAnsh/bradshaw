import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductCategoriesSection } from "@/components/ProductCategoriesSection";
import { GalleryTeaserSection } from "@/components/GalleryTeaserSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EstimateSection } from "@/components/EstimateSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProductCategoriesSection />
      <GalleryTeaserSection />
      <TestimonialsSection />
      <EstimateSection />
    </>
  );
}
