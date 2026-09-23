import Link from "next/link";

export function RemodelBand() {
  return (
    <section className="bg-brand-blue-dark py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
          Remodeling, Replacing Water &amp; Sewer Lines, Replacing Fixtures, Etc.
        </h2>
        <p className="mt-6 text-base text-white/90 sm:text-lg">
          Free estimates are provided for jobs that will be more complex than a service call.
        </p>
        <Link
          href="#estimate"
          className="mt-9 inline-flex rounded-xl bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy-dark transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark"
        >
          Request an Estimate
        </Link>
      </div>
    </section>
  );
}
