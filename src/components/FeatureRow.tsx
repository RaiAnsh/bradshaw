import Image, { type StaticImageData } from "next/image";

type FeatureRowProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export function FeatureRow({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imagePosition = "left",
}: FeatureRowProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-100 ${
          imagePosition === "right" ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div>
        {eyebrow && (
          <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-1.5 font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4">
          {body
            .split("\n\n")
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, i) => (
              <p key={i} className="text-base leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
