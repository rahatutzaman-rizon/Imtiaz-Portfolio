import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaEthereum, FaAws, FaDocker, FaGlobe } from 'react-icons/fa';
import { SiJavascript, SiPython, SiTypescript, SiPhp, SiCplusplus, SiSolidity, SiGit, SiVisualstudiocode, SiJira, SiFigma, SiPostman } from 'react-icons/si';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const languages = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, proficiency: 90 },
    { name: 'Python', icon: <SiPython className="text-blue-500" />, proficiency: 85 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, proficiency: 80 },
    { name: 'PHP', icon: <SiPhp className="text-purple-500" />, proficiency: 75 },
    { name: 'C/C++', icon: <SiCplusplus className="text-blue-300" />, proficiency: 65 },
    { name: 'Solidity', icon: <SiSolidity className="text-gray-400" />, proficiency: 60 },
  ];

  const frameworkCategories = [
    { name: 'Frontend', icon: <FaCode className="text-green-400" />, frameworks: ['ReactJs', 'VueJs'] },
    { name: 'Backend', icon: <FaServer className="text-red-400" />, frameworks: ['Laravel', 'Express.js'] },
    { name: 'Mobile', icon: <FaMobileAlt className="text-blue-400" />, frameworks: ['Native Android', 'Flutter'] },
    { name: 'Blockchain', icon: <FaEthereum className="text-purple-400" />, frameworks: ['Web3.js', 'Truffle'] },
    { name: 'DevOps', icon: <FaAws className="text-orange-400" />, frameworks: ['AWS', 'Docker'] },
  ];

  const languageProficiencies = [
    { language: 'English', proficiency: 'Fluent', icon: <FaGlobe className="text-blue-500" /> },
    { language: 'German', proficiency: 'Intermediate', icon: <FaGlobe className="text-red-500" /> },
    { language: 'Spanish', proficiency: 'Basic', icon: <FaGlobe className="text-yellow-500" /> },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Adaptability',
    'Time management',
  ];

  const toolkitExperiences = [
    { name: 'Git', proficiency: 90, icon: <SiGit className="text-orange-500" /> },
    { name: 'VS Code', proficiency: 95, icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: 'Jira', proficiency: 85, icon: <SiJira className="text-blue-400" /> },
    { name: 'Figma', proficiency: 80, icon: <SiFigma className="text-purple-400" /> },
    { name: 'Postman', proficiency: 75, icon: <SiPostman className="text-orange-400" /> },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Skills
        </motion.h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Languages', 'Frameworks', 'Language Proficiency', 'Soft Skills', 'Toolkit'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 shadow'
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
            className="bg-gray-800 shadow-xl rounded-2xl p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selectedCategory === 'Languages' && (
              <>
                <h2 className="text-3xl font-bold mb-8 text-gray-200">Programming Languages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {languages.map((lang) => (
                    <motion.div key={lang.name} className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{lang.icon}</div>
                        <div className="text-xl font-semibold text-gray-200">{lang.name}</div>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-3">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="mt-2 text-right text-gray-300 font-medium">{lang.proficiency}%</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Frameworks' && (
              <>
                <h2 className="text-3xl font-bold mb-8 text-gray-200">Frameworks & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {frameworkCategories.map((category) => (
                    <motion.div key={category.name} className="bg-gray-700 p-6 rounded-xl shadow-md" variants={itemVariants}>
                      <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-200">
                        <span className="text-3xl mr-3">{category.icon}</span>
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.frameworks.map((framework) => (
                          <li key={framework} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
                <h2 className="text-3xl font-bold mb-8 text-gray-200">Language Proficiency</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {languageProficiencies.map((lang) => (
                    <motion.div key={lang.language} className="bg-gray-700 p-6 rounded-xl shadow-md" variants={itemVariants}>
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{lang.icon}</span>
                        <div className="text-2xl font-semibold text-gray-200">{lang.language}</div>
                      </div>
                      <div className="text-lg text-blue-400 font-medium">{lang.proficiency}</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedCategory === 'Soft Skills' && (
              <>
                <h2 className="text-3xl font-bold mb-8 text-gray-200">Soft Skills</h2>
                <div className="flex flex-wrap gap-4">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
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
                <h2 className="text-3xl font-bold mb-8 text-gray-200">Toolkit Experience</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {toolkitExperiences.map((tool) => (
                    <motion.div key={tool.name} className="bg-gray-700 p-6 rounded-xl shadow-md" variants={itemVariants}>
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{tool.icon}</span>
                        <div className="text-xl font-semibold text-gray-200">{tool.name}</div>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-3">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="mt-2 text-right text-gray-300 font-medium">{tool.proficiency}%</div>
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