import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dean Eaker",
      role: "Founder, Chairman, CSO",
      description: "Serial entrepreneur with multiple exits, including the PC 411 IPO and the E3 trade show. Architected a 200M-record database monetized via LexisNexis, bringing deep expertise in commercializing patented anti-counterfeiting hardware.",
      image: "/lovable-uploads/508a01e0-2e33-4475-8618-cc2c328f5b91.png"
    },
    {
      id: 2,
      name: "Sam Morris",
      role: "Founder, CEO",
      description: "A "philosopher builder" driving E9's enterprise strategy, Sam aligns structural integrity with high-growth execution. He leverages over a decade of executive optimization and the global METAL network to scale resilient organizations.",
      image: "/lovable-uploads/0e5167c5-8708-4988-be25-7382d458fbb3.png"
    },
    {
      id: 3,
      name: "Ron Seigel",
      role: "Founder, Chief Marketing Officer",
      description: "Ensures E9’s enterprise partnerships scale seamlessly. Brings decades of high-stakes commercial and luxury real estate marketing strategy, along side architecting corporate coaching and high-trust leadership training programs through UC Berkeley and USF.",
      image: "/lovable-uploads/97f8652a-35f5-46fe-9c8d-c33fa9d3cbc8.png"
    },
    {
      id: 4,
      name: "Sean Entin",
      role: "Founder, Chief Relationship Officer",
      description: "Serial entrepreneur brokering high-impact deals, including a partnership with Shaquille O'Neal and the development of LA Center Studios. Leverages an elite global network to drive E9's commercial expansion.",
      image: "/lovable-uploads/ecb962ef-790d-478f-8f31-f05c061f3596.png"
    },
    {
      id: 5,
      name: "Shawn Dreben",
      role: "Founder, SVP of Sales",
      description: "20+ years leading high-performance sales in wellness and fitness; built category-defining go-to-market strategies for drug-free recovery and performance solutions.",
      image: "/lovable-uploads/a909c828-929f-40f7-a78d-2b1d35c7d3c6.png"
    },
    {
      id: 6,
      name: "Cary Quinn",
      role: "Director of Encryption & Security",
      description: "Security innovator engineering discreet, production-ready anti-counterfeiting and authentication technologies that withstand AI fraud, post-quantum threats, and real-world scale.",
      image: "/lovable-uploads/Cary Quinn headshot.png"
    },
    {
      id: 7,
      name: "Michael Buck",
      role: "Strategic Technology Partner",
      description: "Former Dell global marketing executive; digital transformation leader and architect of the BEEEP platform and Optropic QR technology.",
      image: "/lovable-uploads/M Buck Profile pic.png"
    },
    {
      id: 8,
      name: "Juanita Ramos",
      role: "Government Affairs",
      description: "25+ years in public policy; forged high-impact alliances with DOJ and nonprofits to advance mission-driven innovation.",
      image: "/lovable-uploads/6876129a-e0ac-4878-90b0-84cc77dd399b.png"
    },
    {
      id: 9,
      name: "Jay Samit",
      role: "Strategic Advisor",
      description: "World-renowned tech disruption expert; former Vice Chair of Deloitte Digital and bestselling author on scaling innovation and transformation.",
      image: "/lovable-uploads/7bf43a82-3a12-463b-a36f-75d2c622b00c.png"
    },
    {
      id: 10,
      name: "Isaac Mizraki",
      role: "Strategic Advisor",
      description: "Seasoned healthcare entrepreneur with 30 years' expertise scaling, operating, and exiting companies across multiple healthcare verticals.",
      image: "/lovable-uploads/149e9d5b-197f-467d-9b48-3bac8532a00f.png"
    },
    {
      id: 11,
      name: "John Ullmen",
      role: "Strategic Advisor",
      description: "UCLA Anderson's top-rated executive leadership professor and a globally respected executive coach to senior leaders worldwide.",
      image: "/lovable-uploads/c8a85515-4c7b-4e24-8470-9c8eb2121304.png"
    },
    {
      id: 12,
      name: "Ephraim Lindenbaum",
      role: "Strategic Advisor",
      description: "Founder and Managing Director of Advance Ventures. A Silicon Valley venture investor with a 25-year track record of high-growth startups, exits, and innovation.",
      image: "/lovable-uploads/bb6eae89-c7e5-48ca-81d6-395be76a1198.png"
    },
    {
      id: 13,
      name: "Mark Vega",
      role: "Legal Advisor",
      description: "Veteran technology, privacy, and corporate lawyer guiding enterprises with strategic, ethical, and future-focused legal expertise for over three decades.",
      image: "/lovable-uploads/f61a6c14-d2a0-4c9c-a1a3-b38a800a4132.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 sm:pb-24 px-3 sm:px-8 lg:px-6 bg-background relative overflow-hidden">
        <div className="container mx-auto text-center relative">
          <h1 className="font-playfair font-bold mb-6 text-center" style={{ lineHeight: '1.5' }}>
            <span className="text-4xl sm:text-5xl md:text-6xl gradient-text-investor block mb-1 sm:mb-3 py-1 sm:py-2">
              Meet Our Team
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-2 max-w-4xl mx-auto leading-relaxed">
            Founder-led. Proven at scale. Built with purpose.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-3 max-w-4xl mx-auto leading-relaxed">
            Our work is grounded in deep experience across security, identity (verification, permissions, and access control), engagement infrastructure, and data monetization.
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
                  {/* Profile Image */}
                  <div className="w-40 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
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
