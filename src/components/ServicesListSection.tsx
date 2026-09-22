function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function ServicesListSection({
  title,
  columns,
}: {
  title: string;
  columns: string[][];
}) {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          {title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, i) => (
            <ul key={i} className="space-y-4">
              {column.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-blue">
                    <CheckIcon />
                  </span>
                  <span className="font-semibold text-brand-navy">{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
