"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LightRays } from "@/components/ui/light-rays";
import { Highlighter } from "@/components/ui/highlighter";
import { Target, Eye, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar asesoría legal de excelencia con un enfoque personalizado, protegiendo los intereses de nuestros clientes con integridad y compromiso en cada caso.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser reconocidas como el referente en servicios legales internacionales, destacando por nuestra innovación, ética profesional y resultados excepcionales.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridad, excelencia, compromiso con el cliente, trabajo en equipo y responsabilidad social guían cada una de nuestras acciones profesionales.",
  },
];

export function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current,
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
      id="valores"
      className="relative overflow-hidden bg-primary-blue py-24"
      aria-labelledby="values-title"
    >
      <LightRays
        color="rgba(139, 38, 53, 0.3)"
        count={8}
        blur={40}
        speed={18}
        length="80vh"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="text-center">
          <h2
            id="values-title"
            className="text-sm font-semibold uppercase tracking-widest text-white"
          >
            Quiénes Somos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nuestra{" "}
            <Highlighter action="underline" color="#8B2635" strokeWidth={2} isView>
              Filosofía
            </Highlighter>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Guiadas por principios sólidos, construimos relaciones duraderas
            basadas en la confianza y los resultados.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary-red/30 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-red/20 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                <value.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {value.description}
              </p>

              <div className="absolute -right-2 -top-2 text-8xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
