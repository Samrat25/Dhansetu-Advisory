import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "918240349546";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_PRIMARY = "+91 82403 49546";
const PHONE_LANDLINE = "+91 33 7963 3264";
const EMAIL = "contact@dhansetuadvisory.com";
const ADDRESS = "18/1, Vivekananda Road, Dunlop, Kolkata - 108";
const TAGLINE = "আপনার টাকার সমস্যার সেতু";

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
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              alt="DHANSETU logo"
              width={44}
              height={44}
              className="h-11 w-auto md:h-12 drop-shadow-sm"
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
                href={WHATSAPP_LINK}
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
                    href={WHATSAPP_LINK}
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
                  text="Your Home & Loan Solution - All Under One Roof"
                  animateBy="words"
                  className="font-heading font-extrabold"
                />
              </h1>
              <p
                className="mt-3 text-lg font-semibold text-brand-gold-light tracking-wide animate-fade-up md:text-xl lg:text-2xl"
                style={{ animationDelay: "130ms" }}
              >
                বাড়ি কিনবেন? লোন লাগবে? সব পাবেন এক জায়গায়
              </p>
              <p
                className="mt-6 max-w-xl self-center text-base leading-relaxed text-white/85 sm:text-lg lg:self-start animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                DHANSETU is your bridge to the perfect property and the right
                loan in Kolkata — honest advisory, 50+ banking partners,
                approvals in as little as 7 days.
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
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Us
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
                  RERA Approved
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
                  src="/property-house.jpg"
                  alt="Modern residential property in Kolkata"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card border border-border/40 p-4 shadow-xl md:block animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground">
                      7 Days
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fast Loan Approval
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
              Capital Advisory & Properties
            </p>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Complete property, loan & investment solutions under one trusted roof.
            </p>
          </div>

          {/* Properties & Capital Advisory Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 [&>*]:reveal">
            {/* Properties Card */}
            <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/property-apartments.jpg"
                  alt="Modern apartment buildings in Kolkata"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg font-bold text-foreground">
                  Properties
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Buy your dream property with complete legal support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {[
                  "Flats, Plots, Houses & Commercial Spaces",
                  "RERA Approved Projects in Kolkata & Nearby",
                  "Full Legal Documentation Support",
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
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Properties
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </TiltedCard>

            {/* Capital Advisory Card */}
            <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/capital-advisory.jpg"
                  alt="Financial growth and loan advisory concept"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg font-bold text-foreground">
                  Capital Advisory
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Loans made simple with 50+ banking partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Personal Loan, Business Loan, Home Loan",
                  "Mortgage Loan, Land Purchase Loan, Gold Loan",
                  "Education Loan, Car Loan",
                  "Mutual Fund, PMS, Bonds, Demat Account",
                  "Insurance (GI, LI, HI) & Any Investment",
                  "Legal Advisory & Documentation Support",
                  "Property Valuation Services",
                  "Mutation Assistance",
                  "Tied up with 50+ Banks & NBFCs",
                  "Low Interest Rate | Fast Approval in 7 Days",
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
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply For Loan
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
                Loans, Investments & Insurance — all under one roof with 50+ banking partners.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [&>*]:reveal">
              {[
                { icon: Home, label: "Home Loan", desc: "Best rates for your dream home" },
                { icon: Briefcase, label: "Personal Loan", desc: "Quick personal finance solutions" },
                { icon: Landmark, label: "Business Loan", desc: "Fuel your business growth" },
                { icon: Building2, label: "Mortgage Loan", desc: "Loan against your property" },
                { icon: Mountain, label: "Land Purchase Loan", desc: "Finance your land purchase" },
                { icon: Gem, label: "Gold Loan", desc: "Instant loan against gold" },
                { icon: GraduationCap, label: "Education Loan", desc: "Invest in your future" },
                { icon: Car, label: "Car Loan", desc: "Drive your dream car today" },
                { icon: PiggyBank, label: "Mutual Fund", desc: "Smart SIP & lump sum investments" },
                { icon: ShieldCheck, label: "General Insurance", desc: "Protect your assets" },
                { icon: HeartPulse, label: "Health Insurance", desc: "Secure your family's health" },
                { icon: Shield, label: "Life Insurance", desc: "Financial safety for loved ones" },
                { icon: LineChart, label: "PMS", desc: "Portfolio Management Service" },
                { icon: BarChart3, label: "Bonds", desc: "Fixed income investments" },
                { icon: Wallet, label: "Demat Account", desc: "Open your demat & trading" },
                { icon: CircleDollarSign, label: "Other Investments", desc: "Customised investment solutions" },
                { icon: ShieldCheck, label: "Legal Advisory", desc: "Property legal check, documentation & agreement verification" },
                { icon: Building2, label: "Property Valuation", desc: "Certified property valuation for sale, loan or legal purposes" },
                { icon: Layers, label: "Mutation Services", desc: "Land/property mutation assistance with government records" },
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
                  href={WHATSAPP_LINK}
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
              We combine property expertise with financial know-how to give you
              a hassle-free experience.
            </p>
          </div>

          <AnimatedList className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: "One Stop Solution",
                description: "Property + Loan Together. Find your property and finance it through the same trusted partner.",
              },
              {
                icon: Shield,
                title: "No Hidden Charges",
                description: "Transparent Process. Clear fee structure and honest advice at every step.",
              },
              {
                icon: Clock,
                title: "10+ Years Experience",
                description: "Trusted Service. Years of real estate and loan advisory expertise in Kolkata.",
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

      {/* About Us Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/property-house.jpg"
                  alt="Premium property in Kolkata"
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
                Building Trust, Fulfilling Dreams
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Founded in <CountUp end={2016} duration={1.2} /> by <span className="font-semibold text-foreground">Paromita Sutradhar</span>, Dhansetu is committed to fulfilling your dreams.
                We provide honest advice, fast service and complete support for
                your Property and Finance needs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you are buying your first home, investing in commercial
                real estate, or need a quick loan approval, our team is with
                you at every step.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: 10, suffix: "+", label: "Years Experience" },
                  { value: 50, suffix: "+", label: "Bank Partners" },
                  { value: 7, suffix: "", label: "Days Approval" },
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
            <ScrollStack useWindowScroll={true} itemDistance={50} itemScale={0.03} itemStackDistance={20}>
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
                      "৭ দিনে লোন অ্যাপ্রুভাল করিয়ে দিয়েছে। ধন্যবাদ ধনসেতু"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      গ
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">গ্রাহক</h4>
                      <p className="text-xs text-muted-foreground">কলকাতা</p>
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
                    <p className="text-base leading-relaxed text-white/90 italic">
                      "Got my loan approved in just 7 days. Thank you Dhansetu!"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      MR
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Mr. Roy</h4>
                      <p className="text-xs text-muted-foreground">Kolkata</p>
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
                      "খুব কম সুদে ব্যবসার লোন পেয়েছি ধনসেতুর মাধ্যমে। খুব ভালো সার্ভিস।"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      অ
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">অমিত দেবনাথ</h4>
                      <p className="text-xs text-muted-foreground">হাওড়া</p>
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
                    <p className="text-base leading-relaxed text-white/90 italic">
                      "DhanSetu legal team solved all our property registration hurdles smoothly. Recommended!"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      SS
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Sneha Sengupta</h4>
                      <p className="text-xs text-muted-foreground">Salt Lake, Kolkata</p>
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
                      "লোন আর ফ্ল্যাট কেনা দুটোরই দারুণ সমাধান এক ছাদের নিচে পেলাম।"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      স
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">সুজয় দাস</h4>
                      <p className="text-xs text-muted-foreground">Dunlop, কলকাতা</p>
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
              Ready to find your dream home or get the best loan offer? Reach
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
                  {PHONE_PRIMARY}
                  <br />
                  {PHONE_LANDLINE}
                </p>
                <Button
                  variant="primary-outline"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold"
                >
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                    Call Now
                  </a>
                </Button>
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
                Talk to our experts and get personalized property and loan advice
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
                    href={WHATSAPP_LINK}
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
                width={44}
                height={44}
                className="h-11 w-auto"
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
