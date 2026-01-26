"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Courses } from "@/components/sections/Courses";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white font-outfit">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="pt-10">
        <Courses />
      </div>

      <Footer />
    </main>
  );
}
