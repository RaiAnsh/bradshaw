import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { FAQSection } from "@/components/FAQSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/about/parts-counter.webp";
import introImage from "../../../public/images/plumbing/value-integrity.webp";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/backflow-preventer-installation-toronto/");

const faqItems = [
  {
    question: "What Should I Look for When Selecting a Backflow Preventer Contractor?",
    answer:
      "It's important to hire a qualified backflow preventer contractor or plumber to ensure it is installed correctly and according to the building code in your city. When hiring a plumber it's important to ensure they have the proper certification to install a backflow preventer on your property. Another thing to look for is experience and reliability — look for a plumber that has a good reputation in the area, is known for providing top quality service, and does good work.",
  },
  {
    question: "Are Plumbers Required To Have Certification To Install A Backflow Preventer?",
    answer:
      "In Toronto, plumbers and technicians must possess an Ontario Water Works Association (OWWA) or equivalent certification as a Cross Connection Control/Backflow Prevention Specialist in addition to a master plumber or journeyman plumber with a contractor licence.",
  },
  {
    question: "What is a Backflow Preventer?",
    answer:
      "A backflow preventer is a device used to prevent potable water supplies and the unwanted reversal of water flow into your plumbing system. It ensures the drinking water in your home or business is protected from pollutants, contaminants, infectious agents and other substances from getting into your water supply.",
  },
  {
    question: "Where Are Backflow Preventers Installed?",
    answer:
      "Backflow preventers are commonly installed at the water connection from city lines to your property. They can also be installed at or near your water meter and other areas where a potable water system connects with a non-potable water system. Examples of these cross connections found in homes include washers, dishwashers and fire sprinkler systems.",
  },
];

export default function BackflowPreventerInstallationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Backflow Preventer Installation Service"
        subtitle="The preferred choice of complete backflow preventer installation services in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Bradshaw Plumbing parts and equipment counter"
      />

      <ServiceIntroSection
        title="Backflow Preventer Installation Needs"
        body={`Protecting your home or business from unwanted water is an increasing concern for Ontario residents. One way to protect your property is to install a backflow preventer.

There is a potential for backflow water to get into your home when there is a high demand on the water system, a water main bursts, or there is a reduction of pressure in the water lines. During these situations, contaminated water could enter your water system. At Bradshaw Plumbing, we can help you with all your backflow preventer installation needs.`}
        image={introImage}
        imageAlt="Bradshaw Plumbing technician"
        imagePosition="left"
        checklist={[
          "We're certified Cross Connection Control/Backflow Prevention Specialists",
          "We install according to all GTA building codes",
          "100% customer satisfaction guaranteed",
          "We service residential and commercial customers",
          "Proudly serving the Greater Toronto Area",
        ]}
      />

      <EstimateSection />

      <FAQSection title="Frequently Asked Questions About Backflow Preventer Installation" items={faqItems} />
    </>
  );
}
