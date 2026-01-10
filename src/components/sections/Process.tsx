"use client";

import { motion } from "framer-motion";
import { UserPlus, PlayCircle, Code2, MessageCircle, Award } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Enroll Course", desc: "Choose your path and join." },
  { icon: PlayCircle, title: "Access Content", desc: "Watch high-quality videos." },
  { icon: Code2, title: "Practice Projects", desc: "Build real-world apps." },
  { icon: MessageCircle, title: "Get Mentorship", desc: "24/7 expert guidance." },
  { icon: Award, title: "Earn Certificate", desc: "Showcase your skills." },
];

export function Process() {
  return (
    <section className="py-24 bg-navy-light/10 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Learning Works
          </h2>
          <p className="text-gray-400">Your journey from beginner to pro in 5 simple steps.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-[180px]"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-electric-blue shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                <step.icon size={28} />
              </div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
              
              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/5 -z-10" 
                     style={{ 
                       left: `calc(50% + ${ (index - 2) * 220 + 90 }px)`, 
                       width: '130px' 
                     }} 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
