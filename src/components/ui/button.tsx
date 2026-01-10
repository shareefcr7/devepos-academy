import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary:
        "bg-gradient-to-r from-teal-400 to-blue-500 text-navy-900 rounded-full hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] hover:scale-105 border border-transparent",
      secondary:
        "bg-transparent border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40",
      ghost: "bg-transparent text-white hover:text-electric-blue",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const Component = motion.button as any; // Using framer-motion for smooth interactions

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileTap={{ scale: 0.95 }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
