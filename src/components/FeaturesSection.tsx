import { Shield, Zap, Users, Bot, BarChart3, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description: "AI-powered auto-moderation with customizable filters, spam detection, and smart ban management.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Automate repetitive tasks with intelligent workflows and custom command creation.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Comprehensive user tracking, role automation, and advanced permission systems.",
    gradient: "from-accent to-secondary"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Deep insights into server activity, member engagement, and moderation statistics.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-millisecond response times and 99.9% uptime.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption, secure data handling, and GDPR compliance.",
    gradient: "from-accent to-primary"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Powerful Features</span>
            <br />
            for Modern Discord Servers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage, moderate, and grow your Discord community 
            with cutting-edge automation and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-glow bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 card-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}