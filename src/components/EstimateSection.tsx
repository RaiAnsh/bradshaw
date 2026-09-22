import { EstimateForm } from "./EstimateForm";

export function EstimateSection({
  description = "For all your plumbing, bathroom fixture, and renovation needs!",
}: {
  description?: string;
}) {
  return (
    <section id="estimate" className="relative overflow-hidden bg-brand-purple py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-navy to-brand-navy-dark" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Request a Free Estimate
        </h2>
        <p className="mt-3 text-base text-slate-200">{description}</p>

        <div className="mt-10 text-left">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
