import { motion, useInView } from 'framer-motion';
import { useRef, useState, MouseEvent } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  challenge: string;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'No Broker PG',
    tagline: 'Real-time analytics dashboard for SaaS products',
    description: 'Built a performant dashboard rendering 50K+ data points with zero lag. Implemented virtualized lists, WebSocket connections, and dynamic chart rendering.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    challenge: 'Optimized rendering pipeline to handle real-time data streams without frame drops, achieving consistent 60fps.',
    liveUrl: 'https://www.nobroker.in/',
    githubUrl: '#',
    gradient: 'from-[hsl(210,100%,60%)] to-[hsl(230,80%,55%)]',
  },
  {
    title: 'Oyster Jeans',
    tagline: 'A Ecommerce platform with all essestinal option',
    description: 'Designed and developed a white-label payment interface with multi-step forms, real-time validation, and PCI-compliant component architecture.',
    tech: ['Next.js', 'Stripe API', 'Framer Motion', 'Radix UI'],
    challenge: 'Created accessible, keyboard-navigable payment flows with instant field validation and error recovery.',
    liveUrl: 'https://export-site-livid.vercel.app',
    githubUrl: '#',
    gradient: 'from-[hsl(195,85%,50%)] to-[hsl(210,100%,60%)]',
  },
  {
    title: 'Breath Plus Pharmacy',
    tagline: 'Linear-inspired for Pharmacy sales management tool',
    description: 'Built a snappy, keyboard-first task management UI with drag-and-drop, real-time collaboration indicators, and optimistic updates.',
    tech: ['React', 'TypeScript', 'DnD Kit', 'Zustand', 'Tailwind'],
    challenge: 'Implemented smooth drag-and-drop across columns with optimistic state updates and conflict resolution.',
    liveUrl: 'https://breath-plus.onrender.com',
    githubUrl: '#',
    gradient: 'from-[hsl(260,70%,55%)] to-[hsl(290,65%,50%)]',
  },
  {
    title: 'Perfect Capture',
    tagline: 'Photographer library with info of work portfolio',
    description: 'Created an interactive documentation site, theme expression.',
    tech: ['Next.js', 'MDX', 'Shiki', 'Tailwind CSS', 'Radix'],
    challenge: 'Built a real-time theme editor with CSS variable injection and live preview across all components simultaneously.',
    liveUrl: 'https://perfectcapture.in',
    githubUrl: '#',
    gradient: 'from-[hsl(150,60%,45%)] to-[hsl(170,70%,40%)]',
  },
  {
    title: 'Maxtron',
    tagline: 'Freelancer Portfolio with info of pricing and work process',
    description: 'Created an interactive documentation site, theme expression.',
    tech: ['HTML', 'Tailwind CSS', 'Radix'],
    challenge: 'Built a real-time theme editor with CSS variable injection and live preview across all components simultaneously.',
    liveUrl: 'https://maxtronx.netlify.app',
    githubUrl: '#',
    gradient: 'from-[hsl(150,60%,45%)] to-[hsl(170,70%,40%)]',
  },
  {
    title: '3D Creature',
    tagline: 'A 3D creature of the animated model with scroll animation',
    description: 'Created an interactive 3d model site, expression.',
    tech: ['Next.js', 'Tailwind CSS', 'Luicide'],
    challenge: 'Built a real-time theme editor with CSS variable injection and live preview across all components simultaneously.',
    liveUrl: 'https://roundsround3dmodel.netlify.app',
    githubUrl: '#',
    gradient: 'from-[hsl(150,60%,45%)] to-[hsl(170,70%,40%)]',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-border/40 bg-card/40 overflow-hidden transition-all duration-500 hover:border-primary/30"
    >
      {/* Cursor glow effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(210 100% 60% / 0.06), transparent 60%)`,
          }}
        />
      )}

      {/* Gradient header bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="relative z-20 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="mb-4 p-3 rounded-lg bg-secondary/50 border border-border/30">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Challenge:</span> {project.challenge}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="gradient" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline-glow" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-1.5" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real-world tools and platforms built with performance, design, and scalability in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
