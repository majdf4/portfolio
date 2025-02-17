"use client";
import Link from "./components/links";
import useMousePosition from "./components/useMousePosition";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 600;

  return (
    <>
      <motion.div 
      className="grid-overlay" 
      animate={{ WebkitMaskPosition: `${x - size/2}px ${y - size/2}px` }}
      transition={{type: "tween", ease: "backOut"}}
      ></motion.div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-bold">majd</h1>
        <div className="flex flex-row">
          <Link name="github" href="https://github.com/majdf4" color="bg-slate-500" />
          <Link name="discord" href="https://discord.gg/SbFjYCY4Je" color="bg-blue-500" className="ml-5" />
          <Link name="instagram" href="https://www.instagram.com/picsbymajd" color="bg-pink-500" className="ml-5" />
        </div>
      </div>
      <Analytics />
    </>
  );
}
