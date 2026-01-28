import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

// --- 3D Cube Network Background ---

const CubeNetworkBackground = () => {
  const [cubes, setCubes] = useState<{ x: number; y: number; z: number; delay: number; duration: number }[]>([]);
  const [lines, setLines] = useState<{ top: number; left: number; duration: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);

        // Reduce load on mobile
        const cubeCount = mobile ? 3 : 8; 
        const lineCount = mobile ? 2 : 6;

        setCubes(Array.from({ length: cubeCount }).map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          z: Math.random() * 500 - 250,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 20
        })));

        setLines(Array.from({ length: lineCount }).map(() => ({
          top: Math.random() * 100,
          left: Math.random() * 100,
          duration: Math.random() * 5 + 5
        })));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Extremely Deep Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-[#020617] to-black" />
      
      {/* 3D Perspective Container */}
      <div className="absolute inset-0 perspective-[2000px]">
        
        {/* Animated Cubes */}
        {cubes.map((cube, i) => (
             <motion.div
               key={i}
               className="absolute w-20 h-20 preserve-3d"
               style={{
                 left: `${cube.x}%`,
                 top: `${cube.y}%`,
               }}
               initial={{ 
                 transform: `translateZ(${cube.z}px) rotateX(0deg) rotateY(0deg)`,
                 opacity: 0 
               }}
               animate={{ 
                 transform: [
                    `translateZ(${cube.z}px) rotateX(0deg) rotateY(0deg)`,
                    `translateZ(${cube.z + 100}px) rotateX(360deg) rotateY(180deg)`,
                    `translateZ(${cube.z}px) rotateX(720deg) rotateY(360deg)`
                 ],
                 opacity: [0, 0.7, 0]
               }}
               transition={{
                 duration: cube.duration,
                 repeat: Infinity,
                 ease: "linear",
                 delay: cube.delay
               }}
             >
                {/* Cube Faces - Optimized for Mobile */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 translate-z-[40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Front */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 translate-z-[-40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Back */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 rotate-y-90 translate-z-[40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Right */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 rotate-y-[-90deg] translate-z-[40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Left */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 rotate-x-90 translate-z-[40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Top */}
                <div className={cn("absolute inset-0 border border-blue-400/40 bg-blue-600/20 rotate-x-[-90deg] translate-z-[40px]", !isMobile && "backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]")} /> {/* Bottom */}
                
                {/* Glowing Core - Pure White/Blue */}
                <div className="absolute inset-4 bg-white/30 blur-md rounded-full translate-z-0 animate-pulse" />
             </motion.div>
        ))}

        {/* Connection Lines - Electric Blue */}
        {lines.map((line, i) => (
           <motion.div 
             key={`line-${i}`}
             className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent w-[300px]"
             style={{
                top: `${line.top}%`,
                left: `${line.left}%`,
             }}
             animate={{
                opacity: [0, 0.6, 0],
                rotate: [0, 45, 90],
                scaleX: [0.5, 1.5, 0.5]
             }}
             transition={{
                duration: line.duration,
                repeat: Infinity,
             }}
           />
        ))}

        {/* Global Glow Overlay - Deep Blue Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-navy-dark/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export function Footer() {
  const logoText = "SDEC Academy";

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden font-sans">
      <CubeNetworkBackground />
      {/* ... Wave SVG Removed ... */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 mb-16">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center perspective-[1000px] group cursor-default relative w-fit">
              {/* Glossy Sheen Overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none z-20" />
               
               {logoText.split("").map((char, i) => (
                 <motion.span
                   key={i}
                   className={cn(
                     "inline-block origin-bottom relative z-10",
                     char === " " ? "mr-2" : "",
                     "text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400 font-bold tracking-tight drop-shadow-lg"
                   )}
                   initial={{ y: 0, rotateX: 0, scale: 1 }}
                   whileHover={{ 
                     y: -6,
                     rotateX: 15,
                     scale: 1.1,
                     color: "#22d3ee", // Cyan-400
                     textShadow: "0px 0px 15px rgba(34,211,238,0.8)"
                   }}
                   transition={{ 
                     type: "spring", 
                     stiffness: 400, 
                     damping: 15,
                     mass: 0.8,
                     delay: i * 0.02 
                   }}
                 >
                   {char}
                 </motion.span>
               ))}
            </h2>
            <p className="text-blue-200/60 leading-relaxed font-medium opacity-90">
              Empowering the next generation of developers with skills that matter.
            </p>
          </div>

          {/* Quick Links - Center */}
          <div className="flex flex-col md:items-center md:text-center">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Connect - Right */}
          <div className="flex flex-col md:items-end">
             <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <div className="flex space-x-4">
                    <Link href="https://www.instagram.com/troll.sdec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 text-white transition-all shadow-lg hover:shadow-orange-500/20 group">
                      <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent relative z-10">
           <p className="text-blue-200/40 text-sm">© 2024 SDEC Academy. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-blue-200/40 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-blue-200/40 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
