import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
  onOpenPreferences: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenCookies, onOpenPreferences }) => {
  return (
    <footer className="glass text-white pt-16 pb-8 border-t border-white/10 mt-10 hover:!bg-slate-900/60 hover:!border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#hero" className="font-bold text-2xl tracking-tighter text-white flex items-center gap-2">
              Allwise <span className="text-[#5227FF]">AI</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Αυτοματισμοί που απλοποιούν την καθημερινή λειτουργία της επιχείρησής σας.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/allwise-ai' },
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/allwise.ai' },
                { icon: <Facebook size={20} />, href: 'https://www.facebook.com/allwise.ai' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : "_self"}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#5227FF] hover:text-white transition-all duration-300 hover:-translate-y-1 border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Μενού</h4>
            <ul className="space-y-3">
              {[
                { label: 'Αρχική', href: '#hero' },
                { label: 'Σχετικά', href: '#about' },
                { label: 'Λύσεις', href: '#solutions' },
                { label: 'Αποτελέσματα', href: '#results' },
                { label: 'Επικοινωνία', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-[#5227FF] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Επικοινωνία</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5227FF]/10 flex items-center justify-center flex-shrink-0 border border-[#5227FF]/20">
                  <Mail className="w-4 h-4 text-[#5227FF]" />
                </div>
                <a href="mailto:info@allwiseai.gr" className="text-slate-300 hover:text-white transition-colors">info@allwiseai.gr</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5227FF]/10 flex items-center justify-center flex-shrink-0 border border-[#5227FF]/20">
                  <MapPin className="w-4 h-4 text-[#5227FF]" />
                </div>
                <span className="text-slate-300">Ορφέως 4, Δράμα, 66131</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 Allwise AI. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Πολιτική Απορρήτου
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onOpenCookies(); }}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Πολιτική Cookies
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onOpenPreferences(); }}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Ρυθμίσεις Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;