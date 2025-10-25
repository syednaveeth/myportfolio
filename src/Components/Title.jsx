import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import ScrollDownIndicator from "./ScrollDownIndicator";
import LiquidEther from "./LiquidEther";

const Title = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div>
        <motion.div
          className=" min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white px-4"
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Slide up
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Name */}
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hi, I’m <span className="text-blue-500">Syed Naveeth</span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.h2
            className="text-2xl sm:text-3xl text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typewriter
              words={[
                "A Passionate Web Developer 💻",
                "Frontend Developer | React.js ⚛️",
                "Crafting Beautiful UI with TailwindCSS 🎨",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-400 mt-6 max-w-xl text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            I love building clean, interactive, and user-friendly web
            applications using React.js, Redux, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <Link
              to="/project"
              className="bg-blue-600 relative hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition-colors duration-300"
            >
              View My Work
            </Link>
            <a
              href="mailto:syednaveeth709@gmail.com"
              className="border relative border-blue-500 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
          <ScrollDownIndicator />
        </motion.div>
      </div>
    </div>
  );
};

export default Title;
