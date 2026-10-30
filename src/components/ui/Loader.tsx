import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#000000]"
        >
          <div className="relative flex items-center justify-center">
            {/* Pulsing neon green ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="w-16 h-16 rounded-full border-2 border-t-[#39FF14] border-r-[#00C853] border-b-white/10 border-l-white/10 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
            />
            {/* Center Brand Mark */}
            <div className="absolute text-sm font-mono font-bold tracking-wider text-white">
              M<span className="text-[#39FF14]">.</span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs font-mono uppercase tracking-[0.25em] text-[#BDBDBD]"
          >
            Initializing Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

