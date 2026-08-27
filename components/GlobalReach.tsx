'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { 
  Globe, 
  Play, 
  Pause, 
  MapPin,
  Clock,
  ShieldCheck,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  Cpu,
  Mail
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { PRIMARY_CTA } from '../data/governedData';

export interface HubLocation {
  id: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
  role: string;
  collaborationWindow: string;
  focus: string;
  services: string[];
  leadEngineer: string;
  slaGuarantees: string;
  compliance: string[];
  isHq?: boolean;
}

const GLOBAL_HUBS: HubLocation[] = [
  {
    id: 'dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    longitude: 90.4125,
    latitude: 23.8103,
    role: 'Engineering Command & Delivery Hub',
    collaborationWindow: 'UTC+6 (Primary Engineering Base)',
    focus: 'Core systems modernisation, high-throughput pipelines & 24/7 SRE pods',
    services: [
      'Monolith Decoupling & Strangler Fig Migrations',
      'High-Concurrency Database Partitioning & Caching',
      'Event-Driven Distributed Microservices (Kafka/RabbitMQ)',
      '24/7 Dedicated Reliability Engineering Pods'
    ],
    leadEngineer: 'Tanvir Hossain (Technical Director)',
    slaGuarantees: '99.99% Uptime with <15min P1 Incident Response',
    compliance: ['ISO 27001 Aligned', 'SOC2 Type II Ready', 'OWASP ASVS Level 2'],
    isHq: true
  },
  {
    id: 'stockholm',
    city: 'Stockholm',
    country: 'Sweden',
    longitude: 18.0686,
    latitude: 59.3293,
    role: 'Nordic Client & GDPR Hub',
    collaborationWindow: '4–5h Daily Synchronized CET Overlap (08:00–13:00 CET)',
    focus: 'Direct European sprint standups, GDPR DPA compliance & agile reviews',
    services: [
      'Direct CET Standups & Architectural Sync',
      'EU/EEA Data Processing Agreement (DPA) Governance',
      'FinTech Regulatory Compliance & Audit Support',
      'Nordic Enterprise Product Engineering'
    ],
    leadEngineer: 'Nordic Delivery Lead Desk',
    slaGuarantees: 'Daily Standup Sync + Direct Senior Architect Channel',
    compliance: ['GDPR Compliant', 'EU Standard Contractual Clauses (SCC)'],
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    longitude: -0.1278,
    latitude: 51.5074,
    role: 'European Enterprise Hub',
    collaborationWindow: 'GMT / BST Synchronized Window',
    focus: 'FinTech ledger architectures, sub-second payments & banking integrations',
    services: [
      'Financial Ledger Double-Entry Modernisation',
      'Sub-Second Payment Gateway Integrations',
      'FCA Compliant Audit Logging & Traceability',
      'High-Throughput WebSocket Trading Portals'
    ],
    leadEngineer: 'FinTech Architecture Practice',
    slaGuarantees: '<50ms Transaction Latency SLA Baseline',
    compliance: ['PCI-DSS Level 1 Ready', 'UK Data Protection Act 2018'],
  },
  {
    id: 'nyc',
    city: 'New York',
    country: 'USA',
    longitude: -74.0060,
    latitude: 40.7128,
    role: 'North American Delivery Bridge',
    collaborationWindow: 'EST Morning Alignment + Continuous Async Handover',
    focus: 'Multi-region AWS/GCP cloud migrations, event streaming & distributed web apps',
    services: [
      'AWS / GCP Multi-Region Infrastructure as Code (Terraform)',
      'Real-Time Event Stream Ingestion & Analytics',
      'High-Availability SaaS Scaling & Multi-Tenancy',
      'Automated Zero-Downtime Blue/Green CI/CD'
    ],
    leadEngineer: 'Cloud & Distributed Systems Practice',
    slaGuarantees: 'Zero-Downtime Migration Pledge with Automated Rollbacks',
    compliance: ['HIPAA Compliant Controls', 'CCPA Data Isolation'],
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    longitude: 103.8198,
    latitude: 1.3521,
    role: 'APAC Regional Hub',
    collaborationWindow: 'SGT Synchronized Alignment (Full Day Overlap)',
    focus: 'Low-latency data distribution, edge compute & cross-border APIs',
    services: [
      'Low-Latency Edge Compute & API Gateways',
      'Cross-Border Logistics Dispatch Engines',
      'Real-Time Telehealth Video Pipelines',
      'Microservices Orchestration on Kubernetes'
    ],
    leadEngineer: 'APAC Regional Systems Lead',
    slaGuarantees: 'Sub-100ms APAC Edge Routing Latency',
    compliance: ['MAS TRM Aligned', 'Singapore PDPA Compliant'],
  }
];

export const GlobalReach: React.FC = () => {
  const chartDivRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<am5map.MapChart | null>(null);
  const rootRef = useRef<am5.Root | null>(null);
  const spinRef = useRef<any>(null);
  const { theme } = useTheme();

  const [selectedHub, setSelectedHub] = useState<HubLocation>(GLOBAL_HUBS[0]);
  const [modalHub, setModalHub] = useState<HubLocation | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);

  useEffect(() => {
    if (!chartDivRef.current) return;

    if (rootRef.current) {
      rootRef.current.dispose();
      rootRef.current = null;
    }

    const root = am5.Root.new(chartDivRef.current);
    rootRef.current = root;
    root.setThemes([am5themes_Animated.new(root)]);

    const isDark = theme === 'dark';

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        panY: 'rotateY',
        projection: am5map.geoOrthographic(),
        rotationX: -selectedHub.longitude,
        rotationY: -selectedHub.latitude,
      })
    );
    chartRef.current = chart;

    // Globe Background
    const backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(isDark ? 0x0F172A : 0xE2E8F0),
      fillOpacity: isDark ? 0.6 : 0.8,
      stroke: am5.color(isDark ? 0x38BDF8 : 0x94A3B8),
      strokeWidth: 1,
      strokeOpacity: isDark ? 0.25 : 0.4
    });
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });

    // Country Polygons
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(isDark ? 0x1E293B : 0xCBD5E1),
      fillOpacity: 0.9,
      stroke: am5.color(isDark ? 0x070A13 : 0xF8FAFC),
      strokeWidth: 0.8,
      interactive: true
    });

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(isDark ? 0x38BDF8 : 0x1D2A68),
      fillOpacity: 0.8
    });

    // Point Series for Hub Pins
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push((rootInstance, series, dataItem) => {
      const data = dataItem.dataContext as HubLocation;
      const isHq = data.isHq;

      const container = am5.Container.new(rootInstance, {
        cursorOverStyle: 'pointer',
        tooltipText: '{city}, {country}: {role}',
      });

      // Pulse ring for HQ and hubs
      const circlePulse = container.children.push(
        am5.Circle.new(rootInstance, {
          radius: isHq ? 14 : 9,
          fill: am5.color(isHq ? 0x10B981 : 0x38BDF8),
          fillOpacity: 0.4,
        })
      );

      circlePulse.animate({
        key: 'radius',
        to: isHq ? 22 : 16,
        duration: 1500,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic)
      });

      circlePulse.animate({
        key: 'opacity',
        to: 0,
        duration: 1500,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic)
      });

      // Center Pin
      container.children.push(
        am5.Circle.new(rootInstance, {
          radius: isHq ? 6 : 4.5,
          fill: am5.color(isHq ? 0x10B981 : 0x38BDF8),
          stroke: am5.color(0xFFFFFF),
          strokeWidth: 1.5,
        })
      );

      // On Hover: Select Hub
      container.events.on('pointerover', () => {
        setSelectedHub(data);
      });

      // On Click: Select & Open Modal
      container.events.on('click', () => {
        setSelectedHub(data);
        setModalHub(data);
        if (spinRef.current) {
          spinRef.current.stop();
          spinRef.current = null;
        }
        setIsSpinning(false);
        chart.animate({
          key: 'rotationX',
          to: -data.longitude,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
        });
        chart.animate({
          key: 'rotationY',
          to: -data.latitude,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic),
        });
      });

      return am5.Bullet.new(rootInstance, { sprite: container });
    });

    GLOBAL_HUBS.forEach((hub) => {
      pointSeries.data.push({
        geometry: { type: 'Point', coordinates: [hub.longitude, hub.latitude] },
        ...hub
      });
    });

    // Connection Lines from Dhaka HQ
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: am5.color(isDark ? 0x38BDF8 : 0x1D2A68),
      strokeOpacity: 0.6,
      strokeWidth: 1.5,
      strokeDasharray: [4, 4],
    });

    const dhaka = GLOBAL_HUBS[0];
    GLOBAL_HUBS.slice(1).forEach((dest) => {
      lineSeries.data.push({
        geometry: {
          type: 'LineString',
          coordinates: [
            [dhaka.longitude, dhaka.latitude],
            [dest.longitude, dest.latitude]
          ]
        }
      });
    });

    // Auto-rotation
    const startSpin = () => {
      spinRef.current = chart.animate({
        key: 'rotationX',
        from: chart.get('rotationX', 0),
        to: chart.get('rotationX', 0) - 360,
        duration: 35000,
        loops: Infinity,
        easing: am5.ease.linear
      });
    };

    startSpin();

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, [theme]);

  const toggleSpin = () => {
    if (!chartRef.current) return;
    if (isSpinning) {
      if (spinRef.current) {
        spinRef.current.stop();
        spinRef.current = null;
      }
      setIsSpinning(false);
    } else {
      spinRef.current = chartRef.current.animate({
        key: 'rotationX',
        from: chartRef.current.get('rotationX', 0),
        to: chartRef.current.get('rotationX', 0) - 360,
        duration: 35000,
        loops: Infinity,
        easing: am5.ease.linear
      });
      setIsSpinning(true);
    }
  };

  const focusHub = (hub: HubLocation) => {
    setSelectedHub(hub);
    if (!chartRef.current) return;
    if (spinRef.current) {
      spinRef.current.stop();
      spinRef.current = null;
    }
    setIsSpinning(false);
    chartRef.current.animate({
      key: 'rotationX',
      to: -hub.longitude,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic),
    });
    chartRef.current.animate({
      key: 'rotationY',
      to: -hub.latitude,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic),
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 dark:border-sky-500/20 bg-white/95 dark:bg-[#060D1E]/95 backdrop-blur-2xl overflow-hidden p-6 sm:p-10 space-y-8 shadow-2xl transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/20 dark:border-sky-400/20 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold mb-2">
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Interactive 3D Global Delivery Map</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Distributed Engineering Hubs & Direct CET Overlap
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
            Hover over any location or card to inspect regional services. Click for full collaboration specifications.
          </p>
        </div>

        <button
          onClick={toggleSpin}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0C1A38] border border-slate-200 dark:border-sky-500/30 text-xs font-mono font-bold text-slate-800 dark:text-sky-200 hover:bg-slate-200 dark:hover:bg-[#12244E] transition-colors self-start md:self-auto shadow-sm"
        >
          {isSpinning ? <Pause className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
          <span>{isSpinning ? 'Pause Rotation' : 'Auto Rotate'}</span>
        </button>
      </div>

      {/* Grid: 3D Globe Canvas + Interactive Hub Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Globe Visualization (7 cols) */}
        <div className="lg:col-span-7 flex justify-center relative min-h-[440px] w-full">
          <div
            ref={chartDivRef}
            style={{ width: '100%', height: '440px', minHeight: '440px' }}
            className="w-full h-[440px] max-w-[500px]"
          />
          {/* Ambient Radial Glow Behind Globe */}
          <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
            <div className="w-[340px] h-[340px] rounded-full bg-sky-500/15 dark:bg-sky-400/20 blur-[90px]" />
          </div>
        </div>

        {/* Interactive Hub Cards with Deep Blue Blurred Card Contrast Sync (5 cols) */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-sky-300">
              Regional Delivery Hubs
            </p>
            <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400 font-bold">
              Click Card for Specs →
            </span>
          </div>

          <div className="space-y-2.5">
            {GLOBAL_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <div
                  key={hub.id}
                  onMouseEnter={() => focusHub(hub)}
                  onClick={() => {
                    focusHub(hub);
                    setModalHub(hub);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer space-y-2 backdrop-blur-xl ${
                    isSelected
                      ? 'bg-[#DCEBFA] dark:bg-[#10244D] border-sky-600 dark:border-sky-400 shadow-lg ring-1 ring-sky-600/30 dark:ring-sky-400/50'
                      : 'bg-[#F1F6FD] dark:bg-[#0B1730]/90 border-slate-200/90 dark:border-sky-500/20 hover:border-sky-500/40 dark:hover:border-sky-400/50 hover:bg-[#E8F1FC] dark:hover:bg-[#0F1E3D] shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${hub.isHq ? 'text-emerald-600 dark:text-emerald-400' : 'text-sky-600 dark:text-sky-400'}`} />
                      <span className="text-sm font-extrabold text-slate-950 dark:text-white">
                        {hub.city}, {hub.country}
                      </span>
                      {hub.isHq && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/15 dark:bg-emerald-400/20 text-emerald-700 dark:text-emerald-300 font-extrabold">
                          HQ COMMAND
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-sky-200/80 uppercase font-bold">
                      {hub.collaborationWindow.split(' ')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug font-normal">
                    {hub.focus}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-sky-300">
                      <Clock className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                      <span>{hub.collaborationWindow}</span>
                    </span>
                    <span className="text-sky-700 dark:text-sky-300 font-bold hover:underline">
                      View Specs →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Location Hub Detailed Modal with Contrast Sync */}
      {modalHub && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setModalHub(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#081226] border border-slate-200 dark:border-sky-500/30 p-6 sm:p-10 text-left shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalHub(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 dark:bg-[#0E1F40] text-slate-500 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#152E5E] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-sky-400/15 border border-sky-500/20 dark:border-sky-400/30 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Regional Engineering Hub Specification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {modalHub.city}, {modalHub.country}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                {modalHub.role}
              </p>
            </div>

            {/* Timezone & Collaboration Window */}
            <div className="p-4 rounded-2xl bg-sky-500/10 dark:bg-[#0E2248] border border-sky-500/20 dark:border-sky-400/30 space-y-1 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                Synchronized Working Window:
              </span>
              <p className="text-slate-900 dark:text-slate-100 font-bold">
                {modalHub.collaborationWindow}
              </p>
            </div>

            {/* Services Provided by This Hub */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Hub Capabilities & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {modalHub.services.map((srv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-100 p-3 rounded-xl bg-slate-50 dark:bg-[#0C1A38] border border-slate-200 dark:border-sky-500/20">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Commitments & Compliance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="space-y-1.5">
                <span className="font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                  SLA Baseline
                </span>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {modalHub.slaGuarantees}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                  Compliance & Regulatory
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {modalHub.compliance.map((comp, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 dark:border-emerald-400/30 font-bold">
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
                Lead: <strong className="text-slate-950 dark:text-white">{modalHub.leadEngineer}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={PRIMARY_CTA.href}
                  onClick={() => setModalHub(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md active:scale-95 group"
                >
                  <span>Book Delivery Review with {modalHub.city}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
