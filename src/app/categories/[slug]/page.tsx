"use client";

import { useParams } from "next/navigation";
import { courses } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/ui/course-card";
import { motion } from "framer-motion";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Helper to slugify text
const slugify = (text: string) => text.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-");

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Un-slugify for display (basic approximate)
  const categoryTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Filter logic
  const filteredCourses = slug === "all" 
    ? courses 
    : courses.filter(c => {
        const cSlug = slugify(c.category);
        if (cSlug === slug) return true;
        if (c.title.toLowerCase().includes(slug.replace(/-/g, " "))) return true;
        return false;
      });

  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-12 text-center"
          >
             <h1 className="text-4xl font-bold mb-4">
               {slug === "all" ? "All Courses" : `${categoryTitle} Courses`}
             </h1>
             <p className="text-gray-400">
               {filteredCourses.length} {filteredCourses.length === 1 ? "result" : "results"} found
             </p>
          </motion.div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
               <h3 className="text-xl font-bold mb-2">No courses found</h3>
               <p className="text-gray-400 mb-6">We are adding new courses every month. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
