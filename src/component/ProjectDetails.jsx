import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaArrowLeft, FaInfoCircle, FaClock, FaUsers, FaLightbulb, FaCogs, FaRocket } from 'react-icons/fa';

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://myportfolio-server.vercel.app/project2/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project details');
        }
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <FaInfoCircle className="text-5xl mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-2">Error Occurred</h2>
          <p>{error}</p>
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <FaInfoCircle className="text-5xl mb-4 text-yellow-500" />
          <h2 className="text-2xl font-bold">Project Not Found</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/project" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8 transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <motion.img 
              src={project.image_url} 
              alt={project.project_name} 
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <motion.div 
              className="absolute bottom-8 left-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.project_name}</h1>
              <p className="text-xl text-gray-300 max-w-3xl">{project.short_description}</p>
            </motion.div>
          </div>
          
          <div className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaRocket className="mr-4 text-blue-400" />
                Project Overview
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">{project.long_description}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaLightbulb className="mr-4 text-yellow-400" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start bg-sky-900 bg-opacity-20 rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  >
                    <FaInfoCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaCogs className="mr-4 text-gray-400" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.tech_stack.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-6 py-3 bg-sky-800 bg-opacity-30 text-white text-lg font-medium rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.4)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="bg-sky-900 bg-opacity-20 p-8 rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <FaCode className="text-blue-400 mr-4 text-3xl" />
                  <h3 className="text-2xl font-semibold">Frontend</h3>
                </div>
                <p className="text-gray-300 text-lg">{project.frontend_details}</p>
              </motion.div>
              <motion.div 
                className="bg-sky-900 bg-opacity-20 p-8 rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <FaServer className="text-green-400 mr-4 text-3xl" />
                  <h3 className="text-2xl font-semibold">Backend</h3>
                </div>
                <p className="text-gray-300 text-lg">{project.backend_details}</p>
              </motion.div>
              <motion.div 
                className="bg-sky-900 bg-opacity-20 p-8 rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <FaDatabase className="text-purple-400 mr-4 text-3xl" />
                  <h3 className="text-2xl font-semibold">Database</h3>
                </div>
                <p className="text-gray-300 text-lg">{project.database_details}</p>
              </motion.div>
            </div>
            
         
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaClock className="mr-4 text-yellow-400" />
                Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-32 font-semibold">Start Date:</div>
                  <div>{project.start_date}</div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-semibold">End Date:</div>
                  <div>{project.end_date}</div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-semibold">Duration:</div>
                  <div>{project.duration}</div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <motion.a 
                href={project.source_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition duration-300 text-lg font-semibold mb-4 sm:mb-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo <FaExternalLinkAlt className="ml-2" />
              </motion.a>
              <div className="flex space-x-6">
                <motion.a 
                  href={project.github_link_client} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Client Repo <FaGithub className="ml-2" />
                </motion.a>
                <motion.a 
                  href={project.github_link_server} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Server Repo <FaGithub className="ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;