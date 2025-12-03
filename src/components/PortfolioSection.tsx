import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fashion Boutique",
    category: "E-Commerce",
    description: "Complete online store for a clothing brand with WhatsApp ordering",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Fitness Coach Portfolio",
    category: "Personal Branding",
    description: "Modern portfolio with booking system and testimonials",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Restaurant Dashboard",
    category: "Admin Panel",
    description: "Order management and analytics dashboard for a local restaurant",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Legal Consultancy",
    category: "Business Website",
    description: "Professional website with appointment booking for a law firm",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Content Generator",
    category: "AI Tool",
    description: "Custom tool for generating product descriptions and social posts",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Invoice Automation",
    category: "Custom Tool",
    description: "Automated invoicing system integrated with Google Sheets",
    gradient: "from-red-500 to-orange-500",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Projects That{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of recent work across different industries and project
            types.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
