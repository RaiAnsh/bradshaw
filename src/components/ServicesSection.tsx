import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import drain from "../../public/images/stock/toilet-repair.webp";
import bath from "../../public/images/products/shower.jpg";
import kitchen from "../../public/images/stock/kitchen-modern.webp";
import showroom from "../../public/images/about/showroom.webp";

type Service = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

const services: Service[] = [
  {
    eyebrow: "Repair & Maintenance",
    title: "Plumbing & Drain Service",
    description:
      "Fully qualified, certified, and insured technicians providing a wide range of plumbing and drain maintenance services, 24/7.",
    href: "/plumbing-services-toronto/",
    image: drain,
  },
  {
    eyebrow: "Renovation",
    title: "Bathroom Renovations",
    description:
      "Visit our showroom and let our team guide you through the selection process for full bathroom transformations.",
    href: "/bathroom-renovations-toronto/",
    image: bath,
  },
  {
    eyebrow: "Renovation",
    title: "Kitchen Renovations",
    description:
      "Every kitchen renovation is completed by trained plumbing experts, ensuring clean installations and reliable performance.",
    href: "/kitchen-renovations/",
    image: kitchen,
  },
  {
    eyebrow: "Showroom",
    title: "Our Products",
    description:
      "From small upgrades to full renovations, browse our showroom of toilets, vanities, faucets, and fixtures.",
    href: "/bathroom-fixtures-store/",
    image: showroom,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-semibold uppercase tracking-[0.2em] text-brand-accent">Our Services</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-5xl">
            What Can We Help You With?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Scarborough &amp; GTA plumbing, bathroom, and kitchen renovation
            experts for over 35 years.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group block">
              <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative -mt-16 ml-6 mr-6 rounded-2xl border border-brand-accent/40 bg-neutral-900 p-7 shadow-sm sm:ml-10 sm:mr-10">
                <span className="text-sm font-medium text-brand-accent">{service.eyebrow}</span>
                <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{service.description}</p>
                <span className="mt-4 inline-block border-b-2 border-brand-accent pb-0.5 text-sm font-semibold text-brand-accent">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
