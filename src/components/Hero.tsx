import Link from "next/link";
import Image from "next/image";
import plumber from "../../public/images/plumber.png";
import pipeCabinet from "../../public/images/stock/pipe-in-cabinet.webp";
import waterHeater from "../../public/images/stock/water-heater.webp";
import kitchen from "../../public/images/stock/kitchen-bright.webp";
import tech from "../../public/images/plumbing/technician-pipe-repair.webp";
import toiletInstall from "../../public/images/plumbing/technician-toilet-install.webp";
import { siteConfig } from "@/lib/site-config";

const strip = [
  { src: pipeCabinet, alt: "Under-sink plumbing installation" },
  { src: toiletInstall, alt: "Technician installing a toilet" },
  { src: kitchen, alt: "Bright renovated kitchen" },
  { src: tech, alt: "Bradshaw technician at work" },
  { src: waterHeater, alt: "Tankless water heater installation" },
];

const pills = [
  { label: "Plumbing", href: "/plumbing-services-toronto/" },
  { label: "Bathrooms", href: "/bathroom-renovations-toronto/" },
  { label: "Kitchens", href: "/kitchen-renovations/" },
  { label: "Showroom", href: "/bathroom-fixtures-store/" },
];

const btnDark =
  "rounded-md border border-brand-accent bg-brand-purple px-8 py-3 text-center font-heading text-xl font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-navy-dark";

export function Hero() {
  return (
    <section className="overflow-hidden bg-brand-navy-dark">
      <div className="grid h-[180px] grid-cols-3 border-y border-brand-accent sm:h-[260px] lg:h-[300px] lg:grid-cols-5">
        {strip.map((item, i) => (
          <div
            key={item.alt}
            className={`relative overflow-hidden ${i > 2 ? "hidden lg:block" : ""}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i < 3}
              sizes="(min-width: 1024px) 20vw, 34vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="bg-gold-band">
        <div className="mx-auto flex max-w-3xl flex-col items-stretch justify-center gap-3 px-4 py-6 sm:flex-row sm:gap-4 sm:py-8">
          <Link href="#estimate" className={`${btnDark} flex-1`}>
            Request Free Estimate
          </Link>
          <a href={siteConfig.phone.href} className={`${btnDark} flex-1`}>
            {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true" className="block h-8 w-full sm:h-12" style={{ background: "#a9770a" }}>
        <path d="M0 0 C 240 48 480 48 720 24 C 960 0 1200 0 1440 40 L1440 48 L0 48 Z" fill="#060f2a" />
      </svg>

      <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-20">
        <div className="pb-4 text-center lg:pb-20 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Scarborough &amp; GTA &middot; 35+ Years Trusted
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] text-brand-accent sm:text-6xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 text-xl font-medium text-white">
            Excellent Service <span className="text-brand-accent">/</span> Always On-Time{" "}
            <span className="text-brand-accent">/</span> Easy Estimates
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80 lg:mx-0">
            Licensed, insured plumbing, heating, and renovation experts serving
            the GTA 24 hours a day, 7 days a week &mdash; from emergency repairs
            to complete bathroom and kitchen transformations.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pills.map((pill) => (
              <Link
                key={pill.href}
                href={pill.href}
                className="rounded-md border border-brand-accent/70 bg-brand-purple px-3 py-3 text-center font-heading text-lg font-medium uppercase tracking-wide text-white transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-brand-navy-dark"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[460px] sm:h-[500px] lg:h-[600px]">
          <div className="absolute bottom-[8%] left-1/2 aspect-square h-[78%] -translate-x-1/2 rounded-full bg-gold-band" />
          <div className="absolute right-[2%] top-[14%] aspect-square h-[22%] rounded-full border-[3px] border-brand-accent" />
          <div className="absolute bottom-[16%] left-0 aspect-square h-[12%] rounded-full border-[3px] border-brand-accent" />
          <Image
            src={plumber}
            alt="Bradshaw Plumbing technician reviewing a work order"
            priority
            sizes="(min-width: 1024px) 460px, 90vw"
            className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
