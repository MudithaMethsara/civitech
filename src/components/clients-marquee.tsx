'use client';

import { motion } from 'framer-motion';

const clients = [
  "Brandix",
  "Lanka Tiles PLC",
  "HDFC Bank",
  "Mahaweli Authority",
  "National Water Supply & Drainage Board",
  "Blue Scope Lysaght",
  "Teejay Lanka",
  "Ocean Lanka",
  "Grand Gain Industrial"
];

export function ClientsMarquee() {
  return (
    <div className="w-full overflow-hidden bg-card py-10">
      <div className="container mx-auto px-4 mb-4">
        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider text-center">Trusted By Industry Leaders</h3>
      </div>
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-8 text-2xl font-bold text-slate-300 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity"
            >
              {client}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`dup-${index}`}
              className="mx-8 text-2xl font-bold text-slate-300 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
