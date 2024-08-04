import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { Link } from "react-scroll";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/yourusername/", label: "LinkedIn" },
    { icon: FaEnvelope, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020c1b] text-white">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.07), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 z-10 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(10)].map((_, index) => (
            <motion.line
              key={index}
              x1="0"
              y1={index * 10}
              x2="100"
              y2={index * 10}
              stroke="rgba(29, 78, 216, 0.2)"
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20 sm:py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Sayem Hossen
          </motion.h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-blue-200">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Apps Developer',
                2000,
                'Tech Innovator',
                2000,
                'Product Manager',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <p className="text-lg sm:text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Crafting cutting-edge digital solutions with a focus on intuitive design and innovative technology. Let's transform your vision into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
            <motion.button
              className="px-8 py-3 bg-transparent border border-blue-400 text-blue-400 font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 hover:text-[#020c1b]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(96, 165, 250, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="contact" smooth={true} duration={500}>
                Let's Connect
              </Link>
            </motion.button>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl text-blue-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500}>
            <FaChevronDown className="text-3xl text-blue-300 cursor-pointer hover:text-white transition-colors duration-300" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(30)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;