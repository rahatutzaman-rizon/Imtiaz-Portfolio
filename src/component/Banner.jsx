import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaCodepen, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coder = {
    name: 'Sayem Hossain',
    title: 'Professional Software Developer',
    languages: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'C/C++', 'Solidity'],
    frameworks: ['Native Android', 'Flutter', 'Laravel', 'ReactJs', 'VueJs'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return this.hardWorker && this.problemSolver && (this.languages.length + this.frameworks.length >= 10);
    }
  };

  const socialIcons = [
    { Icon: FaGithub, href: "#" },
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaFacebook, href: "#" },
    { Icon: FaCodepen, href: "#" },
    { Icon: FaTwitter, href: "#" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-blue-500 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-600 rounded-full opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              opacity: [0.1, 0.2, 0.4, 0.2, 0.1],
              borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-7xl mx-auto">
          {/* Left side: Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Hello,
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{coder.name}</span>
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  coder.title,
                  2000,
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-teal-400"
              />
            </h3>
            <div className="flex space-x-5">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, color: "#F3A5B1" }}
                  className="text-2xl hover:text-pink-400 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              {['CONTACT ME', 'GET RESUME'].map((text, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' : 'bg-gradient-to-r from-pink-500 to-purple-500'
                  } text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg`}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right side: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-70 rounded-2xl p-6 backdrop-filter backdrop-blur-lg shadow-2xl border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="text-sm sm:text-base text-left text-teal-300">
              <p><strong>Languages:</strong> {coder.languages.join(', ')}</p>
              <p><strong>Frameworks:</strong> {coder.frameworks.join(', ')}</p>
              <p><strong>Hard Worker:</strong> {coder.hardWorker ? 'Yes' : 'No'}</p>
              <p><strong>Quick Learner:</strong> {coder.quickLearner ? 'Yes' : 'No'}</p>
              <p><strong>Problem Solver:</strong> {coder.problemSolver ? 'Yes' : 'No'}</p>
              <p><strong>Hireable:</strong> {coder.hireable() ? 'Yes' : 'No'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
