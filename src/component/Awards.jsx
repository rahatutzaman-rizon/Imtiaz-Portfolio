import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import { FaAndroid, FaReact, FaProjectDiagram, FaAward, FaTrophy, FaMedal } from 'react-icons/fa';
import { SiFlutter, SiLeetcode, SiHackerrank, SiCodeforces } from 'react-icons/si';

import achievementAnimation from './achieve.json';

const AwardsAndAchievements = () => {
  const careerPath = [
    { company: 'Authentic Four Technology', period: '2019 - 2021', role: 'Junior Android Developer', icon: <FaAndroid className="text-green-500" /> },
    { company: 'Authentic Four Technology', period: '2021 - 2022', role: 'Flutter cum Android Developer', icon: <SiFlutter className="text-blue-400" /> },
    { company: 'Authentic Four Technology', period: '2022 - 2023', role: 'Full Stack Developer', icon: <FaReact className="text-blue-500" /> },
    { company: 'Z8-Tech', period: '2023 - Present', role: 'Product Manager', icon: <FaProjectDiagram className="text-purple-500" /> },
  ];

  const achievements = [
    { text: 'Led development of 5 successful mobile applications', icon: <FaAward className="text-yellow-400" /> },
    { text: 'Increased app performance by 40% through optimizations', icon: <FaTrophy className="text-yellow-500" /> },
    { text: 'Received "Employee of the Year" award in 2022', icon: <FaMedal className="text-yellow-600" /> },
    { text: 'Successfully migrated legacy systems to modern tech stack', icon: <FaAward className="text-yellow-400" /> },
    { text: 'Implemented CI/CD pipeline, reducing deployment time by 60%', icon: <FaTrophy className="text-yellow-500" /> },
  ];

  const problemSolving = [
    { platform: 'LeetCode', solved: 500, icon: <SiLeetcode className="text-yellow-500" /> },
    { platform: 'HackerRank', solved: 300, icon: <SiHackerrank className="text-green-500" /> },
    { platform: 'Codeforces', solved: 200, icon: <SiCodeforces className="text-blue-500" /> },
  ];

  const awards = [
    'Best Mobile App Award 2021',
    'Innovator of the Year 2022',
    'Top Performer in Hackathon 2023',
    'Outstanding Leadership Award 2024',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-sky-900 to-sky-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className=" mt-12 text-4xl md:text-5xl font-extrabold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Awards & Achievements
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-3 text-sky-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Career Path
            </motion.h2>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {careerPath.map((job, index) => (
                <motion.div key={index} className="mb-3 bg-sky-950 rounded-lg p-3 shadow-lg" variants={itemVariants}>
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{job.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-sky-300">{job.company}</p>
                      <p className="text-xs text-sky-400">{job.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <Lottie
              loop
              animationData={achievementAnimation}
              play
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
          </div>
        </div>

        <motion.div
          className="bg-sky-950 rounded-lg p-4 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-sky-200">Key Achievements</h2>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center text-sky-100">
                <span className="mr-2">{achievement.icon}</span>
                {achievement.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-sky-950 rounded-lg p-4 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-sky-200">Problem Solving</h2>
          <div className="grid grid-cols-3 gap-4">
            {problemSolving.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2 flex justify-center">{platform.icon}</div>
                <p className="text-lg font-semibold text-white">{platform.platform}</p>
                <p className="text-sky-300">{platform.solved} problems solved</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-sky-950 rounded-lg p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-sky-200">Awards</h2>
          <div className="grid grid-cols-2 gap-2">
            {awards.map((award, index) => (
              <div key={index} className="bg-sky-800 text-white px-3 py-2 rounded-lg text-sm">
                {award}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsAndAchievements;