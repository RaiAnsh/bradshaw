import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { EstimateSection } from "@/components/EstimateSection";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact-us/");

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-6 w-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-6 w-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-6 w-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v10.5a1.75 1.75 0 0 1-1.75 1.75H4a1.75 1.75 0 0 1-1.75-1.75V6.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <>
      <PlaceholderPage
        title="Contact Us"
        description={`Call us at ${siteConfig.phone.display}, visit our Scarborough showroom, or send a request below and we'll get back to you shortly.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <a
            href={siteConfig.phone.href}
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 p-8 text-center transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue-dark">
              <PhoneIcon />
            </span>
            <p className="font-heading text-lg font-bold text-brand-navy">Call Us</p>
            <p className="text-sm text-slate-600">{siteConfig.phone.display}</p>
          </a>

          <a
            href={siteConfig.address.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 p-8 text-center transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue-dark">
              <MapPinIcon />
            </span>
            <p className="font-heading text-lg font-bold text-brand-navy">Visit Our Showroom</p>
            <p className="text-sm text-slate-600">{siteConfig.address.full}</p>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 p-8 text-center transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue-dark">
              <MailIcon />
            </span>
            <p className="font-heading text-lg font-bold text-brand-navy">Email Us</p>
            <p className="text-sm text-slate-600">{siteConfig.email}</p>
          </a>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
