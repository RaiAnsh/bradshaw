import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceIntroSection } from "@/components/ServiceIntroSection";
import { InlineCTABanner } from "@/components/InlineCTABanner";
import { ServicesListSection } from "@/components/ServicesListSection";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/stock/kitchen-bright.webp";
import materialsImage from "../../../public/images/stock/kitchen-modern.webp";

export const metadata: Metadata = {
  title: "Kitchen Renovations",
  description:
    "Full kitchen renovations and remodeling in Scarborough, Toronto, Pickering & the GTA — from plumbing upgrades to complete remodels.",
};

const upgradeServices = [
  [
    "Complete kitchen renovations & remodeling",
    "Modular and custom kitchen installations",
    "Kitchen sink and faucet installation",
    "Plumbing upgrades for kitchen renovations",
  ],
  [
    "Countertop installation (quartz, marble, stone)",
    "Cabinet installation",
    "Kitchen island and peninsula plumbing",
    "Backsplash and tile installation",
  ],
  [
    "Dishwasher, fridge & appliance water line installation",
    "Small kitchen upgrades and partial renovations",
    "Kitchen renovations for residential and light commercial properties",
  ],
];

export default function KitchenRenovationsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Kitchen Renovations"
        title="Kitchen Renovations Toronto, Scarborough, Pickering"
        subtitle="Let us help you turn your kitchen into a beautiful, functional space designed for everyday living and lasting value."
        image={heroImage}
        imageAlt="Bright modern kitchen with large island"
      />

      <ServiceIntroSection
        eyebrow="Kitchen Remodeling Experts"
        title="Trusted Kitchen Renovation Experts Across the GTA"
        body="Bradshaw Plumbing is more than just trusted plumbing experts — we are also experienced professionals in kitchen renovations and upgrades across Toronto, Scarborough, and the Greater Toronto Area. From replacing a kitchen faucet or sink to completing a full kitchen remodel, our team delivers high-quality craftsmanship with attention to detail at every stage.

Whether you're planning a modern kitchen renovation, a transitional kitchen upgrade, or a practical redesign for a growing family, we're here to help bring your vision to life."
        image={materialsImage}
        imageAlt="Modern kitchen with matte black cabinetry"
        imagePosition="right"
      />

      <InlineCTABanner text="Ready to start planning your kitchen renovation?" />

      <ServicesListSection
        title="Upgrade Services We Offer"
        columns={upgradeServices}
      />

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Quality Materials, Expert Guidance
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            We work with a wide selection of high-quality materials and
            products from leading manufacturers, ensuring your kitchen
            renovation is both stylish and durable. Whether you&rsquo;re
            looking for a luxury kitchen renovation in Toronto, a
            family-friendly kitchen remodel, or a budget-conscious kitchen
            upgrade, our experienced team will help you select the right
            fixtures, finishes, and layouts to suit your lifestyle.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Visit Our Showroom
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Visit our showroom and let our knowledgeable staff guide you
            through the kitchen renovation process. We specialize in creating
            functional, modern kitchens that enhance daily living and
            increase the value of your home. From concept and design to
            plumbing installation and final completion, trust Bradshaw
            Plumbing to manage your kitchen renovation in Toronto and the GTA
            with professionalism, transparency, and care.
          </p>
        </div>
      </section>

      <EstimateSection description="Fill in the request form below with a few details about your kitchen project and we will contact you to set up a consultation appointment." />
    </>
  );
}
