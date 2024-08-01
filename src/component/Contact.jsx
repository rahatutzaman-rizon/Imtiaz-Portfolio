
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiPython, SiPhp,  SiCplusplus, SiSolidity, SiFlutter, SiLaravel, SiVuedotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-300' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-purple-400' },
    
    { name: 'C/C++', icon: <SiCplusplus />, color: 'text-blue-500' },
    { name: 'Solidity', icon: <SiSolidity />, color: 'text-gray-400' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'text-cyan-400' },
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
  ];

  const experience = [
    {
      company: 'Z8-Tech',
      role: 'Product Manager',
      period: '2023 - Present',
      description: 'Leading product development and strategy'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Full Stack Developer',
      period: '2022 - 2023',
      description: 'Developed end-to-end web solutions'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Flutter cum Android Developer',
      period: '2021 - 2022',
      description: 'Created cross-platform mobile applications'
    },
    {
      company: 'Authentic Four Technology',
      role: 'Junior Android Developer',
      period: '2019 - 2021',
      description: 'Developed Android applications'
    }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen flex flex-col justify-center items-center p-8 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center"
        variants={itemVariants}
      >
        Comprehensive <span className="text-cyan-400">Development Solutions</span> for Your Vision
      </motion.h1>

      <motion.div className="w-full max-w-7xl bg-white/10 backdrop-blur-md rounded-lg p-10 shadow-2xl" variants={itemVariants}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-8">Professional Experience</h3>
            <motion.div className="space-y-6" variants={itemVariants}>
              {experience.map((job, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/20 p-6 rounded-lg"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                >
                  <h4 className="font-semibold text-xl mb-2 text-cyan-400">{job.role}</h4>
                  <p className="text-lg mb-2">{job.company}</p>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {job.period}
                  </div>
                  <p className="text-sm">{job.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-8">Technical Proficiency</h3>
            <motion.div className="grid grid-cols-3 gap-4 mb-10" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/20 p-3 rounded-lg flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                >
                  <span className={`text-3xl mb-2 ${skill.color}`}>{skill.icon}</span>
                  <span className="text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
            <motion.button 
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-bold py-4 px-6 rounded-lg mb-8 transition duration-300 text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Initiate a Project
            </motion.button>
            
            <motion.div className="flex justify-center space-x-8" variants={itemVariants}>
              {[
                { icon: <FaGithub />, link: 'https://github.com/rahatutzaman-rizon' },
                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/rahatutzaman-rizon-373529172/' },
                { icon: <FaEnvelope />, link: 'mailto:rizonrahat199@gmail.com' },
                { icon: <FaPhone />, link: 'tel:+8801771276400' },
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;