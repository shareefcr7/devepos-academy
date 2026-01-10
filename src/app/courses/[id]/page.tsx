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
                    <span>3-6 Months Duration</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Globe size={18} className="text-electric-blue" />
                    <span>100% Online</span>
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

      {/* Curriculum Preview / details */}
      <section className="py-20 bg-navy-light/10">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
             <Shield className="text-electric-blue" /> What You Will Learn
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Industry-Standard Curriculum designed by experts",
                "Hands-on Projects to build your portfolio",
                "1-on-1 Mentorship support",
                "Career Guidance & Resume Building",
                "Lifetime Access to course materials",
                "Dedicated Community Support"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-electric-blue/30 transition-colors">
                   <div className="mt-1 bg-electric-blue/20 p-1 rounded-full">
                     <CheckCircle size={16} className="text-electric-blue" />
                   </div>
                   <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
