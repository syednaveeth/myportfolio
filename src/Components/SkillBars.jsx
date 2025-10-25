import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", percent: 95, colors: ["#0000ff", "#007ACC"] }, // light blue → deep blue
  { name: "JavaScript", percent: 90, colors: ["#F7E018", "#FF8C00"] }, // yellow → orange
  { name: "TailwindCSS", percent: 94, colors: ["#38BDF8", "#0EA5E9"] }, // sky blue → ocean blue
  { name: "Redux", percent: 88, colors: ["#764ABC", "#A855F7"] }, // purple → violet
  { name: "HTML", percent: 88, colors: ["#F16529", "#E34C26"] }, // orange → dark orange
  { name: "CSS", percent: 88, colors: ["#800080", "#dda0dd"] }, // blue → dark indigo
  { name: "Git & GitHub", percent: 90, colors: ["#F1502F", "#C53030"] }, // bright red → dark red
];

export function SkillBars() {
  return (
    <div className="border lg:rounded-3xl p-4 border-none shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Technical Skills
      </h2>

      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <div className="flex justify-between text-sm font-semibold text-gray-700 p-2">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-3 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.colors[0]}, ${skill.colors[1]})`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.percent}%` }}
              transition={{ duration: 2, delay: i * 0.2 }}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
