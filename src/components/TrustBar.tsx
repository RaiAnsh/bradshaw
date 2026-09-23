const stats = [
  { value: "35+", label: "Years in Business" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "WSIB", label: "Covered Technicians" },
];

export function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
