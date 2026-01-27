"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary"; // New
import { FeaturedTopics } from "@/components/sections/FeaturedTopics";
import { Team } from "@/components/sections/Team"; // New
import { Courses } from "@/components/sections/Courses";
import { Process } from "@/components/sections/Process"; // New
import { Benefits } from "@/components/sections/Benefits";
import { Community } from "@/components/sections/Community"; // Restored
import { Testimonials } from "@/components/sections/Testimonials"; // New
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA"; // New
import { LogoIntro } from "@/components/intro/LogoIntro";
import { Stars } from "@/components/ui/stars";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="min-h-screen bg-navy text-white relative">
      <LogoIntro onComplete={() => setIntroComplete(true)} />
      
      <div className={`transition-opacity duration-1000 ${introComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Stars />
        <div className="glow-mesh" />
        
        {/* 1. Hero Section (Trust + Interest) */}
        <Hero />
        
        {/* 2. About Academy (Who We Are) */}
        <AboutSummary />
        
        {/* 3. Featured Topics (Value) */}
        <FeaturedTopics />

        {/* 3.5. Team Section (Credibility) */}
        <Team />
        
        {/* 4. Courses Section (Core Business) */}
        <Courses />
        
        {/* 5. How Learning Works (Process) */}
        <Process />
        
        {/* 6. Benefits (Why Choose Us) */}
        <Benefits />
        
        {/* 7. Exclusive Community (Trust + Connection) */}
        <Community />
        
        {/* 8. Testimonials (Social Proof) */}
        <Testimonials />
        
        {/* 9. FAQ (Support) */}
        <FAQ />
        
        {/* 10. Call To Action (Final Push) */}
        <CTA />
        
        {/* 11. Footer (Closure) */}
        <Footer />
      </div>
    </main>
  );
}
