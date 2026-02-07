import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-border/40 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="relative z-10 text-center py-16 md:py-24 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight max-w-3xl mx-auto leading-tight"
            >
              If you need a frontend that looks{' '}
              <span className="text-gradient">premium</span> and works{' '}
              <span className="text-gradient">flawlessly</span>, let's talk.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mt-6 max-w-lg mx-auto"
            >
              I'm currently accepting new projects. Let's build something exceptional together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="gradient" size="lg" asChild>
                <a href="mailto:hello@example.com">
                  Start a Project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <a href="mailto:hello@example.com">
                  <Mail className="mr-1 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
