import React from "react";
import Link from "next/link";
import { Service } from "@/data/services";
import {
  Globe,
  Layout,
  Briefcase,
  ShoppingCart,
  Palette,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  Briefcase,
  ShoppingCart,
  Palette,
  Figma: Palette,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  showDeliverables?: boolean;
}

export function ServiceCard({
  service,
  index = 0,
  showDeliverables = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Globe;
  const specCode = `0${index + 1}`;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:shadow-[0_16px_36px_-10px_rgba(17,17,17,0.24),0_0_24px_-8px_rgba(17,17,17,0.068)]">
      {/* Subtle top corner marker */}
      <div className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 transition-colors group-hover:text-accent">
        +
      </div>

      <div>
        {/* Card Header: Icon & Monospace Spec Code */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-surface-border bg-background/80 text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-surface-elevated group-hover:shadow-[0_0_16px_rgba(17,17,17,0.113)]">
            <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-mono text-xs font-bold tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
            SPEC [{specCode}]
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-display uppercase text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables Checklist (if enabled) */}
        {showDeliverables && service.deliverables && (
          <div className="mt-6 border-t border-surface-border/60 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block mb-3">
              Included Deliverables
            </span>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ideal For Badge (if available) */}
        {showDeliverables && service.idealFor && (
          <div className="mt-5 rounded-xl border border-surface-border/70 bg-background/60 p-3 text-[11px] text-muted-foreground">
            <span className="text-accent font-mono font-semibold block mb-1">Target Fit:</span>
            <span>{service.idealFor}</span>
          </div>
        )}
      </div>

      {/* Footer Link */}
      <div className="mt-8 pt-4 border-t border-surface-border/50 flex items-center justify-between">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="group/btn inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground transition-colors hover:text-accent"
        >
          <span>Enquire for {service.title}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-accent" />
        </Link>
        <span className="h-1.5 w-1.5 rounded-full bg-surface-border group-hover:bg-accent transition-colors" />
      </div>
    </div>
  );
}

export default ServiceCard;
