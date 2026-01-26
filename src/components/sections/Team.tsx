"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Terminal, Zap, Code, Shield, Cpu, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useCallback, memo, useRef } from "react";

// --- Types & Constants ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
  workImage: string;
  bio: string;
  quote: string;
  icon: any;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "ADARSHA-K",
    role: "CEO",
    image: "/images/team/team_ceo.png",
    workImage: "/images/team/bg_ceo.png",
    bio: "GLOBAL STRATEGY & VISION",
    quote: "Leading the evolution of technical education with a global vision.",
    icon: Shield
  },
  {
    name: "SHAHANA",
    role: "Academy Specialist",
    image: "/images/team/team_6.png",
    workImage: "/images/team/bg_academy.png",
    bio: "EDUCATIONAL EXCELLENCE",
    quote: "Empowering next-gen talent through structured excellence.",
    icon: Star
  },
  {
    name: "JASEEM",
    role: "Project Head",
    image: "/images/team/team_jaseem.png",
    workImage: "/images/team/bg_project.png",
    bio: "SYSTEM ARCHITECTURE",
    quote: "Turning complex visions into scalable architectural reality.",
    icon: Shield
  },
  {
    name: "MARSHOOK ALI",
    role: "Frontend Developer",
    image: "/images/team/team_1.png",
    workImage: "/images/team/bg_frontend.png",
    bio: "INTERFACIAL DESIGN",
    quote: "Designing interfaces that bridge human emotion and code.",
    icon: Code
  },
  {
    name: "FAYAS",
    role: "Content Creator",
    image: "/images/team/team_2.png",
    workImage: "/images/team/bg_content.png",
    bio: "DIGITAL STORYTELLING",
    quote: "Translating technical power into compelling digital stories.",
    icon: Zap
  },
  {
    name: "RASHA KP",
    role: "Fullstack Developer",
    image: "/images/team/team_3.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "SYSTEM ENGINEERING",
    quote: "Architecting seamless systems from core to cloud.",
    icon: Terminal
  },
  {
    name: "SHAREEF CV",
    role: "Fullstack Developer",
    image: "/images/team/team_5.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "WEB PERFORMANCE",
    quote: "Building the high-performance backbone of modern web.",
    icon: Cpu
  },
  {
    name: "AJNAS",
    role: "Fullstack Developer",
    image: "/images/team/team_7.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "ROBUST SOLUTIONS",
    quote: "Engineering robust solutions for complex challenges.",
    icon: Code
  }
];

const AUTO_PLAY_INTERVAL = 3750; 
const PASSING_DURATION = 0.2;

// --- Sub-Components ---
const TeamCard = memo(({ member, style, isActive }: { member: TeamMember, style: any, isActive: boolean }) => (
  <motion.div
    initial={false}
    animate={{
      x: style.x,
      zIndex: style.zIndex,
      opacity: style.opacity,
      scale: style.scale,
      rotateY: style.rotateY,
      filter: style.filter
    }}
    transition={{
      duration: PASSING_DURATION,
      ease: [0.22, 1, 0.36, 1]
    }}
    style={{ willChange: "transform, opacity, filter" }}
    className="absolute w-[260px] md:w-[320px] aspect-[3/4]"
  >
    <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden border transition-all duration-500
                    ${isActive ? "border-cyan-500/30 bg-[#080a15] shadow-[0_0_50px_rgba(34,211,238,0.2)]" : "border-white/5 bg-[#05060f]"}
                   `}>
      <Image
        src={member.image}
        alt={member.name}
        fill
        quality={100}
        priority={isActive}
        className={`object-cover transition-all duration-[2s] ${isActive ? "scale-100 opacity-100" : "scale-110 opacity-60"}`}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      
      <div className="absolute inset-x-0 bottom-0 p-8 transform-gpu">
         <motion.h3 
           animate={{ letterSpacing: isActive ? "0px" : "4px" }}
           className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10"
           style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.15)' }}>
           {member.name}
         </motion.h3>
         <p className={`${member.role === 'CEO' ? 'text-cyan-400/90' : 'text-cyan-400/60'} font-mono text-[9px] md:text-[11px] font-black tracking-[0.6em] uppercase`}>
           {member.role}
         </p>
      </div>

      {isActive && (
        <motion.div 
          className="absolute inset-0 border-2 border-cyan-400/20 rounded-[2.5rem]"
          animate={{ opacity: [0, 1, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </div>
  </motion.div>
));

TeamCard.displayName = "TeamCard";

// --- Main Component ---
export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Enable unmuted by default for automatic play
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    // New Samurai Cinematic Track
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2025/10/20/audio_b0342ad798.mp3?filename=samurai-423024.mp3");
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
    }
  }, []);

  const nextMember = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev >= TEAM_MEMBERS.length - 1) {
        setIsFinished(true);
        return prev;
      }
      return prev + 1;
    });
  }, []);

  // Audio Playback Logic - Automatic Play from 1st to 8th
  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted && !isFinished) {
        // Attempt to play (browser might block until first click)
        audioRef.current.play().catch(() => {
          // If blocked, we'll wait for user to toggle mute or click restart
          console.log("Autoplay blocked - awaiting user interaction");
        });
        audioRef.current.volume = 0.5;
      } else if (isFinished) {
        // Fade out transition at the 8th member
        let vol = 0.5;
        const fadeOut = setInterval(() => {
          if (vol > 0) {
            vol -= 0.05;
            if (audioRef.current) audioRef.current.volume = Math.max(0, vol);
          } else {
            if (audioRef.current) audioRef.current.pause();
            clearInterval(fadeOut);
          }
        }, 100);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, isFinished]);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(nextMember, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextMember, isFinished]);

  const handleRestart = () => {
    setIsFinished(false);
    setActiveIndex(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      setIsMuted(false); // Ensure unmuted on restart
      audioRef.current.play().catch(() => {});
    }
  };

  const getCardStyle = (index: number) => {
    const total = TEAM_MEMBERS.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    const isActive = diff === 0;
    const isNext = diff === 1;
    const isPrev = diff === -1;

    let zIndex = 0;
    let opacity = 0;
    let scale = 0.5;
    let x: string | number = 0;
    // Removed 3D tilt and blur as requested
    let rotateY = 0;
    let filter = "none";

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isActive) {
      zIndex = 50; 
      opacity = 1; 
      scale = isMobile ? 1.05 : 1.2; // Scale down slightly on mobile to prevent clashing
      x = 0;
    } else if (isNext) {
      zIndex = 30; 
      opacity = 0.3; 
      scale = 0.8; 
      x = isMobile ? "80%" : "95%"; // Closer peek on mobile
    } else if (isPrev) {
      zIndex = 30; 
      opacity = 0.3; 
      scale = 0.8; 
      x = isMobile ? "-80%" : "-95%";
    } else {
      x = diff > 0 ? "180%" : "-180%"; 
      opacity = 0;
    }

    return { zIndex, opacity, scale, x, rotateY, filter };
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#010208] perspective-[3500px]">
      {/* Audio Control Toggle */}
      <div className="absolute top-12 right-12 z-[100] flex items-center gap-4">
        {isFinished && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleRestart}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-white/10 hover:text-white transition-all backdrop-blur-xl"
          >
            Restart System Scan
          </motion.button>
        )}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMuted(!isMuted)}
          className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-cyan-500/20 group flex items-center gap-3"
        >
          {isMuted ? (
            <VolumeX size={18} className="text-white/40 group-hover:text-cyan-400" />
          ) : (
            <div className="relative flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-[7px] font-black text-cyan-400/40 uppercase tracking-widest leading-none">Audio</span>
                <span className="text-[10px] font-black text-cyan-400 leading-none">LIVE</span>
              </div>
              <Volume2 size={18} className="text-cyan-400" />
              <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="absolute right-0 inset-y-0 w-4 h-4 m-auto bg-cyan-400 rounded-full -z-10" 
              />
            </div>
          )}
        </motion.button>
      </div>

      {/* Clean Dark Background Environment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010208] via-transparent to-[#010208]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#010208_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto mb-20 px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/10 mb-8 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-cyan-400/50">Core Faculty Profile Scan</span>
          </motion.div>
          
          <div className="flex flex-col items-center select-none">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[clamp(2rem,6vw,6rem)] font-black text-white leading-tight uppercase relative inline-block"
            >
              Meet Our
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-2"
            >
              <h2 className="text-[clamp(4rem,16vw,14rem)] font-black tracking-tighter leading-none uppercase text-transparent whitespace-nowrap"
                  style={{ 
                    WebkitTextStroke: '1px rgba(255,255,255,0.15)',
                    textShadow: '0 0 40px rgba(34,211,238,0.1)'
                  }}>
                Team
              </h2>
              
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1rem]">
                <motion.div
                  animate={{ 
                    x: ["-100%", "200%"],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-[35deg] blur-md"
                />
              </div>

              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 text-[clamp(4rem,16vw,14rem)] font-black tracking-tighter leading-none uppercase text-transparent whitespace-nowrap blur-[15px] pointer-events-none"
                style={{ WebkitTextStroke: '1px rgba(34,211,238,0.2)' }}
                aria-hidden="true"
              >
                Team
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 text-white/10 font-mono text-[9px] uppercase tracking-[0.6em] mt-12"
          >
             <div className="w-16 h-px bg-white/5" />
             <span className="text-white/30 italic">Pioneering Global Tech Standards</span>
             <div className="w-16 h-px bg-white/5" />
          </motion.div>
        </div>

        <div className="relative h-[380px] md:h-[520px] mb-32 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard 
                key={member.name} 
                member={member} 
                style={getCardStyle(index)} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center"
            >
               <Quote size={28} className="text-cyan-400/20 mb-8" />
               <p className="text-2xl md:text-3xl font-light text-white/90 leading-tight mb-12 tracking-tight italic max-w-3xl">
                  "{TEAM_MEMBERS[activeIndex].quote}"
               </p>

               <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                     <span className={`w-1.5 h-1.5 rounded-full ${isFinished ? "bg-white" : "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}`} />
                     <span className={`${isFinished ? "text-white/40" : "text-cyan-400/60"} font-mono text-[9px] tracking-[0.8em] uppercase`}>
                       {isFinished ? "System Finalized: Mission Clear" : "Status: Professional Scan Active"}
                     </span>
                  </div>
                  {!isFinished && (
                    <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         animate={{ x: "0%" }}
                         transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                         className="h-full bg-cyan-400/40"
                       />
                    </div>
                  )}
               </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-5 mt-24">
          {TEAM_MEMBERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative py-4 px-2"
            >
              <div className={`h-1 rounded-full transition-all duration-700 
                              ${i === activeIndex ? "w-12 bg-cyan-400 shadow-[0_0_15px_#22d3ee]" : "w-4 bg-white/10 group-hover:bg-white/30"}
                             `} />
              <span className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-black transition-all duration-500
                                ${i === activeIndex ? "opacity-30 text-cyan-400" : "opacity-0"}`}>
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
