"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const topics = [
  "Web Development", "JavaScript", "Web Design", "CSS", "Tailwind", "Bootstrap",
  "Figma", "React", "Next.js", "Node.js", "Express.js", "Git", "GitHub",
  "REST APIs", "MongoDB", "MySQL", "Vite"
];

const slugify = (text: string) => text.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-");

export function FeaturedTopics() {
  return (
    <section id="featured-topics" className="py-24 relative bg-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-blue/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium text-sm mb-6">
            <Sparkles size={14} className="fill-purple-500/20" />
            <span>Featured Topics</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">Courses</span> <span className="text-blue-500">Topics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore the key topics covered in our courses, designed to equip you with the skills
            needed for real-world success.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
            >
              <Link 
                href={`/categories/${slugify(topic)}`}
                className="group flex items-center gap-3 pl-4 pr-6 py-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-electric-blue/30 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={18} className="text-purple-400 group-hover:text-electric-blue transition-colors" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{topic}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
