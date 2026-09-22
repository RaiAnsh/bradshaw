import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { FAQSection } from "@/components/FAQSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/stock/industrial-pipes.webp";
import introImage from "../../../public/images/plumbing/value-professionalism.webp";

export const metadata: Metadata = {
  title: "Backwater Valve Installation",
  description:
    "Backwater valve installation to protect your basement from flooding — serving Scarborough, Pickering, Toronto & the GTA since 1989.",
};

const faqItems = [
  {
    question: "What Is The Purpose Of A Backflow Valve?",
    answer:
      "The main role of a backwater valve is to help prevent basement flooding. The device is installed on your home's pipes to allow water to flow in one direction – out. If water starts to flow toward your home, within the pipes or sewer, the valve will close and prevent backflow and contaminated water from getting into your home's plumbing system.",
  },
  {
    question: "Do I Need A Backwater Valve?",
    answer:
      "Determining your need for a backwater valve is done on a case by case basis. There are some regions where flooding and sewer backups are a bigger threat. If you receive a lot of rain or you have a sump pump in your basement, it's a good sign you may need a backwater valve. Contact us to come and assess your need for a backwater valve.",
  },
  {
    question: "Where Does A Backwater Valve Get Installed?",
    answer:
      "Backwater valves are generally installed in your basement. They are placed in alignment with your plumbing pipes, a few feet below the ground level. Ideally, the valve is connected at the point where all water from the city lines connects into your home. If you have an existing home, this means breaking through the concrete in your basement floor to retrofit the valve.",
  },
  {
    question: "How Much Does A Backwater Valve Cost To Install?",
    answer:
      "The overall cost to install a backwater valve depends on many variables. It can be installed during home construction or as part of a renovation for a few hundred dollars. However, to retrofit a backwater valve it will cost significantly more — expect to pay $1,500 or more. No two situations are the same, but keep in mind the City of Toronto offers an 80% subsidy. Inquire to see if you qualify.",
  },
];

export default function BackwaterValveInstallationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Backwater Valve Installation Service in Toronto"
        subtitle="The preferred choice of complete backwater valve solutions in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Technician inspecting industrial pipes and valves"
      />

      <ServiceIntroSection
        title="Backwater Valve Installation Basement Plumbing"
        body={`Basement flooding is a common issue for many homeowners. Fortunately, backwater valves can be installed in your home to help protect you against drain backups, flooding and water damage. If you live in an area that is prone to flooding, a backwater valve can be the difference between a basement filled with water and a clean and dry basement.

A backwater valve is a simple device that can be installed as part of your basement plumbing to prevent water from backing up into your basement. Using an internal flap, the backwater valve allows water to flow out of your home. To prevent water from flowing into your home, the flap raises and blocks water flow from coming into your basement.

At Bradshaw Plumbing, we can help you assess your need for a backwater valve and install it professionally.`}
        image={introImage}
        imageAlt="Bradshaw Plumbing technician working under a sink"
        imagePosition="left"
        checklist={[
          "We install backwater valves and sump pumps",
          "Fully licensed and certified plumbers",
          "Flood recuperation and prevention services",
          "100% customer satisfaction guaranteed",
          "24/7 emergency plumbing services",
        ]}
      />

      <EstimateSection />

      <FAQSection title="Frequently Asked Questions About Backwater Valve" items={faqItems} />
    </>
  );
}
