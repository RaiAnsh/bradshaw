import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { FAQSection } from "@/components/FAQSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/storefront.webp";
import introImage from "../../../public/images/about/parts-counter.webp";

export const metadata: Metadata = {
  title: "Commercial Plumbing",
  description:
    "Commercial plumbing services for businesses across Scarborough, Toronto & the GTA — 24/7 emergency service since 1989.",
};

const faqItems = [
  {
    question: "What Types of Businesses Do You Service?",
    answer:
      "We offer commercial plumbing services to all types of businesses in the Greater Toronto Area. We work with small businesses, property managers, building managers, businesses in retail, food service, hospitality, corporate headquarters and more. If your business needs a commercial plumber, we're the company to call. We can help keep your plumbing working effectively, assist with upgrades, new builds, installations, renovations and more.",
  },
  {
    question: "How Much Does Commercial Plumbing Services Cost?",
    answer:
      "The cost for commercial plumbing services can vary greatly. No business and no two plumbing jobs are alike. We offer all our commercial customers a free estimate to assess the work required to provide you with a cost estimate. Estimates are based on the scope of the work to be completed, labour, parts, and materials. We offer affordable rates and take pride in building business to business partnerships with companies in the GTA.",
  },
  {
    question: "Do You Offer 24/7 Emergency Plumbing Services for Businesses?",
    answer:
      "Absolutely! We offer around the clock emergency plumbing services to all of our business customers in the GTA. We understand that your business cannot afford downtime when plumbing issues arise, no matter what time of day. If you experience a plumbing issue outside of business hours or on the weekend, take peace of mind in knowing that we are ready to help when you call.",
  },
  {
    question: "Do You Sell Commercial Plumbing Parts and Fixtures?",
    answer:
      "Our parts counter was previously fully stocked with a large selection of plumbing parts and fixtures, ensuring we could get you the parts you need, when you need them most — please note our parts counter is currently closed indefinitely. Our service trucks are still fully equipped with parts to ensure we can get the job done when we arrive onsite to help you with your plumbing issues.",
  },
];

export default function CommercialPlumbingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Commercial Plumbing Services in Toronto"
        subtitle="The preferred choice of complete commercial plumbing services in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Bradshaw Plumbing storefront"
      />

      <ServiceIntroSection
        title="Emergency Commercial Plumbing"
        body="Your business cannot afford downtime as a result of a leak or plumbing issue. It needs to be addressed immediately to minimize the impact on your business. At Bradshaw Plumbing, we specialize in commercial plumbing services. Our team has years of experience with all types of plumbing issues from all types of businesses in the GTA. Commercial plumbing and fixtures have higher use, generating more wear and tear on your plumbing system. To help keep your plumbing in order and working effectively, Bradshaw Plumbing offers a variety of plumbing services to keep your business problem free in Scarborough, Toronto & surrounding areas."
        image={introImage}
        imageAlt="Bradshaw Plumbing parts counter"
        imagePosition="left"
        checklist={[
          "Fully licensed and certified plumbers specializing in commercial plumbing",
          "We work with all types of businesses",
          "100% customer satisfaction guaranteed",
          "24/7 emergency plumbing services",
          "We'll ensure your business experiences minimal delay or downtime",
        ]}
      />

      <EstimateSection />

      <FAQSection title="Frequently Asked Questions About Commercial Plumbing" items={faqItems} />
    </>
  );
}
