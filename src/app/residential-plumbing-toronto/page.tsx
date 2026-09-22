import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { TextValuePropsSection } from "@/components/TextValuePropsSection";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/stock/pipe-in-cabinet.webp";
import introImage from "../../../public/images/plumbing/technician-pipe-repair.webp";

export const metadata: Metadata = {
  title: "Residential Plumbing Services",
  description:
    "Reliable residential plumbing services in Scarborough, Pickering, Toronto & the GTA since 1989 — 24/7 emergency service, free estimates.",
};

const faqItems = [
  {
    question: "What Areas Do You Service?",
    answer:
      "We provide residential plumbing services across the GTA. We are based in Scarborough, home to our parts counter and showroom, but we also offer services in Toronto, Markham, Pickering, and many other areas in the Greater Toronto Area. If you are not sure if you are within our service area, please give us a call.",
  },
  {
    question: "How Much Does Residential Plumbing Services Cost?",
    answer:
      "Residential plumbing services costs vary by the type of work being completed, labour, parts, and many other factors. Services are usually quoted on a per hour basis. No two plumbing jobs are the same — getting a quote is the most effective and accurate way to get an estimate for residential plumbing service costs. Please call us or submit a service request on our website to get a rate estimate.",
  },
  {
    question: "Do You Offer 24/7 Emergency Plumbing Services?",
    answer:
      "Yes. Plumbing issues can happen any day and any time. Our team is ready to help you with all your plumbing service needs. Whether you have a flood, pipe burst, toilet overflow or experience any other type of plumbing emergency, when you call us, you can trust we'll help you out as quickly as possible.",
  },
  {
    question: "Do You Do Bathroom Renovations?",
    answer:
      "Yes. We offer a lot more than standard plumbing services — we also specialize in bathroom renovations. Whether you need to rough in a bathroom, build a new bathroom from scratch, upgrade a current bathroom, or replace your shower or vanity, our team can help you with every step of the process. Contact us today with your bathroom renovation project details to get a free estimate.",
  },
];

const reviews = [
  {
    quote:
      "Great place and very helpful. They were able to provide the right piece that I needed. And even gave me helpful tips to insure it didn't leak. I will come back here again.",
    name: "Ray A.",
    location: "From GTA",
  },
  {
    quote:
      "This is the first time I have dealt with this company and am totally pleased with the work performed. My taps had been leaking for a long time and were totally corroded. The plumber, Todd, arrived — he was courteous, efficient and got the job done with no mess left behind! I will definitely use this company again.",
    name: "Elsa",
    location: "From Toronto",
  },
  {
    quote:
      "I have never used their plumbing services but I have gone to their storefront on several occasions to get products and advice on do-it-myself repairs. The staff has always been really helpful and more than willing to give me some pointers. Thanks!",
    name: "Nick M.",
    location: "From GTA",
  },
];

export default function ResidentialPlumbingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scarborough & GTA · Since 1989"
        title="Residential Plumbing Services in Toronto"
        subtitle="The preferred choice of residential plumbing services in Scarborough, Pickering, Toronto, & GTA since 1989!"
        image={heroImage}
        imageAlt="Plumber repairing pipes under a bathroom sink"
      />

      <ServiceIntroSection
        title="Emergency Residential Plumbing Service"
        body={`All homeowners need a good and reliable plumber to call when things go wrong. You never know when your toilet could overflow, a pipe could burst, or when you need other plumbing services.

When it comes to home plumbing services, there is no company more reliable than Bradshaw Plumbing. Our extensive list of plumbing services makes us a one stop shop for all of your residential plumbing needs. From tap installations and toilet maintenance to complete remodelling projects, we have the experience and resources to get the job done right the first time.`}
        image={introImage}
        imageAlt="Bradshaw Plumbing technician repairing a pipe"
        imagePosition="left"
        checklist={[
          "Fully licensed and certified plumbers",
          "Installations, maintenance, renovations, repairs",
          "100% customer satisfaction guaranteed",
          "24/7 emergency plumbing services",
          "Proudly serving the Greater Toronto Area",
        ]}
      />

      <TextValuePropsSection
        title="Choose Bradshaw For Your Residential Plumbing Needs"
        items={[
          {
            title: "Integrity",
            description:
              "We take pride in a job well done. We hold our plumbers to a high standard. Expect nothing but upfront and honest advice, recommendations, and service. We know that plumbing can be confusing and tough to understand, which is why we take the time to help you understand what needs to be done.",
          },
          {
            title: "Professionalism",
            description:
              "When you call us, expect a professional team of plumbers to help you fix your plumbing issues. Our team will arrive on time, ready to work, and we will respect you and your property. We'll do our best to offer minimal disruption and leave your home the way we found it.",
          },
          {
            title: "High Quality Service",
            description:
              "Expect nothing but top quality workmanship using the best parts and materials. We take pride in staying on top of industry best practices and using innovative tools, resources and techniques to repair the plumbing issues in your home.",
          },
        ]}
      />

      <EstimateSection />

      <ReviewsGrid title="Preferred Choice For Residential Plumbing Since 1989" reviews={reviews} />

      <FAQSection title="Frequently Asked Questions About Residential Plumbing" items={faqItems} />

      <FinalCTASection
        title="Call Us Now To Schedule An Appointment"
        description="There is no job too big or too small for our plumbers. We take pride in helping residents across the Greater Toronto Area with all your residential plumbing needs — from quick fixes and emergency situations to bathroom renovations. Contact Bradshaw Plumbing today to schedule an appointment, get a quote, and learn more about the residential plumbing services we offer."
      />
    </>
  );
}
