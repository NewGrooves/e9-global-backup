import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin?: string;
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

  const teamMembers: TeamMember[] = [
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
      name: "Michael Buck",
      role: "Strategic Technology Partner",
      description:
        "Former Executive Director at Dell and 10-year veteran at Hewlett-Packard. Lead architect of E9's Engagement Platform and patented Optropic(TM) infrastructure, bridging physical security with enterprise data.",
      image: "/lovable-uploads/M%20Buck%20Profile%20pic.png",
      linkedin: "https://www.linkedin.com/in/mgbuck/",
    },
    {
      id: 3,
      name: "Cary Quinn",
      role: "Director of Encryption & Security",
      description:
        "15+ years architecting digital and optical security systems. Key patent inventor exclusively invited to brief the U.S. Federal Reserve Board on counterfeit deterrence.",
      image: "/lovable-uploads/Cary%20Quinn%20headshot.png",
      linkedin: "https://www.linkedin.com/in/caryquinn/",
    },
    {
      id: 4,
      name: "Ephraim Lindenbaum",
      role: "Strategic Advisor",
      description:
        "Managing Director of Advance Ventures with 25+ years in VC. Scaled and exited a Top-15 Silicon Valley company as CEO, and brokered acquisitions for 50+ portfolio companies to top-tier private equity and public buyers.",
      image: "/lovable-uploads/bb6eae89-c7e5-48ca-81d6-395be76a1198.png",
      linkedin: "https://www.linkedin.com/in/ephraimlindenbaum/",
    },
    {
      id: 5,
      name: "Juanita Ramos",
      role: "Government Affairs Advisor",
      description:
        "25+ years in public policy; forged high-impact alliances with DOJ and nonprofits to advance mission-driven innovation.",
      image: "/lovable-uploads/6876129a-e0ac-4878-90b0-84cc77dd399b.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />

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

      <section className="py-20 px-3 sm:px-8 lg:px-6 bg-card/30 relative overflow-hidden">
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

                  <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground">
                    {member.name}
                  </h3>

                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {member.linkedin ? (
                    <div className="mt-4">
                      
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        LinkedIn &rarr;
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
