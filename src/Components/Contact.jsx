import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "React Developer Certification",
    issuer: "namastedev.com",
    date: "Aug 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    link: "https://namastedev.com/syednaveeth709/certificates/namaste-react",
  },
  {
    title: "Java Full Stack Developer Course",
    issuer: "Qspiders  Software Training Institution",
    date: "Jun 2024",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    link: "https://freecodecamp.org/certification/XXXXXX",
  },
  {
    title: "JavaScript Essentials",
    issuer: "namastedev.com",
    date: "May 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    link: "#",
  },
];

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black overflow-hidden">
      {/* soft glow background waves */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full -top-40 left-1/3 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/30 blur-[130px] rounded-full top-1/2 left-1/2 animate-ping"></div>
      </div>

      {/* animated heading */}
      <motion.h1
        className="relative pl-5  text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] pt-24"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="relative inline-block">
          My Certification
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-[shine_3s_linear_infinite]" />
        </span>
      </motion.h1>

      {/* certification cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6 pt-15 pb-20">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transform hover:-translate-y-2 transition-all duration-500"
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <img src={cert.img} alt={cert.title} className="w-16 h-16" />
              <h2 className="text-2xl font-bold text-white">{cert.title}</h2>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* extra floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
            animate={{
              y: [0, -15],
              opacity: [0.2, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* shine animation keyframes */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
