import Image, { type StaticImageData } from "next/image";
import { CheckList } from "./CheckList";

type AboutServiceSectionProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  introImage: StaticImageData;
  introImageAlt: string;
  secondaryImage: StaticImageData;
  secondaryImageAlt: string;
  qualityLead: string;
  qualityBody: string;
  checklist: string[];
};

export function AboutServiceSection({
  eyebrow,
  title,
  intro,
  introImage,
  introImageAlt,
  secondaryImage,
  secondaryImageAlt,
  qualityLead,
  qualityBody,
  checklist,
}: AboutServiceSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            {eyebrow && (
              <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{intro}</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-100">
            <Image
              src={introImage}
              alt={introImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-100 lg:order-1">
            <Image
              src={secondaryImage}
              alt={secondaryImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="font-heading text-xl font-bold text-brand-navy">
              {qualityLead}
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {qualityBody}
            </p>
            <CheckList items={checklist} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
