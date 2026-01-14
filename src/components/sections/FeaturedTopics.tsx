"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const topics = [
  "Web Development", "JavaScript", "Web Design", "CSS", "Tailwind", "Bootstrap",
  "Figma", "React", "Next.js", "Node.js", "Express.js", "Git", "GitHub",
  "REST APIs", "MongoDB", "MySQL", "Vite"
];

// Split topics into two rows
const row1 = topics.slice(0, Math.ceil(topics.length / 2));
const row2 = topics.slice(Math.ceil(topics.length / 2));

const slugify = (text: string) => text.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-");

const TopicCard = ({ topic }: { topic: string }) => (
  <Link 
    href={`/categories/${slugify(topic)}`}
    className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 min-w-max backdrop-blur-xl overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
    
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyan-400/50 shadow-inner">
      <Sparkles size={16} className="text-blue-300 group-hover:text-cyan-300 transition-colors" />
    </div>
    
    <span className="text-white/90 font-medium group-hover:text-white transition-colors text-sm tracking-wide z-10">
      {topic}
    </span>
  </Link>
);

const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 mask-gradient-fade">
      <motion.div
        className="flex gap-4 min-w-max px-2"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {/* Triple the items to ensure smooth infinite loop without gaps */}
        {[...items, ...items, ...items, ...items].map((topic, index) => (
          <TopicCard key={`${topic}-${index}`} topic={topic} />
        ))}
      </motion.div>
    </div>
  );
};

export function FeaturedTopics() {
  return (
    <section id="featured-topics" className="py-24 relative bg-navy overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-500/30 mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-cyan-400 fill-cyan-400/20" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold tracking-wider uppercase text-xs">
              Explore Skills
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="text-white drop-shadow-lg">Courses</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Topics</span>
          </h2>
          <p className="text-blue-200/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the key topics covered in our courses, designed to equip you with the skills
            needed for real-world success.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-6 relative">
           {/* Fade Masks */}
           <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
           
           <MarqueeRow items={row1} direction="left" speed={40} />
           <MarqueeRow items={row2} direction="right" speed={40} />
        </div>
      </div>
    </section>
  );
}
