import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode, FaDatabase, FaMobileAlt, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import animationData from '../component/about.json'; // Ensure you have the correct path to your Lottie JSON file

const InfoItem = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex items-start mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Icon className="text-blue-400 text-2xl mr-3 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-blue-300 mb-1">{title}</h3>
      <p className="text-gray-300 leading-snug">{description}</p>
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
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className=" mx-12 flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold mb-4 text-blue-300 leading-tight">
              About Me
            </h1>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Full Stack Developer turned Product Manager, bridging innovation and implementation in tech.
            </p>
            
            <motion.div className="space-y-5" variants={containerVariants}>
              <InfoItem 
                icon={FaCode}
                title="Full Stack Development"
                description="Proficient in Python, JavaScript, TypeScript, PHP, Java, and C/C++."
              />
              <InfoItem 
                icon={FaDatabase}
                title="Backend & Databases"
                description="Experienced with Node.js, Express.js, MySQL, and MongoDB."
              />
              <InfoItem 
                icon={FaMobileAlt}
                title="Mobile Development"
                description="Skilled in Native Android and Flutter."
              />
              <InfoItem 
                icon={FaProjectDiagram}
                title="Product Management"
                description="Leading product development at Z8-Tech."
              />
              <InfoItem 
                icon={FaUserTie}
                title="Leadership & Communication"
                description="Strong leadership and communication skills."
              />
            </motion.div>

            <motion.div 
              className="flex items-center space-x-5 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/sayem-hossen"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sayem-hossen/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </motion.a>
              <motion.a
                href="mailto:sayemhossen874@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </motion.a>
              <motion.a
                href="tel:+8801886441152"
                whileHover={{ scale: 1.1 }}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaMobileAlt size={24} />
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
