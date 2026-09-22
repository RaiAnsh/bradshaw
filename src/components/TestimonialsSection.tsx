"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { googleReviews } from "@/lib/google-reviews";

const GOOGLE_RATING = 4.4;
const INITIAL_COUNT = 6;

function PartialStars({ rating }: { rating: number }) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <div className="relative inline-flex gap-0.5 text-slate-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
      <div
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-amber-400"
        style={{ width: `${percent}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A10.99 10.99 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.09V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.85z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? googleReviews : googleReviews.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-brand-blue-light/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            Reviews
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Trusted by Homeowners Across the GTA
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <PartialStars rating={GOOGLE_RATING} />
            <span className="text-sm font-semibold text-slate-600">
              {GOOGLE_RATING} rating on Google
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm shadow-slate-900/5 ring-1 ring-slate-100"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple text-sm font-bold text-white">
                  {review.name.charAt(0)}
                </span>
                <GoogleGlyph />
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-slate-700">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold text-brand-navy">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {googleReviews.length > INITIAL_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="cursor-pointer rounded-full border-2 border-brand-navy px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              {showAll ? "Show Fewer Reviews" : "Show More Reviews"}
            </button>
          )}
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-dark hover:text-brand-blue"
          >
            Read more reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
