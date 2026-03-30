import { motion } from 'motion/react';
import { TrendingUp, Globe2, Zap, Target, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Business Expansion Strategy',
    description: 'Custom roadmaps for scaling your operations across borders with minimal risk and maximum ROI.',
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    title: 'Market Entry (USA/UAE/AUS)',
    description: 'Localized expertise to navigate regulatory, cultural, and competitive landscapes in key global markets.',
    icon: Globe2,
    color: 'bg-purple-500',
  },
  {
    title: 'Growth & Scaling Systems',
    description: 'High-performance frameworks designed to automate growth and build sustainable revenue engines.',
    icon: Zap,
    color: 'bg-orange-500',
  },
  {
    title: 'Branding & Positioning',
    description: 'Elevate your brand to a premium global status that commands authority and attracts high-ticket clients.',
    icon: Target,
    color: 'bg-emerald-500',
  },
  {
    title: 'AI & Automation Consulting',
    description: 'Leverage cutting-edge AI tools to streamline operations and gain a massive competitive advantage.',
    icon: Cpu,
    color: 'bg-pink-500',
  },
  {
    title: 'Data-Driven Analytics',
    description: 'Turn raw data into actionable insights that drive strategic decision-making at every level.',
    icon: BarChart3,
    color: 'bg-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Elite Services for <span className="text-gradient">Global Dominance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            We provide the strategic foundation and execution excellence required to scale your business to a $100M+ brand.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-border group hover:border-brand-accent/50 transition-all"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/10 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-brand-accent cursor-pointer group/link">
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
