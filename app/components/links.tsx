"use client";

import { motion } from "framer-motion";

interface LinkProps {
  name: string;
  href: string;
  color: string;
  className?: string;
}

function Link({ name, href, color, className }: LinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      className={`text-xl mt-5 relative group ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10">{name}</span>
      <span className={`absolute left-0 bottom-0 w-0 h-[2px] ${color} group-hover:w-full transition-all duration-300`}></span>
    </motion.a>
  );
};

export default Link;
