import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type ServiceHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
};

export function ServiceHero({ eyebrow, title, subtitle, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-navy-dark">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/75 to-brand-navy-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/85 via-brand-navy-dark/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-sky ring-1 ring-inset ring-white/20 backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy-dark shadow-lg shadow-brand-accent/30 transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark hover:shadow-xl"
            >
              Call Now
            </a>
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
