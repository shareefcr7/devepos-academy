"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Keeping for types if needed, but not used in JSX anymore

const faqs = [
  {
    question: "Is this suitable for absolute beginners?",
    answer: "Yes! We have dedicated tracks for those with zero coding experience. We start from the basics and guide you step-by-step."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Absolutely. You receive a verified certificate for each course you complete, which you can add to your LinkedIn profile and resume."
  },
  {
    question: "What if I get stuck on a problem?",
    answer: "Our community is active 24/7, and our mentors are available to help you unblock. You're never learning alone."
  },
  {
    question: "Can I access the courses on mobile?",
    answer: "Our platform is fully responsive. You can watch lessons and participate in quizzes from any device."
  }
];

// Animated Plus/X Icon
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        {/* Horizontal Line */}
        <span className="absolute w-5 h-0.5 bg-navy rounded-full" />
        {/* Vertical Line */}
        <span className="absolute w-0.5 h-5 bg-navy rounded-full" />
      </motion.div>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-navy overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)" }}
              className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                  {faq.question}
                </span>
                <AccordionIcon isOpen={openIndex === index} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
