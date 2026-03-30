import { motion } from 'motion/react';

const clients = [
  { name: 'TechCorp', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'GlobalFin', logo: 'https://logo.clearbit.com/stripe.com' },
  { name: 'FutureScale', logo: 'https://logo.clearbit.com/airbnb.com' },
  { name: 'InnovateUAE', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'AussieGrowth', logo: 'https://logo.clearbit.com/atlassian.com' },
  { name: 'USAMarket', logo: 'https://logo.clearbit.com/microsoft.com' },
];

const stats = [
  { label: 'Revenue Generated', value: '$500M+', suffix: '' },
  { label: 'Clients Served', value: '250', suffix: '+' },
  { label: 'Countries Reached', value: '15', suffix: '+' },
  { label: 'Expert Consultants', value: '50', suffix: '+' },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by Industry Leaders Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, i) => (
              <motion.img
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">
                <span className="text-gradient">{stat.value}</span>
                <span className="text-brand-accent">{stat.suffix}</span>
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
