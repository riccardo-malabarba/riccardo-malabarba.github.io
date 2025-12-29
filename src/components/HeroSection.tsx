import { ArrowDown, Github, Mail, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Riccardo<span className="block text-primary">Malabarba</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed font-semibold">
            Technology leader building innovative data and cloud solutions in energy, industrial, and sustainability sectors.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="https://www.linkedin.com/in/rmalabarba" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
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
              <a href="https://medium.com/@riccardo.malabarba7" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <Button onClick={scrollToAbout} variant="ghost" className="animate-bounce text-muted-foreground hover:text-primary">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;