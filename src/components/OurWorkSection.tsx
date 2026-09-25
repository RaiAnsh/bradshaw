import Link from "next/link";
import type { ReactNode } from "react";

const iconCls = "h-11 w-11 shrink-0 text-brand-accent";
const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, className: iconCls } as const;

const items: { title: string; text: string; href: string; icon: ReactNode }[] = [
  {
    title: "Sewer & Drain Service",
    text: "A small drain issue only gets worse the longer you wait. Our technicians diagnose and clear drains and sewer lines quickly, before a minor headache becomes a costly repair.",
    href: "/sewer-and-drain-service-toronto/",
    icon: (
      <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h8v6a3 3 0 0 0 3 3h5M12 4v0M4 20h16M9 13v3m6-3v3" /></svg>
    ),
  },
  {
    title: "Backwater Valve Installation",
    text: "Protect your basement from sewer backups and water damage with a professionally installed backwater valve, done right the first time.",
    href: "/backwater-valve-installation-toronto/",
    icon: (
      <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v6M7 21h10M9 3h6" /></svg>
    ),
  },
  {
    title: "Backflow Preventer Installation",
    text: "Keep your drinking water clean and meet code requirements with certified backflow preventer installation for homes and businesses.",
    href: "/backflow-preventer-installation-toronto/",
    icon: (
      <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5s6 6.2 6 10.5a6 6 0 0 1-12 0c0-4.3 6-10.5 6-10.5Z" /></svg>
    ),
  },
];

export function OurWorkSection() {
  return (
    <section className="bg-brand-navy py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-base font-semibold uppercase tracking-[0.2em] text-brand-accent">Our Work</span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
            Great Service, Great Value!
          </h2>
          <p className="mt-6 text-lg text-white/80">
            We can fix your problem and clean up your water damage.
          </p>
          <Link
            href="/plumbing-services-toronto/"
            className="mt-9 inline-flex rounded-xl bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy-dark transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark"
          >
            Learn More
          </Link>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl bg-brand-purple p-7 ring-1 ring-brand-accent/30 transition-colors hover:ring-brand-accent sm:p-8"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-white/75">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
