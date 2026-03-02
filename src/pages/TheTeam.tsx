import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;     // optional: if omitted, we render initials placeholder
  linkedin?: string;  // optional: used for a small link under the bio
};

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

const TheTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * ORDER MIRRORS PITCH DECK:
   * 1) Core Team slide (Dean → Sam → Ron → Sean → Shawn → Michael)
   * 2) Tactical Partners slide (Cary → Jay → Nolan → Ephraim → Leah → Rachel → Vanessa → Kenny → Juanita)
   * 3) Additional Strategic Advisors (Isaac → John → Mark)
   */
  const teamMembers: TeamMember[] = [
    // --- CORE TEAM (slide 1) ---
    {
      id: 1,
      name: "Dean Eaker",
      role: "Founder, Chair, CSO",
      description:
        "Serial entrepreneur with multiple exits, including the PC 411 IPO and the E3 trade show. Architected a 200M-record database monetized via LexisNexis, bringing deep expertise in commercializing patented anti-counterfeiting hardware.",
      image: "/lovable-uploads/508a01e0-2e33-4475-8618-cc2c328f5b91.png",
      linkedin: "https://www.linkedin.com/in/deaneaker/",
    },
    {
      id: 2,
      name: "Sam Morris",
      role: "Founder, CEO",
      description:
        "A \"philosopher builder\" driving E9's enterprise strategy, Sam aligns structural integrity with high-growth execution. He leverages over a decade of executive optimization and the global METAL network to scale resilient organizations.",
      image: "/lovable-uploads/0e5167c5-8708-4988-be25-7382d458fbb3.png",
      linkedin: "https://www.linkedin.com/in/samwmorris/",
    },
    {
      id: 3,
      name: "Ron Seigel",
      role: "Founder, CMO",
      description:
        "Ensures E9’s enterprise partnerships scale seamlessly. Brings decades of high-stakes commercial and luxury real estate marketing strategy, alongside architecting corporate coaching and high-trust leadership training programs through UC Berkeley and USF.",
      image: "/lovable-uploads/97f8652a-35f5-46fe-9c8d-c33fa9d3cbc8.png",
      linkedin: "https://www.linkedin.com/in/RonandAlexandraSeigel",
    },
    {
      id: 4,
      name: "Sean Entin",
      role: "Chief Relationship Officer",
      description:
        "Serial entrepreneur brokering high-impact deals, including a partnership with Shaquille O'Neal and the development of LA Center Studios. Leverages an elite global network to drive E9's commercial expansion.",
      image: "/lovable-uploads/ecb962ef-790d-478f-8f31-f05c061f3596.png",
      linkedin: "https://www.linkedin.com/in/sean-entin",
    },
    {
      id: 5,
      name: "Shawn Dreben",
      role: "SVP of Sales",
      description:
        "With 20+ years driving revenue in health and wellness, Shawn leverages deep domain expertise and high-trust networks to capture E9’s combined $60M healthcare and sports enterprise targets.",
      image: "/lovable-uploads/a909c828-929f-40f7-a78d-2b1d35c7d3c6.png",
      linkedin: "https://www.linkedin.com/in/shawndreben/",
    },
    {
      id: 6,
      name: "Michael Buck",
      role: "Strategic Technology Partner",
      description:
        "Former Executive Director at Dell and 10-year veteran at Hewlett-Packard. Lead architect of E9’s BEEEP platform and patented Optropic™ infrastructure, bridging physical security with enterprise data.",
      // NOTE: if you keep a file with spaces, URL-encode them.
      image: "/lovable-uploads/M%20Buck%20Profile%20pic.png",
      linkedin: "https://www.linkedin.com/in/mgbuck/",
    },

    // --- TACTICAL PARTNERS (slide 2) ---
    {
      id: 7,
      name: "Cary Quinn",
      role: "Director of Encryption & Security",
      description:
        "15+ years architecting digital and optical security systems. Key patent inventor exclusively invited to brief the U.S. Federal Reserve Board on counterfeit deterrence.",
      image: "/lovable-uploads/Cary%20Quinn%20headshot.png",
      linkedin: "https://www.linkedin.com/in/caryquinn/",
    },
    {
      id: 8,
      name: "Jay Samit",
      role: "Lead Strategic Advisor",
      description:
        "Former Vice Chairman of Deloitte Digital and serial NASDAQ CEO. Helped scale pre-IPO juggernauts like LinkedIn and eBay, raising over $800M for tech startups across his career.",
      image: "/lovable-uploads/7bf43a82-3a12-463b-a36f-75d2c622b00c.png",
      linkedin: "https://www.linkedin.com/in/jaysamit/",
    },

    // Placeholders (no images yet) — add photos later without breaking layout:
    {
      id: 9,
      name: "Nolan Bushnell",
      role: "EdTech Partner (BEEEP Metro SPV)",
      description:
        "Tech visionary and founder of Atari. Nolan leverages decades of pioneering interactive entertainment and gamified learning to aggressively drive our educational technology expansion.",
      image: "/lovable-uploads/Nolan-bushnell.jpg",
      linkedin: "https://www.linkedin.com/in/nolanbushnell/",
    },
    {
      id: 10,
      name: "Ephraim Lindenbaum",
      role: "Strategic Advisor",
      description:
        "Managing Director of Advance Ventures with 25+ years in VC. Scaled and exited a Top-15 Silicon Valley company as CEO, and brokered acquisitions for 50+ portfolio companies to top-tier private equity and public buyers.",
      image: "/lovable-uploads/bb6eae89-c7e5-48ca-81d6-395be76a1198.png",
      linkedin: "https://www.linkedin.com/in/ephraimlindenbaum/",
    },
    {
      id: 11,
      name: "Leah Hines",
      role: "EdTech Partner (BEEEP Metro SPV)",
      description:
        "CEO of ExoDexa and former President of Two Bit Circus Foundation. Leah leverages deep expertise in gamified education and organizational leadership to scale BEEEP Metro's immersive learning and EdTech initiatives.",
       image: "/lovable-uploads/Leah Profile Pic.png,
    },
    {
      id: 12,
      name: "Rachel Orkin-Ramey",
      role: "Strategic Advisor (BEEEP Assets SPV)",
      description:
        "Goldman Sachs alum and former Regional Managing Director at Christie's (NY/London). Brings 20+ years of elite institutional expertise navigating global art, auction, and high-value collectibles markets.",
      image: "/lovable-uploads/Rachel profile pic.png",
    },
    {
      id: 13,
      name: "Vanessa Conlin",
      role: "Strategic Advisor (BEEEP Assets SPV)",
      description:
        "Holds the prestigious Master of Wine credential (one of <60 in the U.S.). Former Global Head of Wine Retail for Sotheby's, bringing unparalleled institutional expertise in high-stakes luxury auctions.",
      image: "/lovable-uploads/Vanessa profile pic.png",
    },
    {
      id: 14,
      name: "Kenny Johnson",
      role: "Strategic Advisor (BEEEP Assets SPV)",
      description:
        "Elite combat sports coach who has trained a \"Who's Who\" of UFC Hall of Famers. Provides direct, high-trust access to the global sports and performance vertical.",
      // image intentionally omitted (placeholder renders)
    },
    {
      id: 15,
      name: "Juanita Ramos",
      role: "Government Affairs Advisor",
      description:
        "25+ years in public policy; forged high-impact alliances with DOJ and nonprofits to advance mission-driven innovation.",
      image: "/lovable-uploads/6876129a-e0ac-4878-90b0-84cc77dd399b.png",
    },

    // --- ADDITIONAL STRATEGIC ADVISORS (slide 2 list) ---
    {
      id: 16,
      name: "Isaac Mizraki",
      role: "Strategic Advisor",
      description:
        "30+ years scaling and exiting healthcare enterprises.",
      image: "/lovable-uploads/149e9d5b-197f-467d-9b48-3bac8532a00f.png",
    },
    {
      id: 17,
      name: "John Ullmen",
      role: "Executive Leadership Advisor",
      description:
        "Top-rated UCLA Anderson professor; executive coach to global leaders.",
      image: "/lovable-uploads/c8a85515-4c7b-4e24-8470-9c8eb2121304.png",
    },
    {
      id: 18,
      name: "Mark Vega",
      role: "Legal Advisor",
      description:
        "Technology, privacy, and corporate law specialist.",
      image: "/lovable-uploads/f61a6c14-d2a0-4c7b-4c9c-a1a3-b38a800a4132.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pb-24 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto text-center relative">
          <h1 className="font-playfair font-bold mb-6 text-center" style={{ lineHeight: "1.5" }}>
            <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor block mb-1 sm:mb-3 py-1 sm:py-2">
              Meet Our Team
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-2 max-w-4xl mx-auto leading-relaxed">
            Founder-led. Proven at scale. Built with purpose.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-3 max-w-4xl mx-auto leading-relaxed">
            Our work is grounded in deep experience across security, identity (verification, permissions, and access control),
            engagement infrastructure, and data monetization.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(147,51,234,0.05),transparent_70%)]"></div>

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-border/20 overflow-hidden relative"
              >
                <div className="relative z-10">
                  {/* Profile Image OR Placeholder */}
                  <div className="w-40 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/30">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="text-4xl font-semibold text-foreground/80">
                          {getInitials(member.name)}
                        </div>
                        <div className="text-xs mt-2 text-foreground/60 px-4">
                          Photo coming soon
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {member.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Optional LinkedIn */}
                  {member.linkedin ? (
                    <div className="mt-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        LinkedIn →
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheTeam;
