
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-background overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="block">Hi, I'm Riccardo</span>
            <span className="text-primary">Data Team Leader</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Data, Tech & AI expert with 7+ years of experience leading innovations in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={scrollToAbout} className="group" size="lg">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div>
                <a href="https://drive.google.com/file/d/1KLFCpeiHkKIHZviKzgNlodyDOc7TeBfO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="lg">
                  Check My CV
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
};

export default Hero;
