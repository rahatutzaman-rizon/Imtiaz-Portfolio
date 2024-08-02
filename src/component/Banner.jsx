import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { Link } from "react-scroll";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      controls.start({ y: latest / 2 });
    });
  }, [controls, scrollY]);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/yourusername/", label: "LinkedIn" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl sm:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Sayem Hossen
          </motion.h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-300">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Apps Developer',
                2000,
                'Tech Enthusiast',
                2000,
                'Product Manager',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that combine cutting-edge technology with intuitive design. Let's bring your ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="mr-2" /> Download CV
            </motion.a>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500 hover:text-white"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="contact" smooth={true} duration={500}>
                Let's Connect
              </Link>
            </motion.button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
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
            <FaArrowDown className="text-3xl text-purple-500 cursor-pointer" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={controls}
      />
    </div>
  );
};

export default Banner;
