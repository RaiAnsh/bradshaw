import Link from "next/link";

export function InlineCTABanner({ text, ctaLabel = "Request a Free Estimate" }: { text: string; ctaLabel?: string }) {
  return (
    <section className="bg-brand-blue-light/60 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-heading text-lg font-bold text-brand-navy">{text}</p>
        <Link
          href="#estimate"
          className="whitespace-nowrap rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-brand-navy-dark shadow-sm shadow-brand-accent/30 transition-all hover:bg-brand-accent-dark"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
