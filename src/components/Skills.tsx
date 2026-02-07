import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Paintbrush, Gauge } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    icon: Palette,
    title: 'UI / UX',
    skills: ['Figma', 'Design Systems', 'Accessibility', 'Responsive Design'],
  },
  {
    icon: Paintbrush,
    title: 'Styling',
    skills: ['Tailwind CSS', 'CSS Animations', 'Framer Motion', 'Shadcn UI'],
  },
  {
    icon: Gauge,
    title: 'Performance',
    skills: ['SEO', 'Lighthouse', 'Core Web Vitals', 'Code Splitting'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            Skills & Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 tracking-tight">
            Technology I work with
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A focused toolkit built around modern frontend development, performance, and design systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
