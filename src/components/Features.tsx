import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Mic, Eye, BarChart3, Users } from "lucide-react";
import analyticsIcon from "@/assets/analytics-icon.jpg";
import biometricIcon from "@/assets/biometric-icon.jpg";
import voiceIcon from "@/assets/voice-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze meeting patterns, engagement levels, and communication effectiveness in real-time.",
      image: analyticsIcon,
      badge: "Core Feature"
    },
    {
      icon: Heart,
      title: "Physiological Tracking",
      description: "Monitor heart rate, stress levels, and biometric data to understand participant well-being and engagement during meetings.",
      image: biometricIcon,
      badge: "Health Insights"
    },
    {
      icon: Mic,
      title: "Voice Pattern Analysis",
      description: "Decode speech patterns, emotion detection, and voice analytics to provide comprehensive communication insights.",
      image: voiceIcon,
      badge: "Speech AI"
    },
    {
      icon: Eye,
      title: "Non-Verbal Cue Detection",
      description: "Analyze facial expressions, body language, and visual cues to provide complete meeting intelligence.",
      badge: "Visual AI"
    },
    {
      icon: BarChart3,
      title: "Instant Summaries",
      description: "Generate comprehensive meeting summaries, action items, and key insights automatically after each session.",
      badge: "Productivity"
    },
    {
      icon: Users,
      title: "Team Collaboration Insights",
      description: "Understand team dynamics, participation levels, and collaboration patterns to improve meeting effectiveness.",
      badge: "Team Analytics"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Revolutionary Meeting Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Go-X combines cutting-edge AI technologies to provide unprecedented insights into your virtual meetings,
            helping teams collaborate more effectively and understand communication patterns like never before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {feature.badge}
                  </Badge>
                </div>
                
                {feature.image && (
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for Zoom, Teams & Meet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;