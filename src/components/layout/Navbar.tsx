"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy-dark/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-8"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric to-electric-blue flex items-center justify-center shadow-[0_0_30px_rgba(112,0,255,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Zap className="text-white fill-white relative z-10" size={24} />
          </motion.div>
          
          <div className="flex flex-col">
            <div className="flex">
              {"SDEC".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-xl font-black text-white tracking-[0.2em] uppercase leading-none"
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex mt-1">
              {"ACADEMY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-[10px] font-bold text-electric-blue tracking-[0.4em] uppercase opacity-80"
                  animate={{ 
                    y: [0, -2, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.1 + 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors group/nav"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-electric-blue transition-all duration-300 group-hover/nav:w-full" />
            </Link>
          ))}
          
          <Link href="/#courses">
            <Button className="h-11 px-8 rounded-xl bg-white text-navy font-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/90 shadow-xl transition-all">
              Join Elite
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-navy-dark/95 backdrop-blur-3xl border-b border-white/5 p-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-white/70 hover:text-white uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/#courses" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-14 bg-white text-navy font-black uppercase tracking-widest">
                  Join Elite
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
