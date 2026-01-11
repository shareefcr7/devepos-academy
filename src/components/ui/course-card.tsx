"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  image: string;
  rating: number;
  featured?: boolean;
}

export function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={cn(
        "relative group overflow-hidden rounded-[2rem] bg-white transition-all duration-300",
        "shadow-lg hover:shadow-[0_20px_40px_-5px_rgba(124,58,237,0.3)] border border-transparent hover:border-purple-200"
      )}
    >
      <div className="p-4 pb-0">
        {/* Image Container */}
        <div className="relative h-48 rounded-[1.5rem] overflow-hidden">
           <Image 
             src={course.image} 
             alt={course.title}
             fill
             className="object-cover transform group-hover:scale-110 transition-transform duration-500"
           />
           {/* Level Badge */}
           {course.featured ? (
              <div className="absolute bottom-3 left-4 bg-purple-100/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full">
                Featured
              </div>
           ) : null}
        </div>
      </div>

      <div className="px-6 py-6 text-center">
        {/* Price */}
        <div className="flex justify-end mb-2">
          <span className="text-xl font-bold text-gray-900">
            {course.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight min-h-[3.5rem] flex items-center justify-center">
          {course.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
           Master the skills needed to excel in {course.title} with our comprehensive curriculum designed for career success.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
             course.level === "Advanced" ? "bg-red-100 text-red-600" :
             course.level === "Intermediate" ? "bg-blue-100 text-blue-600" :
             "bg-green-100 text-green-600"
          }`}>
             {course.level}
          </span>
          
          <Link href={`/courses/${course.id}`}>
             <span className="text-sm font-semibold text-purple-600 group-hover:text-purple-700 flex items-center gap-1 transition-colors">
               View Details <ArrowRight size={16} />
             </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
