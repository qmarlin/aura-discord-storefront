import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Zap, Shield, Users } from "lucide-react";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-4">
                <Code className="w-4 h-4 mr-2" />
                Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-primary">Q4 - Spammer</span> Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete guide to using Q4 - Spammer for Discord automation and utilities
              </p>
            </div>

            {/* Quick Start */}
            <Card className="mb-8 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Start Guide
                </CardTitle>
                <CardDescription>Get started with Q4 - Spammer in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">1. Download & Setup</h4>
                  <p className="text-sm text-muted-foreground">Download the latest release from GitHub and extract the files to your desired location.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">2. Install Dependencies</h4>
                  <p className="text-sm text-muted-foreground">Run <code className="bg-background px-2 py-1 rounded">pip install -r requirements.txt</code> to install required Python packages.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">3. Configuration</h4>
                  <p className="text-sm text-muted-foreground">Configure your Discord tokens and proxy settings in the config file.</p>
                </div>
              </CardContent>
            </Card>

            {/* Features Documentation */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-secondary" />
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Bypass Menu</h4>
                    <p className="text-sm text-muted-foreground">Advanced bypass techniques for Discord restrictions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Token Management</h4>
                    <p className="text-sm text-muted-foreground">Secure token handling and validation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Spamming Tools</h4>
                    <p className="text-sm text-muted-foreground">Customizable message spamming with rate limiting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">VC Operations</h4>
                    <p className="text-sm text-muted-foreground">Voice channel automation and management</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Advanced Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Server Management</h4>
                    <p className="text-sm text-muted-foreground">Complete server control and automation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Webhook Integration</h4>
                    <p className="text-sm text-muted-foreground">Custom webhook creation and management</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mass Operations</h4>
                    <p className="text-sm text-muted-foreground">Bulk DM sending and reporting capabilities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Proxy Support</h4>
                    <p className="text-sm text-muted-foreground">Advanced proxy rotation and management</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* API Reference */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Configuration Examples
                </CardTitle>
                <CardDescription>Common configuration patterns and examples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Token Configuration</h4>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <code>{`{
  "tokens": [
    "your_discord_token_here",
    "another_token_here"
  ],
  "rate_limit": 1.5,
  "use_proxies": true
}`}</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proxy Setup</h4>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <code>{`{
  "proxies": [
    "http://proxy1:port",
    "http://proxy2:port"
  ],
  "proxy_rotation": true
}`}</code>
                  </div>
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