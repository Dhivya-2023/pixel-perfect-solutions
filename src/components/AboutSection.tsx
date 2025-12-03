import { Code2, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Modern, maintainable code using latest technologies",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning visuals that capture your brand identity",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is my priority, always",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Turning Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate web developer specializing in creating modern,
                responsive websites for small businesses and freelancers. With
                over 3 years of experience, I've helped 30+ clients establish
                their digital presence.
              </p>
              <p>
                My approach combines clean code with beautiful design to deliver
                websites that not only look great but also perform exceptionally.
                From simple portfolios to complex e-commerce solutions, I handle
                projects of all sizes with the same dedication and attention to
                detail.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies and AI tools
                to bring even more value to my clients. Let's build something
                amazing together!
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Firebase",
                "AI Integration",
                "Automation",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
