import React from "react";
import { motion } from "framer-motion";

const ScrollDownIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-white text-lg font-medium mb-2">Scroll Down</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block w-1.5 h-1.5 bg-blue-500 rounded-full"
        ></motion.span>
      </motion.div>
    </div>
  );
};

export default ScrollDownIndicator;
