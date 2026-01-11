"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Briefcase, Trophy, Award, CheckCircle, TrendingUp, Star, PartyPopper } from "lucide-react";
import Image from "next/image";

// Celebration & Success Background Animation
const CelebrationBackground = () => {
  const icons = [Briefcase, Trophy, Award, CheckCircle, TrendingUp, Star, PartyPopper];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Floating Job/Success Icons - Optimized Quantity */}
       {[...Array(8)].map((_, i) => {
         const Icon = icons[Math.floor(Math.random() * icons.length)];
         return (
         <motion.div
           key={`icon-${i}`}
           initial={{ opacity: 0, y: 100 }}
           animate={{ 
             opacity: [0, 0.4, 0], 
             y: [-20, -100, -20],
             x: [Math.random() * 50 - 25, Math.random() * 50 - 25]
           }}
           transition={{
             duration: 5 + Math.random() * 3,
             repeat: Infinity,
             delay: Math.random() * 5,
             ease: "easeInOut"
           }}
           className="absolute text-electric-blue/20"
           style={{
             left: `${Math.random() * 90 + 5}%`,
             top: `${Math.random() * 80 + 10}%`,
           }}
         >
           <Icon size={Math.random() * 30 + 30} />
         </motion.div>
         );
       })}
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Shareef",
    role: "Full Stack Developer",
    text: "Reviewing code and guiding new talent here has been rewarding. The curriculum is exactly what modern tech companies look for.",
    image: "/testimonials/shareef.png"
  },
  {
    id: 2,
    name: "Rasha",
    role: "Backend Developer",
    text: "The mentorship at DEVOPS HUB effectively bridged the gap between my college studies and industry needs. I got placed within 3 months!",
    image: "/testimonials/rasha.png"
  },
  {
    id: 3,
    name: "Ajnas",
    role: "Full Stack Developer",
    text: "Designing user-centric interfaces taught me the importance of empathy in tech. Now I build experiences that users love.",
    image: "/testimonials/ajnas.png"
  },
  {
    id: 4,
    name: "Marshook",
    role: "Frontend Developer",
    text: "From zero coding knowledge to a paid internship. The hands-on projects gave me the confidence to crack my technical interviews.",
    image: "/testimonials/marshook.png"
  },
  {
    id: 5,
    name: "Rahib",
    role: "Backend Developer",
    text: "The Flutter masterclass was a game changer. I went from basic knowledge to publishing my own apps on the Play Store.",
    image: "/testimonials/rahib.png"
  },
  {
    id: 6,
    name: "Ziyad",
    role: "Frontend Developer",
    text: "Understanding cloud infrastructure and CI/CD pipelines has accelerated my career. The practical labs were incredibly useful.",
    image: "/testimonials/ziyad.jpg"
  }
];

export function Testimonials() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-navy relative overflow-hidden min-h-[600px]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-navy to-navy pointer-events-none" />
      
      {/* Celebration Animations */}
      <CelebrationBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-gray-400 text-lg">Click on a student to hear their experience.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                layout
                layoutId={`card-${t.id}`}
                onClick={() => setActiveId(t.id)}
                initial={{ opacity: 0.8, scale: 0.9 }}
                animate={{ 
                  opacity: activeId && activeId !== t.id ? 0.3 : 1, 
                  scale: activeId === t.id ? 1 : 0.95
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`relative cursor-pointer group ${
                  activeId === t.id 
                  ? "w-full max-w-2xl order-first bg-[#0B1221] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl z-20" 
                  : "w-32 md:w-36 flex-shrink-0 z-10"
                }`}
              >
                {activeId === t.id ? (
                  // Expanded View
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-30"
                  >
                     <motion.div 
                       layoutId={`image-${t.id}`}
                       className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0"
                     >
                       <Image src={t.image} alt={t.name} fill className="object-cover" />
                       {/* Glow behind image */}
                       <div className="absolute inset-0 bg-electric-blue/20 blur-xl -z-10" />
                     </motion.div>
                     
                     <motion.div 
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.3, duration: 0.5 }}
                       className="flex-1 text-center md:text-left"
                     >
                        <Quote className="text-gray-500 mb-4 mx-auto md:mx-0 opacity-30" size={40} />
                        
                        <p className="text-lg md:text-xl text-gray-100 font-medium italic leading-relaxed tracking-normal mb-6 font-serif">
                          "{t.text}"
                        </p>
                        
                        <div>
                          <h4 className="text-white font-bold text-xl mb-1 tracking-tight">{t.name}</h4>
                          <p className="text-gray-400 font-medium text-sm">{t.role}</p>
                        </div>
                        
                        <button 
                           onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                           className="absolute top-0 right-0 text-gray-500 hover:text-white p-2 transition-colors"
                        >
                           ✕
                        </button>
                     </motion.div>
                  </motion.div>
                ) : (
                  // Collapsed Avatar View
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col items-center gap-4 ${activeId ? "hidden" : "block"}`}
                  >
                     <motion.div 
                       layoutId={`image-${t.id}`}
                       className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 group-hover:from-electric-blue group-hover:to-cyan-400 transition-all duration-300"
                     >
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-navy">
                          <Image src={t.image} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                     </motion.div>
                     <div className="text-center">
                       <motion.h3 
                         layoutId={`name-${t.id}`}
                         className="text-white font-bold text-lg mb-1 group-hover:text-electric-blue transition-colors"
                       >
                         {t.name}
                       </motion.h3>
                       <motion.p 
                         layoutId={`role-${t.id}`}
                         className="text-gray-400 text-sm max-w-[150px] leading-tight mx-auto"
                       >
                         {t.role}
                       </motion.p>
                     </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
