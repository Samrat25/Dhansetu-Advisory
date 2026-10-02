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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  Send,
  ExternalLink,
  Target,
  Compass,
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
  openWhatsApp,
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

  // Contact section form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Instant Loan / Insta Loan",
    amount: "₹ 5,00,000",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = `*New Inquiry - DhanSetu Homepage*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Service Required:* ${formData.service}
*Estimated Amount:* ${formData.amount}
*Message:* ${formData.message || "Please provide consultation"}`;
    openWhatsApp(text);
  };

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
      {/* Standard Header Navigation with in-page scroll support */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* HERO SECTION (id="home")                                  */}
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
        {/* (id="calculator")                                         */}
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
        {/* OUR SERVICES SECTION (id="services")                      */}
        {/* ========================================================= */}
        <section id="services" className="section-padding bg-muted/20">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Our Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                  Our Services
                </h2>
                <p className="text-white/70 text-sm sm:text-base mt-2">
                  Complete loan, insurance & wealth investment solutions under one trusted roof.
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
        {/* WHY US SECTION (id="why-us")                              */}
        {/* ========================================================= */}
        <section id="why-us" className="section-padding bg-gradient-to-b from-[#0a1435]/40 via-background to-background border-t border-border/20">
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
        {/* CAREER & OPPORTUNITY PROMO (id="careers")                 */}
        {/* ========================================================= */}
        <section id="careers" className="py-16 bg-gradient-to-r from-[#0d1c47] via-[#142c6f] to-[#0d1c47] border-y border-border/30">
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
        {/* ABOUT US FULL SECTION (id="about")                        */}
        {/* ========================================================= */}
        <section id="about" className="section-padding bg-background border-t border-border/20">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              {/* Leader Photo & Credentials */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-2xl relative group">
                  <img
                    src="/loans-investments.jpg"
                    alt="Paromita Sutradhar - Founder of DhanSetu Capital Advisory"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1536] via-[#0b1536]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/85 backdrop-blur-md border border-border/40">
                    <p className="font-heading font-bold text-white text-base">
                      Paromita Sutradhar
                    </p>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">
                      Founder & Managing Director
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                      Dunlop, Kolkata Headquarters
                    </p>
                  </div>
                </div>
              </div>

              {/* Story & Background */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30">
                  <Award className="h-3.5 w-3.5" />
                  <span>Founded 2016 in Dunlop, Kolkata</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
                  About <span className="text-brand-gold">DhanSetu</span> Capital Advisory
                </h2>

                <p className="text-white/85 leading-relaxed text-base">
                  DhanSetu was established by <strong>Paromita Sutradhar</strong> to eliminate the frustrating delays, hidden commissions, and complex bank queues that borrowers across Bengal previously had to endure.
                </p>

                <p className="text-white/70 leading-relaxed text-sm">
                  Today, we have grown into one of Kolkata's most dependable financial loan syndicators, having facilitated over <strong>₹500+ Crores</strong> in capital across <strong>50+ partner banks and NBFCs</strong>. Our full range of financial solutions includes Instant Loans, Home Loans, Business Credit, Mortgages, Insurance, and Mutual Fund portfolios.
                </p>

                {/* 3 Metrics Chips */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-card/40 border border-border/30 text-center">
                    <div className="text-2xl font-bold font-heading text-brand-gold">₹500+ Cr</div>
                    <div className="text-[11px] text-white/60 mt-0.5">Disbursed</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-card/40 border border-border/30 text-center">
                    <div className="text-2xl font-bold font-heading text-brand-gold">15,000+</div>
                    <div className="text-[11px] text-white/60 mt-0.5">Happy Clients</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-card/40 border border-border/30 text-center">
                    <div className="text-2xl font-bold font-heading text-brand-gold">50+</div>
                    <div className="text-[11px] text-white/60 mt-0.5">Bank Partners</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button
                    variant="gold"
                    size="default"
                    asChild
                    className="font-heading font-semibold shadow-md btn-sheen"
                  >
                    <Link to="/about">
                      Read Full Story & Milestones
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border/20">
              <div className="p-5 rounded-2xl bg-card/30 border border-border/30">
                <div className="h-10 w-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Absolute Integrity</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Transparent fee structures with zero surprise charges on bank sanction letters.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card/30 border border-border/30">
                <div className="h-10 w-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-3">
                  <Users2 className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Client-First Advisory</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  We negotiate with multiple banks on your behalf to guarantee the lowest interest rate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card/30 border border-border/30">
                <div className="h-10 w-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-3">
                  <Landmark className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Institutional Ties</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Direct underwriting channels across 50+ leading public, private banks, and NBFCs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card/30 border border-border/30">
                <div className="h-10 w-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Rapid Turnaround</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Instant loan approvals in 24 hours and doorstep document pickup across Kolkata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TESTIMONIALS / TRUST REVIEWS (id="testimonials")           */}
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
        {/* FULL CONTACT US SECTION (id="contact")                    */}
        {/* ========================================================= */}
        <section id="contact" className="section-padding bg-background border-t border-border/20">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mt-1">
                Contact Our Dunlop Office
              </h2>
              <p className="mt-3 text-white/70 text-base max-w-2xl mx-auto">
                Ready to secure the lowest loan rate or need expert advice? Reach out via phone, email, or send an instant inquiry below.
              </p>
            </div>

            {/* 3 Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Call Us Card */}
              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Call Us Directly</h3>
                <p className="text-sm font-semibold text-white/90">
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="hover:text-brand-gold transition-colors">
                    Mobile: {PHONE_PRIMARY}
                  </a>
                </p>
                <p className="text-sm font-semibold text-white/90 mt-1">
                  <a href={`tel:${PHONE_LANDLINE.replace(/[-\s]/g, "")}`} className="hover:text-brand-gold transition-colors">
                    Landline: {PHONE_LANDLINE}
                  </a>
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="gold" size="sm" asChild className="font-heading font-semibold text-xs">
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>Call Mobile</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="font-heading font-semibold text-xs border-white/20 text-white hover:bg-white/10">
                    <a href={`tel:${PHONE_LANDLINE.replace(/[-\s]/g, "")}`}>Landline</a>
                  </Button>
                </div>
              </SpotlightCard>

              {/* Email Us Card */}
              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Email Address</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-semibold text-brand-gold hover:underline break-all"
                >
                  {EMAIL}
                </a>
                <p className="text-xs text-white/60 mt-2">
                  Send your requirements or resumes anytime.
                </p>
                <Button variant="outline" size="sm" asChild className="mt-4 font-heading font-semibold text-xs border-white/20 text-white hover:bg-white/10">
                  <a href={`mailto:${EMAIL}`}>Send Email</a>
                </Button>
              </SpotlightCard>

              {/* Office Address Card */}
              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Visit Our Office</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {ADDRESS}
                </p>
                <p className="text-xs text-brand-gold font-semibold mt-1">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </p>
                <Button variant="outline" size="sm" asChild className="mt-4 font-heading font-semibold text-xs border-white/20 text-white hover:bg-white/10">
                  <a
                    href="https://maps.google.com/?q=Dunlop,+Kolkata+West+Bengal+700108"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </Button>
              </SpotlightCard>
            </div>

            {/* Interactive Inquiry Form & Map Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Container */}
              <div className="lg:col-span-7 bg-card/60 border border-border/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
                <div className="mb-6">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    Fast Callback Guaranteed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    Send a Free Consultation Inquiry
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    Fill out the form below. Our financial advisor will contact you within 15 minutes.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Inquiry submitted! We have routed your details to WhatsApp for immediate priority service.</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                      >
                        <option value="Instant Loan / Insta Loan">Instant Loan / Insta Loan (24h)</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Mortgage (LAP)">Mortgage (LAP)</option>
                        <option value="Car / Auto Loan">Car / Auto Loan</option>
                        <option value="Life & Health Insurance">Life & Health Insurance</option>
                        <option value="Mutual Funds & Investments">Mutual Funds & Investments</option>
                        <option value="Channel Partner / DSA Inquiry">Channel Partner / DSA Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      Estimated Loan / Investment Amount
                    </label>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      placeholder="e.g. ₹ 10,00,000"
                      className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirement, preferred banks, or timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border/40 text-white text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full font-heading font-semibold shadow-lg shadow-brand-gold/25 btn-sheen mt-2"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Inquiry & Connect on WhatsApp
                  </Button>
                </form>
              </div>

              {/* Map & Office Direction Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-border/40 bg-card/60 p-6 sm:p-8 shadow-xl">
                  <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                    Dunlop Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    Conveniently located on Vivekananda Road, near Dunlop crossing. Easily reachable via Baranagar Metro Station, Belgharia Expressway, and Dunlop bus hub.
                  </p>

                  <div className="rounded-2xl overflow-hidden border border-border/30 h-64 bg-slate-900 relative">
                    <iframe
                      title="DhanSetu Office Location Dunlop Kolkata"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14728.847551065096!2d88.3732448!3d22.6517178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89da3b2c28659%3A0xe104ff47db1e8a08!2sDunlop%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/20 flex items-center justify-between">
                    <span className="text-xs text-white/60">
                      Open Mon - Sat 10 AM - 7 PM
                    </span>
                    <a
                      href="https://maps.google.com/?q=Dunlop,+Kolkata+West+Bengal+700108"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-gold hover:underline flex items-center gap-1"
                    >
                      Open Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 to-transparent p-6">
                  <h4 className="text-white font-bold font-heading text-base mb-1">
                    Want dedicated contact page details?
                  </h4>
                  <p className="text-xs text-white/70 mb-3">
                    Visit our full contact page for extended routes, transport guides, and direct lines.
                  </p>
                  <Button variant="outline" size="sm" asChild className="border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 font-heading font-semibold text-xs">
                    <Link to="/contact">
                      Go to Full Contact Page
                      <ArrowRight className="h-3 w-3 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Consultation Banner with FloatingLines */}
            <div className="relative mt-16 rounded-3xl bg-black border border-border/40 p-8 sm:p-14 text-center text-primary-foreground overflow-hidden">
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
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                      <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                      Call {PHONE_PRIMARY}
                    </a>
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
