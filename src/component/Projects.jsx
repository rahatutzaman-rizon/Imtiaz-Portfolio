import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Projects = () => {
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

  const [projects, setProjects] = useState(demoProjects);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore my portfolio of deployed projects. These showcase my expertise in creating
          robust, user-centric applications. Feel free to reach out for any inquiries or potential collaborations.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <img src={project.image_url} alt={project.project_name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.project_name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <Link
            to={`/project/${project._id}`}
            className="w-full sm:w-auto text-center mb-2 sm:mb-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Learn More
          </Link>
          <div className="flex space-x-4">
            <a href={project.github_link_client} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href={project.source_link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-300">
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
