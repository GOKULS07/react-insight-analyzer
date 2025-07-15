import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  Target, 
  UserCheck, 
  Brain, 
  Shield,
  ArrowRight
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Sales Teams",
      description: "Close more deals with AI-powered conversation analysis",
      benefits: [
        "Identify buying signals in real-time",
        "Track objections and responses",
        "Analyze competitor mentions",
        "Optimize pitch performance"
      ],
      metrics: "40% increase in close rates",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Users,
      title: "Remote Teams",
      description: "Enhance collaboration and engagement across distributed teams",
      benefits: [
        "Monitor participation levels",
        "Detect engagement patterns",
        "Improve meeting equity",
        "Track team sentiment"
      ],
      metrics: "60% better team alignment",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Target,
      title: "Product Teams",
      description: "Make data-driven decisions with customer feedback analysis",
      benefits: [
        "Extract key feature requests",
        "Analyze user pain points",
        "Track satisfaction trends",
        "Prioritize product roadmap"
      ],
      metrics: "3x faster product iterations",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: UserCheck,
      title: "HR & Recruiting",
      description: "Streamline hiring with intelligent interview insights",
      benefits: [
        "Assess candidate communication",
        "Reduce unconscious bias",
        "Standardize evaluation process",
        "Improve candidate experience"
      ],
      metrics: "50% faster hiring decisions",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Brain,
      title: "Research & UX",
      description: "Deep insights from user research and testing sessions",
      benefits: [
        "Emotional response analysis",
        "User journey mapping",
        "Behavior pattern detection",
        "Automated research reports"
      ],
      metrics: "80% more actionable insights",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Ensure regulatory compliance with automatic monitoring",
      benefits: [
        "Detect compliance violations",
        "Generate audit trails",
        "Risk assessment alerts",
        "Legal documentation"
      ],
      metrics: "90% compliance accuracy",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Use Cases</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Transform Every Type of Meeting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how teams across industries use Go-X to unlock meeting intelligence and drive results
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardContent className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <useCase.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                    <Badge variant="outline" className="mt-1 text-primary border-primary/20">
                      {useCase.metrics}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Meetings?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Go-X to unlock meeting intelligence and drive better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;