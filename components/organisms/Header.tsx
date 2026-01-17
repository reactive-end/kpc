"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#valores", label: "Valores" },
  { href: "#socios", label: "Socios" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary-blue"
          aria-label="KPC Legal - Inicio"
        >
          KPC<span className="text-primary-red">.</span>Legal
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary-red"
                role="menuitem"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="hidden rounded-full bg-primary-red px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-red-dark md:block"
        >
          Consulta Gratis
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4" role="menu">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary-red"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li role="none" className="pt-4">
              <Link
                href="#contacto"
                className="block w-full rounded-full bg-primary-red px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-primary-red-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consulta Gratis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
