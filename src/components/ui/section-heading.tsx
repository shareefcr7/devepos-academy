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
    <div className={cn("relative perspective-[1000px] text-center mb-16", className)}>
      {/* Center Spotlight Glow - Cyan/Blue Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, rotateX: -20, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10"
      >
        {/* Floating Badge - Matches Explore Skills Style */}
        {badge && (
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A1A2F] border border-blue-500/30 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">
              {badge}
            </span>
          </motion.div>
        )}

        {/* 3D Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight flex flex-wrap justify-center gap-x-3 items-center">
          {title}
        </h2>

        {description && (
          <p className="text-blue-200/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
