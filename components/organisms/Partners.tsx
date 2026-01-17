"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/atoms";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Goldman Sachs", initials: "GS" },
  { name: "Morgan Stanley", initials: "MS" },
  { name: "JP Morgan", initials: "JPM" },
  { name: "BlackRock", initials: "BR" },
  { name: "Deloitte", initials: "D" },
  { name: "PwC", initials: "PwC" },
  { name: "KPMG", initials: "K" },
  { name: "Ernst & Young", initials: "EY" },
  { name: "McKinsey", initials: "McK" },
  { name: "Bain & Co", initials: "B" },
];

function PartnerLogo({ name, initials }: { name: string; initials: string }) {
  return (
    <div 
      className="group flex h-24 w-52 flex-col items-center justify-center rounded-xl bg-white/50 px-6 transition-all duration-300 hover:bg-white hover:shadow-lg"
      title={name}
    >
      <span className="text-3xl font-bold tracking-tighter text-primary-blue/30 transition-colors duration-300 group-hover:text-primary-blue/60">
        {initials}
      </span>
      <span className="mt-1 text-xs font-medium text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground">
        {name}
      </span>
    </div>
  );
}

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
      }).from(
        marqueeRef.current,
        {
          y: 40,
          opacity: 0,
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="socios"
      className="bg-muted py-20"
      aria-labelledby="partners-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="text-center">
          <h2
            id="partners-title"
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            Socios y Clientes
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-blue sm:text-4xl">
            Confianza de las Mejores Empresas
          </p>
        </div>

        <div ref={marqueeRef} className="relative mt-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-muted to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-muted to-transparent" />
          
          <Marquee pauseOnHover className="[--duration:35s]">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} name={partner.name} initials={partner.initials} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
