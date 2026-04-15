import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable primitive Button component following the project's design system.
 */
export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-amber-700 text-zinc-900 hover:scale-105 shadow-lg shadow-amber-900/20 active:scale-95",
    secondary: "bg-zinc-800/80 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-zinc-100",
    ghost: "bg-transparent text-zinc-400 hover:text-amber-500 hover:bg-amber-500/5",
    danger: "bg-red-950/30 border border-red-500/30 text-red-500 hover:bg-red-500/10 hover:border-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[10px] tracking-wide",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
