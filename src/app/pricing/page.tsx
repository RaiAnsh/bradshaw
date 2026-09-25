import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { EstimateSection } from "@/components/EstimateSection";
import { priceGroups } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Plumbing Service Prices | Bradshaw Plumbing",
  robots: { index: false, follow: false },
};

export default function PricingPage() {
  return (
    <>
      <PlaceholderPage
        title="Service Pricing"
        description="Clear starting prices for our most common plumbing services. Every job is different, so call or request a free estimate for an exact quote."
      />

      <section className="bg-brand-blue-light/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {priceGroups.map((group) => (
            <div key={group.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <h2 className="bg-brand-navy px-6 py-4 font-heading text-lg font-bold text-white">
                {group.title}
              </h2>
              <ul className="divide-y divide-slate-100">
                {group.rows.map((row) => (
                  <li key={row.service} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div>
                      <p className="font-semibold text-brand-navy">{row.service}</p>
                      {row.note && <p className="text-sm text-slate-500">{row.note}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="font-heading text-lg font-bold text-brand-blue-dark">{row.price}</span>
                      <Link
                        href="/#estimate"
                        className="hidden rounded-full bg-brand-accent px-4 py-2 text-xs font-bold text-brand-navy-dark transition-colors hover:bg-brand-accent-dark sm:inline-block"
                      >
                        Get Estimate
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-center text-sm text-slate-500">
            Prices are starting rates and may vary by job scope, materials, and after-hours service.
            Call <a href={siteConfig.phone.href} className="font-semibold text-brand-blue-dark">{siteConfig.phone.display}</a> for an exact quote.
          </p>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
