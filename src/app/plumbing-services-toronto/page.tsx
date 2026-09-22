import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { AboutServiceSection } from "@/components/AboutServiceSection";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { EstimateSection } from "@/components/EstimateSection";
import { ServicesListSection } from "@/components/ServicesListSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

import heroImage from "../../../public/images/stock/toilet-repair.webp";
import pipeRepairImage from "../../../public/images/plumbing/technician-pipe-repair.webp";
import toiletInstallImage from "../../../public/images/plumbing/technician-toilet-install.webp";
import integrityImage from "../../../public/images/plumbing/value-integrity.webp";
import professionalismImage from "../../../public/images/plumbing/value-professionalism.webp";
import qualityImage from "../../../public/images/plumbing/value-quality.webp";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Affordable, licensed plumbing services in Scarborough, Toronto & the GTA since 1989. 24/7 emergency service, free estimates.",
};

const servicesColumns = [
  [
    "Tap & Faucet Repair",
    "Bathtub Repair",
    "Water Softener Install",
    "Shower Doors Repair",
    "Shower Stall Repair",
    "Toilets Repair",
    "Grab Bar Installation",
    "Basins Repair",
    "Bar Sinks Repair",
    "Shut Off Valve Replacement",
  ],
  [
    "Kitchen Sink Repair",
    "Laundry Tub Repair",
    "Waste Disposal Unit Repair",
    "Dishwasher Hook Up",
    "Counter Top Replacement",
    "Vanity Replacement",
    "Water Pipe Replacement",
    "Lead Drain Replacement",
    "Backwater Valve Install",
    "Backwater Valve Service",
  ],
  [
    "Water Tank Servicing",
    "Frost Free Hose Bibs",
    "Re-Circulating Pumps",
    "Sewage Pump Servicing",
    "Sump Pump Servicing",
    "Complete Remodeling",
    "Water Pressure Solutions",
    "Washing Machine Hook Up",
    "Water Filters Replacement",
    "UV Lights",
  ],
];

const faqItems = [
  {
    question: "What Type of Plumbing Services Do You Offer?",
    answer:
      "Bradshaw Plumbing is a full service plumbing company. Our experienced team works on all types of plumbing projects. We offer services to home and business owners across the GTA. We can help you with everything from simple tap repair to full scale bathroom renovations and everything else in between. If it has to do with plumbing, we offer repair, installation, and maintenance services.",
  },
  {
    question: "How Much Are Plumbing Services?",
    answer:
      "The cost of plumbing services can vary greatly. It depends on the nature of the job — whether it's a quick repair, complex installation, or large scale project. The number of hours, parts, equipment used and many other considerations are factored into pricing. Since each project is unique, we offer a free estimate.",
  },
  {
    question: "Do You Offer Emergency Plumbing Services?",
    answer:
      "Absolutely! You can never be too sure when you may need a plumber. A plumbing issue can arise any time and our team is ready to help you. We are available 24 hours per day, 7 days per week to serve you best. If you have a plumbing issue, give us a call. We're ready to help!",
  },
  {
    question: "What Areas Do You Service In The GTA?",
    answer:
      "Bradshaw Plumbing is based in Scarborough, but we proudly service the Greater Toronto Area. Some of our main service areas include Toronto, Pickering, Markham, York and many other cities and neighborhoods. If you are unclear whether you are within our service area, please contact us — we'll happily let you know.",
  },
];

export default function PlumbingServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Affordable Plumbing Services in Toronto"
        subtitle="The preferred choice of complete plumbing services solutions in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Plumber installing a toilet in a bathroom"
      />

      <AboutServiceSection
        eyebrow="Emergency Plumbing Services"
        title="Emergency Plumbing Services in Scarborough"
        intro="At Bradshaw Plumbing, we have provided fast and courteous service for home and business since 1989. We have built our business based on our reputation for professional and high quality plumbing services in Scarborough, Toronto, Markham, Ajax, Pickering, Whitby & surrounding areas. We pride ourselves in having a staff of friendly and reliable technicians that provide a wide range of plumbing and maintenance services for your home or business."
        introImage={pipeRepairImage}
        introImageAlt="Bradshaw Plumbing technician repairing a pipe under a sink"
        secondaryImage={toiletInstallImage}
        secondaryImageAlt="Bradshaw Plumbing technician installing a toilet"
        qualityLead="Our technicians are fully qualified, insured and covered by WSIB for your protection."
        qualityBody={`We have built our business on quality workmanship and the ability to consistently provide plumbing services that exceed our customers' expectations. We stand by our motto of "same day service... better, cleaner, faster!"`}
        checklist={[
          "Fully licensed and certified plumbers",
          "We offer residential and commercial services",
          "100% customer satisfaction guaranteed",
          "24/7 emergency plumbing services",
          "Proudly serving the Greater Toronto Area",
        ]}
      />

      <ValuePropsSection
        title="Our Preferred Choice For Residential Plumbing Service Needs"
        items={[
          {
            title: "Integrity",
            description:
              "Expect nothing but upfront and honest plumbing services when you choose to do business with Bradshaw Plumbing. We value our residential and commercial customers and we take pride in building long lasting relationships with you. We always put your best interests first. The job is not complete until you are completely satisfied.",
            image: integrityImage,
          },
          {
            title: "Professionalism",
            description:
              "Our professional approach to doing business is one of the key factors that set us apart in the industry. We know you have certain expectations when you call us and our goal is to exceed them each and every time, no exceptions. Expect all of our team members to provide you with the professional service you expect and deserve.",
            image: professionalismImage,
          },
          {
            title: "High Quality Service",
            description:
              "Our business was built on high quality service. We treat each job as if we are doing work for family. We don't cut corners and only use the best plumbing solutions to get the job done right. We do all of our work in-house. We don't subcontract out work. This allows us to maintain a high level of service and workmanship at all times.",
            image: qualityImage,
          },
        ]}
      />

      <EstimateSection />

      <ServicesListSection title="The List of Services We Offer" columns={servicesColumns} />

      <FAQSection title="Frequently Asked Questions About Plumbing Services" items={faqItems} />

      <FinalCTASection
        eyebrow="Preferred Choice For Residential Plumbing"
        title="Call Us Now To Schedule An Appointment"
        description="Have a plumbing issue? Time to upgrade a faucet or toilet? Have an emergency issue? Planning a bathroom renovation? We can help with all of your plumbing service needs. To serve you efficiently, our service vehicles are radio dispatched and stocked with all of the necessary tools and parts to provide you with prompt, efficient service 24 hours a day, 7 days a week. Give us a call today to schedule an appointment and get a free estimate."
      />
    </>
  );
}
