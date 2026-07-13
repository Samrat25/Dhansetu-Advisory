import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

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
const TAGLINE = "APNAR TAKAR SOMOSSAR SETU";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-background/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
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
                DHANSETU
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
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
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
          <div className="border-t bg-background px-4 py-4 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="rounded-md px-3 py-2 text-left text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t pt-4">
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
        className="relative overflow-hidden bg-gradient-to-br from-primary via-brand-blue to-brand-blue-dark pt-28 pb-16 text-primary-foreground md:pt-36 md:pb-24"
      >
        {/* Decorative gold glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-blue-light/40 blur-3xl" />
        <div className="container-tight relative z-10">
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
                className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                Your Dream Home & Loan{" "}
                <span className="gold-text italic">— One Bridge.</span>
              </h1>
              <p
                className="mt-6 max-w-xl self-center text-base leading-relaxed text-white/85 sm:text-lg lg:self-start animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                DHANSETU is your bridge to the perfect property and the right
                loan in Kolkata — honest advisory, 20+ banking partners,
                approvals in as little as 7 days.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 self-center sm:w-auto sm:flex-row lg:self-start">
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
                  20+ Bank Partners
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
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-white p-4 shadow-xl md:block animate-float-slow">
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
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Offer
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-muted-foreground">
              Complete property and finance solutions under one trusted roof.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 [&>*]:reveal">
            {/* Properties Card */}
            <Card className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
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
                <CardTitle className="font-heading text-xl font-bold text-foreground">
                  DHANSETU PROPERTIES
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Buy your dream property with complete legal support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Sells Flats, Plots, Houses & Commercial Spaces",
                  "RERA Approved Projects in Kolkata & Nearby",
                  "Full Legal Documentation Support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
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
            </Card>

            {/* Capital Advisory Card */}
            <Card className="group overflow-hidden border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
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
                <CardTitle className="font-heading text-xl font-bold text-foreground">
                  DHANSETU CAPITAL ADVISORY
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Loans made simple with 20+ banking partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Home Loan, Business Loan, Loan Against Property",
                  "Tied up with 20+ Banks & NBFCs",
                  "Low Interest Rate | Fast Approval in 7 Days",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </CardContent>
              <CardContent className="pt-0">
                <Button
                  variant="gold"
                  className="w-full font-heading font-semibold"
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
            </Card>
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 [&>*]:reveal">
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
                className="border-border/60 bg-card p-6 text-center shadow-md transition-shadow hover:shadow-lg"
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
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                Building Trust, Fulfilling Dreams
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Founded in 2026, Dhansetu is committed to fulfilling your dreams.
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
                  { value: "10+", label: "Years Experience" },
                  { value: "20+", label: "Bank Partners" },
                  { value: "7", label: "Days Approval" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-card p-4 text-center shadow-sm"
                  >
                    <p className="font-heading text-2xl font-bold text-primary">
                      {stat.value}
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

      {/* Contact Us Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
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
            <Card className="reveal border-border/60 bg-card shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
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

            <Card className="reveal border-border/60 bg-card shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
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

            <Card className="reveal border-border/60 bg-card shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
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

          <div className="reveal relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-brand-blue to-brand-blue-dark p-8 text-center text-primary-foreground md:p-14">
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand-blue-light/40 blur-3xl" />
            <div className="relative">
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
                WhatsApp Us Now
              </a>
            </Button>
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
