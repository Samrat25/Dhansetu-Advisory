import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Users2,
  TrendingUp,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Zap,
  Handshake,
  DollarSign,
  GraduationCap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import {
  getWhatsAppLink,
  handleWhatsAppClick,
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  EMAIL,
  ADDRESS,
  WHATSAPP_MESSAGES,
} from "@/lib/constants";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  const jobOpenings = [
    {
      title: "Loan Sales Manager (Home & Business)",
      type: "Full-Time",
      experience: "1 - 3 Years",
      location: "Dunlop, Kolkata",
      department: "Loan Advisory",
      description:
        "Drive retail loan origination for Home Loans, Business Loans, and LAP. Counsel clients, assess eligibility, and coordinate with bank underwriters.",
      skills: ["Retail Lending", "Client Relationship", "Credit Assessment", "Dunlop / Kolkata Market"],
    },
    {
      title: "Instant Loan & Credit Specialist",
      type: "Full-Time",
      experience: "0 - 2 Years (Freshers Welcome)",
      location: "Dunlop, Kolkata",
      department: "Digital Lending",
      description:
        "Handle inbound and digital inquiries for fast personal loans and instant cash lines. Fast-track document verification and quick-disbursement files.",
      skills: ["Inbound Sales", "KYC Verification", "Communication", "Speed Execution"],
    },
    {
      title: "Insurance & Wealth Advisor",
      type: "Full-Time / Flexible",
      experience: "1+ Years in Financial Products",
      location: "Kolkata & Suburbs",
      department: "Wealth Management",
      description:
        "Advise HNIs, families, and businesses on Term Insurance, Health Insurance, Mutual Funds, and portfolio protection plans.",
      skills: ["IRDAI / AMFI knowledge a plus", "Financial Planning", "Client Advisory"],
    },
    {
      title: "Telecalling & Customer Relations Executive",
      type: "Full-Time",
      experience: "0 - 2 Years",
      location: "Dunlop, Kolkata",
      department: "Customer Success",
      description:
        "Connect with pre-qualified leads, explain loan features, schedule consultations, and maintain transparent CRM follow-ups.",
      skills: ["Fluent Bengali & English/Hindi", "Telephony Etiquette", "Problem Solving"],
    },
    {
      title: "Field Documentation & Verification Executive",
      type: "Full-Time",
      experience: "1+ Years",
      location: "Greater Kolkata Region",
      department: "Operations",
      description:
        "Provide doorstep document pickup, KYC authentication, property inspection coordination, and bank submission handoffs.",
      skills: ["Field Operations", "KYC Compliance", "Punctuality", "Two-Wheeler required"],
    },
  ];

  const dsaBenefits = [
    {
      icon: DollarSign,
      title: "Industry-Leading Commission Payouts",
      desc: "Earn unmatched payout percentages on every disbursed home, business, personal, or instant loan file with timely, transparent monthly settlements.",
    },
    {
      icon: Handshake,
      title: "Direct Access to 50+ Top Lenders",
      desc: "You don't need individual empanelments. Submit files across HDFC, SBI, ICICI, Axis, Tata Capital, Bajaj Finserv, and NBFCs through DhanSetu.",
    },
    {
      icon: ShieldCheck,
      title: "Complete Backend & Login Support",
      desc: "Our centralized processing hub in Dunlop takes care of CAM preparation, legal coordination, credit verification, and banker follow-ups.",
    },
    {
      icon: Sparkles,
      title: "Zero Capital Investment",
      desc: "Start your own financial distribution business with zero entry fees. Suitable for CAs, tax advocates, property brokers, and independent financial agents.",
    },
  ];

  const perks = [
    {
      icon: TrendingUp,
      title: "High Performance Incentives",
      desc: "Attractive monthly & quarterly bonuses on top of competitive base pay.",
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      desc: "Continuous mentorship on lending policies, fintech tools, and credit underwriting.",
    },
    {
      icon: Users2,
      title: "Empowering Culture",
      desc: "Fast-track promotion ladders and supportive leadership right in Dunlop, Kolkata.",
    },
    {
      icon: Zap,
      title: "Modern Fintech Tools",
      desc: "Streamlined digital CRM and instant loan tracking calculators to maximize conversion.",
    },
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
              <Briefcase className="h-4 w-4" />
              <span>We Are Hiring & Expanding Across Kolkata & Bengal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white mb-6">
              Career & <span className="text-brand-gold">Opportunity</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Join Kolkata's fastest-growing capital and financial advisory firm. Whether you want to build a rewarding career or partner with us as a high-earning DSA Channel Partner, DhanSetu provides the perfect platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-lg shadow-brand-gold/25 btn-sheen"
                asChild
              >
                <a href={`mailto:${EMAIL}?subject=Application for Career / Opportunity at DhanSetu`}>
                  <Mail className="h-5 w-5 mr-2" />
                  Email Resume ({EMAIL})
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold"
                onClick={handleWhatsAppClick("Hello DHANSETU HR! I am interested in exploring Career and Partnership Opportunities with DhanSetu Capital Advisory.")}
              >
                <MessageCircle className="h-5 w-5 mr-2 text-brand-gold" />
                Connect with HR on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Channel Partner (DSA) Opportunity Spotlight */}
        <section className="py-20 bg-gradient-to-b from-[#0a1435]/60 via-background to-background border-b border-border/20">
          <div className="container-tight">
            <div className="max-w-4xl mx-auto rounded-3xl border-2 border-brand-gold/40 bg-card/70 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy-dark text-xs font-bold uppercase tracking-wider px-6 py-1.5 rounded-bl-xl font-heading">
                High Earning Potential
              </div>

              <div className="mb-8">
                <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">
                  Business Opportunity
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1 mb-3">
                  Become a DhanSetu Channel Partner / DSA
                </h2>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                  Are you a Chartered Accountant, Tax Consultant, Insurance Agent, Real Estate Associate, or Financial Advisor? Partner with DhanSetu to offer full-suite loan and investment solutions to your existing client base and earn attractive commission payouts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {dsaBenefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-border/40 hover:border-brand-gold/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-bold font-heading text-white">
                          {b.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed pl-13">
                        {b.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/30">
                <div>
                  <h4 className="text-white font-bold font-heading text-lg">
                    Ready to Partner with Us?
                  </h4>
                  <p className="text-xs text-white/60">
                    Onboarding takes under 24 hours with dedicated relationship support.
                  </p>
                </div>
                <Button
                  variant="gold"
                  size="default"
                  className="font-heading font-semibold shadow-md btn-sheen"
                  onClick={handleWhatsAppClick("Hello DhanSetu Team! I want to enroll as a Channel Partner / DSA with DhanSetu Capital Advisory.")}
                >
                  <Handshake className="h-4 w-4 mr-2" />
                  Join as Channel Partner
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Job Openings */}
        <section className="py-20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Full-Time & Part-Time Roles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2 mb-4">
                Current Career Openings
              </h2>
              <p className="text-white/70 text-base">
                Discover roles tailored to your ambition. We provide an energetic work culture, modern infrastructure, and room for exponential growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                          {job.department}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-brand-gold" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/20">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((s, si) => (
                        <span
                          key={si}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-white/70 border border-border/40"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="gold"
                      size="sm"
                      className="font-heading font-semibold"
                      onClick={handleWhatsAppClick(`Hello DHANSETU HR! I would like to apply for the position: ${job.title}. Here is my profile.`)}
                    >
                      Apply for this Role
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work at DhanSetu (Culture & Perks) */}
        <section className="py-20 bg-white/[0.02] border-t border-border/20">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Life & Growth at <span className="text-brand-gold">DhanSetu</span>
              </h2>
              <p className="text-white/70 text-base">
                We believe when our team grows, our clients prosper. Here is what you can expect when you join our family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-card/40 border border-border/30 text-center"
                  >
                    <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Direct Application CTA */}
        <section className="py-16 bg-gradient-to-r from-[#0d1c47] via-[#122b75] to-[#0d1c47] border-y border-border/40 text-center">
          <div className="container-tight max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Don't See Your Exact Role?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              We are always on the lookout for motivated talent. Send your CV directly to our HR team and we will reach out when a relevant opportunity arises.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-xl shadow-brand-gold/30 btn-sheen"
                asChild
              >
                <a href={`mailto:${EMAIL}?subject=General Application - DhanSetu Capital Advisory`}>
                  <Mail className="h-5 w-5 mr-2" />
                  Email CV to {EMAIL}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold"
              >
                <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                  Call HR: {PHONE_PRIMARY}
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
