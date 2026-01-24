"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [impact, setImpact] = useState(false);
  const [showLevelUpdate, setShowLevelUpdate] = useState(false);
  const [displayText, setDisplayText] = useState("SDEC Academy");
  const [isDecoding, setIsDecoding] = useState(false);



  useEffect(() => {
    // Sequence: 
    // 0s: Start
    // 1.0s: Rocket Impact -> Start Decoding
    // 1.1s: Level Update shows
    // 3.0s: Exit
    
    const impactTimer = setTimeout(() => {
      setImpact(true);
      setIsDecoding(true);
      setTimeout(() => setShowLevelUpdate(true), 200);
    }, 1000); // Impact at 1s

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); 
    }, 3000); // Exit at 3s

    return () => {
      clearTimeout(impactTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Matrix Decode Effect
  useEffect(() => {
    if (!isDecoding) return;

    const targetText = "SDEC Academy";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Decode speed
    }, 30);

    return () => clearInterval(interval);
  }, [isDecoding]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050B14] overflow-hidden perspective-[1000px]"
          exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background rays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
             <motion.div
               className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-600/20 to-transparent"
               animate={{ rotate: 360, scale: [1, 1.1, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Main Logo Container - Shakes on Impact */}
            <motion.div
              animate={impact ? { 
                x: [-10, 10, -10, 10, -5, 5, 0],
                rotate: [-5, 5, -5, 5, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Moon/Tech Symbol */}
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.0, type: "spring" }}
                className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.6)] z-20 relative"
              >
                <span className="text-4xl font-bold text-black/80">S</span>
              </motion.div>

              {/* Text Reveal with Matrix Effect */}
              <div className="overflow-visible relative">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-6xl font-black text-white tracking-wider font-mono relative z-10 text-center px-4"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {displayText}
                  </span>
                </motion.h1>
                
                {/* Clash Flash */}
                <AnimatePresence>
                  {impact && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 0.8, 0], scale: [1, 2, 1.5] }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400 blur-2xl z-0 rounded-full mix-blend-screen"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Level Update 3D Visual */}
            <AnimatePresence>
              {showLevelUpdate && (
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="mt-10 bg-black/60 backdrop-blur-md border border-blue-500/50 px-8 py-3 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center gap-4 overflow-hidden relative"
                >
                   <motion.div 
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   />
                   <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                   <span className="text-blue-200 font-mono font-bold tracking-[0.2em] text-sm">UPDATING SKILLS...</span>
                   <span className="text-white font-bold text-xs bg-blue-600 px-2 py-1 rounded shadow-lg">SDEC</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rocket Animation - Flies from Left to Center Hit, then Exits */}
          <motion.div
            className="absolute top-1/2 left-0 z-50 pointer-events-none"
            initial={{ x: "-20vw", y: -50, rotate: 45, opacity: 0 }}
            animate={impact ? { x: "120vw", y: -100, rotate: -45, opacity: 0 } : { x: "50vw", y: 0, rotate: 0, opacity: 1 }}
            transition={impact 
              ? { duration: 0.8, ease: "easeOut", delay: 0.1 } // Exit phase
              : { duration: 1.5, ease: "circIn" } // Entry phase (0 to 1.5s)
            }
          >
             <div className="relative transform -translate-y-1/2 -translate-x-1/2">
                <Rocket className="w-16 h-16 text-white fill-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                {/* Engine Flame */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-t from-transparent to-blue-500 blur-sm rotate-180 origin-top" />
                {/* Speed Lines */}
                <div className="absolute top-1/2 right-full w-40 h-1 bg-gradient-to-r from-transparent to-cyan-400/50 blur-[1px]" />
             </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
