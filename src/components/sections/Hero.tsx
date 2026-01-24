"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, GitBranch, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingIcon = ({ icon: Icon, delay, x, y, color }: any) => (
  <motion.div
    className={`absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg ${color}`}
    initial={{ opacity: 0, scale: 0, x, y }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [y, y - 20, y],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      opacity: { duration: 0.5, delay: delay },
      scale: { duration: 0.5, delay: delay }
    }}
  >
    <Icon size={32} />
  </motion.div>
);

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#03041a]">
      {/* --- CINEMATIC FLOWING BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-x-[-20%] inset-y-[-20%] w-[140%] h-[140%]"
          initial={{ scale: 1.1, rotate: 0 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            x: ["-3%", "3%", "-3%"],
            y: ["-2%", "2%", "-2%"],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 15, // Faster movement
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image 
            src="/images/hero_particles.png"
            alt="Cinematic Flowing Particles"
            fill
            className="object-cover opacity-70 mix-blend-screen scale-110"
            priority
          />
        </motion.div>

        {/* Dynamic Light Streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              style={{ 
                width: "40%",
                top: `${20 + i * 15}%`,
                left: "-50%" 
              }}
              animate={{ left: "120%" }}
              transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                delay: i * 2,
                ease: "linear" 
              }}
            />
          ))}
        </div>

        {/* Extra Active Stardust - Only rendered on client to avoid hydration mismatch */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(window.innerWidth < 768 ? 8 : 50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100 + (Math.random() - 0.5) * 10}%`],
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100 + (Math.random() - 0.5) * 10}%`],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * i
                }}
              />
            ))}
          </div>
        )}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03041a]/95 via-transparent to-[#03041a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(3,4,26,0.95)_100%)]" />
      </div>

      {/* --- BACKGROUND DECORATION LAYER (Behind Text) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon icon={Code} delay={0} x={-550} y={-250} color="text-blue-500/30" />
        <FloatingIcon icon={Server} delay={1} x={550} y={-200} color="text-green-500/30" />
        <FloatingIcon icon={Database} delay={0.5} x={-600} y={300} color="text-yellow-500/30" />
        <FloatingIcon icon={GitBranch} delay={1.5} x={600} y={350} color="text-orange-500/30" />
        <FloatingIcon icon={Terminal} delay={2} x={0} y={-450} color="text-gray-500/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 py-2.5 px-10 rounded-full bg-white/5 text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-white/10 backdrop-blur-3xl shadow-[0_0_40px_rgba(0,210,255,0.1)]">
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-ping shadow-[0_0_15px_#00d2ff]" />
            Launch your career in tech
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] uppercase flex flex-col items-center px-4">
            <span className="text-white/20 mb-4 select-none filter blur-[0.5px] text-center">Master the Future</span>
            <span className="text-white mb-4 text-3xl md:text-9xl tracking-[0.1em]">of</span>
            <span className="text-gradient animate-gradient bg-300% drop-shadow-[0_0_60px_rgba(34,211,238,0.4)] relative text-4xl md:text-8xl lg:text-9xl text-center">
              Web Development
              <div className="absolute -inset-4 bg-cyan-400/5 blur-[40px] -z-10 rounded-full" />
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-blue-100/20 mb-16 max-w-4xl mx-auto font-light leading-relaxed tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="text-white/50 font-black">Premier Offline Tech Training</span> & Career Development.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link href="#courses" className="w-full md:w-auto">
            <Button size="lg" className="w-full h-16 px-16 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl bg-white text-navy hover:scale-105 shadow-2xl transition-all">
              Start Now
            </Button>
          </Link>
          <Link href="/courses" className="w-full md:w-auto">
            <Button variant="secondary" size="lg" className="w-full h-16 px-16 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border-white/10 hover:bg-white/5 text-white transition-all">
              Explore
            </Button>
          </Link>
        </motion.div>
      </div>

       {/* Scroll Indicator */}
       <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-black">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-electric-blue to-transparent" />
      </motion.div>
    </section>
  );
}

