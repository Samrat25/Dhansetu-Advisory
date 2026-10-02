import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, PHONE_PRIMARY } from "@/lib/constants";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      const idMap: Record<string, string> = {
        "/": "home",
        "/services": "services",
        "/why-us": "why-us",
        "/careers": "careers",
        "/about": "about",
        "/contact": "contact",
      };
      const targetId = idMap[href];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          e.preventDefault();
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          setIsMenuOpen(false);
          return;
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1536]/90 backdrop-blur-md border-b border-border/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={(e) => handleNavClick("/", e)}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.png"
            alt="DHANSETU Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold/60 shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <span className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
              DHANSETU
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-light">
              Capital Advisory
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              activeOptions={{ exact: link.href === "/" }}
              activeProps={{
                className: "text-brand-gold font-bold scale-105",
              }}
              inactiveProps={{
                className: "text-white/80 hover:text-brand-gold transition-colors font-medium",
              }}
              className="text-sm font-heading tracking-wide transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Call Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="gold"
            size="sm"
            asChild
            className="font-heading font-semibold btn-sheen shadow-md shadow-brand-gold/20"
          >
            <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4 mr-1.5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="border-b border-border/30 bg-[#0b1536]/95 backdrop-blur-xl px-6 py-6 lg:hidden animate-fade-in shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                activeOptions={{ exact: link.href === "/" }}
                activeProps={{
                  className: "text-brand-gold font-bold pl-2 border-l-2 border-brand-gold",
                }}
                inactiveProps={{
                  className: "text-white/80 hover:text-white pl-2",
                }}
                className="text-base font-heading tracking-wide transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <Button
                variant="gold"
                size="default"
                asChild
                className="w-full font-heading font-semibold btn-sheen"
              >
                <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us Directly
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
