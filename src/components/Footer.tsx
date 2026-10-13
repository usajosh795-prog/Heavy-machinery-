import React from 'react';
import { TabId } from '../types';
import { ShieldCheck, Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                V
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                VOLTTORQ
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Global manufacturer of heavy high-voltage substation power transformers up to 765kV, automated CNC rebar bending fabrication lines, and calibrated 150-ton multi-axle truck weighbridges.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono-data text-amber-400">
                BIS IS-2026 / IS-1786
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono-data text-amber-400">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono-data text-sky-400">
                CE DIRECTIVE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono-data text-emerald-400">
                LEGAL METROLOGY W&amp;M
              </span>
            </div>
          </div>

          {/* Column 3: Machinery Spectrum */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Machinery Spectrum
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Power Transformers (765kV)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Substation Distribution Units
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  CNC Rebar Bending Centers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Automatic Stirrup Bending Cells
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  150-Ton Truck Weighbridges
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Heavy Hydraulic Forging Presses
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: B2B Services & Tools */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              B2B &amp; Engineering
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('estimator')}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Fleet Estimator (₹ INR)</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('company')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Factory Pedigree &amp; Testing Bays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('company')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  14 Fabrication Plant Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tender BOQ Submission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Turnkey EPC Site Commissioning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Factory Hotlines */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Engineering Support
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:8780788806" className="block text-white font-semibold hover:text-amber-400 transition-colors">
                    8780788806
                  </a>
                  <span className="text-xs text-slate-500 font-mono-data">Mobile Hotlines</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                  >
                    WhatsApp: 8780788806
                  </a>
                  <span className="text-xs text-slate-500 font-mono-data">Direct Pre-Typed Chat</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:jaychhag0@gmail.com" className="block text-white font-semibold hover:text-amber-400 transition-colors">
                    jaychhag0@gmail.com
                  </a>
                  <span className="text-xs text-slate-500 font-mono-data">Direct Tender &amp; RFQ Desk</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  India Works: Chakan Industrial Zone, Pune &amp; Savli GIDC, Vadodara
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} VOLTTORQ Heavy Industrial Corp. All rights reserved.</span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Plant Safety Record: 1,842 Days Zero LTI</span>
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono-data">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              GRID CODE COMPLIANCE
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              QUALITY ASSURANCE PROTOCOL
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              CONFIDENTIALITY &amp; TENDERS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
