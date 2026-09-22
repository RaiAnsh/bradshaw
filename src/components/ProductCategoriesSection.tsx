import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

import toiletImg from "../../public/images/products/toilet.webp";
import bathtubImg from "../../public/images/products/bathtub.jpg";
import vanityImg from "../../public/images/products/vanity.jpg";
import faucetsImg from "../../public/images/gallery/thumbs/showroom-25.webp";
import seatsImg from "../../public/images/products/seats.webp";
import faucetImg from "../../public/images/products/faucet.webp";
import showerImg from "../../public/images/products/shower.jpg";

type Category = {
  name: string;
  href: string;
  image: StaticImageData;
};

function AccessoriesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
      <rect x="4" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const categories: Category[] = [
  { name: "Toilets", href: "/product-category/toilets/", image: toiletImg },
  { name: "Bathtubs", href: "/product-category/bathtubs/", image: bathtubImg },
  { name: "Bathroom Vanities", href: "/product-category/bathroom-vanities/", image: vanityImg },
  { name: "Bath & Kitchen Faucets", href: "/product-category/bath-and-kitchen-faucets/", image: faucetsImg },
  { name: "Seats & Washlets", href: "/product-category/toilet-seats/", image: seatsImg },
  { name: "Shower Faucets", href: "/product-category/shower-faucets/", image: faucetImg },
  { name: "Bathroom Showers", href: "/product-category/showers/", image: showerImg },
];

export function ProductCategoriesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
              Bathroom Showroom
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Toilets, vanities, faucets, and more &mdash; supplied and
              professionally installed by our team.
            </p>
          </div>
          <Link
            href="/bathroom-fixtures-store/"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-brand-navy px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            View All Products
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </div>
              <div className="p-3.5">
                <span className="text-sm font-semibold text-brand-navy">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}

          <Link
            href="/product-category/accessories/"
            className="group flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-slate-300 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue-dark transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <AccessoriesIcon />
            </span>
            <span className="text-sm font-semibold text-brand-navy">
              Bathroom Accessories
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
