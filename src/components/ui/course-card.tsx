"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, Gem, Medal, Zap, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Course } from "@/lib/data";

const getTheme = (id: string) => {
  if (id === "l0") {
    return {
      borderColor: "border-slate-500/30",
      glowColor: "shadow-[0_0_30px_-5px_rgba(100,116,139,0.2)]",
      icon: Zap,
      iconColor: "text-slate-400",
      badge: "text-slate-300 bg-slate-500/10 border-slate-500/20",
      label: "Discovery Level",
      accentColor: "bg-slate-400"
    };
  }
  if (id === "l1") {
    return {
      borderColor: "border-slate-400/50",
      glowColor: "shadow-[0_0_30px_-5px_rgba(148,163,184,0.3)]",
      icon: Medal,
      iconColor: "text-slate-300",
      badge: "text-slate-200 bg-slate-400/10 border-slate-400/20",
      label: "Silver Foundation",
      accentColor: "bg-slate-300"
    };
  }
  if (id.startsWith("l2")) {
    return {
      borderColor: "border-yellow-500/50",
      glowColor: "shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
      icon: Medal,
      iconColor: "text-yellow-400",
      badge: "text-yellow-200 bg-yellow-400/10 border-yellow-400/20",
      label: "Gold Specialist",
      accentColor: "bg-yellow-400"
    };
  }
  if (id === "l3") {
    return {
      borderColor: "border-cyan-400/50",
      glowColor: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
      icon: Gem,
      iconColor: "text-cyan-300",
      badge: "text-cyan-200 bg-cyan-400/10 border-cyan-400/20",
      label: "Diamond Master",
      accentColor: "bg-cyan-400"
    };
  }
  if (id === "l4") {
    return {
      borderColor: "border-purple-500/50",
      glowColor: "shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)]",
      icon: Award,
      iconColor: "text-purple-400",
      badge: "text-purple-200 bg-purple-500/20 border-purple-500/30",
      label: "Elite Accelerator",
      accentColor: "bg-purple-500"
    };
  }
  return {
    borderColor: "border-white/10",
    glowColor: "shadow-none",
    icon: Zap,
    iconColor: "text-gray-400",
    badge: "text-gray-300 bg-white/5 border-white/10",
    label: "Course",
    accentColor: "bg-gray-400"
  };
};

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const theme = getTheme(course.id);
  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={cn(
        "premium-card relative group flex flex-col h-full rounded-[2.5rem] p-4",
        theme.borderColor,
        theme.glowColor,
        "bg-[#0d0f2b]/40"
      )}
    >
      {/* Light Sheen Overlay */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
        <div className="absolute inset-[-100%] rotate-35 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700" />
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative h-60 w-full mb-6 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03041a]/80 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay" />
        
        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-4 py-1.5 rounded-full bg-navy/60 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-wider">
            {course.price}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
            theme.badge
          )}>
            <Icon size={12} className={theme.iconColor} />
            {theme.label}
          </span>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-300/60 uppercase tracking-tighter">
            <Clock size={12} className="text-electric-blue" />
            {course.duration}
          </div>
        </div>

        <h3 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight group-hover:text-electric-blue transition-colors">
          {course.title}
        </h3>

        <p className="text-blue-100/40 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
          {course.description}
        </p>

        <Link href="/contact" className="mt-auto">
          <Button 
            className="w-full h-14 rounded-2xl bg-white/5 border-white/10 hover:bg-white hover:text-navy group/btn relative overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 font-bold uppercase tracking-wider text-xs">Enroll Now</span>
            <ArrowRight size={16} className="relative z-10 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 Transition-opacity" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

