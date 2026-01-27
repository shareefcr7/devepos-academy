"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Code, Terminal, Laptop, Zap, Users, Database, Cloud, Server, Shield, Cpu, Activity } from "lucide-react";
import Image from "next/image";

// --- Enhanced Background Elements ---

const CodeRain = () => {
  const rainIcons = [Code, Terminal, Laptop, Zap, Users, Database, Cloud, Server, Shield];
  const keywords = ["SYSTEM", "CORE", "SDEC", "NODE", "REACT", "NEXT", "DEPLOY", "AWS", "LINUX"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
      <div className="flex justify-between px-4">
        {[...Array(12)].map((_, i) => {
           const Icon = rainIcons[Math.floor(Math.random() * rainIcons.length)];
           const keyword = keywords[Math.floor(Math.random() * keywords.length)];
           return (
            <motion.div
              key={i}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: "120vh", opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
              className="text-cyan-500 font-mono writing-vertical flex flex-col items-center gap-6 text-[10px] tracking-[0.5em] font-black"
              style={{ writingMode: "vertical-rl" }}
            >
              <Icon size={14} className="mb-4 rotate-90" />
              {keyword}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// --- Main Component ---

export function AboutSummary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative bg-[#010208] overflow-hidden perspective-[2000px]">
      
      {/* Cinematic Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] opacity-60" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] opacity-40" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <CodeRain />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Identity Badge */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group cursor-cell"
            >
              <div className="relative flex items-center justify-center w-5 h-5">
                 <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping" />
                 <Cpu size={12} className="text-cyan-400 relative z-10" />
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-400/80 group-hover:text-cyan-400 transition-colors">
                System Identity: SDEC
              </span>
            </motion.div>
            
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] text-white uppercase tracking-tighter mb-8">
               Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white animate-text-shimmer bg-[length:200%_auto]">Offline Tech</span> <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white animate-text-shimmer bg-[length:200%_auto]">Training</span> & Career <br />
               Development
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl border-l-2 border-cyan-500/30 pl-6">
              SDEC Academy is a leading offline destination for aspiring developers and tech enthusiasts. We bridge the gap between academic learning and industry requirements through hands-on, project-based training.
            </p>

            <div className="space-y-6">
              {[
                { label: "Designed for Students, Freelancers & Aspiring Engineers", icon: Users },
                { label: "Focus on Practical, Industry-Oriented Learning", icon: Laptop },
                { label: "Mentorship directly from Industry Experts", icon: CheckCircle }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="group relative h-auto py-4 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden flex items-start px-6 gap-5 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                  
                  <div className="w-8 h-8 rounded-lg bg-black flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors mt-1">
                    <item.icon size={16} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <span className="font-mono text-sm tracking-wide text-white/80 group-hover:text-white transition-colors pt-1.5 leading-relaxed">
                    {item.label}
                  </span>

                  <div className="ml-auto flex items-center gap-2 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Viz Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: y1, opacity }}
            className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full block mt-12 lg:mt-0"
          >
             {/* Holographic Frame */}
             <div className="absolute inset-0 z-20 border border-white/10 rounded-[2rem] pointer-events-none">
                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-[1.8rem]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-[1.8rem]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-[1.8rem]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-[1.8rem]" />
                
                {/* Scanning Line */}
                <motion.div 
                   animate={{ top: ["0%", "100%", "0%"] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-[2px]"
                />
             </div>

             {/* Main Image Container */}
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden filter grayscale brightness-[0.8] hover:grayscale-0 hover:brightness-100 transition-all duration-700 bg-black">
                <Image 
                  src="/images/IMAGE6.avif"
                  alt="SDEC Facility"
                  fill
                  className="object-cover"
                />
                
                {/* Digital Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none" />

                <div className="absolute bottom-10 left-10 z-20">
                   <div className="flex items-center gap-4 mb-2">
                      <Activity className="text-cyan-400" size={24} />
                      <span className="text-3xl font-black text-white tracking-widest">LIVE</span>
                   </div>
                   <p className="font-mono text-[10px] text-cyan-400/60 uppercase tracking-[0.2em]">
                      // Academy_Floor_Cam_01 <br />
                      // Sector: Kerala, India
                   </p>
                </div>
             </div>
             
             {/* Floating Elements */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-10 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl z-30 shadow-2xl"
             >
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">System Status</span>
                </div>
                <div className="text-2xl font-black text-white mb-1">98.9%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Placement Rate Effect</div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

