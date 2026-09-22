import { siteConfig } from "@/lib/site-config";

export function FinalCTASection({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-navy to-brand-navy-dark" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-sky ring-1 ring-inset ring-white/20">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-200">{description}</p>
        <a
          href={siteConfig.phone.href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-navy-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Call {siteConfig.phone.display}
        </a>
      </div>
    </section>
  );
}
