"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const featuresLeft = [
  {
    icon: GraduationCap,
    title: "Certificate of Completion",
    description: "Receive a recognized credential that significantly boosts your resume.",
  },
  {
    icon: Globe,
    title: "Networking Opportunities",
    description: "Connect with peers and valuable industry professionals for growth.",
  }
];

const featuresRight = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Master essential topics and practical skills effectively and thoroughly.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description: "Learn from experienced instructors for personalized and effective support.",
  }
];

export function Benefits() {
  return (
    <section className="py-24 relative bg-navy overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">But Why</span> <span className="text-blue-500">SDEC Academy ?</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Explore the incredible advantages of enrolling in our courses and enhancing your skills for the ultimate career success.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
           
           {/* Left Column */}
           <div className="space-y-12">
              {featuresLeft.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start group"
                >
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all duration-300">
                      <feature.icon className="text-white w-8 h-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Center Card */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
           >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-10 group">
                 <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                    <Image 
                      src="/images/journey-team.jpg"
                      alt="SDEC Academy Team"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 </div>
                 
                 <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">About Us</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                       SDEC Academy is an offline learning platform designed to build real-world tech skills with mentorship and community support.
                    </p>
                    
                    <h4 className="text-xl font-bold text-white pt-2">Our Mission</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                       Through hands-on, project-based courses, our team simplifies challenging topics and makes them accessible to everyone.
                    </p>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        {[Github, Linkedin, Twitter].map((Icon, i) => (
                          <div key={i} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-electric-blue/20 flex items-center justify-center cursor-pointer transition-colors text-gray-400 hover:text-white">
                             <Icon size={18} />
                          </div>
                        ))}
                    </div>
                 </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[40px] blur-2xl -z-10" />
           </motion.div>

           {/* Right Column */}
           <div className="space-y-12">
              {featuresRight.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start group"
                >
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all duration-300">
                      <feature.icon className="text-white w-8 h-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                   </div>
                </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
}
