import React from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { SkillBars } from "./SkillBars";
import BackgroundBubbles from "./BackgroundBubbles";

const Aboutme = () => {
  const listItems = [
    <>
      I’m <strong>Syed Naveeth</strong>, a dedicated{" "}
      <strong>Frontend Developer</strong> who builds fast, responsive, and
      visually engaging web applications. My expertise lies in{" "}
      <strong>React.js</strong>, <strong>JavaScript</strong>, and{" "}
      <strong>TailwindCSS</strong>, and I take pride in transforming complex
      ideas into clean, user-focused digital experiences.
    </>,
    <>
      During my internship at <strong>Higgsora Labs Pvt Ltd</strong>, I gained
      hands-on experience in UI optimization, API integration, and performance
      enhancement.
    </>,
    <>
      I hold a <strong>Master of Computer Applications (MCA)</strong> degree
      from <strong>SASTRA Deemed University</strong>, where I strengthened my
      foundation in software development and web technologies.
    </>,
    <>
      My approach focuses on <strong>clean code</strong>,{" "}
      <strong>performance</strong>, and <strong>accessibility</strong>, ensuring
      every interface performs seamlessly across devices.
    </>,
  ];

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative text-black px-10 py-10 overflow-hidden ">
      <div className="absolute inset-1 -z-40">
        <BackgroundBubbles />
      </div>
      <BlurText
        text="About Me"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-7xl justify-center font-bold mb-15 mt-10"
      />

      <div className="lg:mx-10">
        {/* LEFT CARD — slides from left */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border lg:rounded-3xl p-4 mb-10 border-none shadow-2xl"
        >
          <ul>
            {listItems.map((item, i) => (
              <li className="pb-6" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT CARD — slides from right */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-auto"
        >
          <SkillBars />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
