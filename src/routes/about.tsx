import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  Users2,
  TrendingUp,
  Landmark,
  Target,
  Compass,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
  Calculator,
  Sparkles,
} from "lucide-react";
import {
  getWhatsAppLink,
  handleWhatsAppClick,
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  EMAIL,
  ADDRESS,
  TAGLINE,
  SLOGAN,
  WHATSAPP_MESSAGES,
} from "@/lib/constants";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Absolute Integrity",
      desc: "Zero hidden charges, zero misleading promises. We prioritize your financial well-being above everything else.",
    },
    {
      icon: Users2,
      title: "Client-First Advisory",
      desc: "Every portfolio is unique. We analyze your credit history and cash flows to recommend what truly benefits you.",
    },
    {
      icon: Landmark,
      title: "Institutional Clout",
      desc: "Direct partnerships with 20+ leading banks and NBFCs enable us to negotiate premier interest rates on your behalf.",
    },
    {
      icon: TrendingUp,
      title: "Speed & Execution",
      desc: "From 24-hour instant loans to large corporate balance sheet restructuring, we deliver swift turnaround without bureaucratic red tape.",
    },
  ];

  const milestones = [
    { year: "2016", title: "Foundation in Dunlop", desc: "Established by Paromita Sutradhar with a mission to simplify financial borrowing for Kolkata residents." },
    { year: "2019", title: "Expanded Lending Network", desc: "Partnered directly with major private and public sector banks to offer competitive retail loan rates." },
    { year: "2022", title: "₹100+ Cr Disbursals", desc: "Crossed the milestone of servicing over 200+ satisfied families and business owners across Bengal." },
    { year: "2026", title: "Full-Spectrum Capital Hub", desc: "Facilitated over ₹100+ Cr across 20+ institutional partners with Instant Loans, LAP, and Wealth Advisory." },
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
              <span>Founded 2016 in Dunlop, Kolkata</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white mb-6">
              About <span className="text-brand-gold">DhanSetu</span> Capital Advisory
            </h1>

            <p className="text-xl sm:text-2xl font-heading font-medium text-brand-gold-light mb-4">
              "{TAGLINE}"
            </p>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              {SLOGAN}. We are dedicated to providing ethical, transparent, and comprehensive loan and investment solutions to individuals, families, and businesses throughout Eastern India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-lg shadow-brand-gold/25 btn-sheen"
                onClick={handleWhatsAppClick(WHATSAPP_MESSAGES.consultation)}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Speak with an Advisor
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold"
              >
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4 ml-2 text-brand-gold" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Founder & Story Section */}
        <section className="py-20">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image side */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-2xl group">
                  <img
                    src="/loans-investments.jpg"
                    alt="DhanSetu Capital Advisory Team"
                    className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1536] via-[#0b1536]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/80 backdrop-blur-md border border-border/40">
                    <p className="font-heading font-bold text-white text-base">
                      Paromita Sutradhar
                    </p>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">
                      Founder
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                      Dunlop, Kolkata Headquarters
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Content side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Our Inception & Purpose</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                  Bridging People & Capital Since 2016
                </h2>

                <p className="text-white/80 leading-relaxed text-base">
                  DhanSetu was founded with a clear conviction: accessing financial capital should be transparent, swift, and dignity-affirming. For decades, retail borrowers and MSME entrepreneurs struggled through endless bank visits, convoluted paperwork, and high hidden costs.
                </p>

                <p className="text-white/70 leading-relaxed text-sm">
                  Under the visionary leadership of <strong>Paromita Sutradhar</strong>, DhanSetu established strong institutional relationships with over 20 top private and PSU banks and premier NBFCs. Today, we bring together Instant Loans, Home Loans, Business Capital, Mortgages, Insurance, and Mutual Fund advisory all under one roof at our headquarters on Vivekananda Road, Dunlop, Kolkata.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/30">
                  <div className="p-3 rounded-lg bg-card/40 border border-border/30">
                    <div className="text-2xl font-bold font-heading text-brand-gold">₹100+ Cr</div>
                    <div className="text-xs text-white/60">Loans Facilitated</div>
                  </div>
                  <div className="p-3 rounded-lg bg-card/40 border border-border/30">
                    <div className="text-2xl font-bold font-heading text-brand-gold">200+</div>
                    <div className="text-xs text-white/60">Happy Clients</div>
                  </div>
                  <div className="p-3 rounded-lg bg-card/40 border border-border/30">
                    <div className="text-2xl font-bold font-heading text-brand-gold">20+</div>
                    <div className="text-xs text-white/60">Bank Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-[#0a1435]/50 via-background to-background border-y border-border/20">
          <div className="container-tight">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl bg-card/60 border border-border/40 relative overflow-hidden">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  To democratize access to institutional credit and wealth creation tools. We ensure that every salaried individual, homemaker, professional, and business owner secures the lowest interest rates and optimal financial advice with zero hassle.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-card/60 border border-border/40 relative overflow-hidden">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-6">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  To be recognized as Eastern India's most dependable and technologically agile financial advisory conglomerate, known for uncompromising integrity, rapid disbursements, and lifelong client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2 mb-4">
                Values That Define Our Culture
              </h2>
              <p className="text-white/70 text-base">
                In an industry where trust is paramount, our values are the compass for every recommendation we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <SpotlightCard
                    key={i}
                    className="p-6 rounded-2xl bg-card/50 border border-border/30 text-center"
                  >
                    <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {v.desc}
                    </p>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-white/[0.02] border-t border-border/20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2 mb-4">
                Our Journey of Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card/40 border border-border/30 relative"
                >
                  <div className="text-3xl font-extrabold font-heading text-brand-gold mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dunlop Office / Visit Us Card */}
        <section className="py-16">
          <div className="container-tight max-w-4xl mx-auto">
            <div className="rounded-3xl border border-brand-gold/30 bg-card/70 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                  Headquarters & Consultation Center
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Visit Our Dunlop Office
                </h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{ADDRESS}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>Mobile: {PHONE_PRIMARY} | Landline: {PHONE_LANDLINE}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>{EMAIL}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="default"
                  className="font-heading font-semibold shadow-md btn-sheen"
                  onClick={handleWhatsAppClick("Hello DHANSETU! I would like to schedule an in-person meeting at your Dunlop, Kolkata office.")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book Office Visit
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold"
                >
                  <Link to="/contact">
                    Contact Page Details
                  </Link>
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
