"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

const attorneys = [
  {
    name: "Kelly Aular",
    role: "Socia Fundadora",
    specialty: "Experta en Tecnología y Finanzas",
    image: "/attorneys/attorney-1.jpg",
    bio: "lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit",
    linkedin: "#",
    email: "maria@kpclegal.com",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "Carolina Vásquez",
    role: "Socia",
    specialty: "Litigación Comercial",
    image: "/attorneys/attorney-2.jpg",
    bio: "Especialista en resolución de disputas comerciales complejas. Ex fiscal federal con amplia experiencia en tribunales.",
    linkedin: "#",
    email: "carolina@kpclegal.com",
    phone: "+1 (555) 234-5678",
  },
  {
    name: "Patricia Chen",
    role: "Socia",
    specialty: "Propiedad Intelectual",
    image: "/attorneys/attorney-3.jpg",
    bio: "Experta en protección de patentes y marcas a nivel global. Representación de Fortune 500 en casos de PI.",
    linkedin: "#",
    email: "patricia@kpclegal.com",
    phone: "+1 (555) 345-6789",
  },
];

function AttorneyCard({
  attorney,
  index,
}: {
  attorney: (typeof attorneys)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        rotateX: 10,
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary-blue/10 to-primary-red/10">
          <span className="text-7xl font-bold text-primary-blue/20">
            {attorney.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-primary-red/10 px-3 py-1 text-xs font-medium text-primary-red">
            {attorney.role}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary-blue">{attorney.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary-red">
          {attorney.specialty}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {attorney.bio}
        </p>

        <div className="flex items-center gap-3 border-t border-border mt-2 pt-2">
          <a
            href={attorney.linkedin}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-blue hover:text-white"
            aria-label={`LinkedIn de ${attorney.name}`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${attorney.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-red hover:text-white"
            aria-label={`Enviar email a ${attorney.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={`tel:${attorney.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-blue hover:text-white"
            aria-label={`Llamar a ${attorney.name}`}
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Attorneys() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotras"
      className="bg-white py-24"
      aria-labelledby="attorneys-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="text-center">
          <h2
            id="attorneys-title"
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            Nuestro Equipo
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-blue sm:text-4xl">
            Tres Perspectivas,{" "}
            <Highlighter action="underline" color="#8B2635" strokeWidth={2} isView>
              Una Visión
            </Highlighter>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Combinamos experiencia diversa y especialización para ofrecer
            soluciones legales integrales a nivel global.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <AttorneyCard key={attorney.name} attorney={attorney} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
