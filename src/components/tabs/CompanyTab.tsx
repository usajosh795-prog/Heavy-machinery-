import React, { useState } from 'react';
import { TabId } from '../../types';
import { CERTIFICATIONS, FACILITIES, TESTING_BAYS } from '../../data/mockData';
import { ScrollReveal } from '../ScrollReveal';
import {
  Award,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  MapPin,
  Flame,
  ArrowRight
} from 'lucide-react';

interface CompanyTabProps {
  onSelectTab: (tab: TabId) => void;
}

export const CompanyTab: React.FC<CompanyTabProps> = ({ onSelectTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      {/* Tab Header & Hero Story */}
      <ScrollReveal>
        <div className="border-b border-slate-200 pb-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block">
                Company Overview &amp; Manufacturing Pedigree · Section 03
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                38 YEARS OF HEAVY CAPITAL ENGINEERING
              </h1>
              <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
                Founded in 1988, VOLTTORQ manufactures critical infrastructure equipment across 14 specialized fabrication works, serving power grids, civil contractors, and industrial plants worldwide.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('contact')}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-lg shadow-xs transition-colors tactile-btn flex items-center gap-2 self-start md:self-end shrink-0 cursor-pointer"
            >
              <span>Inquire for Plant Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* High-Level Scale Numbers (Ages 25-60 High Legibility) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono-data text-slate-500 uppercase block font-semibold">
                Global Scale
              </span>
              <span className="text-3xl font-extrabold font-mono-data text-slate-900 block mt-1">
                14 Plants
              </span>
              <span className="text-xs text-slate-600 mt-1 block">
                450,000 m² under roof
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono-data text-slate-500 uppercase block font-semibold">
                Annual Throughput
              </span>
              <span className="text-3xl font-extrabold font-mono-data text-amber-700 block mt-1">
                120,000 MT
              </span>
              <span className="text-xs text-slate-600 mt-1 block">
                Heavy structural steel run rate
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono-data text-slate-500 uppercase block font-semibold">
                Grid Test Limit
              </span>
              <span className="text-3xl font-extrabold font-mono-data text-slate-900 block mt-1">
                765 kV
              </span>
              <span className="text-xs text-slate-600 mt-1 block">
                Full wave impulse clearance
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono-data text-slate-500 uppercase block font-semibold">
                Safety Record
              </span>
              <span className="text-3xl font-extrabold font-mono-data text-emerald-700 block mt-1">
                1,842 Days
              </span>
              <span className="text-xs text-slate-600 mt-1 block">
                Continuous Zero LTI operations
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* PEDIGREE & HISTORICAL MILESTONES */}
      <section className="space-y-6">
        <ScrollReveal>
          <div>
            <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
              Manufacturing Heritage
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              ENGINEERING MILESTONES SINCE 1988
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ScrollReveal delayMs={50}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 h-full">
              <span className="text-xs font-mono-data font-bold text-amber-700 block">
                1988 · DUISBURG FOUNDATION
              </span>
              <h3 className="font-bold text-slate-900 text-base">Heavy Forging Works</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established in the Ruhr industrial belt specializing in pre-stressed hydraulic presses and large mechanical components for European mining and heavy rail networks.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 h-full">
              <span className="text-xs font-mono-data font-bold text-amber-700 block">
                1996 · HOUSTON EXPANSION
              </span>
              <h3 className="font-bold text-slate-900 text-base">High-Voltage Transformers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inaugurated dedicated high-voltage substation transformer fabrication in Texas, commissioning our first 220kV unit for regional grid networks.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 h-full">
              <span className="text-xs font-mono-data font-bold text-amber-700 block">
                2001 · INDIA EXPANSION
              </span>
              <h3 className="font-bold text-slate-900 text-base">Pune &amp; Vadodara Hubs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commissioned automated CNC rebar fabrication lines in Pune and extra-high-voltage 765kV autotransformer assembly plants in Savli GIDC, Vadodara.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 h-full">
              <span className="text-xs font-mono-data font-bold text-amber-700 block">
                2017 · 150T WEIGHBRIDGES
              </span>
              <h3 className="font-bold text-slate-900 text-base">Legal Metrology Centers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Achieved full OIML R76 Class III and Legal Metrology W&amp;M legal-for-trade certification for continuous 150-ton dynamic multi-axle freight truck weighbridges.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BADGES & ACCREDITATIONS (ISO / ISI / ASME / CE / OIML) */}
      <section className="space-y-6">
        <ScrollReveal>
          <div>
            <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
              Certified Quality Assurance
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              TRUST BADGES &amp; COMPLIANCE CERTIFICATIONS
            </h2>
            <p className="text-xs text-slate-600">
              Mandatory annual third-party audits ensure our manufacturing tolerances meet international tender standards.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <ScrollReveal key={cert.code} delayMs={idx * 80}>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono-data font-bold">
                      {cert.code}
                    </span>
                    <span className="text-[11px] font-mono-data text-slate-500 uppercase">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">{cert.name}</h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-mono-data text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>AUDITING BODY:</span>
                  <span className="font-semibold text-slate-800">{cert.body}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* QUALITY ASSURANCE & TESTING BAYS WITH REAL PHOTOGRAPHS */}
      <section className="space-y-6">
        <ScrollReveal>
          <div>
            <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
              Testing Protocol
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              IN-HOUSE LABORATORY TESTING BAYS
            </h2>
            <p className="text-xs text-slate-600">
              Zero-fault clearance protocol across electrical surge, mechanical fatigue, and thermal continuous run.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTING_BAYS.map((bay, idx) => (
            <ScrollReveal key={bay.id} delayMs={idx * 100}>
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs space-y-4 pb-5 h-full">
                <div className="relative h-52 w-full bg-slate-100">
                  <img
                    src={bay.image}
                    alt={bay.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-xs font-mono-data font-bold">
                    {bay.rating}
                  </div>
                </div>

                <div className="px-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">{bay.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{bay.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* GLOBAL PRODUCTION FACILITIES DIRECTORY */}
      <section className="space-y-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold text-amber-700 uppercase block mb-1">
                Fabrication Footprint
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                14 GLOBAL FABRICATION WORKS DIRECTORY
              </h2>
              <p className="text-xs text-slate-600">
                Direct contacts for lead applications engineers and production superintendents.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACILITIES.map((facility, idx) => (
            <ScrollReveal key={facility.id} delayMs={idx * 80}>
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono-data">
                    <span className="font-bold text-amber-700">EST. {facility.established}</span>
                    <span className="text-slate-500">{facility.capacity}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {facility.name}
                  </h3>

                  <div className="text-xs text-slate-600 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{facility.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                    <strong>Core Focus:</strong> {facility.specialty}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono-data border-t border-slate-100 flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">DESK:</span>
                  <a href={`tel:${facility.phone}`} className="font-bold text-amber-800 hover:underline">
                    {facility.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};
