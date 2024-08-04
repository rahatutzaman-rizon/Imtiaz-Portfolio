import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://myportfolio-server.vercel.app/project2');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="text-white text-2xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <img src={project.image_url} alt={project.project_name} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-orange-600 bg-opacity-60 backdrop-blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 opacity-100 group-hover:opacity-0">
        <h3 className="text-3xl font-bold text-white mb-2">{project.project_name}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 opacity-0 group-hover:opacity-100">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">{project.project_name}</h3>
          <p className="text-white mb-6 text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white text-orange-600 text-sm font-semibold rounded-full shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/project/${project._id}`}
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full font-bold text-sm transition-colors duration-300 hover:bg-orange-100 shadow-lg hover:shadow-xl"
          >
            Learn More <FaArrowRight className="ml-2" />
          </Link>
          {/* <div className="flex space-x-4">
            <motion.a
              href={project.github_link_client}
              className="text-white hover:text-orange-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaCode size={24} />
            </motion.a>
            <motion.a
              href={project.github_link_server}
              className="text-white hover:text-orange-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt size={24} />
            </motion.a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
