"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F] overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background rays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <motion.div
               className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-500/30 to-transparent"
               animate={{ rotate: 360, scale: [1, 1.2, 1] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Moon/Tech Symbol */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-electric-blue to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(100,255,218,0.3)]"
            >
              <span className="text-4xl font-bold text-navy">S</span>
            </motion.div>

            {/* Text Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold text-white tracking-wider font-sans"
              >
                <span className="text-blue-500">SDEC Academy</span>
              </motion.h1>
            </div>
          </div>

          {/* Rocket Animation */}
          <motion.div
            className="absolute"
            initial={{ x: "-100vw", y: 150, rotate: 45 }}
            animate={{ x: "100vw", y: 150 }}
            transition={{ delay: 1.0, duration: 4, ease: "linear" }}
          >
             <Rocket className="w-12 h-12 text-white/50" />
             <div className="absolute top-10 left-0 w-20 h-1 bg-gradient-to-l from-orange-500 to-transparent blur-sm rotate-45 origin-top-left" />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
