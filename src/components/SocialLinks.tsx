import { Linkedin, Mail, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://www.linkedin.com/in/rmalabarba" target="_blank" rel="noopener noreferrer">
        <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all p-3 rounded-lg">
          <Linkedin className="h-6 w-6" />
        </Button>
      </a>
      <a href="https://github.com/riccardo-malabarba" target="_blank" rel="noopener noreferrer">
        <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all p-3 rounded-lg">
          <Github className="h-6 w-6" />
        </Button>
      </a>
      <a href="mailto:riccardo.malabarba7@gmail.com">
        <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all p-3 rounded-lg">
          <Mail className="h-6 w-6" />
        </Button>
      </a>
      <a href="https://medium.com/@riccardo.malabarba7" target="_blank" rel="noopener noreferrer">
        <Button asChild variant="outline" size="icon" className="border-border hover:bg-primary hover:text-primary-foreground transition-all p-3 rounded-lg">
          <BookOpen className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};

export default SocialLinks;