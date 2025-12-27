import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-card-foreground">Head of Data & AI</p>
            <p className="text-sm text-muted-foreground">Driving Digital Transformation</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="border-border hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • Built with passion for data and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
