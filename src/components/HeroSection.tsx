import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              <Badge className="bg-primary/20 text-primary-foreground border-primary/30">
                <Zap className="w-4 h-4 mr-2" />
                Next Generation Discord Tool
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary">Supercharge</span>
                <br />
                <span className="text-foreground">Your Discord</span>
                <br />
                <span className="text-gradient-secondary">Experience</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                The most advanced Discord moderation and management tool. 
                Automate your server, protect your community, and enhance user engagement 
                with cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button variant="glow" size="lg" className="text-lg px-10 py-7 group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glow-secondary" size="lg" className="text-lg px-10 py-7">
                  View Demo
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-12 justify-center lg:justify-start pt-12">
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">50K+</div>
                  <div className="text-muted-foreground text-sm mt-1">Servers Protected</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-gradient-secondary group-hover:scale-110 transition-transform">2M+</div>
                  <div className="text-muted-foreground text-sm mt-1">Users Managed</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">99.9%</div>
                  <div className="text-muted-foreground text-sm mt-1">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-float" />
                <img 
                  src={heroImage} 
                  alt="Discord Tool Dashboard" 
                  className="relative z-10 w-full rounded-2xl shadow-2xl card-glow"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-card border border-primary/30 rounded-lg p-3 card-glow animate-float" style={{ animationDelay: '0.5s' }}>
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card border border-secondary/30 rounded-lg p-3 card-glow animate-float" style={{ animationDelay: '1.5s' }}>
                  <Users className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}