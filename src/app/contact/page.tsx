"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CanvasWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // ... CanvasWave implementation (no changes needed here in this block but just context) ...

  useEffect(() => {
    // ...
  }, []);

  // ...
  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      <CanvasWave />
      <Navbar />

      <section className="pt-32 pb-20 relative z-10">
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
            {/* Holographic Contact Info - Live Video Level */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative group"
            >
               {/* Animated Background Glow */}
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
               
               <div className="relative bg-[#0B1221]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                   {/* Scanning Grid Background */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                   
                   {/* Rotating Cyber Ring */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute -right-20 -top-20 w-64 h-64 border border-cyan-500/10 rounded-full border-dashed pointer-events-none"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute -right-20 -top-20 w-80 h-80 border border-blue-500/10 rounded-full border-dotted pointer-events-none opacity-50"
                   />

                   <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-8">
                           <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                           </div>
                           <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">System Online</span>
                       </div>

                       <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                       
                       <div className="space-y-8">
                           <div className="group/item flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                             <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                               <Mail size={24} />
                             </div>
                             <div>
                               <h3 className="font-semibold text-lg text-white/90">Email Us</h3>
                               <p className="text-cyan-100/60 font-mono text-sm mt-1">request.sdec@gmail.com</p>
                             </div>
                           </div>
    
                           <div className="group/item flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                             <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                               <Phone size={24} />
                             </div>
                             <div>
                               <h3 className="font-semibold text-lg text-white/90">Phone & WhatsApp</h3>
                               <p className="text-cyan-100/60 font-mono text-sm mt-1">73561 90621 (Call/Chat)</p>
                               <a 
                                 href="https://wa.me/917356190621" 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="text-green-400 text-xs font-bold uppercase tracking-wider mt-2 inline-flex items-center gap-1 hover:text-green-300"
                               >
                                 <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                 Available Now
                               </a>
                             </div>
                           </div>
    
                           <div className="group/item flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                             <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                               <MapPin size={24} />
                             </div>
                             <div>
                               <h3 className="font-semibold text-lg text-white/90">HQ Location</h3>
                               <div className="text-cyan-100/60 font-mono text-sm mt-1 leading-relaxed">
                                 <p>1422, F4, T1, Hilite Business Park</p>
                                 <p>Palazhi, Calicut, Kerala - 673016</p>
                               </div>
                             </div>
                           </div>
                       </div>
                   </div>
               </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0B1221] border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0B1221] border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0B1221] border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-[#0B1221] border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" 
                    placeholder="Tell us how we can help..." 
                  />
                </div>

                <Button variant="primary" className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold tracking-wide shadow-lg hover:shadow-cyan-500/25 transition-all" size="lg">
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
