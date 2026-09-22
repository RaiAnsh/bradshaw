import type { Metadata } from "next";
import { EstimateSection } from "@/components/EstimateSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryPhotos } from "@/lib/gallery-photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside our Scarborough showroom — plumbing fixtures, tile, and bathroom design vignettes from Bradshaw Plumbing.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy-dark py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-navy to-brand-navy-dark" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-sky ring-1 ring-inset ring-white/20">
            Our Showroom
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            A look inside our Scarborough showroom &mdash; browse our
            plumbing fixture displays, tile selection, and bathroom design
            vignettes. Visit in person and our staff will help you bring the
            same look home.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid photos={galleryPhotos} />
        </div>
      </section>

      <EstimateSection description="Like what you see? Fill in the form below and we'll help you bring these ideas into your own home." />
    </>
  );
}
