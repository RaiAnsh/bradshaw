import Link from "next/link";
import Image from "next/image";
import logoMark from "../../public/images/logo-mark.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoMark}
      alt="Bradshaw Plumbing Heating Renovations"
      className={className}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}

export function Logo({
  className = "",
  showSubtitle = true,
}: {
  className?: string;
  showSubtitle?: boolean;
}) {
  return (
    <Link href="/" className={`group flex shrink-0 items-center gap-2.5 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight whitespace-nowrap text-[var(--color-navy)] sm:text-xl">
          BRADSHAW
        </span>
        {showSubtitle && (
          <span className="mt-0.5 hidden whitespace-nowrap text-[9px] font-semibold tracking-[0.1em] text-slate-500 min-[420px]:block">
            PLUMBING &middot; HEATING &middot; RENOVATIONS
          </span>
        )}
      </span>
    </Link>
  );
}
