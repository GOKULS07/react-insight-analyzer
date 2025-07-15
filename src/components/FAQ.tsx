import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can I get started with Go-X?",
          answer: "You can be up and running in under 5 minutes. Simply sign up, connect your preferred meeting platform (Zoom, Teams, or Google Meet), and Go-X will automatically start analyzing your meetings. No technical setup required."
        },
        {
          question: "Do I need to install any software?",
          answer: "No installation required! Go-X works entirely through integrations with your existing meeting platforms. Simply authorize the connection and we'll handle the rest automatically."
        },
        {
          question: "What meeting platforms do you support?",
          answer: "We support Zoom, Microsoft Teams, Google Meet, Webex, and many more. Our Professional plan includes custom integrations for enterprise platforms like BlueJeans, GoToMeeting, and proprietary systems."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "How accurate is the AI transcription and analysis?",
          answer: "Our AI achieves 95%+ accuracy in transcription and analysis across 40+ languages. We use advanced neural networks trained specifically for meeting conversations, including handling multiple speakers, accents, and technical terminology."
        },
        {
          question: "Can Go-X detect emotions and sentiment in real-time?",
          answer: "Yes! Our advanced sentiment analysis and biometric features can detect emotional states, engagement levels, and speaker sentiment in real-time. This helps you understand meeting dynamics and participant engagement as they happen."
        },
        {
          question: "What kind of insights does Go-X provide?",
          answer: "Go-X provides comprehensive insights including speaker participation, sentiment analysis, key topics, action items, decision points, engagement metrics, and custom analytics based on your specific use case and industry."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "How do you protect my meeting data?",
          answer: "We use enterprise-grade security including AES-256 encryption, zero-trust architecture, and SOC 2 Type II compliance. Your data is encrypted at rest and in transit, with optional on-premise deployment for maximum security."
        },
        {
          question: "Do you use my data to train AI models?",
          answer: "Absolutely not. We never use customer conversation data to train our AI models. Your meetings remain completely private and are only processed to provide you with insights. You maintain full control and ownership of your data."
        },
        {
          question: "Can I control what meetings are recorded and analyzed?",
          answer: "Yes, you have complete control. You can set up automatic rules, manual selection, or opt-in/opt-out policies. Participants are always notified when analysis is active, and you can exclude sensitive meetings entirely."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Is there really a free plan?",
          answer: "Yes! Our Starter plan is completely free forever and includes up to 5 meetings per month with basic transcription and analytics. Perfect for individuals or small teams getting started."
        },
        {
          question: "Can I upgrade or downgrade my plan anytime?",
          answer: "Absolutely. You can change your plan at any time with immediate effect. If you upgrade, you'll have access to new features right away. If you downgrade, you'll retain access to premium features until your current billing cycle ends."
        },
        {
          question: "Do you offer custom enterprise pricing?",
          answer: "Yes, we offer flexible enterprise pricing based on your specific needs, user count, and required features. This includes custom integrations, dedicated support, SLA guarantees, and on-premise deployment options."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Go-X. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  return (
                    <Card 
                      key={faqIndex} 
                      className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-elegant"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full text-left p-6 hover:bg-muted/50 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-foreground pr-4">
                              {faq.question}
                            </h4>
                            {openIndex === currentIndex ? (
                              <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {openIndex === currentIndex && (
                          <div className="px-6 pb-6">
                            <div className="w-full h-px bg-border mb-4" />
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-border/50 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you get the most out of Go-X. We typically respond within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">
                  Contact Support
                </Button>
                <Button variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;