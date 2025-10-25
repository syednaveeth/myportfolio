import React from "react";
import { motion } from "framer-motion";

const generateBubbles = (count) => {
  const bubbles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 60 + 60; // slightly larger bubbles
    const left = Math.random() * 100; // random x position
    const delay = Math.random() * 10;
    const duration = Math.random() * 15 + 20;
    const colors = [
      "rgba(59,130,246,0.6)", // blue
      "rgba(147,197,253,0.4)", // light blue
      "rgba(255,255,255,0.4)", // white
      "rgba(0,0,0,0.25)", // subtle black tone for depth
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    bubbles.push(
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-screen backdrop-blur-md shadow-lg"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          background: color,
          bottom: `-${size}px`,
          boxShadow: `0 0 ${size / 2}px ${color}`,
        }}
        animate={{
          y: [-50, -900],
          x: [0, Math.random() * 60 - 30],
          scale: [1, 1.1, 1],
          rotate: [0, 360],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }
  return bubbles;
};

const BackgroundBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-gradient-to-b from-white via-blue-50 ">
      {generateBubbles(20)}
    </div>
  );
};

export default BackgroundBubbles;
