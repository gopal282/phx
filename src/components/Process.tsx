import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your current operations, market position, and growth bottlenecks.',
  },
  {
    number: '02',
    title: 'Strategic Roadmap',
    description: 'A comprehensive, data-backed plan tailored for your specific global expansion goals.',
  },
  {
    number: '03',
    title: 'Execution & Launch',
    description: 'Our elite team works alongside yours to implement systems and launch in new markets.',
  },
  {
    number: '04',
    title: 'Optimization & Scale',
    description: 'Continuous monitoring and refinement to maximize performance and accelerate growth.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Our <span className="text-brand-accent">4-Step Framework</span> for Global Success
            </motion.h2>
            <p className="text-lg text-gray-400 mb-12">
              We've refined our process over hundreds of successful engagements to ensure predictable, scalable results for every client.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="text-4xl font-display font-black text-white/10 group-hover:text-brand-accent/50 transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12">
              <div className="aspect-square w-full rounded-full border border-brand-accent/30 flex items-center justify-center p-12 animate-[spin_20s_linear_infinite]">
                <div className="w-4 h-4 bg-brand-accent rounded-full absolute -top-2" />
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute -bottom-2" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-brand-accent mb-2">PHX</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-500">Acceleration Engine</div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 glass p-4 rounded-xl border border-white/10 text-xs font-bold"
            >
              ROI: +340%
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-0 glass p-4 rounded-xl border border-white/10 text-xs font-bold"
            >
              Market Share: 24%
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
