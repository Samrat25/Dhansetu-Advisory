import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmiCalculator from "@/components/calculator/EmiCalculator";
import ShinyText from "@/components/ShinyText/ShinyText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BlurText from "@/components/BlurText/BlurText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import Magnet from "@/components/Magnet/Magnet";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import FloatingLines from "@/components/FloatingLines/FloatingLines";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Car,
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const lenisRef = useRef<Lenis | null>(null);
  useReveal();

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

  const previewServices = [
    {
      icon: Zap,
      title: "Instant Loan / Insta Loan",
      badge: "24-Hour Disbursal",
      desc: "Fast emergency cash with minimal documentation. Direct account credit.",
      color: "text-amber-400 bg-amber-400/10",
    },
    {
      icon: Home,
      title: "Home Loans & Balance Transfer",
      badge: "Rates from 8.5%",
      desc: "Lowest interest rate financing for ready-to-move, construction, or plot purchase.",
      color: "text-blue-400 bg-blue-400/10",
    },
    {
      icon: Landmark,
      title: "Business Loan & CC/OD Limit",
      badge: "Up to ₹20 Cr",
      desc: "Unsecured business growth capital and flexible bank credit overdraft lines.",
      color: "text-emerald-400 bg-emerald-400/10",
    },
    {
      icon: Building2,
      title: "Mortgage Loan (LAP)",
      badge: "Up to 75% LTV",
      desc: "Unlock high-value liquidity against residential or commercial properties.",
      color: "text-purple-400 bg-purple-400/10",
    },
    {
      icon: HeartPulse,
      title: "Life & Health Insurance",
      badge: "50+ Plans",
      desc: "Comprehensive cashless coverage, term plans, and critical illness safeguards.",
      color: "text-rose-400 bg-rose-400/10",
    },
    {
      icon: PiggyBank,
      title: "Mutual Funds & Wealth Advisory",
      badge: "Disciplined Returns",
      desc: "Expert SIP planning, tax saving (ELSS), and long-term portfolio management.",
      color: "text-teal-400 bg-teal-400/10",
    },
  ];

  const differentiators = [
    {
      icon: Landmark,
      title: "50+ Institutional Partners",
      desc: "We check eligibility across all premier banks & NBFCs, saving you weeks of legwork.",
    },
    {
      icon: Zap,
      title: "24-Hour Disbursal Pipeline",
      desc: "Direct line with underwriting desks guarantees lightning-quick sanction letters.",
    },
    {
      icon: Shield,
      title: "Zero Hidden Processing Fees",
      desc: "Transparent breakdown of all costs upfront. No surprise deductions on sanction.",
    },
    {
      icon: Users2,
      title: "Dunlop, Kolkata Headquarters",
      desc: "Personalized doorstep and digital assistance across Kolkata & Greater Bengal.",
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
      {/* Standard Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <section
          id="home"
          className="relative overflow-hidden bg-black pt-28 pb-16 text-primary-foreground md:pt-36 md:pb-24"
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
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left Column: Headlines & CTAs */}
              <div className="flex flex-col items-start text-center lg:text-left">
                <span className="mb-4 inline-flex items-center gap-2 self-center rounded-full border border-brand-gold/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold-light backdrop-blur-sm lg:self-start animate-fade-in">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {TAGLINE}
                </span>

                <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                  <BlurText
                    text="All Your Financial Needs Under One Roof"
                    animateBy="words"
                    className="font-heading font-extrabold"
                  />
                </h1>

                <p className="mt-3 text-lg font-semibold text-brand-gold-light tracking-wide animate-fade-up md:text-xl lg:text-2xl">
                  {SLOGAN}
                </p>

                <p className="mt-6 max-w-xl self-center text-base leading-relaxed text-white/85 sm:text-lg lg:self-start animate-fade-up">
                  DHANSETU CAPITAL ADVISORY is your premier partner for Instant Loans, Home & Business Credit, Insurance, and Wealth Investments in Kolkata — honest advisory, 50+ banking partners, approvals in as little as 24 hours.
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 self-center sm:w-auto sm:flex-row lg:self-start">
                  <Magnet range={90} strength={30}>
                    <Button
                      variant="gold"
                      size="lg"
                      className="w-full font-heading font-bold sm:w-auto btn-sheen shadow-lg shadow-brand-gold/20"
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
                    className="w-full border-brand-gold/40 bg-brand-gold/10 font-heading font-bold text-white hover:bg-brand-gold/20 sm:w-auto"
                  >
                    <Calculator className="h-5 w-5 mr-2 text-brand-gold" />
                    Calculate EMI
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full border-white/30 bg-white/10 font-heading font-bold text-white hover:bg-white/20 sm:w-auto"
                  >
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-brand-gold" />
                    Instant Loan in 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-brand-gold" />
                    50+ Bank Partners
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-brand-gold" />
                    Dunlop, Kolkata HQ
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-fade-up">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl relative group">
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
                <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card border border-border/40 p-4 shadow-xl md:block animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15">
                      <Zap className="h-6 w-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-foreground">
                        24 Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
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
        {/* ATTACHED DIRECTLY AFTER HERO: EMI CALCULATOR SECTION       */}
        {/* ========================================================= */}
        <section
          id="calculator"
          className="section-padding bg-gradient-to-b from-[#0a1435] via-background to-background border-b border-border/30 relative"
        >
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                <Calculator className="h-3.5 w-3.5" />
                Smart Financial Tool
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                Calculate Your <span className="text-brand-gold">Loan EMI</span> & Interest
              </h2>
              <p className="mt-3 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
                Accurately estimate your monthly repayments across Instant Loans, Home Loans, Business Credit, and Mortgages before you apply.
              </p>
            </div>

            {/* The Interactive EMI Calculator Component */}
            <EmiCalculator />
          </div>
        </section>

        {/* ========================================================= */}
        {/* SERVICES TEASER SECTION (Links to /services)              */}
        {/* ========================================================= */}
        <section id="services-preview" className="section-padding bg-muted/20">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Our Comprehensive Solutions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                  Financial Services Under One Roof
                </h2>
                <p className="text-white/70 text-sm sm:text-base mt-2">
                  From lightning-fast cash advances to multi-crore business lines and family wealth preservation.
                </p>
              </div>

              <Button
                variant="gold"
                size="lg"
                asChild
                className="font-heading font-semibold shadow-md btn-sheen shrink-0"
              >
                <Link to="/services">
                  View All 24+ Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    className="p-6 rounded-2xl bg-card/60 border border-border/30 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${srv.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/25">
                          {srv.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-heading text-white mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                        {srv.desc}
                      </p>
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-semibold text-brand-gold hover:text-brand-gold-light group"
                    >
                      <span>Explore details</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHY US TEASER SECTION (Links to /why-us)                   */}
        {/* ========================================================= */}
        <section id="why-us-preview" className="section-padding bg-gradient-to-b from-[#0a1435]/40 via-background to-background border-t border-border/20">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  The DhanSetu Edge
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                  Why 15,000+ Clients Choose DhanSetu Over Direct Banks
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  Approaching banks directly often means waiting weeks for generic retail interest rates. We leverage our network of 50+ institutional lenders to negotiate institutional discount rates and expedite underwriting.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {differentiators.map((diff, i) => {
                    const Icon = diff.icon;
                    return (
                      <div key={i} className="p-4 rounded-xl bg-card/40 border border-border/30">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Icon className="h-4 w-4 text-brand-gold shrink-0" />
                          <h4 className="font-heading font-bold text-sm text-white">
                            {diff.title}
                          </h4>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">
                          {diff.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10 font-heading font-semibold"
                  >
                    <Link to="/why-us">
                      Read Complete Comparison & Advantages
                      <ArrowRight className="h-4 w-4 ml-2 text-brand-gold" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-brand-gold/30 bg-card/70 p-8 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div>
                      <p className="font-heading text-xl font-bold text-white">Institutional Backing</p>
                      <p className="text-xs text-white/60">50+ Scheduled Commercial Banks & NBFCs</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      98.4% Approvals
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-white/80">Average Instant Loan Sanction</span>
                      <span className="font-bold text-brand-gold">Under 24 Hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-white/80">Lowest Home Loan Rate</span>
                      <span className="font-bold text-brand-gold">Starting at 8.5% p.a.</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-white/80">Documentation Assistance</span>
                      <span className="font-bold text-emerald-400">100% Doorstep & Digital</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-white/80">Consultation Charges</span>
                      <span className="font-bold text-emerald-400">100% Free of Cost</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/30 text-center">
                    <Button
                      variant="gold"
                      size="default"
                      className="w-full font-heading font-semibold btn-sheen"
                      onClick={handleWhatsAppClick("Hello DHANSETU! I want to verify loan offers with your 50+ banking partners.")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Check Multi-Bank Offers on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CAREER & OPPORTUNITY PROMO BANNER (Links to /careers)     */}
        {/* ========================================================= */}
        <section id="careers-banner" className="py-16 bg-gradient-to-r from-[#0d1c47] via-[#142c6f] to-[#0d1c47] border-y border-border/30">
          <div className="container-tight">
            <div className="max-w-4xl mx-auto rounded-3xl bg-black/40 border border-brand-gold/40 p-8 sm:p-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold text-brand-gold border border-brand-gold/30">
                  <Briefcase className="h-3.5 w-3.5" />
                  We Are Hiring & Expanding DSA Network
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Career & Opportunity at DhanSetu
                </h3>
                <p className="text-sm text-white/80 max-w-xl leading-relaxed">
                  Join our fast-growing sales & underwriting team in Dunlop, Kolkata, or partner with us as a high-earning DSA Channel Partner. Get direct access to 50+ lenders and top payout structures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  asChild
                  className="font-heading font-semibold shadow-lg shadow-brand-gold/20 btn-sheen w-full sm:w-auto"
                >
                  <Link to="/careers">
                    Explore Opportunities
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT & LEADERSHIP PREVIEW (Links to /about)              */}
        {/* ========================================================= */}
        <section id="about-preview" className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border-2 border-brand-gold/40 shadow-xl relative group">
                  <img
                    src="/loans-investments.jpg"
                    alt="DhanSetu Leadership and Advisory Team Dunlop Kolkata"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1536] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border/40">
                    <p className="font-heading font-bold text-white text-sm">Paromita Sutradhar</p>
                    <p className="text-xs text-brand-gold font-semibold">Founder & Managing Director</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Founded 2016 • Dunlop, Kolkata
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  Empowering Financial Growth Across Bengal
                </h2>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Established with a dedication to simplify capital access, DhanSetu Capital Advisory has grown from a local advisory firm into a multi-institution loan facilitator with over ₹500+ Crores in disbursed capital.
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  Whether you are purchasing your first home, launching an entrepreneurial venture, or planning long-term retirement wealth, our advisory team brings ethical transparency to every interaction.
                </p>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="default"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10 font-heading font-semibold"
                  >
                    <Link to="/about">
                      Learn About Our Story & Leadership
                      <ArrowRight className="h-4 w-4 ml-2 text-brand-gold" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TESTIMONIALS / TRUST REVIEWS                              */}
        {/* ========================================================= */}
        <section id="testimonials" className="section-padding bg-muted/20 border-t border-border/20">
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
        {/* CONTACT & CONSULTATION TEASER (Links to /contact)         */}
        {/* ========================================================= */}
        <section id="contact-teaser" className="section-padding bg-background relative overflow-hidden">
          <div className="container-tight">
            <div className="relative rounded-3xl bg-black border border-border/40 p-8 sm:p-14 text-center text-primary-foreground overflow-hidden">
              {/* FloatingLines animation */}
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

              {/* Overlay gradient */}
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

      {/* Standard Site Footer */}
      <Footer />
    </div>
  );
}
