import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle, Bug, Zap, ExternalLink } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-4">
                <HelpCircle className="w-4 h-4 mr-2" />
                Support Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Help with <span className="text-gradient-primary">Q4 - Spammer</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions and get support from our community
              </p>
            </div>

            {/* Quick Support Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Discord Community
                  </CardTitle>
                  <CardDescription>Join our Discord server for real-time support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our community and development team. Share your issues, 
                    get quick solutions, and connect with other users.
                  </p>
                  <Button variant="glow" asChild className="w-full">
                    <a href="https://discord.gg/g8mTH4uX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Join Discord Server
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bug className="w-5 h-5 text-secondary" />
                    GitHub Issues
                  </CardTitle>
                  <CardDescription>Report bugs and request features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Found a bug or have a feature request? Open an issue on our GitHub repository 
                    and our team will address it as soon as possible.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://github.com/qmarlin/QmarlinSPMZ/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Report Issue
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="mb-8 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Common questions and their answers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">How do I get started with Q4 - Spammer?</h4>
                  <p className="text-muted-foreground">
                    Download the tool from GitHub, install Python dependencies, configure your tokens, 
                    and you're ready to go! Check our documentation for detailed setup instructions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is Q4 - Spammer safe to use?</h4>
                  <p className="text-muted-foreground">
                    Q4 - Spammer includes built-in safety features like rate limiting and proxy support. 
                    However, always use responsibly and follow Discord's Terms of Service.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What's the difference between Free and Pro versions?</h4>
                  <p className="text-muted-foreground">
                    The Free version includes basic features, while Pro (€2.99 lifetime) unlocks 
                    advanced features like enhanced bypass methods, premium proxy support, and priority support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">My tokens keep getting flagged. What should I do?</h4>
                  <p className="text-muted-foreground">
                    Use the built-in proxy rotation feature, adjust rate limiting settings, and ensure 
                    you're using fresh, high-quality tokens. Pro version includes advanced anti-detection features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I use this on multiple devices?</h4>
                  <p className="text-muted-foreground">
                    Yes! Q4 - Spammer is portable and can be run on any device with Python installed. 
                    Your license covers personal use across your devices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  Common Issues & Solutions
                </CardTitle>
                <CardDescription>Quick fixes for common problems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Installation Issues</h4>
                  <p className="text-sm text-muted-foreground">
                    Make sure you have Python 3.8+ installed and all dependencies from requirements.txt. 
                    Run as administrator if you encounter permission errors.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Token Problems</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure tokens are valid and properly formatted. Avoid using tokens from accounts 
                    with phone verification or 2FA enabled.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Rate Limiting</h4>
                  <p className="text-sm text-muted-foreground">
                    If you're being rate limited, increase the delay between actions in settings. 
                    Consider using proxy rotation for better performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}