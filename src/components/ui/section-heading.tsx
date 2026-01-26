"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({ badge, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("relative text-center mb-12 md:mb-20", className)}>
      {/* 3D Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        {/* Futuristic Badge */}
        {badge && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-navy-light/50 border border-white/10 mb-6 md:mb-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse shadow-[0_0_10px_#00d2ff]" />
            <span className="text-blue-300 font-black tracking-[0.3em] uppercase text-[10px]">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Cinematic Title */}
        <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] flex flex-wrap justify-center gap-x-4 items-center uppercase px-4">
          {title}
        </h2>

        {description && (
          <p className="text-blue-100/40 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed tracking-wide">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
