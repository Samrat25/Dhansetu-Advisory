import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
  Sparkles,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import {
  getWhatsAppLink,
  openWhatsApp,
  handleWhatsAppClick,
  PHONE_PRIMARY,
  PHONE_LANDLINE,
  EMAIL,
  ADDRESS,
  TAGLINE,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Instant Loan / Insta Loan",
    amount: "₹ 5,00,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Inquiry - DhanSetu Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Service Required:* ${formData.service}
*Estimated Amount:* ${formData.amount}
*Message:* ${formData.message || "Please provide consultation"}`;

    openWhatsApp(text);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1e4a]/60 via-background to-background pointer-events-none" />
          <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-gold mb-6 shadow-sm">
              <Building2 className="h-4 w-4" />
              <span>Dunlop, Kolkata Consultation Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white mb-6">
              Contact <span className="text-brand-gold">DhanSetu</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Have questions about loans, interest rates, or investments? Visit our Dunlop office or speak directly with our senior financial advisors.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="font-heading font-semibold shadow-lg shadow-brand-gold/25 btn-sheen"
                onClick={handleWhatsAppClick("Hello DHANSETU! I am contacting you through the Contact page for financial assistance.")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Instant WhatsApp Chat
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold"
              >
                <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                  Call: {PHONE_PRIMARY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container-tight">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Our Office</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {ADDRESS}
                </p>
                <span className="text-xs text-brand-gold font-semibold mt-2 inline-block">
                  Dunlop Crossing, Kolkata
                </span>
              </SpotlightCard>

              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Phone Lines</h3>
                <p className="text-sm font-semibold text-white/90">
                  Mobile: {PHONE_PRIMARY}
                </p>
                <p className="text-sm font-semibold text-white/90">
                  Landline: {PHONE_LANDLINE}
                </p>
                <span className="text-xs text-brand-gold font-semibold mt-2 inline-block">
                  Direct Line to Advisor
                </span>
              </SpotlightCard>

              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Official Email</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-semibold text-brand-gold hover:underline break-all"
                >
                  {EMAIL}
                </a>
                <p className="text-xs text-white/60 mt-2">
                  Official inquiries & resumes
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-6 rounded-2xl bg-card/50 border border-border/30">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">Working Hours</h3>
                <p className="text-xs sm:text-sm text-white/80">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Sunday: Closed / Prior Appointment
                </p>
              </SpotlightCard>
            </div>

            {/* Interactive Form & Map Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Consultation Inquiry Form */}
              <div className="lg:col-span-7 bg-card/60 border border-border/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
                <div className="mb-6">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    Quick Response Guaranteed
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    Request a Free Consultation
                  </h2>
                  <p className="text-white/70 text-sm mt-1">
                    Fill in your requirements. Our loan executive will call you within 15 minutes.
                  </p>
                </div>

                {submitted && (
                  <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Inquiry submitted! We have also routed your details to WhatsApp for immediate priority service.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        <option value="Instant Loan / Insta Loan">Instant Loan / Insta Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Mortgage (LAP)">Mortgage (LAP)</option>
                        <option value="Car / Auto Loan">Car / Auto Loan</option>
                        <option value="Life & Health Insurance">Life & Health Insurance</option>
                        <option value="Mutual Funds & Investments">Mutual Funds & Investments</option>
                        <option value="Channel Partner / DSA Inquiry">Channel Partner / DSA Inquiry</option>
                        <option value="Career Application">Career Application</option>
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
                    Submit & Connect on WhatsApp
                  </Button>
                </form>
              </div>

              {/* Map & Office Directions card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-border/40 bg-card/60 p-6 sm:p-8 shadow-xl">
                  <h3 className="text-xl font-bold font-heading text-white mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                    Dunlop Headquarters
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Located conveniently on Vivekananda Road near Dunlop crossing in North Kolkata. Easily reachable via Dunlop Bus Stand, Baranagar Metro Station, and Belgharia Expressway.
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
                      Open in Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 to-transparent p-6">
                  <h4 className="text-white font-bold font-heading text-base mb-1">
                    Prefer direct landline assistance?
                  </h4>
                  <p className="text-xs text-white/70 mb-3">
                    Call our Dunlop office landline desk directly during office hours:
                  </p>
                  <a
                    href={`tel:${PHONE_LANDLINE}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-light"
                  >
                    <Phone className="h-4 w-4" />
                    {PHONE_LANDLINE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
