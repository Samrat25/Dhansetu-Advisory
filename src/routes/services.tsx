import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Zap,
  Home,
  Briefcase,
  Landmark,
  ArrowLeftRight,
  Building2,
  GraduationCap,
  Car,
  CreditCard,
  Banknote,
  Gem,
  HeartPulse,
  Bike,
  ShieldAlert,
  ShieldCheck,
  Shield,
  PiggyBank,
  Wallet,
  LineChart,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
  Calculator,
} from "lucide-react";
import {
  getWhatsAppLink,
  handleWhatsAppClick,
  WHATSAPP_MESSAGES,
  PHONE_PRIMARY,
  TAGLINE,
} from "@/lib/constants";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const financialServices = [
    // LOANS & CREDIT
    { icon: Zap, label: "Instant Loan / Insta Loan", desc: "Fast approval & quick cash disbursement in 24 hours" },
    { icon: Home, label: "Home Loan", desc: "Build your dream home with lowest interest rates from 8.5%" },
    { icon: Briefcase, label: "Personal Loan", desc: "Quick collateral-free funds for all your personal needs" },
    { icon: Landmark, label: "Business Loan", desc: "Fuel & expand your business growth with easy credit" },
    { icon: ArrowLeftRight, label: "Balance Transfer (BT)", desc: "Reduce existing loan EMI with lower interest rates" },
    { icon: Building2, label: "Mortgage Loan (LAP)", desc: "Unlock maximum funds against your residential or commercial asset" },
    { icon: Building2, label: "Commercial Property Loan", desc: "Funding for commercial spaces, shops & office units" },
    { icon: GraduationCap, label: "Education Loan", desc: "Bright future and higher education funding in India & abroad" },
    { icon: Car, label: "Car Loan", desc: "Drive your dream car with flexible EMIs & zero foreclosure charges" },
    { icon: CreditCard, label: "Credit Card", desc: "High credit limit, lifetime free cards & lifestyle rewards" },
    { icon: Banknote, label: "Cash Credit (CC) Loan", desc: "Manage working capital & smooth daily cash flow" },
    { icon: Landmark, label: "Over Draft (OD) Loan", desc: "Stay flexible with an instant revolving credit overdraft line" },
    { icon: Gem, label: "Gold Loan", desc: "Instant low-rate cash liquidity against physical gold ornaments" },

    // INSURANCE
    { icon: HeartPulse, label: "Health Insurance", desc: "Cashless hospitalization, family floater & critical illness cover" },
    { icon: Car, label: "Car Insurance", desc: "Comprehensive zero-depreciation coverage on the road" },
    { icon: Bike, label: "Bike Insurance", desc: "Ride safe with instant two-wheeler coverage & fast claims" },
    { icon: ShieldAlert, label: "EMI Protect Insurance", desc: "Your loan EMIs covered during job loss or health emergencies" },
    { icon: ShieldCheck, label: "General Insurance", desc: "Business shopkeeper, fire & comprehensive asset protection" },
    { icon: Shield, label: "Life & Term Insurance", desc: "High sum assured security & peace of mind for your loved ones" },

    // INVESTMENTS & WEALTH
    { icon: PiggyBank, label: "Mutual Funds & SIP", desc: "Smart disciplined SIPs & lump sum wealth creation" },
    { icon: Wallet, label: "Demat Account", desc: "Zero-account opening charges & seamless equity/F&O trading" },
    { icon: LineChart, label: "PMS Advisory", desc: "Specialized Portfolio Management Services for high net-worth investors" },
    { icon: Landmark, label: "Fixed Deposit (FD)", desc: "Higher interest bank & corporate FDs with guaranteed returns" },
    { icon: BarChart3, label: "Bonds & Securities", desc: "Government & RBI recognized fixed-income institutional investments" },
  ];

  const bankPartners = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Bank of Baroda",
    "Punjab National Bank",
    "Tata Capital",
    "Bajaj Finserv",
    "Aditya Birla Capital",
    "L&T Finance",
    "IDFC FIRST Bank",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <section className="relative py-20 bg-gradient-to-b from-[#0e1c4a] to-background overflow-hidden border-b border-border/20">
          <div className="container-tight relative z-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Services
            </span>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              Complete loan, insurance & wealth investment solutions under one trusted roof.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild className="font-heading font-bold btn-sheen">
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
              <Button variant="outline" size="lg" asChild className="border-white/20 bg-white/10 text-white font-heading font-semibold hover:bg-white/20">
                <Link to="/" hash="calculator">
                  <Calculator className="h-5 w-5" />
                  Calculate Loan EMI
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Showcase Pillars */}
        <section className="section-padding bg-muted/20">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Core Offerings
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
                Our Primary Financial Pillars
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1: Loans */}
              <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg">
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
                  <CardTitle className="font-heading text-xl font-bold">
                    Instant Loans & Credit Solutions
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Fast capital disbursement with 20+ banking partners in Kolkata.
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
                <CardContent className="pt-2">
                  <Button variant="gold" className="w-full font-heading font-semibold btn-sheen" asChild>
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

              {/* Card 2: Wealth & Insurance */}
              <TiltedCard spotlightColor="rgba(232, 163, 61, 0.2)" className="group overflow-hidden border-border/60 bg-card shadow-lg">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/financial-hero.jpg"
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
                  <CardTitle className="font-heading text-xl font-bold">
                    Wealth Investments & Protection
                  </CardTitle>
                  <CardDescription className="text-sm">
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
                <CardContent className="pt-2">
                  <Button variant="primary-outline" className="w-full font-heading font-semibold" asChild>
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
          </div>
        </section>

        {/* Complete 24-Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                All Solutions
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
                Explore All 24 Financial Products
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Click any service to consult directly with our loan & wealth desk.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {financialServices.map((service) => (
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
                  <div className="mt-4 pt-2 border-t border-white/5">
                    <a
                      href={getWhatsAppLink(`Hello DHANSETU! I am interested in ${service.label}. Please guide me on process and eligibility.`)}
                      onClick={handleWhatsAppClick(`Hello DHANSETU! I am interested in ${service.label}. Please guide me on process and eligibility.`)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-gold hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Bank Partners Bar */}
        <section className="py-14 bg-muted/30 border-t border-border/20">
          <div className="container-tight text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Our Lending Network
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold">
              Tied Up With 20+ Leading Banks & NBFCs
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {bankPartners.map((bank) => (
                <div
                  key={bank}
                  className="px-4 py-2 rounded-xl bg-card border border-border/40 text-xs font-heading font-semibold text-white/80 shadow-sm"
                >
                  {bank}
                </div>
              ))}
              <div className="px-4 py-2 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-xs font-heading font-bold text-brand-gold">
                + 15 More PSU & Private Banks
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="rounded-2xl border border-brand-gold/40 bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-blue-dark p-8 md:p-12 text-center text-white shadow-2xl">
              <h3 className="font-heading text-3xl font-bold">
                Need Help Selecting the Right Service?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
                Our Dunlop, Kolkata advisory specialists will compare bank interest rates and recommend the perfect loan or investment plan for you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="lg" asChild className="font-heading font-bold btn-sheen">
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.consultation)}
                    onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.consultation)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Free Consultation on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/30 bg-white/10 text-white font-heading font-bold hover:bg-white/20">
                  <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                    <Phone className="h-5 w-5" />
                    Call Us: {PHONE_PRIMARY}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
