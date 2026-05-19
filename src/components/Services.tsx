import { motion } from 'motion/react';
import { SERVICES } from '../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/90 to-surface/90 z-0" />
      {/* Abstract Background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 bg-glow rounded-full mix-blend-screen" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Services</h2>
          <p className="text-secondary text-lg max-w-2xl">
            Original music, arrangements, production, and live direction for visual and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bg border border-white/5 hover:border-white/10 transition-colors group shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <div className="text-accent/50 font-mono text-sm font-medium">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-xl font-display font-medium mb-3 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
