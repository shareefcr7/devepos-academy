"use client";

import { motion } from "framer-motion";
import { Star, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    id: 1,
    name: "Fayas Rahman",
    role: "Frontend Developer",
    text: "The intensive training and real-time projects helped me master React and modern UI libraries. I feel completely job-ready now.",
    image: "/testimonials/fayas.png"
  },
  {
    id: 2,
    name: "Naima Nurin",
    role: "Backend Developer",
    text: "Understanding server architecture and database management was challenging but rewarding. The support from mentors made it easy.",
    image: "/testimonials/naima.png"
  },
  {
    id: 3,
    name: "Muhammed Yasir",
    role: "Full Stack Developer",
    text: "Building full-stack applications from scratch gave me a deep understanding of how the web works. The curriculum is excellent.",
    image: "/testimonials/yasir.png"
  },
  {
    id: 4,
    name: "Sharfas",
    role: "Backend Developer",
    text: "The focus on scalable code and best practices set this course apart. I learned skills that are actually used in the industry.",
    image: "/testimonials/sharfas.png"
  },
  {
    id: 5,
    name: "Sivanand",
    role: "frontend developer",
    text: "It's not just about tools, it's about design thinking. I learned how to create user-centric designs that stand out.",
    image: "/testimonials/sivanand.png"
  },
  {
    id: 6,
    name: "Marshook Ali",
    role: "MERN Stack Developer",
    text: "Working on real-world projects pushed my skills beyond the classroom. It was a game-changer for my confidence and career.",
    image: "/testimonials/marshook_v2.png"
  },
  {
    id: 7,
    name: "Rasha Shafi",
    role: "MERN Stack Developer",
    text: "The hands-on exposure to live projects helped me connect theory with practice. I now feel ready for real tech challenges!",
    image: "/testimonials/rasha_v2.png"
  },
  {
    id: 8,
    name: "Shareef",
    role: "MERN Stack Developer",
    text: "Contributing to actual projects gave me a huge learning boost. Every task felt like a step toward becoming a pro",
    image: "/testimonials/shareef_v2.png"
  },
  {
    id: 9,
    name: "Ajnas",
    role: "MERN Stack Developer",
    text: "Being part of live projects gave me practical knowledge and teamwork experience that no tutorial could offer. It was a great learning curve.",
    image: "/testimonials/ajnas_v2.png"
  },
  {
    id: 10,
    name: "Rahib",
    role: "Full Stack Developer",
    text: "From writing backend APIs to deploying full-stack apps, the live project experience sharpened my skills and made learning exciting.",
    image: "/testimonials/rahib_v2.jpg"
  },
  {
    id: 11,
    name: "Ziyad",
    role: "Frontend Developer",
    text: "Understanding cloud infrastructure and CI/CD pipelines has accelerated my career. The practical labs were incredibly useful.",
    image: "/testimonials/ziyad_v2.png"
  },
  {
    id: 12,
    name: "Nived",
    role: "Full Stack Developer",
    text: "The project-based learning approach was exactly what I needed. I went from knowing basic HTML to building full-stack apps.",
    image: "/testimonials/nived.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1021] pointer-events-none opacity-100" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
           badge="TESTIMONIALS"
           title={
             <>
               <span className="text-white drop-shadow-2xl">Success</span>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg">
                 Stories
               </span>
             </>
           }
           description="See what our students are achieving."
         />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#112240] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-[#162a4d] transition-all duration-300 border border-white/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <div className="absolute top-8 right-8">
                 <div className="w-8 h-8 flex items-center justify-center rounded bg-[#0077b5] text-white cursor-pointer hover:bg-[#006097] transition-colors">
                    <Linkedin size={18} />
                 </div>
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-electric-blue/30">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                       // Fallback if image fails (using a gradient placeholder)
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{t.name}</h4>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
