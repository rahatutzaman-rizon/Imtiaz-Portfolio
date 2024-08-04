import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUserCheck, FaAward, FaProjectDiagram, FaClock, FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Count = () => {
  const stats = [
    { 
      label: 'Projects Completed', 
      value: 50, 
      icon: FaProjectDiagram,
      description: 'Successfully delivered projects across various industries',
      detail: 'Including web applications, mobile apps, and enterprise solutions'
    },
    { 
      label: 'Satisfied Clients', 
      value: 30, 
      icon: FaUserCheck,
      description: 'Happy clients from startups to Fortune 500 companies',
      detail: '95% client retention rate'
    },
    { 
      label: 'Awards Won', 
      value: 10, 
      icon: FaAward,
      description: 'Recognized for innovation and excellence',
      detail: 'Including Best Web Developer 2023'
    },
    { 
      label: 'Technologies Mastered', 
      value: 15, 
      icon: FaCode,
      description: 'Proficient in a wide range of programming languages and frameworks',
      detail: 'Including React, Node.js, Python, and more'
    },
    { 
      label: 'Years of Experience', 
      value: 8, 
      icon: FaClock,
      description: 'Deep industry knowledge and expertise',
      detail: 'Continuously learning and adapting to new technologies'
    },
    { 
      label: 'Average Client Rating', 
      value: 4.9, 
      icon: FaStar,
      description: 'Consistently high client satisfaction',
      detail: 'Based on post-project surveys',
      isDecimal: true
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sayem's Professional Achievements
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A track record of success, innovation, and client satisfaction across various projects and technologies.
        </motion.p>
        <StatsGrid stats={stats} />
      </div>
    </div>
  );
};

const StatsGrid = ({ stats }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} stat={stat} inView={inView} index={index} />
      ))}
    </div>
  );
};

const AnimatedStat = ({ stat, inView, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(stat.value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(stat.isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value, stat.isDecimal]);

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center justify-center mb-4">
        <stat.icon className="text-blue-400 text-4xl" />
      </div>
      <motion.div
        className="text-5xl font-bold mb-2 text-center"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 100 }}
      >
        {stat.isDecimal ? count.toFixed(1) : count}{stat.isDecimal ? '' : '+'}
      </motion.div>
      <div className="text-lg font-semibold text-blue-300 text-center mb-3">{stat.label}</div>
      <p className="text-gray-300 text-center mb-2">{stat.description}</p>
      <p className="text-sm text-gray-400 text-center italic">{stat.detail}</p>
    </motion.div>
  );
};

export default Count;