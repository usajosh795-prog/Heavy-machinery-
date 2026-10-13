import React, { useState, useEffect } from 'react';
import { TabId } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import {
  buildEmailLinks,
  buildWhatsAppUrl,
  TARGET_EMAIL,
  TARGET_PHONE
} from '../../utils/communication';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  UploadCloud,
  FileCheck,
  Send,
  HelpCircle,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
  Copy,
  ExternalLink
} from 'lucide-react';

interface ContactTabProps {
  onSelectTab: (tab: TabId) => void;
  prefilledNotes?: string;
}

export const ContactTab: React.FC<ContactTabProps> = ({
  onSelectTab,
  prefilledNotes = ''
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    jobTitle: '',
    workEmail: '',
    phone: '',
    divisionFocus: 'Power & Substation Transformers (Up to 765kV)',
    fleetScale: '10–19 Units (Fleet Wholesale Rate)',
    projectLocation: '',
    tenderNotes: '',
    fileName: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketId: string;
    engineerName: string;
    timestamp: string;
    mailtoUrl: string;
    gmailWebUrl: string;
    whatsAppUrl: string;
    bodyText: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        tenderNotes: prefilledNotes
      }));
    }
  }, [prefilledNotes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.companyName.trim() || !formData.workEmail.trim() || !formData.contactName.trim()) {
      setErrorMsg('Please complete company name, contact person, and corporate email.');
      return;
    }

    setIsSubmitting(true);

    const emailData = buildEmailLinks(formData);
    const waUrl = buildWhatsAppUrl(formData);
    const generatedTicket = 'VT-RFQ-' + Math.floor(1000 + Math.random() * 9000);

    // Automatically trigger mail client so email is sent to jaychhag0@gmail.com
    try {
      // First attempt to open Gmail Web in new tab or mailto
      const opened = window.open(emailData.gmailWebUrl, '_blank');
      if (!opened) {
        window.location.href = emailData.mailtoUrl;
      }
    } catch {
      window.location.href = emailData.mailtoUrl;
    }

    setTimeout(() => {
      setSubmittedTicket({
        ticketId: generatedTicket,
        engineerName: 'Dipl.-Ing. Marcus Sterling, Chief Applications Engineer',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mailtoUrl: emailData.mailtoUrl,
        gmailWebUrl: emailData.gmailWebUrl,
        whatsAppUrl: waUrl,
        bodyText: emailData.body
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleSendWhatsAppDirect = () => {
    const waUrl = buildWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyInquiry = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.bodyText);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2500);
    }
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      companyName: '',
      contactName: '',
      jobTitle: '',
      workEmail: '',
      phone: '',
      divisionFocus: 'Power & Substation Transformers (Up to 765kV)',
      fleetScale: '10–19 Units (Fleet Wholesale Rate)',
      projectLocation: '',
      tenderNotes: '',
      fileName: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      {/* Header */}
      <ScrollReveal delayMs={50}>
        <div className="border-b border-slate-200 pb-8 space-y-2">
          <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block">
            Tender Dispatch &amp; Engineering Portal · Section 05
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            DIRECT FACTORY INQUIRY &amp; TENDER PORTAL
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Submit your technical specifications, Bill of Quantities (BOQ), or fleet requirements. Every tender request is dispatched directly to <strong>{TARGET_EMAIL}</strong> and our senior engineering desk on WhatsApp at <strong>{TARGET_PHONE}</strong>.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: High-Contrast Form (7 Cols) */}
        <div className="lg:col-span-7">
          <ScrollReveal delayMs={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              {submittedTicket ? (
                /* Success & Direct Email Transmission State */
                <div className="space-y-6 py-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="text-center space-y-2">
                    <span className="text-xs font-mono-data font-bold text-emerald-700 uppercase">
                      Tender Inquiry Prepared &amp; Queued
                    </span>
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      Tender Reference #{submittedTicket.ticketId}
                    </h2>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto">
                      Your inquiry is prepared for transmission to <strong>{TARGET_EMAIL}</strong>. If your email composer did not open automatically, choose one of the direct dispatch options below:
                    </p>
                  </div>

                  {/* Quick Dispatch Buttons to Ensure Email Arrival */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={submittedTicket.gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm tactile-btn transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Gmail Web ({TARGET_EMAIL})</span>
                    </a>

                    <a
                      href={submittedTicket.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm tactile-btn transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Teleport to WhatsApp ({TARGET_PHONE})</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                    <a
                      href={submittedTicket.mailtoUrl}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                      <span>Open in Default Mail Client</span>
                    </a>

                    <button
                      onClick={handleCopyInquiry}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>{copiedNotice ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono-data text-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-700">
                      <span>DESTINATION EMAIL:</span>
                      <strong className="text-amber-800">{TARGET_EMAIL}</strong>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-700">
                      <span>WHATSAPP HOTLINE:</span>
                      <strong className="text-emerald-800">+91 {TARGET_PHONE}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span>GUARANTEED RESPONSE SLA:</span>
                      <span className="font-bold text-slate-900">Within 4 Business Hours</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors tactile-btn cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={() => onSelectTab('estimator')}
                      className="px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs rounded-lg transition-colors tactile-btn cursor-pointer"
                    >
                      Return to Fleet Estimator
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900">
                        Lead-Generation &amp; Technical RFQ
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Delivers directly to <strong>{TARGET_EMAIL}</strong> &amp; WhatsApp <strong>{TARGET_PHONE}</strong>.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleSendWhatsAppDirect}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs transition-colors tactile-btn cursor-pointer self-start sm:self-auto"
                      title="Send basic inquiry directly on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Direct WhatsApp Teleport</span>
                    </button>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / EPC Contractor Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="e.g. Larsen & Toubro / Tata Projects"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Person &amp; Title *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        placeholder="e.g. Chief Procurement Manager"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        placeholder="procurement@contractor.com"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Direct Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="8780788806"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Machinery Division Focus
                      </label>
                      <select
                        name="divisionFocus"
                        value={formData.divisionFocus}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      >
                        <option>Power &amp; Substation Transformers (Up to 765kV)</option>
                        <option>Civil CNC Rebar Bending &amp; Shearing</option>
                        <option>Heavy 150-Ton Truck Weighbridges</option>
                        <option>Allied Hydraulic Presses &amp; Pressure Vessels</option>
                        <option>Combined Multi-Division Fleet Tender</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Order Fleet Scale
                      </label>
                      <select
                        name="fleetScale"
                        value={formData.fleetScale}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                      >
                        <option>1–4 Units (Standard B2B Baseline)</option>
                        <option>5–9 Units (8% Bulk Project Rebate)</option>
                        <option>10–19 Units (14% Fleet Wholesale Rate)</option>
                        <option>20+ Units (20% Strategic Enterprise Tier)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Site Location / Port of Delivery
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      placeholder="e.g. Pune, Vadodara, Mumbai Port, Delhi NCR or Global Site"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Key Technical Constraints or BOQ Specifications
                    </label>
                    <textarea
                      rows={4}
                      name="tenderNotes"
                      placeholder="Specify target MVA rating, BIL level, ambient temperatures, bar diameters, or paste pre-calculated estimator summary..."
                      value={formData.tenderNotes}
                      onChange={handleChange}
                      className="w-full p-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none text-slate-900 font-mono-data"
                    />
                  </div>

                  {/* File Attachment Upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Attach Tender Drawings, BOQ or Single-Line Diagram (.PDF, .DWG, .XLSX)
                    </label>
                    <label className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 flex items-center justify-between cursor-pointer bg-slate-50 hover:bg-amber-50/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <UploadCloud className="w-6 h-6 text-amber-600" />
                        <div>
                          <span className="text-xs font-semibold text-slate-800 block">
                            {formData.fileName ? formData.fileName : 'Choose file or drag here'}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono-data">
                            Max 50MB (Referenced directly to {TARGET_EMAIL})
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1.5 text-xs font-bold bg-white border border-slate-300 text-slate-800 rounded">
                        Browse File
                      </span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Primary Dual Actions: Email & WhatsApp Direct */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm shadow-md transition-all tactile-btn flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to {TARGET_EMAIL}...</span>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Transmit Specification via Email to {TARGET_EMAIL}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsAppDirect}
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all tactile-btn flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Teleport to WhatsApp ({TARGET_PHONE}) with Pre-Typed Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Factory Hotlines, Direct Plant Desks & FAQ (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Priority Hotline & WhatsApp Card */}
          <ScrollReveal delayMs={150}>
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/70 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-xs font-mono-data font-bold text-emerald-900 uppercase">
                    Direct Mobile &amp; WhatsApp Desk
                  </span>
                </div>
                <span className="text-[10px] font-mono-data bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded font-bold">
                  24/7 ONLINE
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono-data text-slate-500 uppercase block">
                  Click to Chat Directly on WhatsApp
                </span>
                <a
                  href={`https://wa.me/91${TARGET_PHONE}?text=${encodeURIComponent(
                    'Hello VOLTTORQ Heavy Engineering, I am interested in requesting your heavy machinery services & tender pricing. Please share catalog details.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm tactile-btn transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp: +91 {TARGET_PHONE}</span>
                </a>
                <p className="text-xs text-slate-600 text-center">
                  Teleports directly to WhatsApp with pre-filled service request text.
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-200 space-y-2 text-xs font-mono-data">
                <div className="flex items-center justify-between text-slate-700">
                  <span>PHONE / CALL:</span>
                  <a href={`tel:${TARGET_PHONE}`} className="font-bold text-slate-900 hover:text-emerald-800">
                    +91 {TARGET_PHONE}
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span>TENDER EMAIL:</span>
                  <a href={`mailto:${TARGET_EMAIL}`} className="font-bold text-amber-800 hover:underline">
                    {TARGET_EMAIL}
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span>SLA GUARANTEE:</span>
                  <span className="font-bold text-emerald-800">4 Hours Response SLA</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Key Plant Extensions */}
          <ScrollReveal delayMs={200}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Direct Plant Contacts &amp; Superintendents
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      India Works (Pune &amp; Vadodara)
                    </strong>
                    <span className="text-slate-500 font-mono-data">Heavy Works Operations</span>
                  </div>
                  <a href={`tel:${TARGET_PHONE}`} className="font-mono-data font-bold text-slate-800 hover:text-amber-700">
                    {TARGET_PHONE}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      Global Engineering Desk
                    </strong>
                    <span className="text-slate-500 font-mono-data">Mobile / WhatsApp</span>
                  </div>
                  <a href={`https://wa.me/91${TARGET_PHONE}`} target="_blank" rel="noopener noreferrer" className="font-mono-data font-bold text-emerald-700 hover:underline">
                    +91 {TARGET_PHONE}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      Tender Request Routing
                    </strong>
                    <span className="text-slate-500 font-mono-data">Direct Inbox</span>
                  </div>
                  <a href={`mailto:${TARGET_EMAIL}`} className="font-mono-data font-bold text-amber-700 hover:underline">
                    {TARGET_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Procurement FAQ */}
          <ScrollReveal delayMs={250}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Procurement &amp; Tender FAQ</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-semibold">
                    Why use the WhatsApp direct option?
                  </strong>
                  <p>
                    For instantaneous confirmation of machine availability, immediate drawing dispatches, and live video inspection scheduling with our senior engineers.
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900 block mb-0.5 font-semibold">
                    Are tender drawings protected under NDA?
                  </strong>
                  <p>
                    Yes. All single-line diagrams, civil drawings, and BOQ files received on {TARGET_EMAIL} are encrypted and handled in strict accordance with mutual non-disclosure policies.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
