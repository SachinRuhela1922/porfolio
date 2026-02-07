import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-sm font-semibold text-foreground tracking-tight">
            dev<span className="text-gradient">.folio</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:io.sachinruhela@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/SachinRuhela1922"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-ruhela-a0ab53293?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
