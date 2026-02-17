'use client';

import { useState } from 'react';

const devices = [
  { id: 'iphone-15', label: 'iPhone 15', width: 393, height: 852, radius: 48, notch: true },
  { id: 'iphone-se', label: 'iPhone SE', width: 375, height: 667, radius: 0, notch: false },
  { id: 'iphone-15-pro-max', label: 'iPhone 15 Pro Max', width: 430, height: 932, radius: 52, notch: true },
  { id: 'ipad-mini', label: 'iPad Mini', width: 744, height: 1133, radius: 20, notch: false },
];

export default function PreviewPage() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  const [currentUrl, setCurrentUrl] = useState('/');
  const [scale, setScale] = useState(0.7);

  const navPages = [
    { path: '/', label: 'Home' },
    { path: '/levels', label: 'Levels' },
    { path: '/vocabulary', label: 'Vocabulary' },
    { path: '/reference', label: 'Reference' },
    { path: '/progress', label: 'Progress' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col">
      {/* Top toolbar */}
      <div className="bg-[#16162a] border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <h1 className="text-white font-bold text-sm">Device Preview</h1>
            <div className="flex items-center gap-1.5">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    selectedDevice.id === device.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {device.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-white/50 text-xs">Scale:</label>
            <input
              type="range"
              min="0.4"
              max="1"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-24 accent-blue-500"
            />
            <span className="text-white/50 text-xs w-10">{Math.round(scale * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="bg-[#16162a] border-b border-white/10 px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <span className="text-white/40 text-xs mr-1">Navigate:</span>
          {navPages.map((page) => (
            <button
              key={page.path}
              onClick={() => setCurrentUrl(page.path)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                currentUrl === page.path
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>

      {/* Phone frame area */}
      <div className="flex-1 flex items-start justify-center py-8 overflow-auto">
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          {/* Phone shell */}
          <div
            className="relative bg-[#1c1c1e] shadow-2xl"
            style={{
              width: selectedDevice.width + 24,
              height: selectedDevice.height + 24,
              borderRadius: selectedDevice.radius + 12,
              padding: 12,
              boxShadow: '0 0 0 2px #333, 0 25px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Dynamic Island / Notch */}
            {selectedDevice.notch && (
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
                style={{
                  width: 120,
                  height: 34,
                }}
              />
            )}

            {/* Screen */}
            <div
              className="overflow-hidden bg-white relative"
              style={{
                width: selectedDevice.width,
                height: selectedDevice.height,
                borderRadius: selectedDevice.radius,
              }}
            >
              <iframe
                src={currentUrl}
                className="w-full h-full border-0"
                title="App Preview"
                style={{
                  width: selectedDevice.width,
                  height: selectedDevice.height,
                }}
              />
            </div>

            {/* Home indicator */}
            {selectedDevice.radius > 0 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
            )}
          </div>

          {/* Device label */}
          <p className="text-center text-white/30 text-xs mt-4">
            {selectedDevice.label} — {selectedDevice.width} x {selectedDevice.height}
          </p>
        </div>
      </div>
    </div>
  );
}
