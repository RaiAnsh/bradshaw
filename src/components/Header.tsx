"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { primaryNav, siteConfig } from "@/lib/site-config";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-brand-accent/40 bg-brand-navy-dark/95 backdrop-blur-md"
          : "border-brand-accent/40 bg-brand-navy-dark"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-6">
        <Logo showSubtitle={false} />

        <nav className="hidden items-center xl:flex">
          {primaryNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? "text-brand-accent bg-white/10"
                      : "text-white/90 hover:bg-white/10 hover:text-brand-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group/nav relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? "text-brand-accent bg-white/10"
                      : "text-white/90 hover:bg-white/10 hover:text-brand-accent"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="group-hover/nav:rotate-180" />
                </Link>

                <div className="invisible absolute left-0 top-full z-10 w-72 pt-2 opacity-0 transition-all duration-150 group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  <div className="overflow-hidden rounded-2xl bg-brand-navy py-2 shadow-xl ring-1 ring-brand-accent/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-brand-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={siteConfig.phone.href}
            className="hidden whitespace-nowrap text-sm font-bold text-white transition-colors hover:text-brand-accent 2xl:block"
          >
            {siteConfig.phone.display}
          </a>
          <Link
            href="/#estimate"
            className="whitespace-nowrap rounded-full bg-brand-accent px-5 py-2.5 text-sm font-bold text-brand-navy-dark shadow-sm shadow-brand-accent/30 transition-all hover:bg-brand-accent-dark hover:shadow-md"
          >
            Request Free Estimate
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white xl:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-brand-navy-dark transition-all duration-300 ease-in-out xl:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto border-t border-white/15 px-4 py-4">
            {primaryNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-semibold text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isSectionOpen = openMobileSection === item.href;

              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between rounded-lg pr-1 hover:bg-white/10">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-3 py-2.5 text-base font-semibold text-white/90"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isSectionOpen}
                      onClick={() =>
                        setOpenMobileSection(isSectionOpen ? null : item.href)
                      }
                      className="flex h-9 w-9 shrink-0 items-center justify-center text-white/60"
                    >
                      <ChevronDown className={isSectionOpen ? "rotate-180" : ""} />
                    </button>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                      isSectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-3 flex flex-col gap-0.5 border-l border-white/15 py-1 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-brand-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/15 pt-4">
              <a
                href={siteConfig.phone.href}
                className="rounded-lg px-3 py-2.5 text-center text-base font-bold text-white"
              >
                Call {siteConfig.phone.display}
              </a>
              <Link
                href="/#estimate"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-brand-accent px-5 py-3 text-center text-base font-bold text-brand-navy-dark"
              >
                Request Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
