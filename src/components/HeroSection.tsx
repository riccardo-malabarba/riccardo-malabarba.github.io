import { ArrowDown, Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Head of
            <span className="block text-primary">Data & AI</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Technology leader building innovative data and cloud solutions in energy, industrial, and sustainability sectors.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
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
            onClick={scrollToAbout}
            variant="ghost"
            className="animate-bounce text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
