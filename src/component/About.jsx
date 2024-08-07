import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode, FaDatabase, FaMobileAlt, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import animationData from '../component/about.json'; // Ensure you have the correct path to your Lottie JSON file

const InfoItem = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex items-start mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Icon className="text-blue-400 text-3xl mr-4 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
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

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-5xl font-bold mb-6 text-blue-300 leading-tight">
              About Me
            </h1>
            <p className="text-gray-300 mb-8 text-xl leading-relaxed">
              Full Stack Developer turned Product Manager, bridging innovation and implementation in the tech industry.
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
              className="flex items-center space-x-6 mt-12"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/sayem-hossen"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sayem-hossen/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedinIn size={28} />
              </motion.a>
              <motion.a
                href="mailto:sayemhossen874@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope size={28} />
              </motion.a>
              <motion.a
                href="tel:+8801886441152"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaMobileAlt size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-full max-w-md">
              <Lottie options={defaultOptions} height="100%" width="100%" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
