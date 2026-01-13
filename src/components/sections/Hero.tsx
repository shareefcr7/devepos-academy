"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, GitBranch, Terminal } from "lucide-react";

const FloatingIcon = ({ icon: Icon, delay, x, y, color }: any) => (
  <motion.div
    className={`absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg ${color}`}
    initial={{ opacity: 0, scale: 0, x, y }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [y, y - 20, y],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      opacity: { duration: 0.5, delay: delay },
      scale: { duration: 0.5, delay: delay }
    }}
  >
    <Icon size={32} />
  </motion.div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light z-0" />
      
      {/* Cosmic Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />
      
      {/* Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Floating Icons */}
        <FloatingIcon icon={Code} delay={0} x={-300} y={-100} color="text-blue-400" />
        <FloatingIcon icon={Server} delay={1} x={350} y={-50} color="text-green-400" />
        <FloatingIcon icon={Database} delay={0.5} x={-350} y={150} color="text-yellow-400" />
        <FloatingIcon icon={GitBranch} delay={1.5} x={300} y={200} color="text-orange-400" />
        <FloatingIcon icon={Terminal} delay={2} x={0} y={-250} color="text-gray-300" />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-medium mb-6 border border-electric-blue/20">
            🚀 Launch your career in tech
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Master the Future of <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-cyan-400 to-electric-blue animate-gradient bg-300%">Web Development</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Find what fascinates you as you explore these offline courses.
          Join a community of ambitious developers building the next generation of the web.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#courses" className="w-full md:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Start Learning Now
            </Button>
          </a>
          <a href="#courses" className="w-full md:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              Explore Courses
            </Button>
          </a>
        </motion.div>
      </div>

       {/* Scroll Indicator */}
       <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-electric-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
