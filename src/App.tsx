import React, { useState, useEffect } from 'react';
import { TabId, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CursorAura } from './components/CursorAura';
import { CadModal } from './components/CadModal';
import { HomeTab } from './components/tabs/HomeTab';
import { ProductsTab } from './components/tabs/ProductsTab';
import { CompanyTab } from './components/tabs/CompanyTab';
import { EstimatorTab } from './components/tabs/EstimatorTab';
import { ContactTab } from './components/tabs/ContactTab';
import { Calculator } from 'lucide-react';

export default function App() {
  // 1. Tab view-routing state
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [targetProductId, setTargetProductId] = useState<string | null>(null);

  // 2. Cursor aura state
  const [cursorAuraEnabled, setCursorAuraEnabled] = useState<boolean>(true);

  // 3. CAD modal state
  const [activeCadProduct, setActiveCadProduct] = useState<Product | null>(null);

  // 4. Pre-filled inquiry notes from estimator transfer
  const [inquiryNotes, setInquiryNotes] = useState<string>('');

  // 5. Fleet Estimator basket (pre-seeded with a realistic wholesale fleet order)
  const [basket, setBasket] = useState<Record<string, number>>({
    'bar-55x-heavy': 6,
    'wb-150-modular': 2,
    'trx-160-220': 1
  });

  // Calculate total machines in basket
  const totalMachinesCount = Object.values(basket).reduce((sum, qty) => sum + qty, 0);

  // URL Hash synchronization for view-routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabId;
      if (['home', 'products', 'company', 'estimator', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    // On initial mount, check hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth tab change with transition effect & scroll to top
  const handleSelectTab = (newTab: TabId) => {
    if (newTab === currentTab) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentTab(newTab);
      window.location.hash = newTab;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 120);
  };

  // Dedicated navigation from Home continuous marquee to exact product in Products Tab
  const handleSelectProductAndNavigate = (productId: string) => {
    setTargetProductId(productId);
    handleSelectTab('products');
  };

  // Add product to estimator
  const handleAddToEstimator = (productId: string) => {
    setBasket((prev) => {
      const current = prev[productId] || 0;
      return { ...prev, [productId]: current + 1 };
    });
  };

  // Update quantity in estimator
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setBasket((prev) => {
      if (quantity <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: quantity };
    });
  };

  // Remove item
  const handleRemoveItem = (productId: string) => {
    setBasket((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  // Clear entire fleet basket
  const handleClearBasket = () => {
    setBasket({});
  };

  // Transfer estimate summary to Contact tab
  const handleTransferToContact = (summary: string) => {
    setInquiryNotes(summary);
    handleSelectTab('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Subtle Refined Cursor Aura */}
      <CursorAura enabled={cursorAuraEnabled} />

      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        cursorAuraEnabled={cursorAuraEnabled}
        onToggleCursorAura={() => setCursorAuraEnabled((prev) => !prev)}
        estimatorCount={totalMachinesCount}
      />

      {/* Main View-Routed Content Container with Fluid Fade In / Fade Out Transition */}
      <main
        className={`flex-1 transition-all duration-200 ease-out ${
          isTransitioning
            ? 'opacity-0 translate-y-2'
            : 'opacity-100 translate-y-0'
        }`}
      >
        {currentTab === 'home' && (
          <HomeTab
            onSelectTab={handleSelectTab}
            onOpenCadModal={(product) => setActiveCadProduct(product)}
            onSelectProductAndNavigate={handleSelectProductAndNavigate}
          />
        )}

        {currentTab === 'products' && (
          <ProductsTab
            onSelectTab={handleSelectTab}
            onOpenCadModal={(product) => setActiveCadProduct(product)}
            onAddToEstimator={handleAddToEstimator}
            targetProductId={targetProductId}
          />
        )}

        {currentTab === 'company' && (
          <CompanyTab onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'estimator' && (
          <EstimatorTab
            onSelectTab={handleSelectTab}
            basket={basket}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearBasket={handleClearBasket}
            onTransferToContact={handleTransferToContact}
          />
        )}

        {currentTab === 'contact' && (
          <ContactTab
            onSelectTab={handleSelectTab}
            prefilledNotes={inquiryNotes}
          />
        )}
      </main>

      {/* Floating Direct WhatsApp Teleport Button */}
      <aside
        aria-label="Direct WhatsApp Teleport"
        className="fixed bottom-6 left-6 z-30 no-print"
      >
        <a
          href="https://wa.me/918780788806?text=Hello%20VOLTTORQ%20Heavy%20Engineering%2C%20I%20would%20like%20to%20request%20machinery%20services%20and%20tender%20pricing%20for%20Transformers%20%2F%20Bar%20Benders%20%2F%20Weighbridges.%20Please%20share%20catalog%20and%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl border border-emerald-400 transition-all tactile-btn group"
          title="Teleport to WhatsApp: 8780788806"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="text-xs font-bold tracking-tight">
            WhatsApp Services (8780788806)
          </span>
        </a>
      </aside>

      {/* Floating Fleet Quick-Badge */}
      {currentTab !== 'estimator' && totalMachinesCount > 0 && (
        <aside
          aria-label="Configured Fleet Estimator Status"
          className="fixed bottom-6 right-6 z-30 no-print"
        >
          <button
            onClick={() => handleSelectTab('estimator')}
            className="flex items-center gap-2.5 px-4.5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl border border-slate-700 transition-all tactile-btn cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-mono-data text-xs font-bold">
              {totalMachinesCount}
            </div>
            <span className="text-xs font-bold tracking-tight">
              Review Fleet Estimate (₹)
            </span>
            <Calculator className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          </button>
        </aside>
      )}

      {/* CAD Vault Preview & Export Modal */}
      <CadModal
        product={activeCadProduct}
        onClose={() => setActiveCadProduct(null)}
      />

      {/* Quiet Corporate Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
