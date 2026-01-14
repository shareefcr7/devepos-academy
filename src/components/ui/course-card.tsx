"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Lock, Sparkles, Gem, Medal, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Course } from "@/lib/data";

const getTheme = (id: string) => {
  switch (id) {
    case "l1": // Silver
      return {
        borderColor: "border-slate-400/50",
        glowColor: "shadow-[0_0_30px_-5px_rgba(148,163,184,0.3)]",
        icon: Medal,
        iconColor: "text-slate-300",
        badge: "text-slate-200 bg-slate-400/10 border-slate-400/20",
        label: "Silver Badge"
      };
    case "l2": // Gold
      return {
        borderColor: "border-yellow-500/50",
        glowColor: "shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
        icon: Medal,
        iconColor: "text-yellow-400",
        badge: "text-yellow-200 bg-yellow-400/10 border-yellow-400/20",
        label: "Gold Badge"
      };
    case "l3": // Diamond
      return {
        borderColor: "border-cyan-400/50",
        glowColor: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
        icon: Gem,
        iconColor: "text-cyan-300",
        badge: "text-cyan-200 bg-cyan-400/10 border-cyan-400/20",
        label: "Diamond Badge"
      };
    default: // Entry (L0)
      return {
        borderColor: "border-purple-500/30",
        glowColor: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
        icon: Zap,
        iconColor: "text-purple-400",
        badge: "text-purple-200 bg-purple-500/10 border-purple-500/20",
        label: "Entry Badge"
      };
  }
};

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const theme = getTheme(course.id);
  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={cn(
        "relative group overflow-hidden rounded-[2rem] transition-all duration-300",
        "bg-navy/40 backdrop-blur-md border",
        theme.borderColor,
        "hover:shadow-2xl hover:scale-[1.02]",
        theme.glowColor
      )}
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="p-4 pb-0">
        {/* Image Container */}
        <div className="relative h-48 rounded-[1.5rem] overflow-hidden border border-white/10">
           <Image 
             src={course.image} 
             alt={course.title}
             fill 
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             className="object-cover transform group-hover:scale-110 transition-transform duration-700"
           />
        </div>
      </div>

      <div className="px-6 py-6 text-center relative z-10">
        {/* Price Tag */}
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-electric-blue font-bold text-sm tracking-wide shadow-sm">
            {course.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 leading-tight flex items-center justify-center group-hover:text-electric-blue transition-colors tracking-tight">
          {course.title}
        </h3>
        
        {/* Badge Subheading */}
        <div className="flex justify-center mb-5">
          <span className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border shadow-sm",
            theme.badge
          )}>
            <Icon size={12} className={theme.iconColor} />
            {theme.label}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4 min-h-[5rem] font-medium opacity-90">
           {course.description}
        </p>

        {/* Duration & Access Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs text-gray-400 font-medium">
          {course.duration && (
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 transition-colors group-hover:bg-white/10">
              <Clock size={12} className={theme.iconColor} />
              <span>{course.duration}</span>
            </div>
          )}
          {course.access && (
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 transition-colors group-hover:bg-white/10">
              <Lock size={12} className={theme.iconColor} />
              <span>{course.access}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link href={`/courses/${course.id}`} className="block">
          <button className={cn(
            "w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300",
            "bg-white/5 hover:bg-white/10 border border-white/10 text-white group-hover:border-electric-blue/50 group-hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
          )}>
            View Details 
            <ArrowRight size={16} className="text-electric-blue group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
