import Link from "next/link";
import Image from "next/image";
import plumber from "../../public/images/plumber.png";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "35+", label: "Years in Business" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-mist">
      <div className="mx-auto grid max-w-7xl items-end gap-4 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="pb-4 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
          <span className="text-sm font-semibold text-brand-blue">
            Scarborough &amp; GTA &middot; 35+ Years Trusted
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] text-brand-navy-dark sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Licensed, insured plumbing, heating, and renovation experts serving
            the GTA 24 hours a day, 7 days a week &mdash; from emergency repairs
            to complete bathroom and kitchen transformations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy-dark shadow-lg shadow-brand-accent/30 transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark"
            >
              Request Free Estimate
            </Link>
            <a
              href={siteConfig.phone.href}
              className="border-b-2 border-brand-navy-dark pb-0.5 text-base font-semibold text-brand-navy-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Call {siteConfig.phone.display}
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-slate-300">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i === 0 ? "pr-4 sm:pr-6" : "px-4 sm:px-6"}>
                <dt className="font-heading text-3xl font-medium text-brand-blue-dark sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-700">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[540px] lg:h-[640px]">
          <div className="absolute bottom-[10%] left-1/2 aspect-square h-[78%] -translate-x-1/2 rounded-full bg-brand-blue-dark" />
          <div className="absolute right-[2%] top-[14%] aspect-square h-[26%] rounded-full border-[3px] border-brand-accent" />
          <div className="absolute bottom-[18%] left-0 aspect-square h-[13%] rounded-full border-[3px] border-brand-accent" />
          <Image
            src={plumber}
            alt="Bradshaw Plumbing technician reviewing a work order"
            priority
            sizes="(min-width: 1024px) 500px, 90vw"
            className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
