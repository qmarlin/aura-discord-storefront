import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Free",
    price: "€0",
    description: "Basic automation features for testing",
    features: [
      "Limited token support",
      "Basic spamming menu",
      "Simple webhook functions",
      "Community support",
      "Rate limited features"
    ],
    buttonText: "Download Free",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "€2.99",
    period: " lifetime",
    description: "Lifetime access to all premium features",
    features: [
      "All 15+ advanced menus",
      "Unlimited token support",
      "High-speed automation",
      "Bypass protections",
      "Proxy integration",
      "Mass operations",
      "Priority updates",
      "24/7 Discord support",
      "Lifetime license"
    ],
    buttonText: "Get Pro Lifetime",
    buttonVariant: "glow" as const,
    popular: true
  }
];

export function PricingSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple pricing for powerful Discord automation. Lifetime access, no subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative card-glow bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-700 ${
                plan.popular ? 'border-primary/50 shadow-lg scale-105' : ''
              } ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-gradient-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-lg">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground">
            Secure payment & instant delivery. 
            <a href="https://discord.gg/g8mTH4uX" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline cursor-pointer ml-1">
              Join our Discord
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}