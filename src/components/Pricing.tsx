import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals and small teams getting started",
      icon: Star,
      features: [
        "Up to 5 meetings/month",
        "Basic transcription",
        "Simple analytics",
        "Email support",
        "1 integration"
      ],
      limitations: [
        "Limited AI insights",
        "Basic reporting"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per user/month",
      description: "Advanced features for growing teams and businesses",
      icon: Zap,
      features: [
        "Unlimited meetings",
        "Advanced AI insights",
        "Sentiment analysis",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
        "Team collaboration tools",
        "Export capabilities"
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonVariant: "hero" as const,
      popular: true,
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Complete solution for large organizations",
      icon: Crown,
      features: [
        "Everything in Professional",
        "Biometric analysis",
        "Custom AI models",
        "SSO & advanced security",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee",
        "Advanced compliance",
        "White-label options"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Professional plan includes a 14-day free trial with full access to all features."
    },
    {
      question: "What integrations are included?",
      answer: "All plans include Zoom, Teams, and Google Meet. Professional adds Slack, Notion, and custom webhooks."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Pricing Plans</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-elegant bg-gradient-to-b from-primary/5 to-background' 
                  : 'border-border/50 bg-card/50 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className="flex justify-center mb-4">
                  <plan.icon className={`h-12 w-12 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
                {plan.savings && (
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {plan.savings}
                  </Badge>
                )}
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our enterprise team for custom pricing, dedicated support, and tailored features.
          </p>
          <Button variant="hero" size="lg">
            Schedule Enterprise Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;