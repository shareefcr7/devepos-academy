"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#010208]">
      {/* Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-electric/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-[40px] p-16 md:p-32 max-w-6xl mx-auto shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden group"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-navy-light/50 border border-white/10 mb-10">
              <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse shadow-[0_0_10px_#00d2ff]" />
              <span className="text-white/60 font-black tracking-[0.4em] uppercase text-[10px]">
                Direct Career Path
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
              Ready to claim <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Future?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/30 mb-20 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Join the elite ecosystem of developers building the next generation of digital infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <Link href="/contact" className="w-full md:w-auto">
                <Button className="w-full h-20 px-16 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl bg-white text-navy hover:scale-105 shadow-2xl transition-all">
                  Join Elite Now
                </Button>
              </Link>
              <Link href="/courses" className="w-full md:w-auto">
                <Button variant="secondary" className="w-full h-20 px-16 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border-white/10 hover:bg-white/5 text-white transition-all">
                  Browse Tracks
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
