import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">Go-X</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered meeting intelligence platform by TensorGo. 
              Transform your virtual meetings with revolutionary AI technology.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">API</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Press</a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Status</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TensorGo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;