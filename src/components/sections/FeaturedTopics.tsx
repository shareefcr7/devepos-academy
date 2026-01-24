"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const topicData = [
  { name: "Tailwind", url: "https://tailwindcss.com", courseId: "l2-frontend" },
  { name: "Figma", url: "https://figma.com", courseId: "l2-frontend" },
  { name: "React", url: "https://react.dev", courseId: "l3" },
  { name: "Next.js", url: "https://nextjs.org", courseId: "l3" },
  { name: "Node.js", url: "https://nodejs.org", courseId: "l2-backend" },
  { name: "MongoDB", url: "https://mongodb.com", courseId: "l2-backend" },
  { name: "MySQL", url: "https://mysql.com", courseId: "l2-backend" },
  { name: "JavaScript", url: "https://javascript.info", courseId: "l1" },
  { name: "TypeScript", url: "https://typescriptlang.org", courseId: "l3" },
  { name: "Vite", url: "https://vitejs.dev", courseId: "l1" },
  { name: "GiHub", url: "https://github.com", courseId: "l1" },
  { name: "Git", url: "https://git-scm.com", courseId: "l1" },
  { name: "Express.js", url: "https://expressjs.com", courseId: "l2-backend" },
  { name: "REST APIs", url: "https://restfulapi.net", courseId: "l2-backend" },
  { name: "Python", url: "https://python.org", courseId: "l4" },
  { name: "PostgreSQL", url: "https://postgresql.org", courseId: "l4" }
];

const TopicCard = ({ topic }: { topic: typeof topicData[0] }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    <Link 
      href={topic.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 min-w-[200px] backdrop-blur-3xl overflow-hidden"
    >
      {/* Glossy Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-blue-400/50 relative overflow-hidden">
        <Sparkles size={24} className="text-blue-400 group-hover:text-cyan-400 transition-colors filter drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]" />
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-shimmer" />
      </div>
      
      <div className="flex flex-col text-left">
        <span className="text-white/90 font-black text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
          {topic.name}
        </span>
        <span className="text-[9px] font-bold text-blue-400/50 uppercase tracking-widest mt-1 group-hover:text-blue-400 transition-colors">
          Official Site
        </span>
      </div>
    </Link>
  </motion.div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof topicData, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 px-2 max-w-full">
      <motion.div
        className="flex gap-4 md:gap-8 min-w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((topic, index) => (
          <TopicCard key={`${topic.name}-${index}`} topic={topic} />
        ))}
      </motion.div>
    </div>
  );
};

export function FeaturedTopics() {
  const row1 = topicData.slice(0, Math.ceil(topicData.length / 2));
  const row2 = topicData.slice(Math.ceil(topicData.length / 2));

  return (
    <section id="featured-topics" className="py-40 relative bg-[#010208] overflow-hidden">
      {/* 3D Depth Lights */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping shadow-[0_0_15px_#3b82f6]" />
            <span className="text-blue-300 font-black tracking-[0.4em] uppercase text-[10px]">
              Ecosystem Mastery
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85] uppercase max-w-4xl px-4">
             Explore <span className="text-gradient animate-gradient bg-300% filter brightness-125">Core Modules</span>
          </h2>
          <p className="text-white/20 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed tracking-[0.2em] uppercase px-6">
            Official tools & technologies integrated into the <span className="text-white font-bold">SDEC Curriculum</span>.
          </p>
        </div>

        <div className="flex flex-col gap-10 relative">
           {/* Cinematic Side Masks */}
           <div className="absolute left-0 top-0 bottom-0 w-16 md:w-80 z-20 bg-gradient-to-r from-[#010208] to-transparent pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-16 md:w-80 z-20 bg-gradient-to-l from-[#010208] to-transparent pointer-events-none" />
           
           <MarqueeRow items={row1} direction="left" speed={45} />
           <MarqueeRow items={row2} direction="right" speed={55} />
        </div>
      </div>
    </section>
  );
}
