import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-navy to-brand-navy-dark" />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#estimate"
            className="rounded-full bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-blue/30 transition-all hover:-translate-y-0.5 hover:bg-brand-blue-dark"
          >
            Request Free Estimate
          </Link>
          <a
            href={siteConfig.phone.href}
            className="rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
          >
            Call {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
