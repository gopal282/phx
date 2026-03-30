/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Process from './components/Process';
import GlobalPresence from './components/GlobalPresence';
import CaseStudies from './components/CaseStudies';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-brand-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <GlobalPresence />
        <CaseStudies />
        
        {/* Mid-page CTA */}
        <section className="py-20 bg-brand-accent text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-8"
            >
              Stop Guessing. Start Scaling.
            </motion.h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join 250+ global brands that have accelerated their growth with our elite consulting framework.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brand-accent px-10 py-4 rounded-full font-bold text-xl shadow-2xl"
            >
              Get Your Free Growth Plan
            </motion.button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        </section>

        <LeadForm />
      </main>

      <Footer />

      {/* Sticky Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brand-accent text-white p-4 rounded-full shadow-2xl shadow-brand-accent/50 group relative"
        >
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-foreground text-background px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap shadow-xl">
              Book Strategy Call
            </div>
          </div>
          <Globe className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
}

import { Globe } from 'lucide-react';
