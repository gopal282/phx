import { motion } from 'motion/react';
import { Send, ShieldCheck, Zap, Users } from 'lucide-react';

export default function LeadForm() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Ready to <span className="text-gradient">Accelerate</span> Your Global Growth?
          </motion.h2>
          <p className="text-lg text-muted-foreground mb-12">
            Book your free 30-minute growth strategy session. We'll analyze your business and provide a high-level roadmap for global expansion.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold">Confidential & Secure</h4>
                <p className="text-sm text-muted-foreground">Your data is protected by enterprise-grade security.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold">Actionable Insights</h4>
                <p className="text-sm text-muted-foreground">No fluff. Just pure strategic value in every call.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold">Expert Led</h4>
                <p className="text-sm text-muted-foreground">Speak directly with senior growth consultants.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Business Type</label>
                <select className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all appearance-none">
                  <option>SaaS / Tech</option>
                  <option>E-commerce</option>
                  <option>Professional Services</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Annual Revenue</label>
                <select className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all appearance-none">
                  <option>$1M - $5M</option>
                  <option>$5M - $20M</option>
                  <option>$20M - $100M</option>
                  <option>$100M+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">How can we help?</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your global growth goals..." 
                className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-brand-accent/30"
            >
              Get Free Growth Strategy
              <Send size={20} />
            </motion.button>
            
            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
              <br />Limited spots available for this month.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
