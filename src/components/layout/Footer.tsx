import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy pt-32 pb-10 overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[100px] fill-navy"
        >
          <path
             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
             className="fill-electric-blue/5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">SDEC Academy</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of developers with skills that matter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/all" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                 <Link href="/about" className="text-gray-400 hover:text-electric-blue transition-colors">
                   About Us
                 </Link>
              </li>
              <li>
                 <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                   Careers
                 </Link>
              </li>
              <li>
                 <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                   Blog
                 </Link>
              </li>
              <li>
                 <Link href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                   Contact
                 </Link>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
             <div className="flex space-x-4">
                {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 text-white hover:text-electric-blue transition-all">
                    <Icon size={20} />
                  </Link>
                ))}
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-navy">
           <p className="text-gray-500 text-sm bg-transparent">© 2024 SDEC Academy. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0 bg-transparent">
              <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
