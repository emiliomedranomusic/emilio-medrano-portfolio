import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Collaborator Notes</h2>
          <p className="text-secondary text-sm max-w-2xl mx-auto uppercase tracking-widest font-mono">
            Placeholder Testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="w-8 h-8 text-white/5 absolute top-6 right-6" />
              <p className="text-lg font-display italic text-primary/90 mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
