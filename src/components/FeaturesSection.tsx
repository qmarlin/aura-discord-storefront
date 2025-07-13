import { Shield, Zap, Users, BarChart3, Clock, Lock, MessageSquare, Server, Webhook, UserCheck, Globe, Megaphone, TrendingUp, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Shield,
    title: "Bypass Menu",
    description: "Advanced bypass techniques for various Discord limitations and restrictions.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: UserCheck,
    title: "Token Menu",
    description: "Comprehensive token management with validation, checker, and advanced operations.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: MessageSquare,
    title: "Spamming Menu",
    description: "High-speed message automation with customizable patterns and timing controls.",
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: Users,
    title: "VC Menu",
    description: "Voice channel automation including join/leave, mute/unmute, and audio streaming.",
    gradient: "from-red-500 to-orange-600"
  },
  {
    icon: Server,
    title: "Server Menu",
    description: "Complete server management tools for channel creation, role management, and more.",
    gradient: "from-orange-500 to-yellow-600"
  },
  {
    icon: Webhook,
    title: "Webhook Menu",
    description: "Advanced webhook automation for message sending and server integration.",
    gradient: "from-yellow-500 to-green-600"
  },
  {
    icon: Lock,
    title: "Server Admin Menu",
    description: "Administrative tools for server management and moderation capabilities.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Globe,
    title: "Proxy Menu",
    description: "Built-in proxy support for enhanced anonymity and bypass capabilities.",
    gradient: "from-teal-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Mass DM Menu",
    description: "Bulk direct messaging system with smart rate limiting and queue management.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: BarChart3,
    title: "Mass Report Menu",
    description: "Automated reporting system for quick and efficient content moderation.",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: Megaphone,
    title: "Advertising Menu",
    description: "Promotional tools for server advertising and community growth strategies.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Boosting Menu",
    description: "Server boosting automation and management for enhanced server features.",
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: Database,
    title: "Scraping Menu",
    description: "Data collection tools for user information and server analytics.",
    gradient: "from-red-500 to-orange-600"
  },
  {
    icon: Clock,
    title: "Sources Menu",
    description: "Resource management for tokens, proxies, and other automation sources.",
    gradient: "from-orange-500 to-yellow-600"
  }
];

export function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced Python-powered automation menus for Discord power users and developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`card-glow bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 card-glow`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
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