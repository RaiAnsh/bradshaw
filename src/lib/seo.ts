import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type SeoEntry = { title: string; description: string };

// Titles and descriptions copied from the live WordPress site so search rankings carry over.
export const seoByPath: Record<string, SeoEntry> = {
  "/": {
    title: "Plumbing Contractor Scarborough | Plumber Scarborough | Plumbing Supplies",
    description:
      "Your trusted plumber in Scarborough. We're your go-to plumbing contractor for top-quality services and plumbing supplies in the area.",
  },
  "/about-us/": {
    title: "Know More About Bradshaw Plumbing",
    description:
      "Learn about Bradshaw Plumbing - Your Scarborough plumbing experts. Discover our commitment to quality service and our passion for plumbing solutions.",
  },
  "/plumbing-services-toronto/": {
    title: "Plumbing Services Toronto, Scarborough, Ajax | Affordable Plumbing Services",
    description:
      "Looking plumbing services in Toronto, Scarborough, Ajax, Pickering. Contact Bradshaw our affordable plumbing and bathroom renovation services.",
  },
  "/residential-plumbing-toronto/": {
    title: "Residential Plumber Contractor Ajax, Whitby, Oshawa | Bradshaw Plumbing",
    description:
      "Looking local residential plumber in Ajax, Whitby, Oshawa city contact Bradshaw plumbing contractors we provide emergency plumbing renovation service",
  },
  "/plumbing-installation-toronto/": {
    title: "Plumbing Installation Contractor North York, Pickering | Plumbing",
    description:
      "Looking plumbing installation contractor in North York, Pickering contact us our experienced plumber can provide emergency plumbing service.",
  },
  "/sewer-and-drain-service-toronto/": {
    title: "Sewer & Drain Service Toronto, Richmond Hill | Bradshaw Plumbing",
    description:
      "Looking sewer & drain service in Toronto, Richmond Hill contact Bradshaw Plumbing company we provide best plumbing service in Toronto.",
  },
  "/commercial-plumbing-toronto/": {
    title: "Commercial Plumbing Markham, Richmond Hill, | Emergency Plumber",
    description:
      "Looking commercial plumbing contractor in Markham, Richmond Hill, Toronto contact Bradshaw Plumbing for emergency commercial plumbing service.",
  },
  "/backwater-valve-installation-toronto/": {
    title: "Backwater Valve Installation Toronto, Scarborough, Markham | Bradshaw Plumbing",
    description:
      "Looking Backwater Valve Installation Toronto, Scarborough, Markham contact Bradshaw Plumbing for emergency commercial plumbing service.",
  },
  "/backflow-preventer-installation-toronto/": {
    title: "Backflow Preventer Toronto, Scarborough, Pickering, Markham",
    description:
      "Install a backflow preventer also looking plumber contractor in Toronto, Scarborough, Markham contact Bradshaw Plumbing for emergency commercial plumbing service.",
  },
  "/bathroom-renovations-toronto/": {
    title:
      "Bathroom Renovations Toronto, Scarborough, Pickering, Markham, GTA | Bradshaw Plumbing & Renovations",
    description:
      "Bradshaw is your one stop shop for all your bathroom renovation needs. Visit our bathroom renovation showroom and build the bathroom of your dreams. We can help you with your next DIY or professional install project. Call us at 416-286-7511 today!",
  },
  "/kitchen-renovations/": {
    title:
      "Kitchen Renovations Toronto, Scarborough, Pickering, Markham, GTA | Bradshaw Plumbing & Renovations",
    description:
      "Bradshaw is your one-stop shop for all your kitchen renovation needs. Visit our kitchen renovation showroom and build the kitchen of your dreams. We can help you with your next DIY or professional install project. Call us at 416-286-7511 today!",
  },
  "/gallery/": {
    title: "Bathroom Renovation Project Gallery | Bradshaw Plumbing & Renovations",
    description:
      "Get inspired! Explore Bradshaw Plumbing's gallery showcasing stunning bathroom renovations and designs. Find inspiration for your next project.",
  },
  "/contact-us/": {
    title: "Contact Us for Expert Plumbing Services and Consultations",
    description:
      "Reach out to Bradshaw Plumbing for top-notch plumbing services. Contact us for expert consultations, installations, repairs, and more.",
  },
  "/bathroom-fixtures-store/": {
    title: "Bathroom Fixture Store Toronto | Bradshaw Plumbing & Renovations",
    description:
      "Bradshaw Plumbing & Renovations carries a wide selection of brand name bathroom fixtures at great prices. Shop online or visit us in-store at 12 Old Kingston Road Scarborough, Ontario.",
  },
  "/product-category/toilets/": {
    title: "Toilet Retailer Toronto, Richmond Hill, Scarborough | Bradshaw Plumbing",
    description:
      "For both residential and commercial premises, Bradshaw Plumbing & Renovations is fully stocked with all varieties of toilets. Customers can purchase our toilets in-store,",
  },
  "/product-category/toto/": {
    title:
      "Bradshaw Plumbing - Toto Toilets, Toto Toilet Parts, Lids, Seats Scarborough, Toronto, Markham, Pickering & Whitby",
    description:
      "Bradshaw Plumbing & Renovations is a top retailer for Toto Toilets in the GTA. Call or visit us in-store for a quote on a wide selection of toto toilet fixtures, replacement parts, and accessories. Call Us for Pricing – 416-286-7511 Click Here To View – Toto Toilets",
  },
  "/product-category/toilet-seats/": {
    title: "Toilet Seats & Washlets Scarborough, Toronto | Bradshaw Plumbing",
    description:
      "There is a large assortment of motorized and manual washlets and toilet seats at Bradshaw Plumbing & Renovations. Visit our Scarborough showroom today or browse online!",
  },
  "/product-category/bathroom-vanities/": {
    title: "Custom Bathroom Vanities Toronto, Scarborough | Bradshaw Plumbing",
    description:
      "Bathroom vanities are available in a lovely variety of stock and custom options from Bradshaw Plumbing & Renovations. Visit our Scarborough showroom today or browse online!",
  },
  "/product-category/bathtubs/": {
    title: "Bathtub Fixtures & Install Toronto, Richmond Hill | Bradshaw Plumbing",
    description:
      "Install a New quality Bathtub. Bradshaw Plumbing & Renovations supplies and installs bathtubs across Toronto, Scarborough and the GTA.",
  },
  "/product-category/showers/": {
    title: "Shower Fixtures & Parts Toronto, Scarborough, North | Bradshaw Plumbing",
    description:
      "We provide a large assortment of pre-built and bespoke showers. For design inspiration and a free consultation, stop by our bathroom showroom. Our showroom is almost 3,000 square feet.",
  },
  "/product-category/shower-faucets/": {
    title: "Shower Faucets & Fixtures Toronto, Scarborough | Bradshaw Plumbing",
    description:
      "Invest in a high-end shower head to start your day off right. You can start your day feeling better than ever with the correct shower head and accessories.",
  },
  "/product-category/bath-and-kitchen-faucets/": {
    title: "Bathroom & Kitchen Faucets Toronto, Richmond Hill | Bradshaw Plumbing",
    description:
      "We offer a huge selection of kitchen and bathroom faucets from the leading manufacturers in the sector. Hundreds of faucets are on display in our showroom and can be bought right away.",
  },
  "/product-category/accessories/": {
    title: "Bathroom Accessories Toronto, Scarborough| Bradshaw Plumbing",
    description:
      "Do you need bathroom accessories? To make your bathrooms appear amazing, Bradshaw Plumbing and Renovations supplies a variety of bathroom accessories. Call us now.",
  },
};

export const sitemapPaths = Object.keys(seoByPath);

export function pageMetadata(path: string): Metadata {
  const entry = seoByPath[path];
  if (!entry) throw new Error(`No SEO entry for ${path}`);
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: path },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
      images: ["/images/storefront.webp"],
    },
  };
}
