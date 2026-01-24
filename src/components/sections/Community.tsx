"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, UserCheck, MonitorPlay, Briefcase, Rocket, Code, Laptop, Skull, Zap, RefreshCw, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const avatars = [
  { role: "Student", icon: GraduationCap, color: "border-blue-400", text: "text-blue-400" },
  { role: "Mentor", icon: UserCheck, color: "border-green-400", text: "text-green-400" },
  { role: "Instructor", icon: MonitorPlay, color: "border-red-400", text: "text-red-400" },
  { role: "Freelancer", icon: Briefcase, color: "border-orange-400", text: "text-orange-400" },
  { role: "Founder", icon: Rocket, color: "border-yellow-400", text: "text-yellow-400" },
  { role: "Developer", icon: Code, color: "border-purple-400", text: "text-purple-400" },
];

// Code Rain Component
const CodeRain = () => {
  const rainIcons = [Code, Terminal, Laptop, Zap, Users];
  const keywords = ["DEVOPS", "HUB", "CLOUD", "AWS", "DOCKER", "K8S", "CI/CD", "GIT", "LINUX"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="flex justify-between">
        {[...Array(8)].map((_, i) => {
           const Icon = rainIcons[Math.floor(Math.random() * rainIcons.length)];
           const keyword = keywords[Math.floor(Math.random() * keywords.length)];
           return (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: "100vh", opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              className="text-electric-blue/40 text-[12px] font-mono writing-vertical flex flex-col items-center gap-4 font-bold tracking-widest"
              style={{ writingMode: "vertical-rl" }}
            >
              {Math.random() > 0.5 && <Icon size={14} className="mb-2 rotate-90 text-teal-400" />}
              {keyword}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Software Update Animation
const SoftwareUpdate = () => {
  return (
    <div className="absolute bottom-20 right-10 md:right-32 pointer-events-none z-0 opacity-60 hidden md:block">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-[#0f172a] border border-blue-500/30 p-4 rounded-xl shadow-lg backdrop-blur-md w-48"
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
             <RefreshCw size={16} className="text-blue-400" />
          </motion.div>
          <span className="text-xs font-mono text-blue-200">System Update...</span>
        </div>
        <div className="h-1.5 w-full bg-blue-900/50 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
            className="h-full bg-blue-400 rounded-full"
          />
        </div>
        <div className="mt-1 text-[10px] text-gray-500 font-mono text-right">v2.4.0 installing</div>
      </motion.div>
    </div>
  );
};

// Coding Person Animation (Left Side)
const CodingPerson = () => {
  return (
    <div className="absolute top-32 left-8 md:left-24 pointer-events-none z-0 opacity-60 hidden md:block">
       <motion.div
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="relative"
       >
         {/* Person Icon */}
         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg border-2 border-white/10">
            <Users size={28} className="text-white" />
         </div>
         
         {/* Code Bubble */}
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
           className="absolute -right-24 -top-8 bg-[#1e293b] p-3 rounded-lg border border-purple-500/30 shadow-xl w-32"
         >
            <div className="flex gap-1 mb-2">
               <div className="w-2 h-2 rounded-full bg-red-500" />
               <div className="w-2 h-2 rounded-full bg-yellow-500" />
               <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="space-y-1">
               <motion.div 
                 animate={{ width: ["0%", "80%", "80%"] }}
                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                 className="h-1 bg-purple-400/50 rounded-full" 
               />
               <motion.div 
                 animate={{ width: ["0%", "60%", "60%"] }}
                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
                 className="h-1 bg-blue-400/50 rounded-full" 
               />
               <motion.div 
                 animate={{ width: ["0%", "90%", "90%"] }}
                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.4 }}
                 className="h-1 bg-green-400/50 rounded-full" 
               />
            </div>
         </motion.div>

         {/* Connection Line */}
         <svg className="absolute top-8 left-16 w-12 h-12 stroke-purple-500/30 fill-none overflow-visible">
            <motion.path
               d="M0,0 Q20,0 30,-20"
               strokeWidth="2"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
            />
         </svg>
       </motion.div>
    </div>
  );
};

// Hacker Battle Component
const HackerBattle = () => {
  return (
    <div className="absolute top-20 right-10 md:right-20 pointer-events-none z-0 opacity-40 md:opacity-100">
       <div className="relative w-64 h-32 flex items-center justify-center">
          {/* Laptop Side (Defender) */}
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0"
          >
            <div className="relative">
              <Laptop size={48} className="text-blue-400" />
              <motion.div 
                animate={{ opacity: [0, 1, 0], x: 20 }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute top-1/2 -right-4"
              >
                 <Zap size={20} className="text-yellow-400 rotate-90" />
              </motion.div>
            </div>
          </motion.div>

          {/* Collision Flash */}
          <motion.div
             animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
             transition={{ duration: 2, repeat: Infinity, times: [0.4, 0.5, 0.6] }}
             className="absolute bg-white rounded-full w-12 h-12 blur-xl z-20"
          />

          {/* Hacker Side (Attacker) */}
          <motion.div
             animate={{ x: [0, -50, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute right-0"
          >
             <div className="relative">
               <Skull size={48} className="text-red-500" />
               <div className="absolute -inset-2 border border-red-500/30 rounded-full animate-ping" />
             </div>
          </motion.div>
       </div>
    </div>
  );
};

export function Community() {
  return (
    <section id="community" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-navy to-navy" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      {/* Code Running Animation */}
      <CodeRain />
      
      {/* Hacker Battle Animation */}
      <HackerBattle />
      
      {/* New Animations */}
      <SoftwareUpdate />
      <CodingPerson />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           className="bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 mb-24 md:mb-16 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase">24/7 Instant Help</span>
        </motion.div>


        {/* Orbital Hub Visual */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-16 flex items-center justify-center">
           
           {/* Crash/Shockwave Animation */}
           <motion.div
             animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
             className="absolute inset-0 bg-electric-blue/20 rounded-full blur-xl z-0"
           />

           {/* Central Core */}
           <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(59, 130, 246, 0.2)", "0 0 60px rgba(59, 130, 246, 0.6)", "0 0 20px rgba(59, 130, 246, 0.2)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#020617] to-[#1e3a8a] rounded-full flex flex-col items-center justify-center z-20 relative shadow-2xl border border-blue-500/30"
           >
              <div className="absolute -inset-1 rounded-full border border-white/10 scale-110" />
              <h3 className="text-3xl font-bold z-10 relative flex items-center justify-center cursor-default">
                 {"SDEC".split("").map((char, i) => (
                   <motion.span
                     key={i}
                     className={cn(
                       "inline-block origin-bottom",
                       "text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-cyan-400 tracking-widest font-black"
                     )}
                     initial={{ y: 0, rotateX: 0 }}
                     whileHover={{ 
                       y: -4,
                       rotateX: 20,
                       scale: 1.1,
                       color: "#22d3ee", // Cyan-400
                       textShadow: "0px 0px 8px rgba(34,211,238,0.6)"
                     }}
                     transition={{ 
                       type: "spring", 
                       stiffness: 300, 
                       damping: 10,
                       delay: i * 0.05 
                     }}
                   >
                     {char}
                   </motion.span>
                 ))}
              </h3>
           </motion.div>

           {/* Orbit Rings */}
           <div className="absolute inset-0 border border-white/5 rounded-full" />
           <div className="absolute inset-[15%] border border-white/5 rounded-full" />

           {/* Orbiting Icons */}
           <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
           >
              {avatars.map((avatar, i) => {
                 const angle = (i / avatars.length) * 360;
                 return (
                     <div
                     key={i}
                     className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                     style={{
                       transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)` 
                     }}
                   >
                     <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{ scale: 1.2 }}
                        className={`relative group cursor-pointer flex flex-col items-center`}
                     >
                        <div className={`w-12 h-12 rounded-full border-2 ${avatar.color} bg-[#0A192F] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 relative`}>
                           <avatar.icon size={20} className={avatar.text} />
                        </div>
                        {/* Label - Always visible now */}
                        <div className="absolute top-full mt-2 bg-navy/90 text-white text-[10px] font-bold py-1 px-3 rounded-full border border-white/10 shadow-lg whitespace-nowrap z-10">
                           {avatar.role}
                        </div>
                     </motion.div>
                   </div>
                 );
              })}
           </motion.div>
        </div>

      </div>
    </section>
  );
}
