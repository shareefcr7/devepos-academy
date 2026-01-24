"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Benefits } from "@/components/sections/Benefits";
import { motion } from "framer-motion";
import { Trophy, Target, Rocket, Lightbulb, TrendingUp, Star, Award, Zap, Crown, Medal, PartyPopper } from "lucide-react";
import { useState, useEffect } from "react";

// Success Animation Background
const SuccessBackground = () => {
    // Winner/Celebration themed icons
    const icons = [Trophy, Target, Rocket, Star, Award, Zap, Crown, Medal, PartyPopper];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Falling Icons Rain */}
            {icons.map((Icon, i) => (
                // Generate multiple instances of each icon for a "rain" effect
                Array.from({ length: 3 }).map((_, j) => (
                    <motion.div
                        key={`${i}-${j}`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ 
                            y: "110vh",
                            opacity: [0, 1, 1, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5, // Fall duration between 5-10s
                            repeat: Infinity,
                            delay: Math.random() * 10, // Random start delay
                            ease: "linear",
                            repeatDelay: Math.random() * 2
                        }}
                        className="absolute text-electric-blue/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            // Randomize size for depth
                            scale: Math.random() * 0.5 + 0.8 
                        }}
                    >
                        <Icon size={Math.random() * 20 + 20} strokeWidth={1.5} />
                    </motion.div>
                ))
            ))}
            
            {/* Confetti Particles */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={`confetti-${i}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ 
                        y: "100vh", 
                        opacity: [0, 0.8, 0],
                        rotateX: [0, 360],
                        rotateY: [0, 360]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    className={`absolute w-2 h-2 rounded-[1px] ${
                        ['bg-electric-blue', 'bg-cyan-400', 'bg-purple-500', 'bg-yellow-400'][Math.floor(Math.random() * 4)]
                    }`}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                />
             ))}
        </div>
    );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-electric-blue/30">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements - Low Attraction */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <SuccessBackground />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-400 to-purple-400">About SDEC Academy</span>
            </h1>
            <p className="text-xl text-gray-400 font-light">
              We are on a mission to democratize elite tech education. We believe that top-tier engineering skills should be accessible to everyone, everywhere.
            </p>
          </motion.div>

          {/* Meet the Founder Section */}
          <div className="relative isolate">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl -z-10 blur-2xl opacity-50" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 p-8 rounded-3xl border border-white/5 bg-navy/50 backdrop-blur-sm relative overflow-hidden">
              {/* Premium Glow */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/5 rounded-full blur-[100px]" />
              
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="order-2 md:order-1 relative"
              >
                <div className="relative w-full max-w-[400px] h-auto mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                 {/* Image */}
                 <img 
                   src="/images/shahi-rahman-full.png"
                   alt="Shahi Rahman - Founder"
                   className="w-full h-full object-cover object-top"
                 />
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
               </div>
               {/* Decorative Element */}
               <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-electric-blue/30 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-2 block">Visionary Leader</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet the <span className="text-electric-blue">Founder</span>
              </h2>
              
              
              <h3 className="text-2xl font-bold text-white mb-2">SHAHI RAHMAN</h3>
              <p className="text-gray-400 text-sm mb-6 font-medium">
                Founder of ShahiSolution Project Management & SDEC Academy
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-electric-blue pl-4">
                  "A visionary leader dedicated to bridging the gap between academic theory and industry reality. With a primary focus on Project Management, Shahi Rahman empowers aspiring developers to not just write code, but to build scalable, real-world solutions that drive innovation."
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                 {['Software Engineering Educator', 'MERN Stack Expert'].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>



      <Benefits />
      <Footer />
    </main>
  );
}
