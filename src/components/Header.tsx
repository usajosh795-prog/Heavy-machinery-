import React, { useState } from 'react';
import { TabId } from '../types';
import { Sparkles, Menu, X, ArrowUpRight, Calculator, IndianRupee, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentTab: TabId;
  onSelectTab: (tab: TabId) => void;
  cursorAuraEnabled: boolean;
  onToggleCursorAura: () => void;
  estimatorCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cursorAuraEnabled,
  onToggleCursorAura,
  estimatorCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'company', label: 'Company' },
    { id: 'estimator', label: 'Estimator (₹)' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: TabId) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors duration-200">
      {/* Top Notice Bar: Clean high-contrast B2B dispatch status */}
      <div className="bg-slate-100 border-b border-slate-200/80 px-4 py-1.5 text-xs text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono-data">
          <div className="flex items-center gap-3">
            <span className="font-bold text-amber-700 flex items-center gap-1">
              <IndianRupee className="w-3 h-3" />
              <span>INDIAN RUPEE (₹) WHOLESALE PRICING</span>
            </span>
            <span className="text-slate-300">|</span>
            <span>14 GLOBAL PLANTS (PUNE, VADODARA, DUISBURG)</span>
            <span className="text-slate-300">·</span>
            <span>BIS IS-2026 / IS-1786 &amp; ISO 9001:2015 CERTIFIED</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleCursorAura}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              title="Toggle subtle cursor follower effect"
              aria-label="Toggle subtle pointer aura"
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Pointer Aura: {cursorAuraEnabled ? 'On' : 'Off'}</span>
            </button>
            <span className="text-slate-300">|</span>
            <a
              href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 transition-colors"
              title="Teleport to WhatsApp: 8780788806"
            >
              <span>WHATSAPP: 8780788806</span>
            </a>
            <span className="text-slate-300">·</span>
            <a href="mailto:jaychhag0@gmail.com" className="text-amber-700 font-semibold hover:underline">
              jaychhag0@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single clean line) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group tactile-btn"
          aria-label="VOLTTORQ Heavy Engineering Homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-amber-700 transition-colors">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors whitespace-nowrap">
              VOLTTORQ
            </span>
            <span className="text-[10px] uppercase font-mono-data tracking-widest text-slate-500 -mt-1 font-semibold">
              Heavy Engineering
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 Concise Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all tactile-btn cursor-pointer ${
                  isActive
                    ? 'bg-amber-50 text-amber-900 shadow-xs ring-1 ring-amber-600/30 font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {item.id === 'estimator' && estimatorCount > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-amber-600 text-white font-mono-data font-bold">
                    {estimatorCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors tactile-btn shrink-0"
            title="Teleport to WhatsApp: 8780788806"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => handleNavClick('estimator')}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors tactile-btn cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Fleet Estimator (₹)</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm transition-all tactile-btn cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Request RFQ</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3 py-1.5 text-xs font-bold text-white bg-amber-600 rounded-lg"
          >
            RFQ
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg tactile-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                currentTab === item.id
                  ? 'bg-amber-50 text-amber-900 font-bold border-l-4 border-amber-600'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'estimator' && estimatorCount > 0 && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-amber-600 text-white font-mono-data font-bold">
                  {estimatorCount} machines
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp: 8780788806</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-amber-600 text-white rounded-lg font-bold text-center flex items-center justify-center gap-2"
            >
              <span>Submit Tender Inquiry / RFQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-slate-600 pt-2 font-mono-data">
              TEL: 8780788806 | jaychhag0@gmail.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
