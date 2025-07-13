import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small communities",
    features: [
      "Up to 100 members",
      "Basic moderation tools",
      "Community support",
      "Standard analytics",
      "5 custom commands"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For growing Discord servers",
    features: [
      "Up to 5,000 members",
      "Advanced AI moderation",
      "Priority support",
      "Advanced analytics",
      "Unlimited custom commands",
      "Auto-role assignment",
      "Welcome/goodbye messages"
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "glow" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/month",
    description: "For large communities and businesses",
    features: [
      "Unlimited members",
      "Custom AI training",
      "24/7 dedicated support",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Advanced security features",
      "Multi-server management"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "glow-secondary" as const,
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Simple</span> & 
            <span className="text-gradient-secondary"> Transparent</span>
            <br />
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your Discord server. 
            Start free and scale as your community grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative card-glow bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'border-primary/50 shadow-lg' : ''
              }`}
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day money-back guarantee. 
            <span className="text-primary hover:underline cursor-pointer ml-1">
              Need a custom plan?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}