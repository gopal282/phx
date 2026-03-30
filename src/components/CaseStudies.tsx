import { motion } from 'motion/react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const cases = [
  {
    title: 'FinTech Giant Expansion',
    market: 'UAE Market Entry',
    growth: '+240%',
    revenue: '$12M ARR',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'SaaS Scale-Up',
    market: 'USA Market Dominance',
    growth: '+180%',
    revenue: '$45M Valuation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-commerce Revolution',
    market: 'Australia Growth',
    growth: '+410%',
    revenue: '$8M Monthly Sales',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Proven Results for <span className="text-gradient">High-Ticket Clients</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground">
              We don't just consult; we deliver measurable business outcomes that transform companies into global leaders.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-background px-8 py-4 rounded-full font-bold flex items-center gap-2"
          >
            View All Case Studies
            <ExternalLink size={18} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-brand-accent font-bold mb-2">
                    <TrendingUp size={20} />
                    {item.growth} Growth
                  </div>
                  <div className="text-white font-bold text-xl">{item.revenue}</div>
                </div>
              </div>
              <div className="px-2">
                <div className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">
                  {item.market}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
