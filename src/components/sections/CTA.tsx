"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-teal-900/40" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-20 max-w-4xl mx-auto shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers building the future. Get the skills, mentorship, and opportunities you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button variant="ghost" className="text-electric-blue hover:text-white text-lg font-bold">
                Join DEVOPS HUB
              </Button>
            </Link>
            <Link href="/categories/all">
              <Button variant="secondary" className="text-white border border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold">
                Become a Developer Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
