import  { useState, useEffect } from 'react';
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
    languages: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'C/C++', 'Solidity','Swift','Dart'],
    frameworks: ['Native Android', 'Flutter', 'Laravel', 'ReactJs', 'VueJs'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure'],
  };

  const socialIcons = [
    { Icon: FaGithub, href: "#" },
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaFacebook, href: "#" },
    { Icon: FaCodepen, href: "#" },
    { Icon: FaTwitter, href: "#" }
  ];

  const codeLines = [
    'class FullStackDeveloper:',
    '    def __init__(self):',
    '        self.name = "Sayem Hossain"',
    '        self.skills = {',
    '            "languages": ["Python", "JS", "TS", "PHP", "Java", "C++"],',
    '            "frameworks": ["React", "Vue", "Laravel", "Flutter"],',
    '            "databases": ["MySQL", "MongoDB", "PostgreSQL"],',
    '            "tools": ["Git", "Docker", "K8s", "AWS", "Azure"]',
    '        }',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 2 + 0.5}vw`,
              height: `${Math.random() * 2 + 0.5}vw`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              opacity: [0.1, 0.2, 0.2, 0.1, 0.1],
              borderRadius: ["50%", "50%", "20%", "50%", "50%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-5xl mx-auto">
          {/* Left side: Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Hello,</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{coder.name}</span>
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              <TypeAnimation
                sequence={[
                  coder.title,
                  1500,
                  'Full Stack Developer',
                  1500,
                  'UI/UX Enthusiast',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-teal-400"
              />
            </h3>
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, color: "#F3A5B1" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl hover:text-pink-400 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              {['CONTACT ME', 'GET RESUME'].map((text, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`${
                    index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' : 'bg-gradient-to-r from-pink-500 to-purple-500'
                  } text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right side: Skills and Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-70 rounded-2xl p-4 backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700 hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-left text-teal-300 mb-3">
              {Object.entries(coder).slice(2).map(([key, value]) => (
                <div key={key}>
                  <p className="font-bold text-pink-400 mb-0.5">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                  <p className="text-gray-300 text-opacity-80">{Array.isArray(value) ? value.join(', ') : value}</p>
                </div>
              ))}
            </div>
            <div className="text-xs font-mono space-y-0.5 bg-gray-900 p-2 rounded-lg overflow-hidden" style={{ height: '180px' }}>
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="text-gray-300"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;