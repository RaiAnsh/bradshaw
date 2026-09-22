export const siteConfig = {
  name: "Bradshaw Plumbing Heating Renovations",
  shortName: "Bradshaw Plumbing",
  tagline: "From Tap Repair to Full Renovation",
  description:
    "Scarborough & GTA plumbing, bathroom, and kitchen renovation experts for over 25 years. Licensed, insured, and available 24/7.",
  url: "https://www.bradshawplumbing.com",
  phone: {
    display: "416-286-7511",
    href: "tel:+14162867511",
  },
  email: "sarthak@bradshawplumbing.com",
  address: {
    street: "12 Old Kingston Rd",
    city: "Scarborough",
    region: "ON",
    postalCode: "M1E 3J5",
    full: "12 Old Kingston Rd, Scarborough, ON M1E 3J5",
    mapsHref: "https://maps.google.com/?q=12+Old+Kingston+Rd,+Scarborough,+ON+M1E+3J5",
  },
  social: {
    google:
      "https://www.google.com/search?q=bradshaw+plumbing+scarborough+reviews#lrd=0x89d4da6228c0263b:0x3699b7d1eda7bc2b,1",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const plumbingServicesSubNav: NavItem[] = [
  { label: "Residential Plumbing Services", href: "/residential-plumbing-toronto/" },
  { label: "Plumbing Installation", href: "/plumbing-installation-toronto/" },
  { label: "Sewer & Drain Service", href: "/sewer-and-drain-service-toronto/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing-toronto/" },
  { label: "Backwater Valve Installation", href: "/backwater-valve-installation-toronto/" },
  { label: "Backflow Preventer Installation", href: "/backflow-preventer-installation-toronto/" },
];

export const productsSubNav: NavItem[] = [
  { label: "Toilets", href: "/product-category/toilets/" },
  { label: "Toto Toilets", href: "/product-category/toto/" },
  { label: "Seats & Washlets", href: "/product-category/toilet-seats/" },
  { label: "Bathroom Vanity", href: "/product-category/bathroom-vanities/" },
  { label: "Bathtub", href: "/product-category/bathtubs/" },
  { label: "Bathroom Shower", href: "/product-category/showers/" },
  { label: "Shower Faucets", href: "/product-category/shower-faucets/" },
  { label: "Bath & Kitchen Faucets", href: "/product-category/bath-and-kitchen-faucets/" },
  { label: "Bathroom Accessories", href: "/product-category/accessories/" },
];

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Plumbing Services", href: "/plumbing-services-toronto/", children: plumbingServicesSubNav },
  { label: "Our Products", href: "/bathroom-fixtures-store/", children: productsSubNav },
  { label: "Bath Renovations", href: "/bathroom-renovations-toronto/" },
  { label: "Kitchen Renovations", href: "/kitchen-renovations/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Plumbing Services", href: "/plumbing-services-toronto/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing-toronto/" },
  { label: "Sewer & Drain Service", href: "/sewer-and-drain-service-toronto/" },
  { label: "Backwater Valve Installation", href: "/backwater-valve-installation-toronto/" },
  { label: "Plumbing Installation", href: "/plumbing-installation-toronto/" },
  { label: "Backflow Preventer Installation", href: "/backflow-preventer-installation-toronto/" },
  { label: "Bath Renovations", href: "/bathroom-renovations-toronto/" },
  { label: "Kitchen Renovations", href: "/kitchen-renovations/" },
];

export const footerProductLinks: NavItem[] = productsSubNav;

export const serviceAreas: string[] = [
  "Toronto",
  "Scarborough",
  "North York",
  "Markham",
  "Richmond Hill",
  "Pickering",
  "Ajax",
  "Oshawa",
  "Whitby",
];
