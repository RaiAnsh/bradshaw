import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { FAQSection } from "@/components/FAQSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/stock/water-heater.webp";
import introImage from "../../../public/images/plumbing/technician-pipe-repair.webp";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/sewer-and-drain-service-toronto/");

const faqItems = [
  {
    question: "How Can I Prevent Drain Backups Into My Basement?",
    answer:
      "Install a backwater valve on your main drain to prevent sewer backups during heavy rainfall. The City of Toronto provides Flood Prevention Rebates for customers to help offset costs of installing devices. Some insurers may also offer rebates to install plumbing backup systems.",
  },
  {
    question: "What Type Of Sewer and Drain Services Do You Offer?",
    answer:
      "If you have a backup issue, we can fix it. Some of the sewer and drain services we offer our customers include drain locating, video inspection, replacement, installing valves, and clearing showers, toilets, sinks, and much more.",
  },
  {
    question: "How Much Does It Cost To Clear A Drain?",
    answer:
      "All drains are unique. No two clogs are the same. Costs are based on our team's initial assessment of the drain issue, parts, labour, and other factors. Get a free estimate today!",
  },
  {
    question: "What Causes Drains And Sewer Backups?",
    answer:
      "Clogs can develop in any pipe in your home. Perhaps the most common cause of clogs is too much stuff being put in the toilet or down sink drains. Tree roots and collapsed sewer lines are also common causes. Get your sewer lines diagnosed to identify the location and cause of your clog.",
  },
];

export default function SewerAndDrainServicePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Sewer & Drain Services in Toronto"
        subtitle="The preferred choice of complete sewer & drain services in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Plumber servicing pipes under a sink"
      />

      <ServiceIntroSection
        title="Residential & Commercial Sewer and Drain Service"
        body="Clogs and drain issues are common. We deal with them every day. If you have a drain issue, you are best to leave it to the pros. Our team of experienced and highly qualified technicians can take on any drain issue. We offer a wide variety of drain services and technology to effectively identify the problems and provide efficient solutions to solve even the most difficult home or commercial drain issues."
        image={introImage}
        imageAlt="Bradshaw Plumbing technician repairing a pipe"
        imagePosition="left"
      />

      <EstimateSection />

      <FAQSection title="Frequently Asked Questions About Sewer and Drain Service" items={faqItems} />
    </>
  );
}
