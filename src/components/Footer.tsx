
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Riccardo's Portfolio</h3>
            <p className="text-primary-foreground/80">
              Data Team Leader in Energy & Sustainability
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/riccardo-malabarba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>© {currentYear} Riccardo Malabarba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
