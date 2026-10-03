import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Home,
  Briefcase,
  Landmark,
  Building2,
  Car,
  MessageCircle,
  Phone,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  getWhatsAppLink,
  handleWhatsAppClick,
  PHONE_PRIMARY,
} from "@/lib/constants";

interface LoanTypePreset {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultAmount: number;
  defaultRate: number;
  defaultTenureYears: number;
  maxAmount: number;
  maxTenureYears: number;
}

const LOAN_PRESETS: LoanTypePreset[] = [
  {
    id: "instant",
    name: "Instant Loan",
    icon: Zap,
    defaultAmount: 200000,
    defaultRate: 12.5,
    defaultTenureYears: 2,
    maxAmount: 1500000,
    maxTenureYears: 5,
  },
  {
    id: "home",
    name: "Home Loan",
    icon: Home,
    defaultAmount: 3500000,
    defaultRate: 8.5,
    defaultTenureYears: 20,
    maxAmount: 30000000,
    maxTenureYears: 30,
  },
  {
    id: "business",
    name: "Business Loan",
    icon: Landmark,
    defaultAmount: 1500000,
    defaultRate: 11.5,
    defaultTenureYears: 5,
    maxAmount: 20000000,
    maxTenureYears: 10,
  },
  {
    id: "personal",
    name: "Personal Loan",
    icon: Briefcase,
    defaultAmount: 500000,
    defaultRate: 10.75,
    defaultTenureYears: 3,
    maxAmount: 2500000,
    maxTenureYears: 7,
  },
  {
    id: "mortgage",
    name: "Mortgage (LAP)",
    icon: Building2,
    defaultAmount: 5000000,
    defaultRate: 9.25,
    defaultTenureYears: 15,
    maxAmount: 50000000,
    maxTenureYears: 20,
  },
  {
    id: "car",
    name: "Car Loan",
    icon: Car,
    defaultAmount: 800000,
    defaultRate: 8.9,
    defaultTenureYears: 5,
    maxAmount: 5000000,
    maxTenureYears: 7,
  },
];

// Helper to format currency in Indian numbering system
const formatIndianCurrency = (num: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(num));
};

export const EmiCalculator: React.FC = () => {
  const [selectedLoan, setSelectedLoan] = useState<LoanTypePreset>(LOAN_PRESETS[0]);
  const [amount, setAmount] = useState<number>(LOAN_PRESETS[0].defaultAmount);
  const [interestRate, setInterestRate] = useState<number>(LOAN_PRESETS[0].defaultRate);
  const [tenureYears, setTenureYears] = useState<number>(LOAN_PRESETS[0].defaultTenureYears);
  const [tenureUnit, setTenureUnit] = useState<"years" | "months">("years");

  const handleSelectLoan = (preset: LoanTypePreset) => {
    setSelectedLoan(preset);
    setAmount(preset.defaultAmount);
    setInterestRate(preset.defaultRate);
    setTenureYears(preset.defaultTenureYears);
  };

  // Calculate EMI and interest totals
  const { monthlyEmi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const P = amount;
    const annualRate = interestRate;
    const totalMonths = tenureUnit === "years" ? tenureYears * 12 : tenureYears;

    if (totalMonths <= 0 || P <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalPayment: 0, principalPercent: 100, interestPercent: 0 };
    }

    const r = annualRate / 12 / 100;
    let emi = 0;

    if (r === 0) {
      emi = P / totalMonths;
    } else {
      emi = (P * r * Math.pow(1 + r, totalMonths)) / (Math.pow(1 + r, totalMonths) - 1);
    }

    const totalPay = emi * totalMonths;
    const totalInt = totalPay - P;

    const pPercent = totalPay > 0 ? (P / totalPay) * 100 : 100;
    const iPercent = totalPay > 0 ? (totalInt / totalPay) * 100 : 0;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInt),
      totalPayment: Math.round(totalPay),
      principalPercent: Math.round(pPercent * 10) / 10,
      interestPercent: Math.round(iPercent * 10) / 10,
    };
  }, [amount, interestRate, tenureYears, tenureUnit]);

  // Quick preset amount buttons
  const quickAmounts = [
    { label: "₹2 Lakh", value: 200000 },
    { label: "₹5 Lakh", value: 500000 },
    { label: "₹10 Lakh", value: 1000000 },
    { label: "₹25 Lakh", value: 2500000 },
    { label: "₹50 Lakh", value: 5000000 },
    { label: "₹1 Crore", value: 10000000 },
  ];

  const whatsAppMessage = `Hello DHANSETU! I used your EMI Calculator for a ${selectedLoan.name}:\n- Loan Amount: ${formatIndianCurrency(amount)}\n- Interest Rate: ${interestRate}%\n- Tenure: ${tenureYears} ${tenureUnit}\n- Estimated Monthly EMI: ${formatIndianCurrency(monthlyEmi)}/month\n\nPlease check my eligibility and process this loan request.`;

  return (
    <div className="w-full">
      {/* Loan Type Selector Bar - Touch-scrollable horizontally on mobile, centered wrap on desktop */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center no-scrollbar">
        {LOAN_PRESETS.map((preset) => {
          const Icon = preset.icon;
          const isSelected = selectedLoan.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectLoan(preset)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-heading text-xs font-bold transition-all duration-200 shrink-0 ${
                isSelected
                  ? "bg-gradient-to-r from-brand-gold to-brand-gold-light text-[#08102b] shadow-lg shadow-brand-gold/25 scale-[1.02]"
                  : "bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-[#08102b]" : "text-brand-gold"}`} />
              <span className="whitespace-nowrap">{preset.name}</span>
            </button>
          );
        })}
      </div>

      {/* Calculator Main Box */}
      <div className="mt-8 sm:mt-10 grid gap-6 lg:gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Sliders and Input Controls */}
        <div className="lg:col-span-7 rounded-2xl bg-card/80 border border-border/40 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-5 sm:space-y-7">
          {/* Control 1: Loan Amount */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-heading font-semibold text-white/90">
                Loan Amount
              </label>
              <span className="font-heading text-base sm:text-lg font-bold text-brand-gold">
                {formatIndianCurrency(amount)}
              </span>
            </div>
            <Slider
              value={[amount]}
              min={50000}
              max={selectedLoan.maxAmount}
              step={25000}
              onValueChange={(val) => setAmount(val[0])}
              className="py-2"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickAmounts
                .filter((qa) => qa.value <= selectedLoan.maxAmount)
                .map((qa) => (
                  <button
                    key={qa.label}
                    onClick={() => setAmount(qa.value)}
                    className={`text-[11px] sm:text-xs px-2.5 py-1 sm:py-1.5 rounded-md border min-h-[30px] flex items-center justify-center transition-all ${
                      amount === qa.value
                        ? "bg-brand-gold/20 border-brand-gold text-brand-gold font-bold"
                        : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {qa.label}
                  </button>
                ))}
            </div>
          </div>

          {/* Control 2: Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-heading font-semibold text-white/90">
                Interest Rate (% p.a.)
              </label>
              <span className="font-heading text-base sm:text-lg font-bold text-brand-gold">
                {interestRate}%
              </span>
            </div>
            <Slider
              value={[interestRate]}
              min={6.5}
              max={22.0}
              step={0.1}
              onValueChange={(val) => setInterestRate(Math.round(val[0] * 10) / 10)}
              className="py-2"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-white/50">
              <span>6.5% (Lowest Bank Rate)</span>
              <span>12.0% (Average)</span>
              <span>22.0% (Max)</span>
            </div>
          </div>

          {/* Control 3: Loan Tenure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <label className="text-xs sm:text-sm font-heading font-semibold text-white/90">
                  Loan Tenure
                </label>
                <div className="inline-flex rounded-lg bg-black/40 p-0.5 border border-white/10 text-xs">
                  <button
                    onClick={() => setTenureUnit("years")}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      tenureUnit === "years"
                        ? "bg-brand-gold text-[#08102b] font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Yr
                  </button>
                  <button
                    onClick={() => setTenureUnit("months")}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      tenureUnit === "months"
                        ? "bg-brand-gold text-[#08102b] font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Mo
                  </button>
                </div>
              </div>
              <span className="font-heading text-base sm:text-lg font-bold text-brand-gold">
                {tenureYears} {tenureUnit === "years" ? (tenureYears === 1 ? "Year" : "Years") : "Months"}
              </span>
            </div>
            <Slider
              value={[tenureYears]}
              min={tenureUnit === "years" ? 1 : 6}
              max={tenureUnit === "years" ? selectedLoan.maxTenureYears : selectedLoan.maxTenureYears * 12}
              step={1}
              onValueChange={(val) => setTenureYears(val[0])}
              className="py-2"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-white/50">
              <span>{tenureUnit === "years" ? "1 Year" : "6 Months"}</span>
              <span>{tenureUnit === "years" ? `${selectedLoan.maxTenureYears} Years` : `${selectedLoan.maxTenureYears * 12} Months`}</span>
            </div>
          </div>

          {/* Info note */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-3 sm:p-3.5 flex items-start gap-2.5 sm:gap-3 text-xs text-white/70">
            <Sparkles className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
            <span>
              Tip: DHANSETU compares across <strong>20+ partner banks</strong> in Kolkata to negotiate your lowest interest rate, zero processing fee offers, and maximum sanction amount.
            </span>
          </div>
        </div>

        {/* Right Column: Calculation Summary & Direct Action */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#111f4d] to-[#0c163a] border border-brand-gold/30 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-5 sm:space-y-6">
          <div>
            {/* Highlighted Monthly EMI */}
            <div className="text-center pb-5 sm:pb-6 border-b border-white/10">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-gold-light">
                Estimated Monthly EMI
              </span>
              <div className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white break-words">
                <span className="gold-text">{formatIndianCurrency(monthlyEmi)}</span>
                <span className="text-xs sm:text-sm font-normal text-white/60"> / mo</span>
              </div>
              <p className="mt-1 text-xs text-white/60">
                Calculated for {selectedLoan.name}
              </p>
            </div>

            {/* Breakdown Details */}
            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/70 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-gold inline-block shrink-0" />
                  Principal Amount
                </span>
                <span className="font-heading font-bold text-white">
                  {formatIndianCurrency(amount)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400 inline-block shrink-0" />
                  Total Interest Payable
                </span>
                <span className="font-heading font-bold text-white">
                  {formatIndianCurrency(totalInterest)}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="font-semibold text-white">
                  Total Amount (Principal + Interest)
                </span>
                <span className="font-heading text-sm sm:text-base font-extrabold text-brand-gold">
                  {formatIndianCurrency(totalPayment)}
                </span>
              </div>

              {/* Progress bar ratio */}
              <div className="mt-4 pt-1">
                <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden flex">
                  <div
                    className="h-full bg-brand-gold transition-all duration-300"
                    style={{ width: `${principalPercent}%` }}
                    title={`Principal: ${principalPercent}%`}
                  />
                  <div
                    className="h-full bg-sky-400 transition-all duration-300"
                    style={{ width: `${interestPercent}%` }}
                    title={`Interest: ${interestPercent}%`}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-white/60">
                  <span>Principal: {principalPercent}%</span>
                  <span>Interest: {interestPercent}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Action Buttons */}
          <div className="space-y-2.5 sm:space-y-3 pt-3">
            <Button
              variant="gold"
              size="lg"
              asChild
              className="w-full font-heading font-bold btn-sheen shadow-lg shadow-brand-gold/25 py-3 text-sm sm:text-base"
            >
              <a
                href={getWhatsAppLink(whatsAppMessage)}
                onClick={handleWhatsAppClick(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span>Apply for this Loan on WhatsApp</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="default"
              asChild
              className="w-full border-white/20 bg-white/5 font-heading font-semibold text-xs sm:text-sm py-2.5 text-white hover:bg-white/15"
            >
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-brand-gold" />
                <span className="truncate">Talk to Specialist ({PHONE_PRIMARY})</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
