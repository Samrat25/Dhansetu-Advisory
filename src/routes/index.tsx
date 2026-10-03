import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmiCalculator from "@/components/calculator/EmiCalculator";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BlurText from "@/components/BlurText/BlurText";
import Magnet from "@/components/Magnet/Magnet";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import FloatingLines from "@/components/FloatingLines/FloatingLines";

import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  Home,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Building2,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
  Landmark,
  Briefcase,
  HeartPulse,
  PiggyBank,
  Zap,
  Calculator,
  Handshake,
  Users2,
  Award,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  EMAIL,
  ADDRESS,
  TAGLINE,
  SLOGAN,
  WHATSAPP_MESSAGES,
  getWhatsAppLink,
  handleWhatsAppClick,
} from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const lenisRef = useRef<Lenis | null>(null);

  const hyperspeedOptions = useMemo(
    () => ({
      onSpeedUp: () => {},
      onSlowDown: () => {},
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5] as [number, number],
      lightStickHeight: [1.3, 1.7] as [number, number],
      movingAwaySpeed: [60, 80] as [number, number],
      movingCloserSpeed: [-120, -160] as [number, number],
      carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
      carLightsRadius: [0.05, 0.14] as [number, number],
      carWidthPercentage: [0.3, 0.5] as [number, number],
      carShiftX: [-0.8, 0.8] as [number, number],
      carFloorSeparation: [0, 5] as [number, number],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0x1a3fa0,
        brokenLines: 0x1a3fa0,
        leftCars: [0xe8a33d, 0xd49a3b, 0xffd166],
        rightCars: [0x1a3fa0, 0x0f1f4d, 0x3b82f6],
        sticks: 0xe8a33d,
      },
    }),
    []
  );

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -80, duration: 1.1 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const portalPages = [
    {
      title: "Our Services",
      href: "/services",
      badge: "24 Financial Products",
      desc: "Complete loan, insurance & wealth investment portfolio: Instant Loans (24h), Home & Business Loans, LAP, Mutual Funds, and Demat.",
      icon: Zap,
      cta: "Explore All Services",
    },
    {
      title: "Why Us",
      href: "/why-us",
      badge: "20+ Banking Partners",
      desc: "Compare rates across SBI, HDFC, ICICI, Axis, Tata Capital, and Bajaj Finserv. Lowest rates starting from 8.5% p.a. with zero hidden fees.",
      icon: Landmark,
      cta: "See DhanSetu Advantage",
    },
    {
      title: "Career & Opportunity",
      href: "/careers",
      badge: "Hiring & DSA Program",
      desc: "Join our core advisory team or enroll as a high-earning Channel Partner (DSA) with 20+ lenders, maximum payouts, and zero entry fees.",
      icon: Briefcase,
      cta: "View Careers & DSA",
    },
    {
      title: "About Us",
      href: "/about",
      badge: "Founded 2016",
      desc: "Founded in Dunlop, Kolkata by Paromita Sutradhar (Founder). Over ₹100+ Cr in capital facilitated for 200+ satisfied clients across Bengal.",
      icon: Award,
      cta: "Read Company Story",
    },
    {
      title: "Contact Us",
      href: "/contact",
      badge: "Dunlop, Kolkata HQ",
      desc: "18/1, Vivekananda Road, Dunlop, Kolkata - 700108. Direct advisory mobile +91 82403 49546 and landline 033-79633264.",
      icon: MapPin,
      cta: "Get Office Details",
    },
  ];

  const testimonials = [
    {
      name: "Debashis Mukherjee",
      role: "Home Loan Client",
      location: "Belgharia, Kolkata",
      text: "DhanSetu helped me secure my dream home loan with SBI at just 8.55% interest rate when other agents quoted 9.2%. Their Dunlop team handled all document verifications right at my home!",
      rating: 5,
    },
    {
      name: "Sneha Sen",
      role: "Business Owner",
      location: "Dunlop, Kolkata",
      text: "When our manufacturing firm needed emergency working capital of ₹35 Lakhs, DhanSetu arranged an instant overdraft facility within 48 hours without exhausting paperwork.",
      rating: 5,
    },
    {
      name: "Rahul Banerjee",
      role: "Instant Loan Client",
      location: "Dum Dum, Kolkata",
      text: "Needed quick funds for a medical emergency. DhanSetu disbursed ₹3 Lakhs Insta Loan straight to my account in less than 24 hours. Truly grateful to the team!",
      rating: 5,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Standard Header Navigation linking to separate pages */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <section
          id="home"
          className="relative overflow-hidden bg-black pt-24 pb-12 text-primary-foreground sm:pt-28 sm:pb-16 md:pt-36 md:pb-24"
        >
          {/* Hyperspeed Background */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
            <Hyperspeed effectOptions={hyperspeedOptions} />
          </div>

          {/* Overlay gradient for readability */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0f1f4d]/85 via-transparent to-[#0f1f4d]/90" />

          {/* Decorative glowing halos */}
          <div className="pointer-events-none absolute -top-24 -right-24 z-[2] h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 z-[2] h-96 w-96 rounded-full bg-brand-blue-light/40 blur-3xl" />

          <div className="container-tight relative z-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              {/* Left Column: Headlines & CTAs */}
              <div className="flex flex-col items-start text-center lg:text-left">
                <span className="mb-3.5 inline-flex items-center gap-2 self-center rounded-full border border-brand-gold/40 bg-white/10 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold-light backdrop-blur-sm lg:self-start animate-fade-in">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {TAGLINE}
                </span>

                <h1 className="w-full font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up">
                  <BlurText
                    text="All Your Financial Needs Under One Roof"
                    animateBy="words"
                    className="font-heading font-extrabold"
                  />
                </h1>

                <p className="mt-2.5 sm:mt-3 text-base font-semibold text-brand-gold-light tracking-wide animate-fade-up sm:text-lg md:text-xl lg:text-2xl">
                  {SLOGAN}
                </p>

                <p className="mt-4 sm:mt-6 max-w-xl self-center text-sm leading-relaxed text-white/85 sm:text-base md:text-lg lg:self-start animate-fade-up">
                  DHANSETU CAPITAL ADVISORY is your premier partner for Instant Loans, Home & Business Credit, Insurance, and Wealth Investments in Kolkata — honest advisory, 20+ banking partners, approvals in as little as 24 hours.
                </p>

                <div className="mt-6 sm:mt-8 flex w-full flex-col gap-3 self-center sm:w-auto sm:flex-row lg:self-start">
                  <Magnet range={90} strength={30} className="w-full sm:w-auto">
                    <Button
                      variant="gold"
                      size="lg"
                      className="w-full font-heading font-bold sm:w-auto btn-sheen shadow-lg shadow-brand-gold/20 py-3 sm:py-2.5"
                      onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.instantLoan)}
                    >
                      <Zap className="h-5 w-5 mr-2" />
                      Instant Loan Enquiry
                    </Button>
                  </Magnet>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToCalculator}
                    className="w-full border-brand-gold/40 bg-brand-gold/10 font-heading font-bold text-white hover:bg-brand-gold/20 sm:w-auto py-3 sm:py-2.5"
                  >
                    <Calculator className="h-5 w-5 mr-2 text-brand-gold" />
                    Calculate EMI
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full border-white/30 bg-white/10 font-heading font-bold text-white hover:bg-white/20 sm:w-auto py-3 sm:py-2.5"
                  >
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/85 lg:justify-start">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-gold" />
                    Instant Loan in 24h
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-gold" />
                    20+ Bank Partners
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-gold" />
                    Dunlop, Kolkata HQ
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="relative mx-auto mt-4 w-full max-w-md sm:max-w-lg lg:mt-0 lg:max-w-none animate-fade-up">
                <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white/10 shadow-2xl relative group">
                  <img
                    src="/financial-hero.jpg"
                    alt="DHANSETU Capital Advisory and Financial Services in Kolkata"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating 24h Instant Loan Badge */}
                <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-card border border-border/40 p-3 sm:p-4 shadow-xl md:block animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-gold/15">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-base sm:text-lg font-bold text-foreground">
                        24 Hours
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Instant Loan Approvals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 20+ BANKING & NBFC PARTNERS SHOWCASE STRIP                */}
        {/* ========================================================= */}
        <section className="border-y border-border/20 bg-[#08122d]/80 py-6 sm:py-8 backdrop-blur-sm relative z-20">
          <div className="container-tight">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="text-center lg:text-left shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 text-xs font-bold text-brand-gold uppercase tracking-wider">
                  <Landmark className="h-3.5 w-3.5" />
                  20+ Banking Partners
                </span>
                <p className="mt-1 text-xs text-white/60">
                  Direct tie-ups with India's premier scheduled banks & NBFCs
                </p>
              </div>

              {/* Bank partner chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {[
                  "State Bank of India",
                  "HDFC Bank",
                  "ICICI Bank",
                  "Axis Bank",
                  "Kotak Mahindra Bank",
                  "Tata Capital",
                  "Bajaj Finserv",
                  "Bandhan Bank",
                  "Punjab National Bank",
                  "Bank of Baroda",
                  "+ 10 More Lenders",
                ].map((bank) => (
                  <span
                    key={bank}
                    className={`rounded-xl px-3 py-1.5 text-xs font-heading font-semibold transition-colors ${
                      bank === "+ 10 More Lenders"
                        ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                        : "bg-white/5 border border-white/10 text-white/85 hover:border-brand-gold/40 hover:text-white"
                    }`}
                  >
                    {bank}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ATTACHED DIRECTLY AFTER HERO: EMI CALCULATOR SECTION       */}
        {/* ========================================================= */}
        <section
          id="calculator"
          className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0a1435] via-background to-background border-b border-border/30 relative overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-blue/20 blur-[100px] pointer-events-none" />

          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                <Calculator className="h-3.5 w-3.5" />
                Smart Financial Tool
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                Calculate Your <span className="text-brand-gold">Loan EMI</span> & Interest
              </h2>
              <p className="mt-2.5 text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Accurately estimate your monthly repayments across Instant Loans, Home Loans, Business Credit, and Mortgages before you apply.
              </p>
            </div>

            {/* The Interactive EMI Calculator Component */}
            <EmiCalculator />
          </div>
        </section>

        {/* ========================================================= */}
        {/* DEDICATED PAGES DIRECTORY / EXPLORATION CARDS             */}
        {/* ========================================================= */}
        <section className="section-padding bg-muted/20 border-b border-border/20">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Explore DhanSetu
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mt-1">
                Explore Our Dedicated Pages
              </h2>
              <p className="mt-3 text-white/70 text-base max-w-2xl mx-auto">
                Discover in-depth information about our financial offerings, partner network, career openings, leadership story, and contact office.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalPages.map((page, idx) => {
                const Icon = page.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    className="p-7 rounded-2xl bg-card/60 border border-border/30 hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                          {page.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white mb-2">
                        {page.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-6">
                        {page.desc}
                      </p>
                    </div>

                    <Button
                      variant="gold"
                      size="default"
                      asChild
                      className="w-full font-heading font-semibold shadow-md btn-sheen"
                    >
                      <Link to={page.href}>
                        {page.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TESTIMONIALS / TRUST REVIEWS                              */}
        {/* ========================================================= */}
        <section id="testimonials" className="section-padding bg-background border-b border-border/20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Client Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                Trusted by Families & Entrepreneurs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-6 rounded-2xl bg-card/60 border border-border/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 text-brand-gold mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed italic mb-6">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/20">
                    <p className="font-heading font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role} • {t.location}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FREE CONSULTATION CTA BANNER                              */}
        {/* ========================================================= */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="container-tight">
            <div className="relative rounded-3xl bg-black border border-border/40 p-8 sm:p-14 text-center text-primary-foreground overflow-hidden">
              <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
                <FloatingLines
                  linesGradient={["#1a3fa0", "#e8a33d", "#ffffff"]}
                  enabledWaves={["top", "middle", "bottom"]}
                  lineCount={[8, 12, 16]}
                  lineDistance={[6, 5, 4]}
                  bendRadius={6.0}
                  bendStrength={-0.6}
                  interactive={true}
                  parallax={true}
                />
              </div>

              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0f1f4d]/85 via-transparent to-[#0f1f4d]/90" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-block rounded-full border border-brand-gold/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold-light">
                  {TAGLINE}
                </span>

                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Get Your <span className="text-brand-gold italic">Free Financial Consultation</span> Today
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Headquartered at 18/1, Vivekananda Road, Dunlop, Kolkata - 700108. Talk to our senior advisors and secure the lowest rates with zero consultation fees.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Magnet range={90} strength={30}>
                    <Button
                      variant="gold"
                      size="lg"
                      className="font-heading font-bold btn-sheen shadow-lg shadow-brand-gold/25"
                      onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.consultation)}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat on WhatsApp Now
                    </Button>
                  </Magnet>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold"
                  >
                    <Link to="/contact">
                      <MapPin className="h-4 w-4 mr-2 text-brand-gold" />
                      View Office & Contact Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Standard Site Footer with clean separate page navigation */}
      <Footer />
    </div>
  );
}
