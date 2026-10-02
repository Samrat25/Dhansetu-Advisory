import React from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import {
  ADDRESS,
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  EMAIL,
  TAGLINE,
  navLinks,
} from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080f26] border-t border-border/30 text-white/80 pt-16 pb-10">
      <div className="container-tight">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DHANSETU Logo"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold/60 shadow-md shrink-0"
              />
              <div>
                <p className="font-heading text-xl font-bold text-white tracking-wide leading-none">
                  DHANSETU
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-light">
                  Capital Advisory
                </p>
              </div>
            </div>
            <p className="text-xs text-brand-gold-light italic">
              {TAGLINE}
            </p>
            <p className="text-xs leading-relaxed text-white/60">
              Kolkata's trusted partner for Instant Loans, Home & Business Credit, Insurance, and Wealth Investments. 50+ banking partners under one roof.
            </p>
          </div>

          {/* Quick Links to Dedicated Pages */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-1.5 text-white/70 hover:text-brand-gold transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 text-brand-gold/70" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Services List */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Key Solutions
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-white/70">
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Instant Loan / Insta Loan (24h)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Home Loan & Balance Transfer
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Business Loan & CC / OD Limit
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Mortgage Loan (LAP) & Commercial
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Health, Life & Motor Insurance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  Mutual Funds, Demat & SIP Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Reach Our Office
            </h4>
            <div className="mt-4 space-y-3 text-xs text-white/70">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
                <span>
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="hover:text-brand-gold">
                    {PHONE_PRIMARY}
                  </a>
                  {" / "}
                  <a href={`tel:${PHONE_LANDLINE.replace(/[-\s]/g, "")}`} className="hover:text-brand-gold">
                    {PHONE_LANDLINE}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-gold break-all">
                  {EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-white/50">
                <Clock className="h-4 w-4 shrink-0 text-brand-gold/60" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Dhansetu Capital Advisory. All Rights Reserved.</p>
          <p className="flex gap-4">
            <span>Dunlop, Kolkata</span>
            <span>•</span>
            <span>Registered Capital Advisory</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
