import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Integrations = () => {
  const platforms = [
    {
      name: "Zoom",
      description: "Seamless integration with Zoom meetings",
      features: ["Real-time analytics", "Meeting recordings", "Participant insights"],
      popular: true
    },
    {
      name: "Microsoft Teams",
      description: "Native Teams app integration",
      features: ["Enterprise security", "Teams ecosystem", "Calendar sync"],
      popular: true
    },
    {
      name: "Google Meet",
      description: "Workspace-integrated solution",
      features: ["Google Workspace", "Calendar integration", "Drive storage"],
      popular: false
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Seamless Platform Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Go-X integrates natively with your favorite video conferencing platforms, 
            providing AI-powered insights without disrupting your existing workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 group ${
                platform.popular ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {platform.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                  {platform.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                
                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group">
                  Connect {platform.name}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enterprise Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Enterprise Integration
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Need custom integration or enterprise features? Our team works with you to implement 
            Go-X across your organization with advanced security and compliance features.
          </p>
          <Button variant="secondary" size="lg">
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;