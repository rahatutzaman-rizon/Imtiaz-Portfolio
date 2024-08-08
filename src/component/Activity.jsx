import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import {
  FaLeaf,
  FaFish,
  FaPlane,
  FaBiking,
  FaBook,
  FaGuitar,
  FaChess,
  FaCameraRetro,
  FaFootballBall,
  FaUserFriends,
  FaHandHoldingHeart,
  FaTrafficLight,
  FaUsersCog
} from 'react-icons/fa';

import hobbiesAnimation from './activity.json';

const ExtraActivitiesAndHobbies = () => {
  const extracurricularActivities = [
    { name: 'Football', icon: FaFootballBall, description: 'Passionate player and member of a local football club' },
    { name: 'Volunteering', icon: FaUserFriends, description: 'Actively volunteers at local charities and community centers' },
    { name: 'Social Work', icon: FaHandHoldingHeart, description: 'Organizes and participates in initiatives to help the underprivileged' },
    { name: 'Traffic Control', icon: FaTrafficLight, description: 'Volunteers to assist with traffic management during local events' },
    { name: 'Coding', icon: FaUsersCog, description: 'Enjoys building personal projects and contributing to open-source' }
  ];

  const hobbies = [
    { name: 'Gardening', icon: FaLeaf, description: 'Cultivating a variety of plants and designing landscapes' },
    { name: 'Fishing', icon: FaFish, description: 'Weekend fishing trips to local lakes and rivers' },
    { name: 'Travelling', icon: FaPlane, description: 'Exploring new cultures and destinations around the world' },
    { name: 'Cycling', icon: FaBiking, description: 'Regular cycling tours and participation in local races' },
    { name: 'Reading', icon: FaBook, description: 'Avid reader of science fiction and historical novels' },
    { name: 'Playing Guitar', icon: FaGuitar, description: 'Self-taught guitarist, enjoys playing acoustic melodies' },
    { name: 'Chess', icon: FaChess, description: 'Participates in local chess tournaments and online matches' },
    { name: 'Photography', icon: FaCameraRetro, description: 'Capturing landscapes and street life during travels' }
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hobbiesAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-800 to-sky-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Extracurricular Activities & Hobbies
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <motion.div
            className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 md:mb-0 md:mr-8 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold mb-4">My Passions</h2>
            <p className="text-base">
              Engaging in diverse activities outside of work helps me maintain a balanced life, fosters creativity, and
              contributes to my overall well-being and professional growth. These hobbies and extracurricular pursuits
              shape who I am and bring unique perspectives to my work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Lottie options={defaultOptions} height={300} width={300} />
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extracurricularActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
              className="bg-white bg-opacity-10 rounded-lg p-6 flex flex-col items-center backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 16px rgba(255,255,255,0.5)' }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <activity.icon />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
              <p className="text-base text-center text-gray-300">{activity.description}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-16">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              className="bg-white bg-opacity-10 rounded-lg p-6 flex flex-col items-center backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 16px rgba(255,255,255,0.5)' }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <hobby.icon />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{hobby.name}</h3>
              <p className="text-base text-center text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraActivitiesAndHobbies;