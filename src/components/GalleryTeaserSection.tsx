import Link from "next/link";
import Image from "next/image";
import { recentProjectPhotos } from "@/lib/recent-projects";

const featuredSlugs = [
  "project-15",
  "project-07",
  "project-05",
  "project-09",
  "project-04",
  "project-10",
];
const featuredPhotos = featuredSlugs
  .map((slug) => recentProjectPhotos.find((photo) => photo.slug === slug))
  .filter((photo): photo is (typeof recentProjectPhotos)[number] => Boolean(photo));

export function GalleryTeaserSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark py-20 sm:py-28">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-sky ring-1 ring-inset ring-white/20">
            Our Work
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Some of Our Recent Projects
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Browse a few completed bathroom renovations and installations to spark
            ideas for your own renovation.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-3 sm:gap-4">
          {featuredPhotos.map((photo, i) => (
            <Link
              key={photo.slug}
              href="/gallery/"
              className={`group relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]" : ""
              }`}
            >
              <Image
                src={photo.thumb}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 33vw"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-navy-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Our Gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
