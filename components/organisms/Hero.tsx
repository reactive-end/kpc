"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DottedMap } from "@/components/atoms";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const mapDots = [
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 19.4326, lng: -99.1332 } },
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: -34.6037, lng: -58.3816 } },
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 48.8566, lng: 2.3522 } },
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 35.6762, lng: 139.6503 } },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      gsap.to(mapRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 150,
        scale: 1.1,
        opacity: 0.3,
      });

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        opacity: 0,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-accent-white"
      aria-labelledby="hero-title"
    >
      <div ref={mapRef} className="absolute inset-0 z-0">
        <DottedMap
          dots={mapDots}
          lineColor="#8B2635"
          className="relative h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/60 to-white/90" />

      <div ref={contentRef} className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        <h1
          ref={titleRef}
          id="hero-title"
          className="text-4xl font-bold tracking-tight text-primary-blue sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Experiencia Legal
          <br />
          <span className="text-primary-red">Sin Fronteras</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Tres abogadas especializadas con alcance global. Protegemos sus
          intereses comerciales con excelencia, integridad y resultados
          comprobados.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-red px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-red-dark hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Agendar Consulta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#nosotras"
            className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white px-8 py-4 text-base font-semibold text-primary-blue transition-all duration-300 hover:border-primary-blue/40 hover:shadow-md hover:scale-105 active:scale-95"
          >
            Conoce al Equipo
          </Link>
        </div>
      </div>

    </section>
  );
}
