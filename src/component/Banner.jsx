import { useState, useEffect } from 'react';
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
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-600 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 5 + 1}vw`,
              height: `${Math.random() * 5 + 1}vw`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              opacity: [0.1, 0.2, 0.3, 0.2, 0.1],
              borderRadius: ["50%", "50%", "20%", "50%", "50%"],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-7xl mx-auto">
          {/* Left side: Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Hello,</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{coder.name}</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
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
            <div className="flex space-x-6">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, color: "#F3A5B1" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl hover:text-pink-400 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              {['CONTACT ME', 'GET RESUME'].map((text, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' : 'bg-gradient-to-r from-pink-500 to-purple-500'
                  } text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right side: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-70 rounded-3xl p-8 backdrop-filter backdrop-blur-lg shadow-2xl border border-gray-700 hover:shadow-blue-500/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="text-base sm:text-lg text-left text-teal-300 space-y-4">
              <p><strong className="text-pink-400">Languages:</strong> {coder.languages.join(', ')}</p>
              <p><strong className="text-pink-400">Frameworks:</strong> {coder.frameworks.join(', ')}</p>
              <p><strong className="text-pink-400">Hard Worker:</strong> {coder.hardWorker ? '✅' : '❌'}</p>
              <p><strong className="text-pink-400">Quick Learner:</strong> {coder.quickLearner ? '✅' : '❌'}</p>
              <p><strong className="text-pink-400">Problem Solver:</strong> {coder.problemSolver ? '✅' : '❌'}</p>
              <p><strong className="text-pink-400">Hireable:</strong> {coder.hireable() ? '✅' : '❌'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;