"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Derecho Corporativo", href: "#" },
    { label: "Litigación Comercial", href: "#" },
    { label: "Propiedad Intelectual", href: "#" },
    { label: "Fusiones y Adquisiciones", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-primary-blue text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
              aria-label="KPC Legal - Inicio"
            >
              KPC<span className="text-primary-red">.</span>Legal
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Experiencia legal sin fronteras. Protegemos sus intereses con
              excelencia y resultados comprobados.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:contacto@kpclegal.com"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                contacto@kpclegal.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +1 (555) 123-4567
              </a>
              <address className="flex items-start gap-3 text-sm not-italic text-white/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  350 Fifth Avenue, Suite 5100
                  <br />
                  New York, NY 10118
                </span>
              </address>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Síguenos
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-red"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-red"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              © {currentYear} KPC Legal LLC. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/40">
              Diseñado con excelencia para servir a nivel global.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
