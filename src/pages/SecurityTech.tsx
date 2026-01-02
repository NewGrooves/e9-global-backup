// src/pages/SecurityTech.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  QrCode,
  Fingerprint,
  Layers,
  Database,
  ArrowRight,
  Lock,
  Radar,
} from "lucide-react";

const SecurityTech = () => {
  const stackCards = [
    {
      role: "SECURE ENTRY",
      title: "Patented Optropic GS1-Compatible QR Infrastructure",
      icon: QrCode,
      highlights: [
        "Verification at the level of the code itself, before resolution occurs",
        "Secure, policy-governed routing and role-based access across stakeholders",
        "Privacy-first entry point designed for long-term governance and control",
      ],
      body: [
        "Traditional QR codes are simple pointers. They route users to destinations and rely on downstream systems to establish trust after the scan has already occurred.",
        "This patented layer treats QR as security-relevant infrastructure. It enables intrinsic verification and governed resolution so trust is established before engagement, content delivery, or data capture.",
      ],
    },
    {
      role: "PHYSICAL AUTHENTICITY",
      title: "EncryptorSeal™: Covert Smartphone-Verified Anti-Counterfeit Protection",
      icon: ShieldCheck,
      highlights: [
        "Invisible authentication embedded into packaging varnish or laser-engraved into products",
        "No special hardware, no artwork changes, and no manufacturing slowdowns",
        "Real-time detection of authentic and counterfeit scans to brand-controlled systems",
      ],
      body: [
        "Where authenticity matters, covert protection enables trusted verification without altering the customer experience or operational workflows.",
        "Every scan can become actionable intelligence, revealing legitimate interaction and counterfeit activity in real time.",
        "Combined with our patented QR infrastructure, EncryptorSeal™ forms an unparalleled system for brand protection and gray market detection, building on technology long used to secure U.S. government documents.",
      ],
    },
    {
      role: "SURFACE IDENTITY (OPTIONAL)",
      title: "Mark-Free Surface Fingerprint Authentication",
      icon: Layers,
      highlights: [
        "Captures unique surface microstructures to create a physical fingerprint for each item",
        "Mark-free verification, no added tags, chips, or visible markings required",
        "Re-scan verification confirms object identity against secure reference data",
      ],
      body: [
        "Some assets are difficult to mark, or should not be marked. This layer verifies the physical identity of an object using its natural surface characteristics, converting high-resolution imagery into a compact digital fingerprint captured during enrollment.",
        "Unlike AI-based brushstroke analysis used to evaluate artistic authorship, surface-based authentication technologies verify the physical identity of an object itself. This makes them suitable for ongoing provenance and lifecycle engagement rather than one-time attribution.",
      ],
    },
    {
      role: "HUMAN VERIFICATION (OPTIONAL)",
      title: "High-Assurance Biometric Identity & Authorization",
      icon: Fingerprint,
      highlights: [
        "Liveness and government-grade biometric validation for elevated confidence moments",
        "Passwordless authorization for access, approvals, and high-stakes actions",
        "Privacy-aligned verification options where minimal data is required",
      ],
      body: [
        "When the stakes are high, identity must be provable. This patented layer helps confirm a real person is present without relying on passwords, tokens, or easily spoofed credentials.",
        "It can support anonymous or minimal-data verification scenarios where appropriate, while still delivering high assurance.",
      ],
    },
    {
      role: "BLOCKCHAIN LIFECYCLE TRUST (OPTIONAL)",
      title: "Immutable Ownership, Provenance, and Resale Integrity",
      icon: Layers,
      highlights: [
        "Persistent digital identity for physical assets anchored to a tamper-resistant ledger",
        "Origination, ownership, transfers, and resale events recorded across the full lifecycle",
        "Optional automated royalty payments for lifecycle-aligned economics",
      ],
      body: [
        "Engagement does not end at the first scan or first sale. For assets that change hands, trust must persist beyond platforms, marketplaces, and apps.",
        "This patented layer creates a durable source of truth for provenance and ownership continuity, reducing fraud and increasing confidence across secondary markets.",
      ],
    },
  ];

  const failures = [
    {
      icon: Radar,
      title: "No intrinsic trust at the entry point",
      description:
        "Most systems assume interactions are valid and try to manage risk downstream, after engagement begins.",
    },
    {
      icon: Lock,
      title: "No control over who sees what",
      description:
        "Traditional QR and engagement tools typically deliver a uniform experience, regardless of role, identity, or context.",
    },
    {
      icon: Database,
      title: "No defensible data asset",
      description:
        "Traffic-based engagement creates fragmented analytics, third-party dependence, and low-confidence signals that do not compound.",
    },
  ];

  const flywheelSteps = [
    "Better trust leads to higher engagement",
    "Higher engagement produces richer opt-in data",
    "Richer data enables better personalization, monetization, and retention",
    "Better outcomes support higher enterprise valuation",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <SEOHead
        title="E9 Global — Security Tech"
        description="A layered trust architecture that establishes trust at the point of interaction, governs access, protects privacy, and turns verified engagement into permission-based first-party data."
        keywords={[
          "E9 Global",
          "security tech",
          "secure GS1 QR",
          "anti-counterfeit",
          "covert authentication",
          "surface fingerprint authentication",
          "biometric verification",
          "provenance ledger",
          "permission-based data",
          "data flywheel",
        ]}
        ogImage="/og-image.png"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.e9global.com/" },
          { name: "Security Tech", url: "https://www.e9global.com/security-tech" },
        ]}
      />

      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl py-10 sm:py-12 lg:py-14 text-center">
              <h1
                className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight"
                style={{ lineHeight: "1.06" }}
              >
                Security Tech
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                A new foundation for trusted engagement, permission-based data, and brand value, built
                to establish trust at the point of interaction before engagement begins.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/book-demo"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold
                             bg-blue-500/15 text-blue-300 border border-blue-400/30 hover:bg-blue-500/25 transition"
                >
                  Book a Demo
                </Link>

                <Link
                  to="/beeep"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold
                             bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                >
                  Explore the Platform
                </Link>
              </div>

              <div className="mt-10 max-w-4xl mx-auto bg-card/70 border border-border/30 rounded-2xl p-5 sm:p-6 shadow-lg text-left">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                  The core shift
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Most engagement technologies assume trust and attempt to manage risk downstream. Our
                  architecture inverts that model by engineering trust into the infrastructure, so
                  engagement, data, and monetization are built on verified interactions rather than
                  assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default SecurityTech;
