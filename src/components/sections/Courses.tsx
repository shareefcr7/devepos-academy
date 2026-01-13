"use client";

import { motion } from "framer-motion";
import { CourseCard } from "@/components/ui/course-card";
import { courses } from "@/lib/data";

export function Courses() {
  return (
    <section id="courses" className="py-24 relative bg-navy-light/30">
       {/* Background Noise with different blend mode for variety */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-electric-blue">Premium Courses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Curated learning paths designed to take you from beginner to industry-ready professional.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { name: "All", slug: "all" },
              { name: "Web Development", slug: "web-development" }
            ].map((topic, i) => (
              <a 
                key={topic.slug}
                href={`/categories/${topic.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0 
                  ? "bg-electric-blue text-navy font-bold shadow-[0_0_15px_rgba(100,255,218,0.4)]" 
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {topic.name}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.filter(c => c.category === "Web Development").map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
