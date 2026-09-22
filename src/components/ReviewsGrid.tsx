type Review = {
  quote: string;
  name: string;
  location: string;
};

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsGrid({ title, reviews }: { title: string; reviews: Review[] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          {title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100"
            >
              <Stars />
              <blockquote className="mt-4 text-sm leading-6 text-slate-700">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold text-brand-navy">
                {review.name}
                <span className="block text-xs font-medium text-slate-500">
                  {review.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
