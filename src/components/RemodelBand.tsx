import Link from "next/link";

export function RemodelBand() {
  return (
    <section className="bg-gold-band py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight text-black sm:text-5xl">
          Remodeling, Replacing Water &amp; Sewer Lines, Replacing Fixtures, Etc.
        </h2>
        <p className="mt-6 text-base font-medium text-black/80 sm:text-lg">
          Free estimates are provided for jobs that will be more complex than a service call.
        </p>
        <Link
          href="#estimate"
          className="mt-9 inline-flex rounded-md border border-brand-accent bg-neutral-900 px-8 py-4 font-heading text-xl font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
        >
          Request an Estimate
        </Link>
      </div>
    </section>
  );
}
