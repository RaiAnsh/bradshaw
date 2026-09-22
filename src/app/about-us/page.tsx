import type { Metadata } from "next";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureRow } from "@/components/FeatureRow";
import { EstimateSection } from "@/components/EstimateSection";

import heroImage from "../../../public/images/about/parts-counter.webp";
import storefrontImage from "../../../public/images/storefront.webp";
import showroomImage from "../../../public/images/about/showroom.webp";
import counterImage from "../../../public/images/about/parts-counter.webp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family owned and operated since 1989 — learn about Bradshaw Plumbing Heating Renovations, Scarborough's trusted plumbing and renovation experts.",
};

export default function AboutUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Family Owned & Operated Since 1989"
        title="About Bradshaw Plumbing"
        subtitle="Built on integrity, professionalism, and high quality service — the same team has served Scarborough & the GTA for over 35 years."
        image={heroImage}
        imageAlt="Bradshaw Plumbing showroom and parts counter"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
          <FeatureRow
            title="We Built Our Business on the Principles of Integrity, Professionalism, and High Quality Service"
            body="Bradshaw Plumbing opened its doors for the first time in 1989 and has been a proudly owned and operated family business ever since. We have taken the concept of family and applied it to how we run our business. We pride ourselves on being able to ensure a high level of workmanship for every project. Our quality service starts the first time we come in contact with our customers. Everyone you encounter during your interactions with our company is an employee of Bradshaw Plumbing — we don't subcontract our work, so you can count on our staff and technicians to be experienced, trustworthy and reliable. We ensure our highly skilled staff have the necessary tools and parts for every project, allowing us to provide service in a timely and efficient manner."
            image={storefrontImage}
            imageAlt="Bradshaw Plumbing storefront and showroom exterior"
            imagePosition="left"
          />

          <FeatureRow
            title="Visit Our Showroom for All Your Bathroom Fixture & Renovation Needs"
            body="Bradshaw Plumbing welcomes each one of our customers to come and visit our showroom. Come in and see the latest in bathroom décor. Our knowledgeable staff will be there to help you with any questions you have. We believe in providing great service and educating our customers about best practices when it comes to bathroom renovations and plumbing related maintenance."
            image={showroomImage}
            imageAlt="Bradshaw Plumbing bathroom fixture showroom"
            imagePosition="right"
          />

          <FeatureRow
            title="24/7 Emergency Plumbing Service"
            body="Bradshaw Plumbing & Renovations can be counted on for all types of plumbing services. We have a team of licensed plumbers available around the clock for all types of residential and commercial plumbing jobs. Whether you need something done on an emergency basis, or you need something done within the week, our plumbers are always available."
            image={counterImage}
            imageAlt="Bradshaw Plumbing 24 hour emergency service counter"
            imagePosition="left"
          />

          <div className="rounded-2xl bg-amber-50 px-6 py-5 ring-1 ring-inset ring-amber-200">
            <p className="text-sm font-semibold text-amber-900">
              Please note: our parts counter is closed indefinitely.
            </p>
          </div>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
