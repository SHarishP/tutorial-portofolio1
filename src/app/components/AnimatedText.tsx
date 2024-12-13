"use client";
// 15.2 Code AnimatedText.tsx
import { motion } from "motion/react";

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] },
  }),
};

const getLetter = (name: string) => {
  let letters: any[] = [];
  name.split("").forEach((letter, index) => {
    return letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, name.length - index * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

interface IProp {
  text: string;
  textStyles: string;
}

const AnimatedText = ({ text, textStyles }: IProp) => {
  return <div className={`${textStyles}`}>{getLetter(text)}</div>;
};

export default AnimatedText;
