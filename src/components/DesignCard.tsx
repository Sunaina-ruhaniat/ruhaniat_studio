import Link from "next/link";
import { DesignVisual } from "./DesignVisual";
import { ConceptLabel, WhatsAppIcon } from "./ui";
import { categoryName } from "@/data/categories";
import type { Design } from "@/data/types";
import { designEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function DesignCard({ design, priority = false, index = 0 }: { design: Design; priority?: boolean; index?: number }) {
  const href = `/designs/${design.ref.toLowerCase()}`;
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 4) * 80}ms` } as React.CSSProperties}
      className="group flex flex-col"
    >
      <Link href={href} className="relative block aspect-[3/4] overflow-hidden bg-beige">
        <DesignVisual
          image={design.image}
          alt={`${design.name} — ${categoryName(design.category)} design ${design.ref}`}
          silhouette={design.silhouette}
          tone={design.tone}
          priority={priority}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-2 top-2 bg-ivory/90 px-2 py-0.5 text-[0.6rem] font-medium tracking-[0.16em] text-burgundy backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.18em]">
          {design.ref}
        </span>
        {!design.image && <ConceptLabel compact className="bottom-2 left-2 sm:bottom-3 sm:left-3" />}
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">{categoryName(design.category)}</p>
        <h3 className="mt-1.5 text-lg leading-tight text-burgundy-deep sm:text-2xl">
          <Link href={href} className="hover:text-burgundy">
            {design.name}
          </Link>
        </h3>
        <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-muted sm:block">{design.description}</p>
        <a
          href={whatsappLink(designEnquiryMessage(design))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxe mt-auto inline-flex items-center justify-center gap-2 border border-burgundy/30 px-2 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] sm:mt-4 sm:px-4 sm:py-3 sm:text-[0.68rem] sm:tracking-[0.18em] text-burgundy transition-colors hover:border-burgundy hover:bg-burgundy hover:text-ivory"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          <span className="sm:hidden">Enquire</span>
          <span className="hidden sm:inline">Enquire About This Design</span>
        </a>
      </div>
    </article>
  );
}
