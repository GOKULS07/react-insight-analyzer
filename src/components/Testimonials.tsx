import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp Inc.",
      avatar: "SC",
      rating: 5,
      quote: "Go-X increased our meeting productivity by 87%. The AI insights are game-changing for our remote team collaboration.",
      metric: "87% productivity increase"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Sales",
      company: "SalesForce Pro",
      avatar: "MR",
      rating: 5,
      quote: "The sentiment analysis helped us close 40% more deals. We can now identify key decision moments in real-time.",
      metric: "40% more deals closed"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Innovation Labs",
      avatar: "EW",
      rating: 5,
      quote: "Biometric insights transformed our UX research sessions. We get deeper insights than ever before.",
      metric: "200% deeper insights"
    }
  ];

  const companies = [
    "Microsoft", "Google", "Salesforce", "Slack", "Zoom", "HubSpot", "Notion", "Atlassian"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        {/* Trusted by */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by 10,000+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Customer Success</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams already transforming their meetings with AI-powered insights
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {testimonial.metric}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
            <div className="text-muted-foreground">Meetings Analyzed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">60%</div>
            <div className="text-muted-foreground">Avg. Productivity Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;