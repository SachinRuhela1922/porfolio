import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, PenTool, Blocks, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Requirements',
    description: 'Deep dive into product goals, user needs, and technical constraints to define a clear scope.',
  },
  {
    icon: PenTool,
    title: 'UI Wireframing & Design',
    description: 'Translate requirements into clean wireframes and high-fidelity designs in Figma.',
  },
  {
    icon: Blocks,
    title: 'Component Development',
    description: 'Build modular, reusable components with clean architecture and strict TypeScript typing.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimize for speed, responsiveness, and accessibility across all devices and browsers.',
  },
  {
    icon: Rocket,
    title: 'Delivery & Iteration',
    description: 'Ship production-ready code, gather feedback, and iterate quickly until it\'s perfect.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            How I Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 tracking-tight">
            Work Process
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A structured approach that balances speed with quality, every time.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 w-px h-[calc(100%-2rem)] bg-border/60" />
              )}

              {/* Step number + icon */}
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                <step.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="pt-0.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
