import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ashish',
    role: 'Founder, Houseold PG',
    text: "Delivered a pixel-perfect dashboard ahead of schedule. The attention to performance was exceptional — our load times dropped by 60%. Highly reliable and communicative throughout.",
    rating: 5,
  },
  {
    name: 'Sushant',
    role: 'Founder, Oyster Jeans',
    text: "The checkout flow he built directly increased our conversion rate. Clean code, well-documented components, and zero bugs in production. Will hire again without hesitation.",
    rating: 5,
  },
  {
    name: 'Aman Gupta',
    role: 'Founder & Product Lead, BraveWorld',
    text: "Built our entire design system documentation from scratch from application. The live preview feature alone saved our team hundreds of hours. Professional, fast, and incredibly detail-oriented.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 tracking-tight">
            What clients say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Trusted by founders and product teams building modern SaaS tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-xl border border-border/40 bg-card/40 p-6 hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/15 mb-4" />

              <p className="text-sm text-secondary-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <div>
                <div className="font-display font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
