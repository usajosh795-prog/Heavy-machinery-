import React, { useState, useMemo } from 'react';
import { TabId, Product, formatINR } from '../../types';
import { PRODUCTS, ADDONS, REGIONS } from '../../data/mockData';
import { ScrollReveal } from '../ScrollReveal';
import {
  Calculator,
  Plus,
  Minus,
  Trash2,
  Check,
  Printer,
  ArrowRight,
  ShieldAlert,
  Percent,
  Truck,
  Sparkles,
  Info,
  MessageCircle
} from 'lucide-react';

interface EstimatorTabProps {
  onSelectTab: (tab: TabId) => void;
  basket: Record<string, number>;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBasket: () => void;
  onTransferToContact: (summary: string) => void;
}

export const EstimatorTab: React.FC<EstimatorTabProps> = ({
  onSelectTab,
  basket,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
  onTransferToContact
}) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'turnkey-foundation',
    'on-site-fat'
  ]);
  const [destinationRegion, setDestinationRegion] = useState<string>('india-domestic');
  const [projectTenderTitle, setProjectTenderTitle] = useState<string>(
    'National Highway & Grid Expansion EPC 2026'
  );

  // Toggle service addon
  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Compute machine totals
  const totalMachineCount = useMemo(() => {
    return Object.values(basket).reduce((sum, qty) => sum + qty, 0);
  }, [basket]);

  // Determine volume tier
  const discountTier = useMemo(() => {
    if (totalMachineCount >= 20) {
      return {
        percent: 20,
        label: 'Strategic Enterprise Tier (20+ Units)',
        highlight: 'Max 20% Fleet Rebate + Dedicated Lead Resident Engineer'
      };
    }
    if (totalMachineCount >= 10) {
      return {
        percent: 14,
        label: 'Fleet Wholesale Tier (10–19 Units)',
        highlight: 'Recommended: 14% Fleet Wholesale Discount Applied'
      };
    }
    if (totalMachineCount >= 5) {
      return {
        percent: 8,
        label: 'Bulk Project Tier (5–9 Units)',
        highlight: '8% Bulk Project Rebate Applied'
      };
    }
    return {
      percent: 0,
      label: 'Standard B2B Baseline (1–4 Units)',
      highlight: 'Add 5+ machines total to trigger bulk wholesale rebates'
    };
  }, [totalMachineCount]);

  // Financial calculations in INR
  const baseEquipmentSubtotal = useMemo(() => {
    return Object.entries(basket).reduce((sum, [pId, qty]) => {
      const prod = PRODUCTS.find((p) => p.id === pId);
      if (!prod) return sum;
      return sum + prod.basePriceInr * qty;
    }, 0);
  }, [basket]);

  const discountAmount = useMemo(() => {
    return Math.round((baseEquipmentSubtotal * discountTier.percent) / 100);
  }, [baseEquipmentSubtotal, discountTier.percent]);

  const equipmentTotalAfterDiscount = baseEquipmentSubtotal - discountAmount;

  // Addons total in INR (charged per unit configured)
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, aId) => {
      const addon = ADDONS.find((a) => a.id === aId);
      if (!addon) return sum;
      return sum + addon.pricePerUnit * (totalMachineCount || 1);
    }, 0);
  }, [selectedAddons, totalMachineCount]);

  // Freight & logistics estimate in INR
  const currentRegion = REGIONS.find((r) => r.id === destinationRegion) || REGIONS[0];
  const freightAndInsuranceEstimate = useMemo(() => {
    if (totalMachineCount === 0) return 0;
    const rawFreight = totalMachineCount * 250000 * (currentRegion.shippingFactor - 1);
    return Math.round(rawFreight + totalMachineCount * 125000);
  }, [totalMachineCount, currentRegion]);

  const grandTotalEstimate =
    equipmentTotalAfterDiscount + addonsTotal + freightAndInsuranceEstimate;

  const handlePrint = () => {
    window.print();
  };

  const handleTransfer = () => {
    const summaryLines = [
      `Tender / Project: ${projectTenderTitle}`,
      `Total Machinery: ${totalMachineCount} Units`,
      `Estimated Equipment Subtotal: ${formatINR(equipmentTotalAfterDiscount)} (${formatINR(equipmentTotalAfterDiscount, true)}) [Tier: ${discountTier.label}]`,
      `Addons Selected: ${selectedAddons.length} services (${formatINR(addonsTotal)})`,
      `Estimated Grand Total: ${formatINR(grandTotalEstimate)} (${formatINR(grandTotalEstimate, true)}) [Destination: ${currentRegion.name}]`,
      `Configured Machinery: ${Object.entries(basket)
        .map(([id, q]) => {
          const p = PRODUCTS.find((x) => x.id === id);
          return `${p?.code || id} (Qty: ${q})`;
        })
        .join(', ')}`
    ].join('\n');

    onTransferToContact(summaryLines);
    onSelectTab('contact');
  };

  const handleWhatsAppEstimate = () => {
    const machineryLines = Object.entries(basket)
      .filter(([_, q]) => q > 0)
      .map(([pId, qty]) => {
        const prod = PRODUCTS.find((p) => p.id === pId);
        return `• ${prod?.name || pId} (${prod?.code}): ${qty} units`;
      })
      .join('\n');

    const text = `Hello VOLTTORQ Heavy Engineering,

I would like to request tender quotation for this configured machinery fleet:
📋 Project: ${projectTenderTitle}
⚙️ Total Units: ${totalMachineCount} Machines
💰 Estimated Equipment Subtotal: ${formatINR(equipmentTotalAfterDiscount, true)}
🏷️ Net Grand Total: ${formatINR(grandTotalEstimate, true)} (Region: ${currentRegion.name})

Configured Equipment:
${machineryLines || '• Fleet package under review'}

Please confirm delivery lead times and share our official pro-forma quote.`;

    window.open(`https://wa.me/918780788806?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <ScrollReveal delayMs={50}>
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
                Procurement &amp; Tender Tool · Section 04
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                INTERACTIVE BULK &amp; FLEET COST ESTIMATOR (₹ INR)
              </h1>
              <p className="text-base text-slate-600 max-w-2xl mt-2 leading-relaxed">
                Tailored for EPC contractors, infrastructure developers, and utility authorities configuring fleet orders (10–12+ units) with transparent Indian volume rebates and turnkey services.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-lg transition-colors tactile-btn flex items-center gap-2 cursor-pointer no-print shadow-xs"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print / Export PDF (₹)</span>
              </button>
            </div>
          </div>

          {/* Volume Tier Bar Preview */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold font-mono-data shrink-0">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-data font-bold text-amber-900 uppercase block">
                  CURRENT TIER: {discountTier.label}
                </span>
                <p className="text-xs text-amber-800 font-medium">
                  {discountTier.highlight}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono-data text-xs text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-amber-200/80 shadow-xs">
              <span>Configured Fleet:</span>
              <strong className="text-amber-800 text-sm font-bold">
                {totalMachineCount} Machines
              </strong>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print-area">
        {/* Left Column: Machinery Selection & Addons (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section A: Configured Machinery Fleet */}
          <ScrollReveal delayMs={100}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-600" />
                  <span>1. Select &amp; Adjust Equipment Quantities</span>
                </h2>

                {totalMachineCount > 0 && (
                  <button
                    onClick={onClearBasket}
                    className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 font-semibold cursor-pointer no-print"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Fleet</span>
                  </button>
                )}
              </div>

              {/* List of Products to Configure */}
              <div className="space-y-3">
                {PRODUCTS.map((product) => {
                  const qty = basket[product.id] || 0;
                  const isSelected = qty > 0;

                  return (
                    <div
                      key={product.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-amber-400 shadow-xs ring-1 ring-amber-400/30'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono-data font-bold text-amber-700">
                                {product.code}
                              </span>
                              <span className="text-slate-300">·</span>
                              <span className="text-[11px] font-mono-data text-slate-500">
                                {product.capacity}
                              </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm">{product.name}</h3>
                            <div className="flex items-center gap-1.5 text-xs font-mono-data text-slate-700 font-semibold">
                              <span>{formatINR(product.basePriceInr)}</span>
                              <span className="text-amber-700 font-normal">
                                ({formatINR(product.basePriceInr, true)}) / unit
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-3 self-end sm:self-center">
                          <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                            <button
                              onClick={() => onUpdateQuantity(product.id, Math.max(0, qty - 1))}
                              className="p-2 hover:bg-slate-200 text-slate-700 transition-colors tactile-btn cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>

                            <span className="px-3 py-1 font-mono-data font-bold text-sm text-slate-900 min-w-[36px] text-center">
                              {qty}
                            </span>

                            <button
                              onClick={() => onUpdateQuantity(product.id, qty + 1)}
                              className="p-2 hover:bg-slate-200 text-slate-700 transition-colors tactile-btn cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Quick Fleet Presets */}
                          <div className="flex items-center gap-1 no-print">
                            <button
                              onClick={() => onUpdateQuantity(product.id, qty + 5)}
                              className="px-2 py-1 text-[11px] font-mono-data font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors tactile-btn cursor-pointer"
                              title="Add 5 units for bulk contractor volume"
                            >
                              +5
                            </button>
                            <button
                              onClick={() => onUpdateQuantity(product.id, qty + 10)}
                              className="px-2 py-1 text-[11px] font-mono-data font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded transition-colors tactile-btn cursor-pointer"
                              title="Add 10 units for major fleet tender"
                            >
                              +10
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Section B: Turnkey Engineering Services & Add-ons */}
          <ScrollReveal delayMs={150}>
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600" />
                  <span>2. Turnkey Engineering &amp; Commissioning Services</span>
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Select specialized field deployment packages (calculated on your configured fleet volume).
                </p>
              </div>

              <div className="space-y-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 tactile-btn ${
                        isSelected
                          ? 'bg-amber-50/50 border-amber-400 ring-1 ring-amber-400/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-amber-600 border-amber-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-900 text-sm">{addon.name}</h3>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            {addon.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0 font-mono-data">
                        <span className="text-xs font-bold text-slate-900 block">
                          +{formatINR(addon.pricePerUnit)}
                        </span>
                        <span className="text-[10px] text-amber-700 block">
                          ({formatINR(addon.pricePerUnit, true)}) / unit
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Section C: Destination Region & Logistics */}
          <ScrollReveal delayMs={200}>
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-600" />
                <span>3. Target Deployment Region</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {REGIONS.map((reg) => (
                  <label
                    key={reg.id}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${
                      destinationRegion === reg.id
                        ? 'bg-amber-50/70 border-amber-400 font-bold text-amber-950'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="destination"
                        value={reg.id}
                        checked={destinationRegion === reg.id}
                        onChange={() => setDestinationRegion(reg.id)}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span>{reg.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Itemized Quotation Invoice Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delayMs={100}>
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-mono-data text-amber-700 font-bold uppercase block">
                  B2B Itemized Proposal (₹ INR)
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  FLEET ESTIMATE BREAKDOWN
                </h2>
                <div className="mt-2.5">
                  <label className="text-[11px] font-mono-data text-slate-500 block uppercase mb-1">
                    Project / Tender Title
                  </label>
                  <input
                    type="text"
                    value={projectTenderTitle}
                    onChange={(e) => setProjectTenderTitle(e.target.value)}
                    className="w-full text-xs font-semibold px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500 bg-slate-50 text-slate-800"
                  />
                </div>
              </div>

              {/* Configured Item Summary List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {totalMachineCount === 0 ? (
                  <div className="text-center py-6 text-slate-500 text-xs font-mono-data">
                    No machines added yet. Use the quantity steppers on the left to configure your fleet.
                  </div>
                ) : (
                  Object.entries(basket)
                    .filter(([_, q]) => q > 0)
                    .map(([pId, qty]) => {
                      const prod = PRODUCTS.find((p) => p.id === pId);
                      if (!prod) return null;
                      const lineTotal = prod.basePriceInr * qty;
                      return (
                        <div
                          key={pId}
                          className="flex items-center justify-between text-xs font-mono-data pb-2 border-b border-slate-100"
                        >
                          <div>
                            <span className="font-bold text-slate-900 block">{prod.code}</span>
                            <span className="text-[11px] text-slate-500">
                              {qty} units × {formatINR(prod.basePriceInr, true)}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-slate-800 block">
                              {formatINR(lineTotal)}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              ({formatINR(lineTotal, true)})
                            </span>
                          </div>
                        </div>
                      );
                    })
                )}
              </div>

              {/* Financial Ledger Calculation in INR */}
              <div className="space-y-2.5 pt-3 border-t border-slate-200 text-xs font-mono-data">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Base Equipment Subtotal:</span>
                  <span className="font-semibold text-slate-900">
                    {formatINR(baseEquipmentSubtotal)}
                  </span>
                </div>

                {discountTier.percent > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                    <span>Volume Rebate ({discountTier.percent}%):</span>
                    <span className="font-bold">
                      -{formatINR(discountAmount)} ({formatINR(discountAmount, true)})
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-slate-600">
                  <span>Selected Field Services ({selectedAddons.length}):</span>
                  <span className="font-semibold text-slate-900">
                    +{formatINR(addonsTotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Estimated Heavy Transit &amp; Insurance:</span>
                  <span className="font-semibold text-slate-900">
                    +{formatINR(freightAndInsuranceEstimate)}
                  </span>
                </div>

                {/* Grand Total Highlight */}
                <div className="pt-4 border-t-2 border-slate-900 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 uppercase block">
                      Estimated Net Total
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Ex-Works / Door Delivery Terms
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-amber-700 font-mono-data block">
                      {formatINR(grandTotalEstimate)}
                    </span>
                    <span className="text-xs font-bold text-slate-700 font-mono-data uppercase">
                      ({formatINR(grandTotalEstimate, true)})
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="space-y-2.5 pt-2 no-print">
                <button
                  onClick={handleTransfer}
                  disabled={totalMachineCount === 0}
                  className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all tactile-btn cursor-pointer ${
                    totalMachineCount > 0
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Transfer Estimate to Tender Submission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppEstimate}
                  disabled={totalMachineCount === 0}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all tactile-btn cursor-pointer ${
                    totalMachineCount > 0
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  title="Send pre-typed estimate directly on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp (8780788806)</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full py-2.5 px-4 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors tactile-btn cursor-pointer flex items-center justify-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span>Export Official Printable Quote (₹)</span>
                </button>
              </div>

              {/* Procurement Policy Note */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  <span>Manufacturer Direct Notice</span>
                </div>
                <p>
                  Calculated strictly in Indian Rupees (₹ INR). GST (18%) and formal contractual inspection milestones will be itemized in the final BOQ contract. Direct tender desk: <strong>jaychhag0@gmail.com</strong> / <strong>8780788806</strong>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
