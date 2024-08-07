import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaEthereum, FaAws, FaDocker, FaGlobe, FaDigitalOcean } from 'react-icons/fa';
import { SiJavascript, SiPython, SiTypescript, SiPhp, SiCplusplus, SiSolidity, SiGit, SiVisualstudiocode, SiJira, SiFigma, SiPostman, SiDart, SiSwift } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const languages = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, proficiency: 90, description: 'Versatile language for web development' },
    { name: 'Python', icon: <SiPython className="text-blue-500" />, proficiency: 85, description: 'Great for scripting and data science' },
    { name: 'Java', icon: <FaJava className="text-red-500" />, proficiency: 80, description: 'Widely used in enterprise applications' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, proficiency: 80, description: 'JavaScript with static types' },
    { name: 'PHP', icon: <SiPhp className="text-purple-500" />, proficiency: 75, description: 'Popular for server-side development' },
    { name: 'C/C++', icon: <SiCplusplus className="text-blue-300" />, proficiency: 65, description: 'High-performance systems programming' },
    { name: 'Dart', icon: <SiDart className="text-cyan-400" />, proficiency: 70, description: 'Optimized for UI development' },
    { name: 'Swift', icon: <SiSwift className="text-orange-500" />, proficiency: 60, description: 'Primary language for iOS development' },
    { name: 'Solidity', icon: <SiSolidity className="text-gray-400" />, proficiency: 60, description: 'Smart contract programming language' },
  ];

  const frameworkCategories = [
    { name: 'Frontend', icon: <FaCode className="text-blue-400" />, frameworks: ['ReactJs', 'VueJs', 'Angular'], description: 'Building interactive web interfaces' },
    { name: 'Backend', icon: <FaServer className="text-red-400" />, frameworks: ['Laravel', 'Express.js', 'Spring Boot'], description: 'Server-side development and APIs' },
    { name: 'Mobile', icon: <FaMobileAlt className="text-blue-400" />, frameworks: ['Native Android', 'Flutter', 'React Native'], description: 'Mobile application development' },
    { name: 'Blockchain', icon: <FaEthereum className="text-purple-400" />, frameworks: ['Web3.js', 'Truffle', 'Hardhat'], description: 'Decentralized applications and smart contracts' },
    { name: 'DevOps', icon: <FaAws className="text-orange-400" />, frameworks: ['AWS', 'Docker', 'Kubernetes'], description: 'Infrastructure and deployment automation' },
  ];

  const languageProficiencies = [
    { language: 'English', proficiency: 'Fluent', icon: <FaGlobe className="text-blue-400" /> },
    { language: 'Bengali', proficiency: 'Native', icon: <FaGlobe className="text-green-500" /> },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Adaptability',
    'Time management',
    'Leadership',
    'Team Management',
    'Critical Thinking',
    'Creativity',
  ];

  const toolkitExperiences = [
    { name: 'Git', proficiency: 90, icon: <SiGit className="text-orange-500" />, description: 'Version control system' },
    { name: 'VS Code', proficiency: 95, icon: <SiVisualstudiocode className="text-blue-500" />, description: 'Popular code editor' },
    { name: 'Jira', proficiency: 85, icon: <SiJira className="text-blue-400" />, description: 'Project management tool' },
    { name: 'Figma', proficiency: 80, icon: <SiFigma className="text-purple-400" />, description: 'Design and prototyping tool' },
    { name: 'Postman', proficiency: 75, icon: <SiPostman className="text-orange-400" />, description: 'API development tool' },
    { name: 'AWS', proficiency: 70, icon: <FaAws className="text-yellow-500" />, description: 'Cloud computing services' },
    { name: 'Docker', proficiency: 80, icon: <FaDocker className="text-blue-400" />, description: 'Containerization platform' },
    { name: 'DigitalOcean', proficiency: 75, icon: <FaDigitalOcean className="text-blue-500" />, description: 'Cloud infrastructure provider' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      } 
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-sky-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Skills Arsenal
        </motion.h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Languages', 'Frameworks', 'Language Proficiency', 'Soft Skills', 'Toolkit'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="bg-gray-800 shadow-xl rounded-3xl p-6 backdrop-blur-lg bg-opacity-90"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selectedCategory === 'Languages' && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Programming Languages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {languages.map((lang) => (
                    <motion.div key={lang.name} className="bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" variants={itemVariants}>
                      <div className="flex items-center mb-3">
                        <div className="text-3xl mr-3">{lang.icon}</div>
                        <div className="text-lg font-semibold text-gray-200">{lang.name}</div>
                      </div>
                      <p className="text-gray-400 mb-2">{lang.description}</p>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="mt-1 text-right text-gray-300 text-sm font-medium">{lang.proficiency}%</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Frameworks' && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Frameworks & Technologies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {frameworkCategories.map((category) => (
                    <motion.div key={category.name} className="bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-2 text-gray-200 flex items-center">
                        <span className="text-2xl mr-2">{category.icon}</span>
                        {category.name}
                      </h3>
                      <p className="text-gray-400 mb-2">{category.description}</p>
                      <ul className="space-y-1">
                        {category.frameworks.map((framework) => (
                          <li key={framework} className="flex items-center text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Language Proficiency' && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Language Proficiency</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {languageProficiencies.map((lang) => (
                    <motion.div key={lang.language} className="bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" variants={itemVariants}>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{lang.icon}</span>
                        <div className="text-lg font-semibold text-gray-200">{lang.language}</div>
                      </div>
                      <div className="text-base text-blue-400 font-medium">{lang.proficiency}</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Soft Skills' && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Soft Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Toolkit' && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Toolkit Experience</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {toolkitExperiences.map((tool) => (
                    <motion.div key={tool.name} className="bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" variants={itemVariants}>
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{tool.icon}</span>
                        <div className="text-lg font-semibold text-gray-200">{tool.name}</div>
                      </div>
                      <p className="text-gray-400 mb-2">{tool.description}</p>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="mt-1 text-right text-gray-300 text-sm font-medium">{tool.proficiency}%</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsPage;
