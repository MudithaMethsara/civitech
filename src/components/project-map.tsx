'use client';

import { MapPin } from 'lucide-react';

export function ProjectMap() {
  return (
    <div className="bg-slate-100 dark:bg-card rounded-xl overflow-hidden relative h-[400px] border border-slate-200 dark:border-slate-800 flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="text-center p-6 relative z-10">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-full inline-flex mb-4 shadow-lg">
          <MapPin className="text-primary w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Project Locations</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-6">
          Interactive map loading... showing projects in Negombo, Ja-Ela, and Moragahakanda.
        </p>
        <button className="bg-white dark:bg-slate-800 text-foreground dark:text-white px-6 py-2 rounded-full font-medium shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          View Full Map
        </button>
      </div>

      {/* Mock Pins */}
      <div className="absolute top-1/4 left-1/4 text-primary animate-bounce delay-100">
        <MapPin size={24} fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-1/3 text-primary animate-bounce delay-300">
        <MapPin size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-1/2 text-primary animate-bounce delay-700">
        <MapPin size={24} fill="currentColor" />
      </div>
    </div>
  );
}
