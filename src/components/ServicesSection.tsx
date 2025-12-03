import {
  Globe,
  Code,
  Bot,
  Zap,
  ShoppingCart,
  User,
  Wrench,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom business websites, portfolios, landing pages, and product catalogs. Fully responsive and mobile-friendly.",
    features: ["Business Sites", "Portfolios", "Landing Pages"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Modern React applications with Tailwind CSS. API integrations, dashboards, admin panels, and beautiful UIs.",
    features: ["React JS", "Tailwind CSS", "API Integration"],
  },
  {
    icon: Bot,
    title: "AI-Based Services",
    description:
      "Integrate AI chatbots, automate content generation, and leverage AI for product descriptions and social posts.",
    features: ["AI Chatbots", "Content Generation", "Automation"],
  },
  {
    icon: Zap,
    title: "Website Automation",
    description:
      "WhatsApp integration, lead forms, auto invoicing, email notifications, and Google Sheets automation.",
    features: ["WhatsApp API", "Auto Invoicing", "Sheet Sync"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Setup",
    description:
      "Product catalogs, WhatsApp ordering, payment gateway setup, and basic stock management for small sellers.",
    features: ["Product Catalog", "Payment Gateway", "Order Management"],
  },
  {
    icon: User,
    title: "Personal Branding",
    description:
      "Portfolio websites for teachers, trainers, coaches, and consultants with booking forms and testimonials.",
    features: ["Portfolio Sites", "Booking Forms", "Testimonials"],
  },
  {
    icon: Wrench,
    title: "Custom Tools",
    description:
      "Resume builders, invoice generators, data converters, custom dashboards, and file upload automation.",
    features: ["Resume Builder", "Invoice Generator", "Dashboards"],
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Ongoing website updates, bug fixes, hosting support, content updates, and security patches.",
    features: ["Updates", "Bug Fixes", "Security"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Go Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive web solutions tailored for small businesses,
            freelancers, and entrepreneurs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
