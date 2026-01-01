// src/pages/SecurityTechStackStaging.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
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

const SecurityTechStackStaging = () => {
  const stackCards = [
    {
      role: "SECURE ENTRY",
      title: "Trusted GS1-Compatible QR Infrastructure",
      icon: QrCode,
      highlights: [
        "Verification at the level of the code itself—before resolution occurs",
        "Policy-governed routing and role-based access across stakeholders",
        "Privacy-first entry point designed for long-lived governance and control",
      ],
      body: [
        "Traditional QR codes are simple pointers. They route users to destinations and rely on downstream systems to establish trust after the scan has already occurred.",
        "This layer treats QR as security-relevant infrastructure: it enables intrinsic verification and governed resolution so trust is established before engagement, content delivery, or data capture.",
      ],
    },
    {
      role: "PHYSICAL AUTHENTICITY",
      title: "Covert Smartphone-Verified Anti-Counterfeit Protection",
      icon: ShieldCheck,
      highlights: [
        "Invisible authentication embedded into packaging varnish or laser-engraved into products",
        "No special hardware, no artwork changes, and no manufacturing slowdowns",
        "Real-time detection of authentic and counterfeit scans to brand-controlled systems",
      ],
      body: [
        "Where authenticity matters, covert protection enables trusted verification without altering the customer experience or operational workflows.",
        "Every scan can become actionable intelligence—revealing legitimate interaction and counterfeit activity in real time.",
      ],
    },
    {
      role: "HUMAN VERIFICATION (OPTIONAL)",
      title: "High-Assurance Biometric Identity & Authorization",
      icon: Fingerprint,
      highlights: [
        "Liveness and biometric validation for elevated confidence moments",
        "Passwordless authorization for access, approvals, and high-stakes actions",
        "Privacy-aligned verification options where minimal data is required",
      ],
      body: [
        "When the stakes are high, identity must be provable. This layer helps confirm a real person is present—without relying on passwords, tokens, or easily spoofed credentials.",
        "It can support anonymous or minimal-data verification scenarios where appropriate, while still delivering high assurance.",
      ],
    },
    {
      role: "LIFECYCLE TRUST (OPTIONAL)",
      title: "Immutable Ownership, Provenance, and Resale Integrity",
      icon: Layers,
      highlights: [
        "Persistent digital identity for physical assets anchored to a tamper-resistant ledger",
        "Origination, ownership, transfers, and resale events recorded across the full lifecycle",
        "Optional programmable resale logic for lifecycle-aligned economics",
      ],
      body: [
        "Engagement does not end at the first scan or first sale. For assets that change hands, trust must persist beyond platforms, marketplaces, and apps.",
        "This layer creates a durable source of truth for provenance and ownership continuity—reducing fraud and increasing confidence across secondary markets.",
      ],
    },
  ];

  const failures = [
    {
      icon: Radar,
      title: "No intrinsic trust at the entry point",
      description:
        "Most systems assume interactions are valid and try to manage risk downstream—after engagement begins.",
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
    "Better trust → higher engagement",
    "Higher engagement → richer opt-in data",
    "Richer data → better personalization, monetization, and retention",
    "Better outcomes → higher enterprise valuation",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* SEO / Schema */}
      <SEOHead
        title="E9 Global — Security Tech Stack (Staging)"
        description="A layered trust architecture that establishes trust at the point of interaction, governs access, protects privacy, and turns verified engagement into permission-based first-party data."
        keywords={[
          "E9 Global",
          "security tech stack",
          "secure GS1 QR",
          "anti-counterfeit",
          "covert authentication",
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
          {
            name: "Security Tech Stack (Staging)",
            url: "https://www.e9global.com/security-tech-stack-staging",
          },
        ]}
      />

      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Ambient background */}
          <div className="absolute inset-0 -z-10">
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
                Security Tech Stack
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                A new foundation for trusted engagement, permission-based data, and
                brand value—built to establish trust at the point of interaction
                before engagement begins.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="/book-demo"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold
                             bg-blue-500/15 text-blue-300 border border-blue-400/30 hover:bg-blue-500/25 transition"
                >
                  Book a Demo
                </a>
                <a
                  href="/beeep"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold
                             bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:opacity-95 transition"
                >
                  Explore the Platform
                </a>
              </div>

              <div className="mt-10 max-w-4xl mx-auto bg-card/70 border border-border/30 rounded-2xl p-5 sm:p-6 shadow-lg text-left">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                  The core shift
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Most engagement technologies assume trust and attempt to manage risk
                  downstream. Our architecture inverts that model: it engineers trust
                  into the infrastructure—so engagement, data, and monetization are
                  built on verified interactions, not assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EXISTING APPROACHES FAIL */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,51,234,0.08),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                Why existing approaches fall short
              </h2>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Traditional QR codes, loyalty platforms, and engagement tools treat
                physical touchpoints as traffic sources. That model breaks down when
                counterfeits exist, access must be governed, and privacy matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {failures.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20 hover:border-border/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 icon-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-playfair font-bold text-lg text-foreground mb-2">
                    {f.title}
                  </div>
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    {f.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK INTRO */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3">
                  Layered trust architecture
                </h2>
                <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Each layer answers a specific trust question. You don’t need every
                  layer for every deployment—each can stand alone or combine with
                  others based on risk, regulation, and use case.
                </p>
              </div>

              <div className="bg-card/70 border border-border/30 rounded-2xl p-5 sm:p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-foreground/90 leading-relaxed">
                    <span className="font-semibold text-foreground">
                      The result:
                    </span>{" "}
                    trusted engagement + privacy-first, permission-based data that
                    compounds into measurable ROI and long-term brand value.
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Trust-first by design</span>
                  </div>
                </div>
              </div>

              {/* STACK CARDS */}
              <div className="mt-10 space-y-6">
                {stackCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-border/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm uppercase tracking-wide text-foreground/70 mb-2">
                          {card.role}
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 icon-gradient-primary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <card.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <div className="mt-5 space-y-4 text-foreground/90 leading-relaxed">
                          {card.body.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>

                      <div className="md:w-[360px] bg-background/60 border border-border/30 rounded-2xl p-5">
                        <div className="text-sm font-semibold text-foreground mb-3">
                          What this unlocks
                        </div>
                        <ul className="space-y-2">
                          {card.highlights.map((h, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-3 text-foreground/90"
                            >
                              <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                              <span className="text-sm">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {idx < stackCards.length - 1 && (
                      <div className="mt-7 flex items-center gap-3 text-foreground/60">
                        <div className="h-px flex-1 bg-border/40" />
                        <ArrowRight className="w-4 h-4" />
                        <div className="h-px flex-1 bg-border/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DATA FLYWHEEL */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-card/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.08),transparent_70%)]" />
          <div className="container mx-auto relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 gradient-text-investor">
                  The data flywheel
                </h2>
                <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Because engagement is verified at the point of interaction, opt-in
                  signals captured through this stack are clean, permission-based, and
                  defensible. That changes the economics entirely.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                    What brands gain
                  </div>
                  <ul className="space-y-3 text-foreground/90">
                    {[
                      "Verified first-party interaction data tied to trusted touchpoints",
                      "Persistent relationships across customers, assets, and stakeholders",
                      "Reduced dependency on third-party data and fragmented attribution",
                      "A compounding data asset anchored to trust—not traffic",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-border/20">
                  <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                    How it compounds
                  </div>
                  <ol className="space-y-3 text-foreground/90">
                    {flywheelSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-sm sm:text-base">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 bg-background/60 border border-border/30 rounded-2xl p-4">
                    <p className="text-foreground/90 leading-relaxed">
                      Brands that own trusted, permission-based customer data
                      infrastructure command greater strategic leverage and higher
                      acquisition value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-card/70 border border-border/30 rounded-2xl p-5 sm:p-6 shadow-lg">
                <div className="text-sm uppercase tracking-wide text-foreground/70 mb-2">
                  The strategic advantage
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  This is not a feature stack. It is infrastructure—engineered to make
                  trust explicit, keep privacy as a design principle, and convert
                  physical engagement into a durable digital asset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default SecurityTechStackStaging;
