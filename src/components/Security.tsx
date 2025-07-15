import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  FileCheck, 
  Users,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security protocols protect your data",
      features: ["AES-256 encryption", "TLS 1.3 in transit", "Zero-trust architecture"]
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Your data stays private with advanced anonymization",
      features: ["Data anonymization", "Selective recording", "Auto-deletion policies"]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure cloud infrastructure with global compliance",
      features: ["Multi-region deployment", "DDoS protection", "24/7 monitoring"]
    },
    {
      icon: Eye,
      title: "Access Controls",
      description: "Granular permissions and audit trails for compliance",
      features: ["Role-based access", "SSO integration", "Activity logging"]
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Audited security controls",
      icon: FileCheck
    },
    {
      name: "GDPR Compliant",
      description: "European data protection",
      icon: Shield
    },
    {
      name: "HIPAA Ready",
      description: "Healthcare compliance",
      icon: Users
    },
    {
      name: "ISO 27001",
      description: "Information security management",
      icon: Lock
    }
  ];

  const dataProtection = [
    "Data encrypted at rest and in transit",
    "Regular security audits and penetration testing",
    "Automatic data retention and deletion policies",
    "No data training on customer conversations",
    "Regional data residency options",
    "Complete data portability and deletion rights"
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-background/50 to-background">

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Security & Compliance</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Enterprise-Grade Security You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your conversations and data are protected by the highest security standards and compliance certifications
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Industry Certifications & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <cert.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Protection */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Complete Data Protection</h3>
            <ul className="space-y-4">
              {dataProtection.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h4 className="text-xl font-bold text-center mb-4">Security First Approach</h4>
              <p className="text-muted-foreground text-center mb-6">
                We've built security into every layer of our platform, from infrastructure to application level.
              </p>
              <div className="space-y-3">
                <Button variant="hero" className="w-full">
                  Download Security Whitepaper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Security Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Center CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">Have Security Questions?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is here to help. Get detailed information about our security practices and compliance certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Visit Trust Center
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Security Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;