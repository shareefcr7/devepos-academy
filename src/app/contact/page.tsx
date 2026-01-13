"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyan-400">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions about our courses or mentorship? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="space-y-8"
            >
               <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
               
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg text-electric-blue">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg">Email Us</h3>
                   <p className="text-gray-400">rshahi.eng@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg text-electric-blue">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
                   <p className="text-gray-400">+91 73561 90621 (Call)</p>
                   <a 
                     href="https://wa.me/917356190621" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-green-500 font-medium hover:underline inline-block mt-1"
                   >
                     Chat on WhatsApp
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-lg text-electric-blue">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg">Address:</h3>
                   <p className="text-gray-400">1422, F9, T1</p>
                   <p className="text-gray-400">Hilite Business Park</p>
                   <p className="text-gray-400">Palazhi, Calicut</p>
                   <p className="text-gray-400">Kerala - 673016</p>
                 </div>
               </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <input type="text" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <input type="text" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input type="email" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea rows={4} className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors resize-none" placeholder="Tell us how we can help..." />
                </div>

                <Button variant="primary" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
