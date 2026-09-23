import { Hero } from "@/components/Hero";
import { AboutIntroSection } from "@/components/AboutIntroSection";
import { RemodelBand } from "@/components/RemodelBand";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductCategoriesSection } from "@/components/ProductCategoriesSection";
import { GalleryTeaserSection } from "@/components/GalleryTeaserSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EstimateSection } from "@/components/EstimateSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntroSection />
      <ServicesSection />
      <RemodelBand />
      <OurWorkSection />
      <ProductCategoriesSection />
      <GalleryTeaserSection />
      <TestimonialsSection />
      <EstimateSection />
    </>
  );
}
