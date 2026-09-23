import Link from "next/link";
import { LogoMark } from "./Logo";
import {
  footerCompanyLinks,
  footerProductLinks,
  footerServiceLinks,
  serviceAreas,
  siteConfig,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10 shrink-0" />
              <span className="font-heading text-lg font-bold text-white">
                Bradshaw Plumbing
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.tagline}. Scarborough &amp; GTA plumbing, bathroom, and
              kitchen renovation experts for over 35 years.
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-4 block text-lg font-bold text-white hover:text-brand-sky"
            >
              {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.address.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-slate-400 transition-colors hover:text-white"
            >
              {siteConfig.address.full}
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Bathroom Catalog
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerProductLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Areas We Serve
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-slate-400">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Licensed &amp; insured &middot; Available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
