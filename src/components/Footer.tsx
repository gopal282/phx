import { Globe, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                PHX <span className="text-brand-accent">CONSULTING</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The global leader in business acceleration and strategic market entry. Scaling high-ticket brands across the USA, UAE, and Australia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-brand-accent transition-colors">Our Process</a></li>
              <li><a href="#global" className="hover:text-brand-accent transition-colors">Global Presence</a></li>
              <li><a href="#case-studies" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Market Entry Strategy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Growth Systems</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">AI Automation</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Brand Positioning</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Revenue Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-accent" />
                <span>contact@phxconsulting.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="text-sm mt-6">
                <div className="font-bold text-white mb-2 uppercase tracking-widest">Global HQ</div>
                <p>One World Trade Center, Suite 85<br />New York, NY 10007, USA</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Phx Consulting Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
