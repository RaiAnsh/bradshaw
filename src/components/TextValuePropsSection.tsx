type TextValueProp = {
  title: string;
  description: string;
};

export function TextValuePropsSection({
  title,
  items,
}: {
  title: string;
  items: TextValueProp[];
}) {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          {title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-light font-heading text-lg font-bold text-brand-blue-dark">
                {i + 1}
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
