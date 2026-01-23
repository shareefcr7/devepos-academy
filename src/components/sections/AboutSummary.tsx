"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { CheckCircle, Code, Terminal, Laptop, Zap, Users, Database, Cloud, Server, Shield } from "lucide-react";
import Image from "next/image";

// Code Rain Component
const CodeRain = () => {
  const rainIcons = [Code, Terminal, Laptop, Zap, Users, Database, Cloud, Server, Shield];
  const keywords = ["SDEC", "ACADEMY", "CLOUD", "AWS", "DOCKER", "K8S", "CI/CD", "GIT", "LINUX"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
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
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              className="text-electric-blue/40 text-[10px] font-mono writing-vertical flex flex-col items-center gap-4 font-bold tracking-widest"
              style={{ writingMode: "vertical-rl" }}
            >
              {Math.random() > 0.5 && <Icon size={12} className="mb-2 rotate-90 text-teal-400" />}
              {keyword}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Tech Icons Crash/Float Animation
const TechIcons = () => {
    const icons = [Database, Cloud, Server, Shield];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map((Icon, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0, 0.3, 0], 
                        scale: [0.5, 1.5, 0.5],
                        x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                    }}
                >
                    <Icon size={40} className="text-electric-blue/20" />
                </motion.div>
            ))}
        </div>
    );
};

export function AboutSummary() {
  return (
    <section className="py-20 relative bg-transparent overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-navy to-navy pointer-events-none" />
      
      {/* Animations */}
      <CodeRain />
      <TechIcons />
      
      {/* Crash/Pulse Background */}
      <motion.div 
         animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Who We Are
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-400 to-purple-400">Offline Tech Training</span> & Career Development
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              SDEC Academy is a leading offline destination for aspiring developers and tech enthusiasts. 
              We bridge the gap between academic learning and industry requirements through 
              hands-on, project-based training.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Designed for Students, Freelancers & Aspiring Engineers",
                "Focus on Practical, Industry-Oriented Learning",
                "Mentorship directly from Industry Experts"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue flex-shrink-0" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
              <Image 
                src="/images/IMAGE6.avif"
                alt="About SDEC Academy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/10 dark:bg-navy/30 mix-blend-multiply" />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 dark:bg-electric-blue/20 rounded-full blur-3xl" />
          </motion.div>


        </div>
      </div>
    </section>
  );
}
