import { ArrowUp, Github, Mail, Linkedin, BookOpen } from "lucide-react";
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
            <p className="text-sm text-muted-foreground font-medium">Driving Digital Transformation</p>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="https://github.com/riccardo-malabarba" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="mailto:riccardo.malabarba7@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="https://www.linkedin.com/in/rmalabarba" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="https://medium.com/@riccardo.malabarba7" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5" />
              </a>
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
