import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import ShinyText from "@/components/ShinyText/ShinyText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import Aurora from "@/components/Aurora/Aurora";
import BlurText from "@/components/BlurText/BlurText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import Magnet from "@/components/Magnet/Magnet";
import CountUp from "@/components/CountUp/CountUp";
import AnimatedList from "@/components/AnimatedList/AnimatedList";
import FloatingLines from "@/components/FloatingLines/FloatingLines";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack/ScrollStack";

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
  Menu,
  X,
  ArrowRight,
  Mail,
  Landmark,
  Briefcase,
  Car,
  GraduationCap,
  Gem,
  Mountain,
  HeartPulse,
  ShieldCheck,
  BarChart3,
  PiggyBank,
  LineChart,
  Wallet,
  Layers,
  CircleDollarSign,
  CreditCard,
  Bike,
  Banknote,
  ShieldAlert,
  Zap,
  ArrowLeftRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "918240349546";
const PHONE_PRIMARY = "+91 82403 49546";
const PHONE_LANDLINE = "033-79633264";
const EMAIL = "contact@dhansetucapital.in";
const ADDRESS = "18/1, Vivekananda Road, Dunlop, Kolkata - 700108";
const TAGLINE = "All Your Financial Needs Under One Roof";
const SLOGAN = "Your Financial Partner for a Better Tomorrow";

// Universal WhatsApp handler: triggers native app on mobile without redirecting to web
const getWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
};

const openWhatsApp = (message: string) => {
  const encoded = encodeURIComponent(message);
  if (typeof window !== "undefined") {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
      return;
    }
  }
  window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`, "_blank");
};

const handleWhatsAppClick = (message: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  openWhatsApp(message);
};

// Pre-filled messages for different contexts
const WHATSAPP_MESSAGES = {
  general: "Hello DHANSETU! I am interested in your financial advisory, loan, and investment services. Please provide more details.",
  instantLoan: "Hello DHANSETU! I need an Instant Loan / Insta Loan. Please share the eligibility criteria and fast disbursement details.",
  loans: "Hello! I need a loan for my business, home, or personal needs. Please guide me through the interest rates and process.",
  services: "Hi DHANSETU! I want to know more about your financial services including Instant Loans, Insurance, and Wealth Investments.",
  consultation: "Hello! I would like to schedule a free financial consultation with your expert advisory team in Dunlop.",
  career: "Hello DHANSETU HR! I would like to apply for career opportunities at DhanSetu Capital Advisory.",
};

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

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Why Us", href: "why-us" },
  { label: "Careers", href: "careers" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  useReveal();


  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
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
      sticks: 0xe8a33d
    }
  }), []);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-border bg-card/90 shadow-md backdrop-blur-md"
            : "border-white/10 bg-card/45 backdrop-blur-md"
        }`}
      >
        <div className="container-tight flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Go to home"
          >
            <img
              src="/logo.png"
              alt="DHANSETU Capital Advisory logo"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover border-2 border-brand-gold/60 shadow-md"
            />
            <div className="hidden flex-col items-start sm:flex">
              <span className="font-heading text-xl font-bold leading-none text-foreground md:text-2xl tracking-tight">
                <ShinyText
                  text="DHANSETU"
                  speed={3}
                  color="#e8a33d"
                  shineColor="#ffffff"
                  spread={80}
                  className="font-heading text-xl font-bold leading-none md:text-2xl tracking-tight"
                />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                Capital Advisory
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="primary-outline"
              size="sm"
              asChild
              className="font-heading font-semibold"
            >
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              variant="gold"
              size="sm"
              asChild
              className="font-heading font-semibold btn-sheen"
            >
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border/40 bg-card px-4 py-4 shadow-lg lg:hidden rounded-b-2xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="rounded-md px-3 py-2 text-left text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-accent"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border/20 pt-4">
                <Button
                  variant="primary-outline"
                  asChild
                  className="w-full font-heading font-semibold"
                >
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="gold" asChild className="w-full font-heading font-semibold btn-sheen">
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
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
        {/* Decorative gold glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 z-[2] h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 z-[2] h-96 w-96 rounded-full bg-brand-blue-light/40 blur-3xl" />
        <div className="container-tight relative z-10" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col items-start text-center lg:text-left">
              <span
                className="mb-4 inline-flex items-center gap-2 self-center rounded-full border border-brand-gold/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold-light backdrop-blur-sm lg:self-start animate-fade-in"
                style={{ animationDelay: "0ms" }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {TAGLINE}
              </span>
              <h1
                className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                <BlurText
                  text="All Your Financial Needs Under One Roof"
                  animateBy="words"
                  className="font-heading font-extrabold"
                />
              </h1>
              <p
                className="mt-3 text-lg font-semibold text-brand-gold-light tracking-wide animate-fade-up md:text-xl lg:text-2xl"
                style={{ animationDelay: "130ms" }}
              >
                {SLOGAN}
              </p>
              <p
                className="mt-6 max-w-xl self-center text-base leading-relaxed text-white/85 sm:text-lg lg:self-start animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                DHANSETU CAPITAL ADVISORY is your premier partner for Instant Loans,
                Home & Business Credit, Insurance, and Wealth Investments in Kolkata — honest advisory,
                50+ banking partners, approvals in as little as 24 hours.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 self-center sm:w-auto sm:flex-row lg:self-start">
                <Magnet range={90} strength={30}>
                  <Button
                    variant="gold"
                    size="lg"
                    asChild
                    className="w-full font-heading font-bold sm:w-auto btn-sheen shadow-lg shadow-brand-gold/20"
                  >
                    <a
                      href={getWhatsAppLink(WHATSAPP_MESSAGES.instantLoan)}
                      onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.instantLoan)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap className="h-5 w-5" />
                      Instant Loan Enquiry
                    </a>
                  </Button>
                </Magnet>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-white/30 bg-white/10 font-heading font-bold text-white hover:bg-white/20 hover:text-white sm:w-auto"
                >
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  Instant Loan in 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  50+ Bank Partners
                </span>
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  10+ Years Experience
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-fade-up" style={{ animationDelay: "260ms" }}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl">
                <img
                  src="/financial-hero.jpg"
                  alt="DHANSETU Capital Advisory and Financial Wealth Management in Kolkata"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card border border-border/40 p-4 shadow-xl md:block animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
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

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container-tight">
          {/* DHANSETU Big Brand Header */}
          <div className="mx-auto max-w-3xl text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Services
            </span>
            <h2 className="mt-3 font-heading text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              <ShinyText
                text="DHANSETU"
                speed={3.5}
                color="#e8a33d"
                shineColor="#ffffff"
                spread={90}
                className="font-heading font-extrabold"
              />
            </h2>
            <p className="mt-1 font-heading text-base font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-lg">
              Capital Advisory & Financial Services
            </p>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Complete loan, insurance & wealth investment solutions under one trusted roof.
            </p>
          </div>

          {/* Core Financial Pillars Showcase Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 [&>*]:reveal">
            {/* Instant Loans & Credit Solutions Card */}
            <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/loans-investments.jpg"
                  alt="Loan consultation and instant approval at DhanSetu"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg font-bold text-foreground">
                  Instant Loans & Credit Solutions
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Fast capital disbursement with 50+ banking partners in Kolkata.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {[
                  "Instant Loan / Insta Loan (24-Hour Approval & Disbursal)",
                  "Home Loan, Business Loan, Personal Loan & Mortgage (LAP)",
                  "Cash Credit (CC) & Over Draft (OD) Working Capital",
                  "Balance Transfer (BT) to Lower Interest & Maximum Top-Up",
                  "Minimal Documentation & Instant Bank Sanction",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </CardContent>
              <CardContent className="pt-0">
                <Button
                  variant="gold"
                  className="w-full font-heading font-semibold btn-sheen"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.instantLoan)}
                    onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.instantLoan)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap className="h-4 w-4" />
                    Apply for Instant Loan
                  </a>
                </Button>
              </CardContent>
            </TiltedCard>

            {/* Wealth Investments & Insurance Card */}
            <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/capital-advisory.jpg"
                  alt="Financial growth, investment planning and insurance"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg font-bold text-foreground">
                  Wealth Investments & Protection
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Grow and secure your family's future with tailored advice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {[
                  "Health, Life, Motor (Car & Bike) & EMI Protect Insurance",
                  "Free Demat Account Opening & Equity Trading Guidance",
                  "Mutual Funds & Smart SIP Wealth Planning",
                  "PMS (Portfolio Management Services) for High Net-Worth Clients",
                  "Fixed Deposit (FD) Advisory with Guaranteed Stable Returns",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </CardContent>
              <CardContent className="pt-0">
                <Button
                  variant="primary-outline"
                  className="w-full font-heading font-semibold"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.services)}
                    onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.services)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consult Wealth Advisor
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </TiltedCard>
          </div>

          {/* Services Grid — Full Financial Services */}
          <div className="mt-14 reveal">
            <div className="mb-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Our{" "}
                <ShinyText
                  text="Financial Services"
                  speed={2.5}
                  color="#D4A843"
                  shineColor="#fff8e1"
                  spread={120}
                  className="font-heading font-bold"
                />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Loans, Insurance, Investments & Advisory — all your financial needs under one roof.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [&>*]:reveal">
              {[
                // LOANS & CREDIT
                { icon: Zap, label: "Instant Loan / Insta Loan", desc: "Fast approval & quick cash disbursement in 24 hours" },
                { icon: Home, label: "Home Loan", desc: "Build your dream home with lowest interest rates" },
                { icon: Briefcase, label: "Personal Loan", desc: "Quick funds for all your personal needs" },
                { icon: Landmark, label: "Business Loan", desc: "Fuel & expand your business growth easily" },
                { icon: ArrowLeftRight, label: "Balance Transfer (BT)", desc: "Reduce existing loan EMI with lower interest rates" },
                { icon: Building2, label: "Mortgage Loan (LAP)", desc: "Unlock maximum funds against your assets" },
                { icon: Building2, label: "Commercial Loan", desc: "Funding for commercial spaces, shops & offices" },
                { icon: GraduationCap, label: "Education Loan", desc: "Bright future and higher education for your child" },
                { icon: Car, label: "Car Loan", desc: "Drive your dream car with flexible EMIs" },
                { icon: CreditCard, label: "Credit Card", desc: "More freedom, rewards & lifestyle privileges" },
                { icon: Banknote, label: "Cash Credit (CC) Loan", desc: "Manage working capital & smooth cash flow" },
                { icon: Landmark, label: "Over Draft (OD) Loan", desc: "Stay flexible with an instant credit overdraft line" },
                { icon: Gem, label: "Gold Loan", desc: "Instant low-rate cash liquidity against gold" },

                // INSURANCE
                { icon: HeartPulse, label: "Health Insurance", desc: "Healthier you, safer family & secure future" },
                { icon: Car, label: "Car Insurance", desc: "Drive safe & stay completely protected on the road" },
                { icon: Bike, label: "Bike Insurance", desc: "Ride safe with instant two-wheeler coverage" },
                { icon: ShieldAlert, label: "EMI Protect Insurance", desc: "Your loan EMIs, our comprehensive protection" },
                { icon: ShieldCheck, label: "General Insurance", desc: "Wide coverage & complete asset protection" },
                { icon: Shield, label: "Life Insurance", desc: "Financial security & safety for your loved ones" },

                // INVESTMENTS & WEALTH CREATION
                { icon: PiggyBank, label: "Mutual Fund & SIP", desc: "Smart SIP & lump sum disciplined wealth creation" },
                { icon: Wallet, label: "Demat Account", desc: "Trade smart & invest better in equity markets" },
                { icon: LineChart, label: "PMS Advisory", desc: "Portfolio Management Service for higher returns" },
                { icon: Landmark, label: "Fixed Deposit (FD)", desc: "Safe investment with assured stable returns" },
                { icon: BarChart3, label: "Bonds & Securities", desc: "Secure fixed-income institutional investments" },
              ].map((service) => (
                <SpotlightCard
                  key={service.label}
                  className="group transition-all duration-300 hover:-translate-y-1"
                  spotlightColor="rgba(212, 168, 67, 0.15)"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-colors duration-300 group-hover:from-primary/30 group-hover:to-accent/30">
                    <service.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                  </div>
                  <h4 className="mt-3 font-heading text-sm font-bold text-white">
                    {service.label}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    {service.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="gold"
                size="lg"
                asChild
                className="font-heading font-bold btn-sheen shadow-lg shadow-brand-gold/20"
              >
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.services)}
                  onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.services)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire About Any Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Dhansetu
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              We combine deep financial expertise with 50+ banking partnerships to give you
              a hassle-free loan and wealth investment experience.
            </p>
          </div>

          <AnimatedList className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Instant & Fast Processing",
                description: "24-Hour Approvals. Quick loan sanctions, minimum documentation, and fast cash disbursement.",
              },
              {
                icon: Shield,
                title: "No Hidden Charges",
                description: "100% Transparent. Clear fee structures, honest advice, and direct bank rates with zero surprises.",
              },
              {
                icon: Landmark,
                title: "50+ Bank & NBFC Partners",
                description: "Maximum Options. Direct tie-ups with leading private and PSU banks to secure your lowest EMI.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="border-border/60 bg-card p-6 text-center shadow-md transition-shadow hover:shadow-lg h-full"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="section-padding bg-muted/20 border-t border-border/20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Join Our Team
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Career Opportunities at <span className="gold-text">DHANSETU</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Are you passionate about finance, banking, and wealth creation? Build a thriving career with Kolkata's fastest-growing capital advisory firm.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 [&>*]:reveal">
            {[
              {
                title: "Loan Sales Manager",
                type: "Full-Time / Field",
                icon: Landmark,
                exp: "1-3 Years",
                desc: "Drive Home Loan, Business Loan & Mortgage sales through direct client outreach and bank liaison.",
              },
              {
                title: "Instant Loan Specialist",
                type: "Full-Time / Dunlop",
                icon: Zap,
                exp: "0-2 Years",
                desc: "Manage fast-track instant loan applications, client document verification, and rapid processing.",
              },
              {
                title: "Insurance & Wealth Advisor",
                type: "Full-Time / Flexible",
                icon: ShieldCheck,
                exp: "1+ Year",
                desc: "Advise retail and HNI clients on Health/Life Insurance, Mutual Funds, and portfolio planning.",
              },
              {
                title: "Channel Partner / DSA",
                type: "Freelance / Commission",
                icon: Briefcase,
                exp: "Open to All",
                desc: "Partner with DhanSetu to refer loan and investment leads. Enjoy highest payout commissions in Kolkata.",
              },
            ].map((job) => (
              <Card
                key={job.title}
                className="group border-border/60 bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                      <job.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary px-2.5 py-0.5">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-xs text-accent font-medium">
                    Experience: {job.exp}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {job.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <Button
                    variant="primary-outline"
                    size="sm"
                    className="w-full text-xs font-heading font-semibold"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(`Hello DHANSETU HR! I am interested in applying for the ${job.title} position.`)}
                      onClick={handleWhatsAppClick(`Hello DHANSETU HR! I am interested in applying for the ${job.title} position.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply on WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Hiring CTA Banner */}
          <div className="reveal mt-12 rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-blue-dark p-8 text-center text-white md:p-10 shadow-xl">
            <h3 className="font-heading text-2xl font-bold md:text-3xl">
              Don't see the right role? Send us your CV!
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
              We are always looking for driven talent to join our Dunlop, Kolkata team. Email your resume to <span className="font-semibold text-brand-gold">{EMAIL}</span> or reach our HR desk directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button
                variant="gold"
                size="default"
                asChild
                className="font-heading font-bold btn-sheen"
              >
                <a href={`mailto:${EMAIL}?subject=Job%20Application%20-%20DhanSetu%20Capital`}>
                  <Mail className="h-4 w-4" />
                  Email Your Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                asChild
                className="border-white/30 bg-white/10 font-heading font-bold text-white hover:bg-white/20"
              >
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.career)}
                  onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.career)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat with HR on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/loans-investments.jpg"
                  alt="DhanSetu Capital Advisory Team in Kolkata"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                About Us
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                Building Trust, Fulfilling Financial Dreams
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Founded in <CountUp end={2016} duration={1.2} /> by <span className="font-semibold text-foreground">Paromita Sutradhar</span>, Dhansetu Capital Advisory is committed to fulfilling your financial aspirations.
                We provide honest advice, fast bank approvals and complete support for all
                your Loan, Insurance and Investment needs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you need an Instant Loan in 24 hours, business expansion capital,
                comprehensive family insurance, or disciplined wealth creation through Mutual Funds & SIPs, our advisory team is with you at every step.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: 10, suffix: "+", label: "Years Experience" },
                  { value: 50, suffix: "+", label: "Bank Partners" },
                  { value: 24, suffix: "h", label: "Instant Approval" },
                ].map((stat) => (
                  <div
                     key={stat.label}
                     className="rounded-xl bg-card p-4 text-center shadow-sm"
                  >
                    <p className="font-heading text-2xl font-bold text-primary">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background/50 border-t border-b border-border/20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Client Testimonials
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-3 text-muted-foreground">
              Real stories from our valued customers in Kolkata.
            </p>
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <ScrollStack itemDistance={60} itemStackDistance={16} stackPosition={100}>
              {/* Testimonial 1 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Got my loan approved within 7 days. Thank you DhanSetu, my dream home became a reality because of you."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      SG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Sudipta Ghosh</h4>
                      <p className="text-xs text-muted-foreground">Tollygunge</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 2 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Needed an urgent business loan to stock up store inventory. The DhanSetu team got it processed and disbursed in 48 hours without endless bank rounds. Truly outstanding service!"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      GK
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Gobinda Khantua</h4>
                      <p className="text-xs text-muted-foreground">Midnapore</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 3 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Needed a business loan and was exhausted running around banks. DhanSetu arranged everything under one roof smoothly."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      MD
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Manabendra Dandapat</h4>
                      <p className="text-xs text-muted-foreground">Baranagar</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 4 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Applied for an Instant Loan during an unexpected medical emergency. DhanSetu arranged approval and disbursement on the very same day without any hassle."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      AD
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Ashish Dutta</h4>
                      <p className="text-xs text-muted-foreground">Baranagar</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 5 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Got our complete family health insurance and vehicle policies structured through DhanSetu. Very transparent guidance and lowest premium rates."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      TD
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Tanmoy Das</h4>
                      <p className="text-xs text-muted-foreground">Dunlop</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 6 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "From opening a Demat account to investment guidance, DhanSetu explained everything with utmost clarity and patience."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      MS
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Md. Sultan</h4>
                      <p className="text-xs text-muted-foreground">Kamarhati</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              {/* Testimonial 7 */}
              <ScrollStackItem>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-4 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-lg font-medium italic leading-relaxed text-white/90">
                      "Applied for loans at several places, but never experienced service as transparent and fast as DhanSetu."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      RB
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Rahul Banerjee</h4>
                      <p className="text-xs text-muted-foreground">Dum Dum</p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Get In Touch
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ready to get the best loan offer, instant funds, or grow your investments? Reach
              out today.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="reveal border-brand-blue/30 bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/15 hover:border-brand-blue-light/70">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  Call Us
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="block hover:text-primary transition-colors">
                    <span className="font-semibold text-foreground">Mobile:</span> {PHONE_PRIMARY}
                  </a>
                  <a href={`tel:${PHONE_LANDLINE.replace(/[-\s]/g, "")}`} className="block mt-1 hover:text-primary transition-colors">
                    <span className="font-semibold text-foreground">Landline:</span> {PHONE_LANDLINE}
                  </a>
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Button
                    variant="primary-outline"
                    size="sm"
                    asChild
                    className="font-heading font-semibold text-xs"
                  >
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                      Call Mobile
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="font-heading font-semibold text-xs text-primary hover:bg-primary/10"
                  >
                    <a href={`tel:${PHONE_LANDLINE.replace(/[-\s]/g, "")}`}>
                      Landline
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="reveal border-brand-gold/30 bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/15 hover:border-brand-gold-light/70">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  Email
                </h3>
                <p className="mt-2 break-all text-sm text-muted-foreground">
                  {EMAIL}
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold btn-sheen"
                >
                  <a href={`mailto:${EMAIL}`}>Email Us</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="reveal border-brand-blue/30 bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/15 hover:border-brand-blue-light/70">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  Visit Us
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{ADDRESS}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold text-primary hover:bg-primary/10"
                >
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="reveal relative mt-12 overflow-hidden rounded-2xl bg-black border border-border/40 p-8 text-center text-primary-foreground md:p-14">
            {/* FloatingLines Background */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
              <FloatingLines
                linesGradient={["#1a3fa0", "#e8a33d", "#ffffff"]}
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={[8, 12, 16]}
                lineDistance={[6, 5, 4]}
                bendRadius={6.0}
                bendStrength={-0.6}
                interactive={true}
                parallax={true}
              />
            </div>
            {/* Overlay gradient for readability */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0f1f4d]/85 via-transparent to-[#0f1f4d]/90" />
            <div className="relative z-10">
              <span className="mb-3 inline-block rounded-full border border-brand-gold/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold-light">
                {TAGLINE}
              </span>
              <h3 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
                Get Your <span className="gold-text italic">Free Consultation</span> Today
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Talk to our experts and get personalized financial, loan, and investment advice
                — completely free.
              </p>
              <Magnet range={90} strength={30}>
                <Button
                  variant="gold"
                  size="lg"
                  asChild
                  className="mt-6 font-heading font-bold btn-sheen shadow-lg shadow-brand-gold/20"
                >
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.consultation)}
                    onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.consultation)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Free Consultation
                  </a>
                </Button>
              </Magnet>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue-dark py-10 text-white/80">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="flex items-start gap-3">
              <img
                src="/logo.png"
                alt="DHANSETU logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold/60 shadow-md shrink-0"
              />
              <div>
                <p className="font-heading text-xl font-bold text-white leading-none">DHANSETU</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-light">
                  Capital Advisory
                </p>
                <p className="mt-2 text-xs italic text-white/60">{TAGLINE}</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-heading font-semibold text-white">Reach Us</p>
              <p className="mt-2 flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />{ADDRESS}</p>
              <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-brand-gold" />{PHONE_PRIMARY} / {PHONE_LANDLINE}</p>
              <p className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4 text-brand-gold" /><a href={`mailto:${EMAIL}`} className="hover:text-brand-gold-light break-all">{EMAIL}</a></p>
            </div>
            <div className="text-sm md:text-right">
              <p className="font-heading font-semibold text-white">Quick Links</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
                {navLinks.map((l) => (
                  <a key={l.href} href={`#${l.href}`} className="hover:text-brand-gold-light">{l.label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/50">
            © 2026 Dhansetu Capital Advisory. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
