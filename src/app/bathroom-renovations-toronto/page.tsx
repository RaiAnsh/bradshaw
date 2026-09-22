import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { InlineCTABanner } from "@/components/InlineCTABanner";
import { ServicesListSection } from "@/components/ServicesListSection";
import { FeatureRow } from "@/components/FeatureRow";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/products/bathtub.jpg";
import trendsImage from "../../../public/images/products/shower.jpg";
import showroomImage from "../../../public/images/products/vanity.jpg";

export const metadata: Metadata = {
  title: "Bath Renovations",
  description:
    "Full bathroom renovations from design to installation, serving Scarborough, Toronto, Pickering & the GTA since 1989.",
};

const upgradeServices = [
  [
    "Complete bathroom renovations",
    "Heated floors and towel racks",
    "Disabled accessible bathrooms",
    "Small upgrade projects",
  ],
  [
    "Shower installation",
    "Tile",
    "Tub area replacement",
    "Exhaust fan installation",
  ],
  [
    "Vanity or countertop installation",
    "Disabled accessible (walk-in and roll-in) showers",
    "Bathroom renovations and alterations for residential and commercial",
  ],
];

export default function BathRenovationsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Bathroom Renovations"
        title="Bathroom Renovations Toronto, Scarborough, Pickering"
        subtitle="Let us help you turn your bathroom into your own personal retreat."
        image={heroImage}
        imageAlt="Freestanding bathtub in a renovated bathroom"
      />

      <ServiceIntroSection
        eyebrow="For All Your Bathroom Renovations Needs"
        title="Scarborough, Toronto & GTA Bathroom Renovation Experts"
        body="Bradshaw Plumbing is more than just professional plumbing services; we are also experts at bathroom upgrades and renovations. From simply changing your bathroom faucets to installing a new shower or complete bathroom, our bathroom design and renovation services are here for you."
        image={showroomImage}
        imageAlt="Modern double-sink bathroom vanity"
        imagePosition="right"
      />

      <InlineCTABanner text="Check out some of the latest in bathroom renovation design trends." />

      <ServicesListSection
        title="Upgrade Services We Offer"
        columns={upgradeServices}
      />

      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureRow
            title="The Latest in Bathroom Trends"
            body="We carry a large selection of products from the industry's leading manufacturers. Whatever your style, our experienced staff can help you incorporate the latest bathroom trends into your home and give you a fresh and vibrant new look."
            image={trendsImage}
            imageAlt="Glass-enclosed shower with modern tile"
            imagePosition="left"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Visit Our Showroom
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Visit our showroom and let our helpful staff guide you through the
            selection process. We specialize in creating bathroom designs to
            fit your life and add value to your home. From conception to
            completion, trust our renovation team to help you through the
            renovation process.
          </p>
        </div>
      </section>

      <EstimateSection description="Fill in the request form below with a few details about your bathroom project and we will contact you to set up a consultation appointment." />
    </>
  );
}
