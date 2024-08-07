import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLink } from 'react-icons/fa';
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="text-white text-2xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <section className=" py-20 bg-gradient-to-br from-black to-sky-800 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Sayem's Project
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the innovative projects crafted by Sayem, a passionate developer dedicated to pushing the boundaries of web technology. Each project showcases his expertise in creating seamless, user-centric experiences.
          </p>
        </motion.div>
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
      className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <img src={project.image_url} alt={project.project_name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-70 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-pink-600 bg-opacity-60 backdrop-blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 opacity-100 group-hover:opacity-0">
        <h3 className="text-4xl font-bold text-white mb-2">{project.project_name}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 opacity-0 group-hover:opacity-100">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{project.project_name}</h3>
          <p className="text-white mb-6 text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white text-pink-600 text-sm font-semibold rounded-full shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/project/${project._id}`}
            className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full font-bold text-sm transition-colors duration-300 hover:bg-pink-100 shadow-lg hover:shadow-xl"
          >
            Explore <FaArrowRight className="ml-2" />
          </Link>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to={`/project/${project._id}`}
              className="text-white hover:text-pink-200 transition duration-300"
            >
              <FaLink size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;