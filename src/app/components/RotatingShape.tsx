"use client";
import { motion, animate } from "motion/react";
// 11. Code RotatingShape.tsx

interface IProp {
  content: any;
  direction: string;
  duration: number;
}
const RotatingShape = ({ content, direction, duration }: IProp) => {
  // Tentukan rotasi dari animasi
  const rotationAnimation = {
    animate: {
      // Rotasi 360 derajat berdasarkan arah/direction
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration, // duration of one full rotation
        ease: "linear", // smooth rotation
        repeat: Infinity, // repeat infinitely
      },
    },
  };

  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};
export default RotatingShape;
