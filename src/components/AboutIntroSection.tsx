import Link from "next/link";
import Image from "next/image";
import pipeRepair from "../../public/images/plumbing/technician-pipe-repair.webp";
import faucet from "../../public/images/products/faucet.webp";
import { siteConfig } from "@/lib/site-config";

export function AboutIntroSection() {
  return (
    <section className="bg-brand-navy py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]">
          <div className="absolute left-0 top-0 h-[75%] w-[75%] overflow-hidden rounded-2xl">
            <Image src={pipeRepair} alt="Bradshaw technician repairing plumbing" fill sizes="420px" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[62%] w-[52%]">
            <div className="absolute -left-3 top-[-14px] h-full w-full rounded-2xl bg-gold-band" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image src={faucet} alt="Chrome faucet from our showroom" fill sizes="300px" className="object-cover" />
            </div>
          </div>
          <a
            href={siteConfig.phone.href}
            aria-label={`Call ${siteConfig.phone.display}`}
            className="absolute bottom-[8%] left-[28%] flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent text-brand-navy-dark ring-[6px] ring-brand-navy outline outline-2 outline-offset-[-1px] outline-brand-accent transition-transform hover:scale-105 sm:h-24 sm:w-24"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 sm:h-10 sm:w-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>
        </div>

        <div>
          <span className="text-base font-semibold uppercase tracking-[0.2em] text-brand-accent">About Us</span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
            We Respond To Your Call Quickly
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
            You can trust our technicians and the quality and professionalism of
            our work. Our technicians are fully qualified, insured, and covered by
            WSIB, and arrive in radio-dispatched service vehicles stocked with the
            tools and parts to tackle any plumbing problem &mdash; serving Scarborough
            and the GTA for over 35 years.
          </p>
          <Link
            href="/about-us/"
            className="mt-9 inline-flex rounded-xl bg-brand-accent px-8 py-4 text-base font-bold text-brand-navy-dark transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
