import Link from "next/link";
import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-7 w-7">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94L14.7 6.3Z"
      />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12V8a3 3 0 0 1 3-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5v1.25M8 19v2M16 19v2" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v4H4V4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v12M18 8v12M4 20h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h2M9 15h2" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-7 w-7">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.5 4.5 4h15L21 9.5M3 9.5a2.5 2.5 0 0 0 5 0M3 9.5V19a1 1 0 0 0 1 1h4v-6h8v6h4a1 1 0 0 0 1-1V9.5M8 9.5a2.5 2.5 0 0 0 5 0M13 9.5a2.5 2.5 0 0 0 5 0M18 9.5a2.5 2.5 0 0 0 3-2.5"
      />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Plumbing & Drain Service",
    description:
      "Fully qualified, certified, and insured technicians providing a wide range of plumbing and drain maintenance services, 24/7.",
    href: "/plumbing-services-toronto/",
    icon: <WrenchIcon />,
  },
  {
    title: "Bathroom Renovations",
    description:
      "Visit our showroom and let our team guide you through the selection process for full bathroom transformations.",
    href: "/bathroom-renovations-toronto/",
    icon: <BathIcon />,
  },
  {
    title: "Kitchen Renovations",
    description:
      "Every kitchen renovation is completed by trained plumbing experts, ensuring clean installations and reliable performance.",
    href: "/kitchen-renovations/",
    icon: <KitchenIcon />,
  },
  {
    title: "Our Products",
    description:
      "From small upgrades to full renovations, browse our showroom of toilets, vanities, faucets, and fixtures.",
    href: "/bathroom-fixtures-store/",
    icon: <StoreIcon />,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Scarborough &amp; GTA Plumbing, Bathroom &amp; Kitchen
            Renovation Experts for Over 25 Years
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our technicians are fully qualified, insured, and covered by WSIB
            for your protection &mdash; with radio-dispatched service vehicles
            stocked for prompt, efficient service.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue-dark transition-colors group-hover:bg-brand-blue group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                Learn More
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
