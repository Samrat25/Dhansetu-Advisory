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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "+91 XXXXX XXXXX";
const ADDRESS = "[Your Office Address, Kolkata]";

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
              className="h-10 w-auto md:h-11"
            />
            <div className="hidden flex-col items-start sm:flex">
              <span className="font-heading text-lg font-bold leading-tight text-foreground md:text-xl">
                DHANSETU
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Capital Advisory & Properties
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
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              variant="gold"
              size="sm"
              asChild
              className="font-heading font-semibold"
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
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="gold" asChild className="w-full font-heading font-semibold">
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
        <div className="container-tight relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col items-start text-center lg:text-left">
              <span className="mb-3 inline-block self-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm lg:self-start">
                Capital Advisory & Properties
              </span>
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Your Dream Home & Loan{" "}
                <span className="text-accent">– One Solution</span>
              </h1>
              <p className="mt-5 max-w-xl self-center text-base leading-relaxed text-white/90 sm:text-lg lg:self-start">
                DHANSETU helps you find the perfect property and the right loan
                in Kolkata. Trusted real estate advisory backed by fast,
                transparent financing support.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 self-center sm:w-auto sm:flex-row lg:self-start">
                <Button
                  variant="gold"
                  size="lg"
                  asChild
                  className="w-full font-heading font-bold sm:w-auto"
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
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
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
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
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
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-white p-4 shadow-xl md:block">
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
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
            <Card className="border-border/60 bg-card shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  Phone
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {PHONE_NUMBER}
                </p>
                <Button
                  variant="primary-outline"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold"
                >
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  WhatsApp
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Message us for quick replies.
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  Address
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{ADDRESS}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="mt-4 font-heading font-semibold text-primary hover:bg-primary/10"
                >
                  <a
                    href="https://maps.google.com/?q=Kolkata"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary via-brand-blue to-brand-blue-dark p-8 text-center text-primary-foreground md:p-12">
            <h3 className="font-heading text-2xl font-bold md:text-3xl">
              Get Free Consultation Today
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/90">
              Talk to our experts and get personalized property and loan advice
              — completely free.
            </p>
            <Button
              variant="gold"
              size="lg"
              asChild
              className="mt-6 font-heading font-bold"
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
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8 text-background">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="DHANSETU logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <div>
                <p className="font-heading font-bold">DHANSETU</p>
                <p className="text-xs text-background/70">
                  Capital Advisory & Properties
                </p>
              </div>
            </div>
            <p className="text-sm text-background/70">
              © 2026 Dhansetu. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
