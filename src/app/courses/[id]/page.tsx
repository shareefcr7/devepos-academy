"use client";

import { useParams } from "next/navigation";
import { courses } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Globe, Award, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CourseDetail() {
  const params = useParams();
  const id = params.id as string;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-navy text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-navy text-white font-outfit overflow-x-hidden selection:bg-electric-blue/30 selection:text-electric-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-navy-light/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-semibold mb-6 border border-electric-blue/20">
                {course.level} Level
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-electric-blue text-navy hover:bg-electric-blue/90 font-bold px-8 py-6 text-lg rounded-full">
                  Enroll Now
                </Button>
                <div className="flex items-center gap-2 px-6 py-4 bg-white/5 rounded-full border border-white/10">
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 text-gray-400 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <Clock size={18} className="text-electric-blue" />
                    <span>{course.duration} Duration</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Globe size={18} className="text-electric-blue" />
                    <span>{course.mode}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Award size={18} className="text-electric-blue" />
                    <span>Certificate Included</span>
                 </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative"
            >
               <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 relative bg-navy overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 text-electric-blue flex items-center gap-3">
                 <Shield size={24} /> The Journey Ahead
              </h2>
              <div className="text-xl md:text-2xl text-white leading-relaxed font-light italic opacity-90 border-l-4 border-electric-blue/30 pl-8">
                 "{course.story}"
              </div>
           </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Curriculum Preview / details */}
      <section className="py-20 bg-navy-light/10 relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div>
                 <h2 className="text-4xl font-bold text-white mb-4">Curriculum Overview</h2>
                 <p className="text-gray-400 text-lg">Master these key modules and skills throughout the program.</p>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold">
                 {course.topics.length} Key Modules
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.topics.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-8 rounded-3xl bg-[#0a0a1a]/60 backdrop-blur-xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 group shadow-lg"
                >
                   <div className="mt-1 bg-electric-blue/10 p-2 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                     <CheckCircle size={20} className="text-electric-blue" />
                   </div>
                   <div>
                      <span className="text-white text-lg font-bold block mb-1">{item}</span>
                      <span className="text-gray-500 text-sm">Comprehensive module covering industry standards.</span>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 bg-gradient-to-t from-navy-dark to-navy">
         <div className="container mx-auto px-6">
            <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-[3rem] p-12 text-center">
               <h2 className="text-3xl font-bold text-white mb-8">What You'll Achieve</h2>
               <div className="flex flex-wrap justify-center gap-8">
                  {course.outcome.map((out, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 text-gray-300">
                       <Award size={18} className="text-electric-blue" />
                       <span className="font-semibold">{out}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
