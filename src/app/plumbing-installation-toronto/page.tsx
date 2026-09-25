import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { FAQSection } from "@/components/FAQSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/stock/pipe-in-wall.webp";
import introImage from "../../../public/images/plumbing/technician-toilet-install.webp";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/plumbing-installation-toronto/");

const faqItems = [
  {
    question: "Do You Offer Installation Services For Residential and Commercial Customers?",
    answer:
      "Yes. We do all types of plumbing installation projects for all types of customers. Whether you have a project at home or at your business, our team can get the job done.",
  },
  {
    question: "What Areas Do You Service For Plumbing Installations?",
    answer:
      "We provide plumbing installation services across Toronto. Our core service areas include Scarborough, Pickering, Markham, Toronto, and most of the GTA. Please give us a call to confirm you are within our service area.",
  },
  {
    question: "How Much Does Plumbing Installation Services Cost?",
    answer:
      "Plumbing installation services costs vary based on the type of installation service required. Other factors affecting price include labour, parts, and the number of hours required to complete the installation. Contact us for a free quote.",
  },
  {
    question: "What Type of Plumbing Installations Do You Specialize in?",
    answer:
      "We specialize in all types of plumbing installation projects. From kitchens to bathrooms, pipes, fixtures, taps, toilets, water backup systems, renovation projects, and more, we do it all.",
  },
];

export default function PlumbingInstallationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Plumbing Installation Services in Toronto"
        subtitle="The preferred choice of complete plumbing installation services in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Plumber installing pipe fittings under a sink"
      />

      <ServiceIntroSection
        title="Emergency Plumbing Service"
        body="All home and business owners need the right person for the job. Most plumbing installation projects require expert knowledge and skill. At Bradshaw Plumbing, we specialize in plumbing installation services for residential and commercial projects. Whether you are working on a renovation project or upgrading your pipes and fixtures, we have the skills to handle all your plumbing and fixture installation needs."
        image={introImage}
        imageAlt="Bradshaw Plumbing technician installing a fixture"
        imagePosition="left"
      />

      <EstimateSection />

      <FAQSection title="Frequently Asked Questions About Plumbing Installation" items={faqItems} />
    </>
  );
}
