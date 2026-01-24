"use client";

import { useParams } from "next/navigation";
import { courses } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Globe, Award, Shield, ArrowRight, Star, Zap, Medal, BookOpen, Users, Video, FileText, Smartphone, Code } from "lucide-react";
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
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-semibold border border-electric-blue/20">
                  {course.level} Level
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20">
                  <Star size={14} className="fill-yellow-500" />
                  {course.rating}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl w-full max-w-3xl mt-12 overflow-hidden shadow-2xl">
                <div className="px-10 py-8 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-white/10 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2 text-center sm:text-left">Standard Investment</span>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="text-4xl font-black text-white tracking-tighter">{course.price}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                  </div>
                </div>

                <Link href="/contact" className="flex-1">
                  <Button className="w-full h-full group relative overflow-hidden bg-electric-blue/90 hover:bg-electric-blue text-navy hover:text-white font-black px-12 py-10 text-2xl rounded-none transition-all duration-500 border-none">
                    <span className="relative z-10 flex items-center justify-center gap-4 tracking-tighter">
                      {course.ctaLabel.toUpperCase()}
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
                    </span>
                    <div className="absolute inset-0 bg-[#03041a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </Button>
                </Link>
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
               className="relative group"
            >
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-electric-blue/30 transition-all duration-700">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700" />
                  
                  {/* Decorative Elements on Image */}
                  <div className="absolute top-6 right-6 z-20">
                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight size={24} className="text-white -rotate-45" />
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 relative bg-navy/50 backdrop-blur-3xl overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2">
                 <h2 className="text-sm font-black text-electric-blue uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <Shield size={16} /> The Professional Journey
                 </h2>
                 <div className="text-2xl md:text-3xl text-white leading-relaxed font-light italic opacity-95 border-l-4 border-electric-blue/30 pl-8 md:pl-12">
                    "{course.story}"
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: Medal, label: "Top Rated", val: "4.9/5" },
                   { icon: Users, label: "Active Cohort", val: "25+ Students" },
                   { icon: Zap, label: "Levelup", val: "Industry Ready" },
                   { icon: Award, label: "Certificate", val: "ISO Certified" }
                 ].map((stat, i) => (
                   <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-electric-blue/30 transition-all group">
                      <stat.icon size={24} className="text-electric-blue mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-lg font-black text-white">{stat.val}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Learning Assets Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">What's <span className="text-gradient">Included</span></h2>
               <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">Comprehensive learning ecosystem for your success</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { icon: Video, title: "Online/Offline", desc: "Flexible learning modes" },
                 { icon: BookOpen, title: "Extensive Resources", desc: "Curated learning materials" },
                 { icon: Code, title: "Real Projects", desc: "Hands-on implementation" },
                 { icon: FileText, title: "Assignments", desc: "Weekly skill validation" },
                 { icon: Users, title: "Q&A Support", desc: "Direct mentor access" },
                 { icon: Smartphone, title: "LMS Access", desc: "24/7 Learning portal" },
                 { icon: Globe, title: "Networking", desc: "Peer group community" },
                 { icon: Award, title: "Case Studies", desc: "Real industry scenarios" }
               ].map((asset, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05 }}
                   className="p-8 rounded-[2.5rem] bg-navy-light/20 border border-white/5 hover:border-white/10 transition-all text-center group"
                 >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-blue/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                       <asset.icon size={30} className="text-electric-blue" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{asset.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest">{asset.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Curriculum Preview / details */}
      <section className="py-24 bg-[#050614] relative border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
              <div>
                 <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Detailed <span className="text-gradient">Syllabus</span></h2>
                 <p className="text-gray-400 text-xl font-light">A structured roadmap designed for total mastery of the subject.</p>
              </div>
              <div className="px-8 py-4 rounded-[2rem] bg-electric-blue/10 border border-electric-blue/30 text-electric-blue font-black tracking-widest uppercase text-sm flex items-center gap-3">
                 <BookOpen size={20} />
                 {course.topics.length} CORE MODULES
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.topics.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 p-10 rounded-[3rem] bg-navy-light/10 backdrop-blur-xl border border-white/5 hover:border-electric-blue/20 transition-all duration-500 group relative overflow-hidden"
                >
                   {/* Background Number */}
                   <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/[0.02] pointer-events-none group-hover:text-electric-blue/[0.04] transition-colors">
                      {i + 1}
                   </div>

                   <div className="flex-shrink-0 mt-1 bg-electric-blue/5 p-4 rounded-2xl group-hover:bg-electric-blue/20 transition-all duration-500 group-hover:rotate-6">
                     <CheckCircle size={28} className="text-electric-blue" />
                   </div>
                   <div className="relative z-10">
                      <span className="text-white text-2xl font-black block mb-3 uppercase tracking-tight">{item}</span>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                         Professional mastery of {item.toLowerCase()} through hands-on implementation and industry-standard workflows.
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                         <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">Lab Session Included</span>
                         <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">Q&A Enabled</span>
                      </div>
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
