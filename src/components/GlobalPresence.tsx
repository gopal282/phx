import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  { city: 'New York', country: 'USA', x: '25%', y: '35%' },
  { city: 'Dubai', country: 'UAE', x: '60%', y: '45%' },
  { city: 'Sydney', country: 'Australia', x: '85%', y: '75%' },
  { city: 'London', country: 'UK', x: '48%', y: '30%' },
  { city: 'Singapore', country: 'Singapore', x: '75%', y: '60%' },
];

export default function GlobalPresence() {
  return (
    <section id="global" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          A <span className="text-gradient">Truly Global</span> Network
        </motion.h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          With offices and consultants strategically placed in the world's most dynamic markets, we provide the local insight needed for global success.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto aspect-[2/1] bg-accent/20 rounded-3xl overflow-hidden border border-border">
        {/* Simple World Map SVG Placeholder */}
        <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-current text-foreground">
          <path d="M150,150 Q200,100 300,150 T500,150 T700,100 T900,200 T800,400 T600,450 T400,400 T200,350 Z" />
          <path d="M600,100 Q650,50 750,100 T850,150 T750,250 T650,200 Z" />
          <path d="M100,300 Q150,250 250,300 T350,350 T250,450 T150,400 Z" />
        </svg>

        {locations.map((loc, i) => (
          <motion.div
            key={loc.city}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: 'spring' }}
            viewport={{ once: true }}
            style={{ left: loc.x, top: loc.y }}
            className="absolute group cursor-pointer"
          >
            <div className="relative">
              <div className="w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                <div className="text-xs font-bold">{loc.city}</div>
                <div className="text-[10px] text-muted-foreground">{loc.country}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-16">
        {['USA', 'UAE', 'Australia'].map((market) => (
          <div key={market} className="glass p-6 rounded-2xl border border-border flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold">{market} Market Leader</h4>
              <p className="text-sm text-muted-foreground">Strategic Growth Partner</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
