import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode, FaDatabase, FaMobileAlt, FaProjectDiagram, FaUserTie, FaGraduationCap } from 'react-icons/fa';

const InfoItem = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex items-start mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-purple-400 text-2xl mr-4 mt-1" />
    <div>
      <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-2 sm:px-6 lg:px-6 flex items-center justify-center">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-2xl"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold mb-6 text-center text-purple-300">
            Sayem Hossen
          </h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            As a Full Stack Developer turned Product Manager, I bring a unique blend of technical expertise and strategic vision to the tech industry. My journey in software development, coupled with my current role in product management, allows me to bridge the gap between innovative ideas and their practical implementation.
          </p>
          
          <motion.div className="space-y-6" variants={containerVariants}>
            <InfoItem 
              icon={FaCode}
              title="Full Stack Development"
              description="Proficient in Python, JavaScript, TypeScript, PHP, Java, and C/C++. Experienced with React, Vue.js, Flutter, and Laravel frameworks."
            />
            <InfoItem 
              icon={FaDatabase}
              title="Backend & Databases"
              description="Skilled in Node.js, Express.js, and working with both SQL and NoSQL databases like MySQL and MongoDB."
            />
            <InfoItem 
              icon={FaMobileAlt}
              title="Mobile Development"
              description="Experienced in Native Android and Flutter for cross-platform mobile app development."
            />
            <InfoItem 
              icon={FaProjectDiagram}
              title="Product Management"
              description="Currently leading product development initiatives at Z8-Tech, coordinating cross-functional teams, and ensuring successful product launches."
            />
            <InfoItem 
              icon={FaUserTie}
              title="Leadership & Communication"
              description="Strong leadership skills with the ability to communicate complex technical concepts to diverse stakeholders."
            />
            
          </motion.div>

          <motion.div 
            className="flex flex-col items-center space-y-4 mt-8 sm:flex-row sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/sayem-hossen"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-purple-300 hover:text-purple-400"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sayem-hossen/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-purple-300 hover:text-purple-400"
            >
              <FaLinkedinIn size={24} />
            </motion.a>
            <motion.a
              href="mailto:sayemhossen874@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-purple-300 hover:text-purple-400"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              href="tel:+8801886441152"
              whileHover={{ scale: 1.1 }}
              className="text-purple-300 hover:text-purple-400"
            >
              <FaMobileAlt size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
