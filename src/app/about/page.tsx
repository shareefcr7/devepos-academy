"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Trophy, Target, Rocket, Lightbulb, TrendingUp, Star, Award, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Success Animation Background
const SuccessBackground = () => {
    const icons = [Trophy, Target, Rocket, Lightbulb, TrendingUp, Star, Award, Zap];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Falling Confetti Rain */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={`rain-${i}`}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ 
                        y: "100vh", 
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                    className={`absolute w-[2px] h-[10px] rounded-full ${
                        ['bg-electric-blue', 'bg-cyan-400', 'bg-purple-500', 'bg-yellow-400'][Math.floor(Math.random() * 4)]
                    }`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        opacity: 0.3
                    }}
                />
             ))}
             
             {/* Floating Icons */}
            {icons.map((Icon, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0, 0.4, 0], 
                        scale: [0.5, 1.2, 0.5],
                        y: [Math.random() * 100 - 50, Math.random() * -200 - 50],
                        x: [Math.random() * 50 - 25, Math.random() * 50 - 25]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: "easeOut"
                    }}
                    className="absolute text-electric-blue/20"
                    style={{
                        top: `${Math.random() * 80 + 20}%`,
                        left: `${Math.random() * 90 + 5}%`,
                    }}
                >
                    <Icon size={Math.random() * 30 + 20} strokeWidth={1.5} />
                </motion.div>
            ))}
        </div>
    );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-electric-blue/30">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px]" />
        <SuccessBackground />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">DEVOPS HUB</span>
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
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/10 rounded-full blur-[100px]" />
              
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="order-2 md:order-1 relative"
              >
                <div className="relative h-[450px] w-[350px] mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                 {/* Image */}
                 <img 
                   src="/images/shahi-rahman.png"
                   alt="Shahi Rahman - Founder"
                   className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
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
                Founder of ShahiSolution Project Management & DEVEPOS HUB Academy
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-electric-blue pl-4">
                  "A visionary leader dedicated to bridging the gap between academic theory and industry reality. With a primary focus on Project Management, Shahi Rahman empowers aspiring developers to not just write code, but to build scalable, real-world solutions that drive innovation."
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                 {['Software Engineering Educator', 'MERN Stack Expert', 'Mentored 100+ Students 👨‍🏫'].map((tag, i) => (
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

      <Footer />
    </main>
  );
}
