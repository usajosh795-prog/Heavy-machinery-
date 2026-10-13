import React, { useState, useRef } from 'react';
import { TabId, Product, formatINR } from '../../types';
import { PRODUCTS, BUSINESS_SECTORS, TESTING_BAYS } from '../../data/mockData';
import { ScrollReveal } from '../ScrollReveal';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Wrench,
  Clock,
  ExternalLink,
  Zap,
  Gauge,
  Factory,
  HardHat,
  Truck,
  Building2,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

interface HomeTabProps {
  onSelectTab: (tab: TabId) => void;
  onOpenCadModal: (product: Product) => void;
  onSelectProductAndNavigate: (productId: string) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectTab,
  onOpenCadModal,
  onSelectProductAndNavigate
}) => {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Duplicate product list to ensure seamless infinite looping marquee
  const loopedProducts = [...PRODUCTS, ...PRODUCTS];

  const handleProductCardClick = (productId: string) => {
    setIsCarouselPaused(true);
    onSelectProductAndNavigate(productId);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* SECTION 1: HERO & BUSINESS LEADERSHIP */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20 relative z-10">
          <ScrollReveal delayMs={50}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Core Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
                  <span>Heavy Capital Machinery Manufacturer · B2B Wholesale &amp; Fleet Orders</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
                  POWERING CRITICAL INFRASTRUCTURE WITH{' '}
                  <span className="text-amber-600">ZERO-FAILURE</span> HEAVY MACHINERY.
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                  VOLTTORQ is an established capital engineering manufacturer specializing in high-voltage substation power transformers up to 765kV, automated civil rebar fabrication lines up to 55mm, and 150-ton multi-axle freight weighbridges.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onSelectTab('products')}
                    className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm rounded-lg shadow-md transition-all tactile-btn flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing%20for%20Transformers%20%2F%20Bar%20Benders%20%2F%20Weighbridges."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-lg shadow-sm transition-all tactile-btn flex items-center gap-2"
                    title="Teleport to WhatsApp: 8780788806"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp (8780788806)</span>
                  </a>

                  <button
                    onClick={() => onSelectTab('estimator')}
                    className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900 font-bold text-sm rounded-lg border border-slate-300 transition-all tactile-btn flex items-center gap-2 cursor-pointer"
                  >
                    <span>Fleet Estimator (₹ INR)</span>
                    <ExternalLink className="w-4 h-4 text-slate-600" />
                  </button>
                </div>

                {/* High-Legibility Telemetry Strip in Indian Context */}
                <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-mono-data text-slate-500 uppercase block font-semibold">
                      Grid Tested
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono-data text-slate-900">
                      765 kV / 2,100 kV BIL
                    </span>
                    <span className="text-[11px] text-amber-700 font-medium block mt-0.5">
                      BIS &amp; IEEE Verified
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-mono-data text-slate-500 uppercase block font-semibold">
                      Rebar Capacity
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono-data text-slate-900">
                      Ø 55mm Fe 600
                    </span>
                    <span className="text-[11px] text-amber-700 font-medium block mt-0.5">
                      IS-1786 Approved
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-mono-data text-slate-500 uppercase block font-semibold">
                      Weighbridge Cap
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono-data text-slate-900">
                      150 MT Gross
                    </span>
                    <span className="text-[11px] text-amber-700 font-medium block mt-0.5">
                      Legal Metrology Class III
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Resolution Industrial Showcase Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwh-XIu9qGCxlcYK3EZRbeksoNcraI15cRCH9dnq0B3Da7IMXdVGwYWUeKVeKY6eMBD6n4aDgRZL70cn00fyahWmIbVRD6QawzyTUv4TzZAHR0EmJaKXxBvXVWAI0PFu9pWtWa7PMlkuA2MBh_BePu3HD9epCq2WkKVRnacyY8q8rqv0lKZaDzPYWdVLYeEOIcksaDSVYYiO1lsYfXOZAaVPKbPWz_d29fir97q7OgYkJoOapeE-0Z"
                      alt="Volttorq Heavy High-Voltage Substation Transformer Core"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono-data font-bold text-slate-900 shadow-sm border border-slate-200">
                      TAG: VT-TRX-765-MOD4
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-md text-xs font-mono-data font-bold">
                      FACTORY DISPATCH READY
                    </div>
                  </div>

                  <div className="p-6 bg-white border-t border-slate-100 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">
                          765kV Utility-Scale Power Core
                        </h3>
                        <p className="text-xs text-slate-500">
                          Zero-Loss Laser-Scribed Silicon Magnetic Steel
                        </p>
                      </div>
                      <span className="font-mono-data text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                        99.4% EFFICIENCY
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-data text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <div>
                        <span className="text-slate-400 block text-[10px]">WINDING TEMP MARGIN</span>
                        <span className="font-semibold text-slate-800">64.2°C Hotspot Probe</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">GAS DIELECTRIC DENSITY</span>
                        <span className="font-semibold text-slate-800">6.12 bar SF6 Sealed</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onOpenCadModal(PRODUCTS[0])}
                        className="text-xs font-bold text-slate-700 hover:text-amber-700 flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Layers className="w-4 h-4 text-amber-600" />
                        <span>Download 3D CAD (.STEP)</span>
                      </button>
                      <button
                        onClick={() => onSelectProductAndNavigate(PRODUCTS[0].id)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>View Specifications</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: PRODUCTS GALLERY */}
      <section className="w-full bg-slate-100/70 border-y border-slate-200 py-14 overflow-hidden">
        <ScrollReveal delayMs={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                PRODUCTS GALLERY
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Hover or click any equipment model to pause and view in-depth engineering specifications.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('products')}
              className="text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View All Detailed Specs</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* The Products Gallery Container with pause-on-hover & pause-on-click */}
        <ScrollReveal delayMs={150}>
          <div
            className="relative w-full overflow-hidden py-2"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onTouchStart={() => setIsCarouselPaused(true)}
            onTouchEnd={() => setIsCarouselPaused(false)}
          >
            {/* Edge Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

            <div
              ref={carouselTrackRef}
              className="animate-marquee-flow flex items-center gap-6"
              style={{
                animationPlayState: isCarouselPaused ? 'paused' : 'running'
              }}
            >
              {loopedProducts.map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  onClick={() => handleProductCardClick(product.id)}
                  className="group relative w-72 sm:w-80 shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-200 cursor-pointer tactile-btn text-left"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleProductCardClick(product.id);
                    }
                  }}
                >
                  {/* Clean Visual Image without overlay specs */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>

                  {/* Strictly ONLY the product name is displayed */}
                  <div className="p-4 bg-white flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-amber-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3: BUSINESS SHOWCASE & EPC PEDIGREE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal delayMs={50}>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono-data font-bold text-amber-700 uppercase tracking-widest block">
              National Infrastructure Backbone
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ENGINEERED TO EMPOWER MEGA INFRASTRUCTURE
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From extra-high-voltage power transmission corridors to national expressways and multimodal cargo ports, VOLTTORQ machinery is deployed across critical infrastructure sectors.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Business Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SECTORS.map((sector, index) => (
            <ScrollReveal key={sector.id} delayMs={index * 100}>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                    {sector.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                    {sector.iconName === 'HardHat' && <HardHat className="w-6 h-6" />}
                    {sector.iconName === 'Truck' && <Truck className="w-6 h-6" />}
                    {sector.iconName === 'Factory' && <Factory className="w-6 h-6" />}
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                    {sector.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-mono-data font-bold text-amber-700">
                    {sector.metric}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <strong>Partner Specs:</strong> {sector.clientExample}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why EPC Contractors Choose VOLTTORQ */}
        <ScrollReveal delayMs={100}>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono-data font-bold text-amber-400 uppercase tracking-widest block">
                  Manufacturer Direct Advantage
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Why Consulting Engineers &amp; EPCs Choose VOLTTORQ
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We eliminate broker intermediaries and third-party fabrication risk. Every power transformer, rebar bending gear, and weighbridge deck is forged and tested entirely inside our owned plants.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectTab('company')}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition-colors tactile-btn flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Factory Bio &amp; Pedigree</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:8780788806"
                    className="text-xs text-amber-300 hover:text-white font-mono-data font-semibold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 87807 88806</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>100% In-House Labs</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Marx 2,400kV lightning impulse bay, 3,000 kN cyclic stress rig, and continuous infrared heat run bays.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>14 Global Plants</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    450,000 m² under roof in Duisburg, Pune/Mumbai, Vadodara, Houston, and Dammam for rapid delivery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Turnkey On-Site EPC</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Resident commissioning engineers assist on-site civil anchoring, oil filtration, and SCADA programming.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Transparent Indian Pricing</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Itemized ex-works and CIF port quotes strictly in Indian Rupees (₹) with tiered wholesale discounts up to 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 4: TESTING BAYS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal delayMs={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Zero-Fault Quality Assurance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                HARSH ELECTRICAL &amp; MECHANICAL TESTING BAYS
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Every unit undergoes destructive impulse verification, dynamic hydraulic fatigue testing, and sustained full-load heat runs before leaving our fabrication plants.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('company')}
              className="text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 self-start md:self-end tactile-btn cursor-pointer"
            >
              <span>Learn About Testing Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTING_BAYS.map((bay, idx) => (
            <ScrollReveal key={bay.id} delayMs={idx * 120}>
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="h-48 w-full relative bg-slate-100">
                  <img
                    src={bay.image}
                    alt={bay.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-[11px] font-mono-data font-bold">
                    {bay.rating}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">{bay.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{bay.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION FOR TENDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delayMs={100}>
          <div className="rounded-2xl bg-amber-600 text-white p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700 text-amber-100 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Priority Tender Review · 4-Hour Engineer SLA</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Planning a Fleet Order or Substation Tender?
              </h2>

              <p className="text-amber-100 text-base leading-relaxed">
                Connect directly with our engineering desk at <strong>+91 87807 88806</strong> or email your tender drawings / BOQ to <strong>jaychhag0@gmail.com</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => onSelectTab('estimator')}
                  className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-lg shadow-sm transition-all tactile-btn cursor-pointer"
                >
                  Launch Fleet Pricing Estimator (₹)
                </button>

                <button
                  onClick={() => onSelectTab('contact')}
                  className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm rounded-lg border border-amber-500/50 transition-all tactile-btn cursor-pointer"
                >
                  Direct Factory Inquiry Form
                </button>

                <a
                  href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20am%20planning%20a%20fleet%20order%20%2F%20substation%20tender%20and%20would%20like%20to%20request%20quotation%20and%20engineering%20specs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-lg shadow-sm transition-all tactile-btn flex items-center gap-2"
                  title="Teleport to WhatsApp: 8780788806"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp (8780788806)</span>
                </a>

                <a
                  href="mailto:jaychhag0@gmail.com"
                  className="px-4 py-3 bg-amber-700/80 hover:bg-amber-700 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>jaychhag0@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
