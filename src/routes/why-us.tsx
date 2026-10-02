import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ShieldCheck,
  Zap,
  Landmark,
  BadgePercent,
  Clock,
  FileCheck2,
  Users2,
  Headphones,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calculator,
  MessageCircle,
  Phone,
  Sparkles,
  Award,
  Building,
  Scale,
} from "lucide-react";
import {
  getWhatsAppLink,
  handleWhatsAppClick,
  WHATSAPP_MESSAGES,
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  TAGLINE,
} from "@/lib/constants";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
});

function WhyUsPage() {
  const advantages = [
    {
      icon: Zap,
      title: "Ultra-Fast Approvals & Disbursal",
      desc: "Get Instant Loan sanctions in as little as 24 hours. Our direct tie-ups with credit underwriting teams expedite your file without bureaucratic bottlenecks.",
      highlight: "24h Disbursals",
    },
    {
      icon: Landmark,
      title: "50+ Leading Banking Partners",
      desc: "We compare rates across HDFC, SBI, ICICI, Axis, Bajaj Finserv, Tata Capital, and 45+ premier institutions to lock in the lowest interest rates for you.",
      highlight: "50+ Lenders",
    },
    {
      icon: BadgePercent,
      title: "Lowest Market Interest Rates",
      desc: "Our high loan volume allows us to negotiate special discounted interest rates and fee waivers directly on your behalf, saving lakhs over your tenure.",
      highlight: "From 8.5% p.a.",
    },
    {
      icon: FileCheck2,
      title: "Minimal Paperwork & Doorstep Pickup",
      desc: "Forget visiting bank branches. Our relationship executives collect documents from your doorstep or verify them digitally with end-to-end assistance.",
      highlight: "100% Hassle-Free",
    },
    {
      icon: Scale,
      title: "100% Unbiased Advisory",
      desc: "We work for you, not the banks. Our objective recommendations ensure you choose the loan or investment plan that actually fits your balance sheet.",
      highlight: "Zero Bias",
    },
    {
      icon: Headphones,
      title: "Dedicated Personal Loan Officer",
      desc: "From initial application and CIBIL profile review to sanction and final disbursement, a dedicated Dunlop-based specialist manages your entire process.",
      highlight: "Single Point Contact",
    },
  ];

  const comparisonRows = [
    {
      feature: "Number of Lenders",
      dhansetu: "50+ Banks & NBFCs compared simultaneously",
      regularBank: "Only 1 bank's in-house fixed products",
    },
    {
      feature: "Interest Rate Optimization",
      dhansetu: "We negotiate the lowest available rate across all institutions",
      regularBank: "Standard non-negotiable retail rate",
    },
    {
      feature: "Approval Speed",
      dhansetu: "Instant Loans within 24h; Home/Business in 3-5 days",
      regularBank: "2 to 4 weeks with frequent branch visits",
    },
    {
      feature: "Documentation Support",
      dhansetu: "End-to-end doorstep document pickup & digital upload",
      regularBank: "Customer must prepare & submit all papers manually",
    },
    {
      feature: "CIBIL / Credit Optimization",
      dhansetu: "Expert pre-screening to protect CIBIL score from multiple hard hits",
      regularBank: "Immediate hard credit inquiry regardless of fit",
    },
    {
      feature: "Charges & Transparency",
      dhansetu: "Zero hidden charges with complete breakdown upfront",
      regularBank: "Processing fees, admin fees, and legal charges often hidden",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Free Profile Consultation",
      desc: "Share your requirements via WhatsApp, phone, or in person at our Dunlop office. We assess your credit profile, income, and capital goals.",
    },
    {
      num: "02",
      title: "Multi-Lender Comparison",
      desc: "We analyze deals across 50+ partner banks and NBFCs, shortlisting the top 3 with the lowest interest rate and maximum sanction value.",
    },
    {
      num: "03",
      title: "Seamless Verification",
      desc: "Our team handles all paperwork, KYC, financial audits, and submission to the bank underwriting desk with zero hassle for you.",
    },
    {
      num: "04",
      title: "Sanction & Disbursal",
      desc: "Receive your formal sanction letter, sign the agreement, and funds are credited directly into your registered bank account.",
    },
  ];

  const metrics = [
    { value: "₹500+ Cr", label: "Capital Disbursed", desc: "Across personal, business & mortgages" },
    { value: "50+", label: "Banking Partners", desc: "India's leading banks & AAA-rated NBFCs" },
    { value: "15,000+", label: "Clients Empowered", desc: "Individuals, professionals & enterprises" },
    { value: "98.4%", label: "Approval Success", desc: "High sanction rate with tailored matching" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1e4a]/60 via-background to-background pointer-events-none" />
          <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-gold mb-6 shadow-sm">
              <Award className="h-4 w-4" />
              <span>Kolkata's Premier Capital & Financial Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white mb-6">
              Why Choose <span className="text-brand-gold">DhanSetu</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              We bridge the gap between your aspirations and India's top financial institutions. Experience transparent advisory, unmatched interest rates, and lightning-fast disbursals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-lg shadow-brand-gold/25 btn-sheen"
                onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.consultation)}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold"
              >
                <Link to="/" hash="calculator">
                  <Calculator className="h-5 w-5 mr-2 text-brand-gold" />
                  Calculate Your EMI
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Metrics Strip */}
        <section className="py-12 bg-white/[0.02] border-b border-border/20">
          <div className="container-tight">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/40 border border-border/30">
                  <div className="text-3xl sm:text-4xl font-extrabold text-brand-gold font-heading mb-1">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-white/60">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Core Advantages */}
        <section className="py-20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                The DhanSetu <span className="text-brand-gold">Advantage</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg">
                Navigating loans and investments shouldn't be stressful. Here is why thousands of clients trust us with their financial journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    className="p-8 rounded-2xl bg-card/60 border border-border/30 hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-12 w-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                          {adv.highlight}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white mb-3">
                        {adv.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/20 flex items-center text-xs font-semibold text-brand-gold-light">
                      <CheckCircle2 className="h-4 w-4 mr-1.5 text-brand-gold" />
                      Verified Guarantee
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* DhanSetu vs Regular Bank Comparison */}
        <section className="py-20 bg-gradient-to-b from-[#0a1435]/50 via-background to-background border-y border-border/20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Clear Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2 mb-4">
                DhanSetu vs. Approaching a Bank Directly
              </h2>
              <p className="text-white/70 text-base">
                Why applying through our advisory gives you leverage, lower rates, and greater approval chances.
              </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl border border-border/40 overflow-hidden shadow-2xl bg-card/50">
              <div className="grid grid-cols-12 bg-[#0e1d4d] border-b border-border/40 p-4 sm:p-5 text-sm sm:text-base font-bold font-heading">
                <div className="col-span-4 sm:col-span-4 text-white/80">Parameters</div>
                <div className="col-span-4 sm:col-span-4 text-brand-gold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> DhanSetu Capital
                </div>
                <div className="col-span-4 sm:col-span-4 text-white/50">Direct Bank Branch</div>
              </div>

              <div className="divide-y divide-border/20">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="col-span-4 sm:col-span-4 font-semibold text-white">
                      {row.feature}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-brand-gold-light pr-2 font-medium">
                      {row.dhansetu}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-white/60">
                      {row.regularBank}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Approval Journey */}
        <section className="py-20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Simple & Streamlined
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2 mb-4">
                How We Disburse Your Loan in 4 Steps
              </h2>
              <p className="text-white/70 text-base">
                Zero confusion. We do the heavy lifting while keeping you informed at every milestone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-card/40 border border-border/30 hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div className="text-4xl font-extrabold font-heading text-brand-gold/30 mb-4">
                    {st.num}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Callout */}
        <section className="py-16 bg-gradient-to-r from-[#0d1c47] via-[#122b75] to-[#0d1c47] border-y border-border/40 text-center">
          <div className="container-tight max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Ready to Secure the Best Loan Terms?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Speak directly with our senior financial advisors in Dunlop, Kolkata. No obligation, 100% confidential.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-xl shadow-brand-gold/30 btn-sheen"
                onClick={handleWhatsAppClick("Hello DHANSETU! I visited your Why Us page and want a consultation for my financial needs.")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold"
              >
                <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                  Call: {PHONE_PRIMARY}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
