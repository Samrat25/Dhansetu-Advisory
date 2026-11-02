import React, { useState } from "react";
import {
  AlertTriangle,
  Lock,
  ShieldAlert,
  Clock,
  CreditCard,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  FileWarning,
  Copy,
  Check,
  Scale,
  Ban,
  AlertCircle,
} from "lucide-react";
import { PAYMENT_NOTICE_CONFIG } from "@/config/paymentNotice";

export default function PaymentRequired() {
  const [copied, setCopied] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello ${PAYMENT_NOTICE_CONFIG.developerName},\n\nI am contacting you regarding the outstanding payment for the ${PAYMENT_NOTICE_CONFIG.clientName} website. We are processing the payment immediately to unlock the site. Please share your account/UPI details.`
  );

  const whatsappUrl = `https://wa.me/${PAYMENT_NOTICE_CONFIG.developerWhatsApp}?text=${whatsappMessage}`;
  const mailtoUrl = `mailto:${PAYMENT_NOTICE_CONFIG.developerEmail}?subject=${encodeURIComponent(
    `URGENT: Payment Settlement - ${PAYMENT_NOTICE_CONFIG.clientName} Website`
  )}&body=${encodeURIComponent(
    `Hello ${PAYMENT_NOTICE_CONFIG.developerName},\n\nWe have initiated the payment settlement for the DhanSetu Capital Advisory website. Please find the details attached.`
  )}`;

  const handleCopyDetails = () => {
    const textToCopy = `Developer: ${PAYMENT_NOTICE_CONFIG.developerName}\nEmail: ${PAYMENT_NOTICE_CONFIG.developerEmail}\nPhone: ${PAYMENT_NOTICE_CONFIG.developerPhone}\nRef: ${PAYMENT_NOTICE_CONFIG.noticeReference}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Urgent Alert Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white px-4 py-3 text-center text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg">
        <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping" />
        <span className="font-bold uppercase tracking-wider">URGENT ADMINISTRATIVE NOTICE:</span>
        <span>SERVICE SUSPENDED PENDING PAYMENT CLEARANCE</span>
      </div>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center">
        {/* Main Card */}
        <div className="bg-slate-900/90 border border-red-500/30 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden p-6 sm:p-10 relative">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge & Status Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              HTTP 402 • Payment Required
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-mono">
              Ref: <span className="text-slate-200 font-medium">{PAYMENT_NOTICE_CONFIG.noticeReference}</span>
            </div>
          </div>

          {/* Headline & Warning */}
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 mb-5">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Website Temporarily Suspended
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Public access, loan application routing, customer tools, and online inquiries for{" "}
              <span className="text-red-400 font-semibold">{PAYMENT_NOTICE_CONFIG.clientName}</span> have been
              suspended due to overdue payment obligations.
            </p>
          </div>

          {/* CRITICAL OWNERSHIP DECLARATION */}
          <div className="bg-gradient-to-br from-amber-950/40 via-red-950/30 to-slate-900 border-2 border-amber-500/40 rounded-xl p-5 sm:p-7 mb-8 relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-amber-500/20 text-amber-300 rounded-lg shrink-0 mt-0.5">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Legal & Title Notice
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-amber-200">
                    Developer Ownership & Intellectual Property Statement
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  <strong className="text-white underline decoration-amber-400">
                    This website is the intellectual property of the Developer, NOT the client.
                  </strong>{" "}
                  Pursuant to intellectual property regulations and software engineering service terms, all source
                  code, design, custom features, calculators, deployment setups, and assets remain the exclusive
                  property of the <strong className="text-amber-300">{PAYMENT_NOTICE_CONFIG.developerName}</strong> until
                  all contractual dues are paid in full.
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  The client (<span className="text-slate-100 font-semibold">{PAYMENT_NOTICE_CONFIG.clientName}</span>)
                  holds <strong>no ownership, license, or right of use</strong> over this software while payments remain
                  unsettled. Full legal ownership and source access will be transferred immediately upon cleared receipt
                  of the outstanding balance.
                </p>
              </div>
            </div>
          </div>

          {/* Grid of details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Ban className="w-4 h-4" /> Current State
              </div>
              <p className="text-lg font-bold text-white">Access Locked</p>
              <p className="text-xs text-slate-400 mt-1">All front-facing customer services are paused.</p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" /> Priority Level
              </div>
              <p className="text-lg font-bold text-white">Critical / Urgent</p>
              <p className="text-xs text-slate-400 mt-1">Payment required immediately to prevent site decommissioning.</p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" /> Restoration Time
              </div>
              <p className="text-lg font-bold text-white">Immediate</p>
              <p className="text-xs text-slate-400 mt-1">Website is restored instantly upon payment verification.</p>
            </div>
          </div>

          {/* Steps for the client */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 sm:p-6 mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <FileWarning className="w-4 h-4 text-amber-400" /> Action Required from Client to Restore Website
            </h3>
            <ol className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong>Clear Pending Dues:</strong> Settle the outstanding invoice balance in full using the agreed
                  payment method (UPI / Bank Transfer).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong>Send Confirmation:</strong> Share the payment transaction receipt / UTR number with the
                  developer via WhatsApp or Email.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>Immediate Unlocking:</strong> Once funds are confirmed, the developer will immediately reactivate
                  all site services, forms, calculators, and hand over administrative access.
                </span>
              </li>
            </ol>
          </div>

          {/* Developer Contact CTAs */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Developer & Rightsholder</p>
                <h4 className="text-lg font-bold text-white">{PAYMENT_NOTICE_CONFIG.developerName}</h4>
                <p className="text-xs text-slate-400">{PAYMENT_NOTICE_CONFIG.developerRole}</p>
              </div>

              <button
                onClick={handleCopyDetails}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied to Clipboard" : "Copy Contact Info"}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Developer
              </a>

              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-950/40"
              >
                <Mail className="w-4 h-4" />
                Email Developer
              </a>

              <a
                href={`tel:${PAYMENT_NOTICE_CONFIG.developerPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition"
              >
                <Phone className="w-4 h-4" />
                Call Directly
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <span>Email: <strong className="text-slate-200">{PAYMENT_NOTICE_CONFIG.developerEmail}</strong></span>
              <span>Phone: <strong className="text-slate-200">{PAYMENT_NOTICE_CONFIG.developerPhone}</strong></span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-900">
        <p>© {new Date().getFullYear()} {PAYMENT_NOTICE_CONFIG.developerName}. All source code, design assets, and development rights reserved.</p>
        <p className="mt-1">Notice served for non-payment of professional web development and deployment services.</p>
      </footer>
    </div>
  );
}
