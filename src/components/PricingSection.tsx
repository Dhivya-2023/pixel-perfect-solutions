import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for personal portfolios and small landing pages",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 revision round",
      "5 days delivery",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹12,999",
    description: "Great for businesses needing a complete online presence",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact & lead forms",
      "WhatsApp integration",
      "Advanced SEO",
      "3 revision rounds",
      "10 days delivery",
      "1 month support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹24,999",
    description: "Full-featured solution for e-commerce and advanced needs",
    features: [
      "Up to 10 pages",
      "E-commerce functionality",
      "Admin dashboard",
      "Payment gateway setup",
      "AI chatbot integration",
      "Automation setup",
      "Unlimited revisions",
      "15 days delivery",
      "3 months support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Transparent{" "}
            <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. All prices are one-time
            payments with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-card border-primary shadow-glow"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Monthly Maintenance */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-secondary/50 border border-border text-center">
            <h3 className="text-xl font-semibold mb-4">
              Need Ongoing Support?
            </h3>
            <p className="text-muted-foreground mb-6">
              Keep your website running smoothly with monthly maintenance plans
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Basic", price: "₹499/mo" },
                { name: "Standard", price: "₹999/mo" },
                { name: "Premium", price: "₹1,499/mo" },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 rounded-xl bg-card border border-border"
                >
                  <span className="font-medium text-foreground">
                    {tier.name}
                  </span>
                  <span className="text-muted-foreground"> - {tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
