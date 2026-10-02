import React from "react";

export const WHATSAPP_NUMBER = "918240349546";
export const PHONE_PRIMARY = "+91 82403 49546";
export const PHONE_LANDLINE = "033-79633264";
export const EMAIL = "contact@dhansetucapital.in";
export const ADDRESS = "18/1, Vivekananda Road, Dunlop, Kolkata - 700108";
export const TAGLINE = "All Your Financial Needs Under One Roof";
export const SLOGAN = "Your Financial Partner for a Better Tomorrow";

// Universal WhatsApp helper: triggers native app on mobile without redirecting to web
export const getWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
};

export const openWhatsApp = (message: string) => {
  const encoded = encodeURIComponent(message);
  if (typeof window !== "undefined") {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
      return;
    }
  }
  window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`, "_blank");
};

export const handleWhatsAppClick = (message: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  openWhatsApp(message);
};

export const WHATSAPP_MESSAGES = {
  general: "Hello DHANSETU! I am interested in your financial advisory, loan, and investment services. Please provide more details.",
  instantLoan: "Hello DHANSETU! I need an Instant Loan / Insta Loan. Please share the eligibility criteria and fast disbursement details.",
  loans: "Hello! I need a loan for my business, home, or personal needs. Please guide me through the interest rates and process.",
  services: "Hi DHANSETU! I want to know more about your financial services including Instant Loans, Insurance, and Wealth Investments.",
  consultation: "Hello! I would like to schedule a free financial consultation with your expert advisory team in Dunlop, Kolkata.",
  career: "Hello DHANSETU HR! I would like to apply for career and partnership opportunities at DhanSetu Capital Advisory.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Career & Opportunity", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
