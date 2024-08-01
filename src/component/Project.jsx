import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaCalendarAlt, FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiPython, SiPhp,  SiCplusplus, SiSolidity, SiFlutter, SiLaravel, SiVuedotjs, SiAndroid } from 'react-icons/si';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-300' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-purple-400' },
   
    { name: 'C/C++', icon: <SiCplusplus />, color: 'text-blue-500' },
    { name: 'Solidity', icon: <SiSolidity />, color: 'text-gray-400' },
    { name: 'Android', icon: <SiAndroid />, color: 'text-green-500' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'text-cyan-400' },
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
    { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
  ];

  const experience = [
    {
      company: 'Z8-Tech',
      role: 'Product Manager',
      period: '2023 - Present',
      description: 'Leading product development, defining product strategy, and coordinating between development teams and stakeholders.'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Full Stack Developer',
      period: '2022 - 2023',
      description: 'Developed end-to-end web solutions using MERN stack, implemented RESTful APIs, and optimized application performance.'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Flutter cum Android Developer',
      period: '2021 - 2022',
      description: 'Created cross-platform mobile applications using Flutter and maintained existing Android applications.'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Junior Android Developer',
      period: '2019 - 2021',
      description: 'Developed Android applications, fixed bugs, and implemented new features in existing apps.'
    }
  ];

  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      name: 'Task Management App',
      description: 'A Flutter-based mobile app for task management with real-time synchronization.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      link: 'https://github.com/yourusername/task-management-app'
    },
    {
      name: 'Blockchain Voting System',
      description: 'A decentralized voting system built on Ethereum using Solidity smart contracts.',
      technologies: ['Solidity', 'Web3.js', 'React'],
      link: 'https://github.com/yourusername/blockchain-voting'
    }
  ];

  const achievements = [
    "Led the development of a product that increased company revenue by 25%",
    "Reduced app crash rate by 80% through robust error handling and testing",
    "Awarded 'Best Mobile App' at regional tech conference for innovative UI/UX design",
    "Contributed to open-source projects with over 1000+ stars on GitHub"
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-5xl font-bold mb-8 text-center" variants={itemVariants}>
        Product Manager & Full-Stack Developer
      </motion.h1>

      <motion.div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" variants={itemVariants}>
        <div className="flex justify-center mb-8">
        <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'projects' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Projects
          </button>
         
          <button 
            onClick={() => setActiveTab('experience')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'experience' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Experience
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'skills' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Skills
          </button>
        
          <button 
            onClick={() => setActiveTab('achievements')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'achievements' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Achievements
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'experience' && (
              <div className="grid gap-6">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-6 rounded-lg"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{job.role}</h3>
                    <p className="text-lg mb-2">{job.company}</p>
                    <div className="flex items-center text-sm text-gray-300 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      {job.period}
                    </div>
                    <p className="text-sm">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <span className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</span>
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-6 rounded-lg"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{project.name}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-500 text-xs px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      View Project <FaGithub className="inline" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-4 rounded-lg flex items-center"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <FaTrophy className="text-yellow-400 mr-4 text-2xl flex-shrink-0" />
                    <p>{achievement}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <FaGithub />, link: 'https://github.com/yourusername' },
              { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/yourprofile' },
              { icon: <FaEnvelope />, link: 'mailto:your.email@example.com' },
              { icon: <FaPhone />, link: 'tel:+1234567890' },
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;