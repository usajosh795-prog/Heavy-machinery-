import React, { useState, useMemo, useEffect } from 'react';
import { TabId, Product, ProductCategory, formatINR } from '../../types';
import { PRODUCTS } from '../../data/mockData';
import { ScrollReveal } from '../ScrollReveal';
import {
  Layers,
  Search,
  Check,
  Plus,
  FileDown,
  ShieldCheck,
  SlidersHorizontal,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ProductsTabProps {
  onSelectTab: (tab: TabId) => void;
  onOpenCadModal: (product: Product) => void;
  onAddToEstimator: (productId: string) => void;
  targetProductId?: string | null;
}

export const ProductsTab: React.FC<ProductsTabProps> = ({
  onSelectTab,
  onOpenCadModal,
  onAddToEstimator,
  targetProductId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Equipment' },
    { id: 'transformers', label: 'Power Transformers' },
    { id: 'rebar', label: 'Rebar Benders & Shears' },
    { id: 'weighbridges', label: 'Industrial Weighbridges' },
    { id: 'structural', label: 'Allied Fabrication' }
  ];

  // Auto-scroll and highlight target product when redirected from Home marquee
  useEffect(() => {
    if (targetProductId) {
      const targetProd = PRODUCTS.find((p) => p.id === targetProductId);
      if (targetProd) {
        // Ensure category doesn't filter out this target
        if (selectedCategory !== 'all' && targetProd.category !== selectedCategory) {
          setSelectedCategory('all');
        }
      }
      setHighlightedId(targetProductId);

      const timer = setTimeout(() => {
        const el = document.getElementById(`product-${targetProductId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);

      const clearHighlightTimer = setTimeout(() => {
        setHighlightedId(null);
      }, 3500);

      return () => {
        clearTimeout(timer);
        clearTimeout(clearHighlightTimer);
      };
    }
  }, [targetProductId]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capacity.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddWithFeedback = (product: Product) => {
    onAddToEstimator(product.id);
    setAddedNotice(product.name);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Tab Header & Title */}
      <ScrollReveal delayMs={50}>
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
                Industrial Catalog · Section 02
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                HEAVY INDUSTRIAL MACHINERY SPECIFICATIONS
              </h1>
              <p className="text-base text-slate-600 max-w-2xl mt-2">
                Comprehensive engineering specs, dimensional parameters, electrical impulse ratings, and mechanical capacities for utility power, civil infrastructure, and bulk logistics. Direct technical inquiry desk: <strong>jaychhag0@gmail.com</strong> / <strong>8780788806</strong>.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('estimator')}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors tactile-btn flex items-center gap-2 self-start md:self-end shrink-0 cursor-pointer"
            >
              <span>Launch Fleet Estimator (₹ INR)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4">
            {/* Category Filter Buttons (Functional Segmented Control) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all tactile-btn cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm font-extrabold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search model code, rating, or standard..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-800 shadow-xs"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Added notice banner */}
      {addedNotice && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs font-medium flex items-center justify-between animate-in slide-in-from-top duration-200">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Added to Fleet Basket:</strong> &quot;{addedNotice}&quot; is ready in your bulk cost estimator.
            </span>
          </span>
          <button
            onClick={() => onSelectTab('estimator')}
            className="text-amber-800 hover:underline font-bold"
          >
            Go to Estimator →
          </button>
        </div>
      )}

      {/* Detailed Product Cards List */}
      <div className="space-y-12">
        {filteredProducts.map((product) => {
          const isTargeted = highlightedId === product.id;

          return (
            <ScrollReveal key={product.id}>
              <div
                id={`product-${product.id}`}
                className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden shadow-sm ${
                  isTargeted
                    ? 'product-target-highlight border-amber-500 ring-2 ring-amber-400/50 shadow-lg'
                    : 'border-slate-200 hover:shadow-md'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Product Visual Gallery Column */}
                  <div className="lg:col-span-5 bg-slate-100 flex flex-col justify-between p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-data font-bold text-amber-700 uppercase">
                          {product.code}
                        </span>
                        <span className="text-xs font-mono-data text-slate-500">
                          LEAD TIME: {product.leadTime}
                        </span>
                      </div>

                      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white h-64 sm:h-72">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 text-white text-xs font-mono-data px-2.5 py-1 rounded">
                          RATED: {product.capacity}
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-mono-data text-slate-500 uppercase block font-semibold">
                          Compliance Standards Cleared
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {product.compliance.map((c) => (
                            <span
                              key={c}
                              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono-data text-slate-700 font-semibold"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Left Bottom Action Bar */}
                    <div className="pt-6 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onOpenCadModal(product)}
                        className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Layers className="w-3.5 h-3.5 text-amber-600" />
                        <span>View CAD / 3D STEP</span>
                      </button>

                      <button
                        onClick={() => handleAddWithFeedback(product)}
                        className="flex-1 py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Estimator</span>
                      </button>
                    </div>
                  </div>

                  {/* Product In-Depth Specifications & Engineering Features */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase mb-1">
                          <span>{product.categoryLabel}</span>
                          <span>·</span>
                          <span>Wholesale Fleet Minimum: {product.minWholesaleQty}+ Units</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {product.name}
                        </h2>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Parametric Technical Specifications Table */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
                          <span>Certified Engineering Parameters</span>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono-data">
                          {product.specs.map((spec) => (
                            <div
                              key={spec.label}
                              className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                            >
                              <span className="text-[10px] text-slate-500 uppercase">
                                {spec.label}
                              </span>
                              <span className="font-bold text-slate-900 text-xs mt-0.5">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Operational Features */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Key Safety &amp; Operational Systems
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {product.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Wholesale Pricing Guide in Indian Currency (₹ INR) */}
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-mono-data uppercase text-slate-500 block">
                          Base Reference Price (Ex-Works Factory)
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-extrabold font-mono-data text-slate-900">
                            {formatINR(product.basePriceInr)}
                          </span>
                          <span className="text-xs font-bold text-amber-700 font-mono-data">
                            ({formatINR(product.basePriceInr, true)})
                          </span>
                        </div>
                        <span className="text-xs text-emerald-700 font-medium block mt-0.5">
                          Tiered discounts up to 20% on fleet procurement (10+ units)
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddWithFeedback(product)}
                          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors tactile-btn cursor-pointer shadow-xs"
                        >
                          Calculate Fleet Discount
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* TECHNICAL MATRIX COMPARISON TABLE */}
      <ScrollReveal>
        <section className="space-y-4 pt-10 border-t border-slate-200">
          <div>
            <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
              Parametric Cross-Reference
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              EQUIPMENT SPECIFICATION COMPARISON MATRIX
            </h2>
            <p className="text-xs text-slate-600">
              Side-by-side data sheet for procurement teams and consulting engineers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-data border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                    <th className="p-4">Model Code</th>
                    <th className="p-4">Nominal Capacity</th>
                    <th className="p-4">Reference Base (₹)</th>
                    <th className="p-4">Key Metric</th>
                    <th className="p-4">Compliance</th>
                    <th className="p-4">Lead Time</th>
                    <th className="p-4 text-right">Engineering Files</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {PRODUCTS.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">
                        {prod.code}
                        <span className="block text-[10px] text-slate-500 font-normal">
                          {prod.name}
                        </span>
                      </td>
                      <td className="p-4 text-slate-800 font-semibold">{prod.capacity}</td>
                      <td className="p-4 text-amber-800 font-bold">
                        {formatINR(prod.basePriceInr, true)}
                      </td>
                      <td className="p-4 text-slate-800">{prod.primarySpec}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px]">
                          {prod.compliance[0]}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">{prod.leadTime}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => onOpenCadModal(prod)}
                          className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 inline-flex items-center gap-1 transition-colors tactile-btn"
                        >
                          <FileDown className="w-3.5 h-3.5 text-amber-600" />
                          <span>CAD / Spec</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
