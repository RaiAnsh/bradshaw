import type { StaticImageData } from "next/image";
import { FeatureRow } from "./FeatureRow";
import { CheckList } from "./CheckList";

type ServiceIntroSectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  checklist?: string[];
};

export function ServiceIntroSection({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imagePosition = "left",
  checklist,
}: ServiceIntroSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeatureRow
          eyebrow={eyebrow}
          title={title}
          body={body}
          image={image}
          imageAlt={imageAlt}
          imagePosition={imagePosition}
        />
        {checklist && checklist.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-8 lg:grid-cols-2">
            <div className={imagePosition === "left" ? "lg:col-start-2" : ""}>
              <CheckList items={checklist} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
