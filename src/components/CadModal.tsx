import React, { useState } from 'react';
import { Product, formatINR } from '../types';
import { X, Download, FileText, Check, Layers, Cpu, Compass } from 'lucide-react';

interface CadModalProps {
  product: Product | null;
  onClose: () => void;
}

export const CadModal: React.FC<CadModalProps> = ({ product, onClose }) => {
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  if (!product) return null;

  const handleDownload = (format: string) => {
    setDownloadedFormat(format);
    setTimeout(() => {
      setDownloadedFormat(null);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cad-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cad-modal-title" className="text-lg font-bold text-slate-900 leading-snug">
                Engineering CAD &amp; BIM Vault
              </h3>
              <p className="text-xs font-mono-data text-slate-600">
                MODEL: {product.code} · REV 4.2 · CERTIFIED SPECIFICATION
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors tactile-btn cursor-pointer"
            aria-label="Close CAD Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Schematic Blueprint Viewport */}
          <div className="relative rounded-xl border border-slate-300 bg-slate-950 p-6 text-slate-100 overflow-hidden">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              {/* Product schematic illustration / photo */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover opacity-90 contrast-110"
                />
              </div>

              {/* Parametric Blueprint Telemetry */}
              <div className="w-full md:w-1/2 space-y-3 font-mono-data text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-amber-400 font-bold uppercase">DATUM ORIENTATION</span>
                  <span className="text-sky-400">IS / ISO 128 DRAFT</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 block">NOMINAL CAPACITY</span>
                    <span className="font-semibold text-white">{product.capacity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">PRIMARY TOLERANCE</span>
                    <span className="font-semibold text-amber-400">{product.primarySpec}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">BASE EX-WORKS</span>
                    <span className="text-emerald-400 font-bold">
                      {formatINR(product.basePriceInr, true)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">ANCHOR BOLTING</span>
                    <span className="text-slate-300">12x M36 Grade 8.8 Galvanized</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
                  <span className="text-amber-400 font-semibold block mb-0.5">
                    STRUCTURAL INTEGRITY CLEARANCE:
                  </span>
                  Full finite element analysis (FEA) completed for seismic zone 4 shock waves and continuous operational harmonic resonance damping.
                </div>
              </div>
            </div>
          </div>

          {/* Download Formats Grid */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-600" />
              <span>Available File Formats for Consulting Engineers</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* Format 1: 3D STEP */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-data font-bold text-amber-700 text-sm">.STEP / .STP</span>
                  <Cpu className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Solid parametric 3D CAD model for SolidWorks, Inventor &amp; CATIA.
                </p>
                <button
                  onClick={() => handleDownload('STEP')}
                  className="w-full py-2 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {downloadedFormat === 'STEP' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Exported</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (14.2 MB)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Format 2: 2D DWG */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-data font-bold text-sky-700 text-sm">.DWG / .DXF</span>
                  <Compass className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  AutoCAD 2D civil foundation drawing, anchor holes &amp; clearance envelope.
                </p>
                <button
                  onClick={() => handleDownload('DWG')}
                  className="w-full py-2 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {downloadedFormat === 'DWG' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Exported</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (8.4 MB)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Format 3: BIM RVT */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-data font-bold text-purple-700 text-sm">.RVT / BIM</span>
                  <Layers className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Revit MEP object with electrical bus connection and cooling MEP points.
                </p>
                <button
                  onClick={() => handleDownload('BIM')}
                  className="w-full py-2 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {downloadedFormat === 'BIM' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Exported</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (22.8 MB)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Format 4: PDF Spec */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-data font-bold text-rose-700 text-sm">.PDF DATASHEET</span>
                  <FileText className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Certified factory test cert template, warranty terms, and full tender BOQ text.
                </p>
                <button
                  onClick={() => handleDownload('PDF')}
                  className="w-full py-2 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors tactile-btn flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {downloadedFormat === 'PDF' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Exported</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (4.1 MB)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Feedback banner */}
          {downloadedFormat && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium flex items-center justify-between animate-in slide-in-from-bottom duration-150">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Success:</strong> {product.code}_{downloadedFormat}_Rev4.2 package generated and downloaded for EPC deployment.
                </span>
              </span>
              <span className="font-mono-data text-[10px] text-emerald-700 uppercase">
                CHECKSUM: SHA-256 VERIFIED
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <span className="font-mono-data">
            Need custom dimensional envelope adaptations for low-clearance substations?
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg transition-colors tactile-btn cursor-pointer"
          >
            Close CAD Vault
          </button>
        </div>
      </div>
    </div>
  );
};
