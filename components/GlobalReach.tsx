'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { 
  Globe, 
  RotateCcw, 
  Play, 
  Pause, 
  MapPin,
  Clock,
  Shield,
  Layers
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

export interface HubLocation {
  id: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
  role: string;
  collaborationWindow: string;
  focus: string;
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
    focus: 'Core systems modernisation, high-throughput pipelines & SRE pods',
    isHq: true
  },
  {
    id: 'stockholm',
    city: 'Stockholm',
    country: 'Sweden',
    longitude: 18.0686,
    latitude: 59.3293,
    role: 'Nordic Client & GDPR Hub',
    collaborationWindow: '4–5h Daily Synchronized CET Overlap',
    focus: 'Direct European sprint standups, GDPR DPA compliance & agile reviews'
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    longitude: -0.1278,
    latitude: 51.5074,
    role: 'European Enterprise Hub',
    collaborationWindow: 'GMT / BST Overlap Window',
    focus: 'FinTech ledger architectures & high-concurrency compliance'
  },
  {
    id: 'nyc',
    city: 'New York',
    country: 'USA',
    longitude: -74.0060,
    latitude: 40.7128,
    role: 'North American Delivery Bridge',
    collaborationWindow: 'EST Async Handovers + Morning Sync',
    focus: 'Cloud migration, event streaming & distributed web systems'
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    longitude: 103.8198,
    latitude: 1.3521,
    role: 'APAC Regional Hub',
    collaborationWindow: 'SGT Synchronized Alignment',
    focus: 'Low-latency data distribution & microservices orchestration'
  }
];

export const GlobalReach: React.FC = () => {
  const chartDivRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<am5map.MapChart | null>(null);
  const rootRef = useRef<am5.Root | null>(null);
  const spinRef = useRef<any>(null);
  const { theme } = useTheme();

  const [selectedHub, setSelectedHub] = useState<HubLocation>(GLOBAL_HUBS[0]);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);

  useEffect(() => {
    if (!chartDivRef.current) return;

    // Dispose old root before recreating
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

    // Background sea / globe atmosphere
    chart.chartContainer.set('background', am5.Rectangle.new(root, {
      fill: am5.color(isDark ? 0x070A13 : 0xF1F5F9),
      fillOpacity: 0
    }));

    // Background polygon for globe sphere
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
          radius: isHq ? 12 : 8,
          fill: am5.color(isHq ? 0x10B981 : 0x38BDF8),
          fillOpacity: 0.35,
        })
      );

      circlePulse.animate({
        key: 'radius',
        to: isHq ? 20 : 14,
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

      // Main pin center dot
      container.children.push(
        am5.Circle.new(rootInstance, {
          radius: isHq ? 6 : 4,
          fill: am5.color(isHq ? 0x10B981 : 0x38BDF8),
          stroke: am5.color(0xFFFFFF),
          strokeWidth: 1.5,
        })
      );

      container.events.on('click', () => {
        setSelectedHub(data);
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

    // Populate Hub Data
    GLOBAL_HUBS.forEach((hub) => {
      pointSeries.data.push({
        geometry: { type: 'Point', coordinates: [hub.longitude, hub.latitude] },
        ...hub
      });
    });

    // Line Series for Connection Arcs from Dhaka HQ
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

    // Continuous Rotation Animation
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
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden p-6 sm:p-10 space-y-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Delivery Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Distributed Engineering Hubs & Direct CET Overlap
          </h3>
        </div>

        <button
          onClick={toggleSpin}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors self-start md:self-auto"
        >
          {isSpinning ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
          <span>{isSpinning ? 'Pause Rotation' : 'Auto Rotate'}</span>
        </button>
      </div>

      {/* Grid: 3D Globe Canvas + Interactive Hub Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Globe Visualization (7 cols) */}
        <div className="lg:col-span-7 flex justify-center relative min-h-[380px] sm:min-h-[440px] w-full">
          <div
            ref={chartDivRef}
            className="w-full h-[380px] sm:h-[440px] max-w-[500px]"
          />
          {/* Subtle Ambient Radial Glow Behind Globe */}
          <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full bg-sky-500/10 dark:bg-sky-500/15 blur-[80px]" />
          </div>
        </div>

        {/* Interactive Hub Selector & Details (5 cols) */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Select Active Hub
          </p>

          <div className="space-y-2.5">
            {GLOBAL_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => focusHub(hub)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-sky-500/10 border-sky-500/50 shadow-md ring-1 ring-sky-500/30'
                      : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-3.5 h-3.5 ${hub.isHq ? 'text-emerald-500' : 'text-sky-500'}`} />
                      <span className="text-sm font-bold text-slate-950 dark:text-white">
                        {hub.city}, {hub.country}
                      </span>
                      {hub.isHq && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {hub.role}
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{hub.collaborationWindow}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
