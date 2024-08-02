import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaArrowLeft } from 'react-icons/fa';

const SingleProject = () => {
  const demoProjects = [
    {
      _id: '1',
      project_name: 'Project One',
      description: 'This is the description for project one.',
      long_description: 'Detailed description for project one.',
      image_url: 'https://via.placeholder.com/600x400',
      tech_stack: ['React', 'Node.js', 'MongoDB'],
      features: ['Feature 1', 'Feature 2'],
      frontend_details: 'React, Redux',
      backend_details: 'Node.js, Express',
      database_details: 'MongoDB, Mongoose',
      source_link: 'https://example.com',
      github_link_client: 'https://github.com/example/project-one-client',
      github_link_server: 'https://github.com/example/project-one-server',
    },
    {
      _id: '2',
      project_name: 'Project Two',
      description: 'This is the description for project two.',
      long_description: 'Detailed description for project two.',
      image_url: 'https://via.placeholder.com/600x400',
      tech_stack: ['Vue', 'Firebase'],
      features: ['Feature A', 'Feature B'],
      frontend_details: 'Vue, Vuex',
      backend_details: 'Firebase Functions',
      database_details: 'Firebase Firestore',
      source_link: 'https://example.com',
      github_link_client: 'https://github.com/example/project-two-client',
      github_link_server: 'https://github.com/example/project-two-server',
    },
    // Add more demo projects as needed
  ];

  const { id } = useParams();
  const project = demoProjects.find((proj) => proj._id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project not found
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/project" className="flex items-center mb-8 text-gray-400 hover:text-white transition">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={project.image_url} alt={project.project_name} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{project.project_name}</h2>
          <p className="text-gray-700 mb-6">{project.long_description}</p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-700">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1 flex items-center">
                  <FaCode className="mr-2" /> Frontend
                </h4>
                <p className="text-gray-700">{project.frontend_details}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1 flex items-center">
                  <FaServer className="mr-2" /> Backend
                </h4>
                <p className="text-gray-700">{project.backend_details}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1 flex items-center">
                  <FaDatabase className="mr-2" /> Database
                </h4>
                <p className="text-gray-700">{project.database_details}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <div className="flex space-x-4">
              <a href={project.github_link_client} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href={project.source_link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-300">
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;
