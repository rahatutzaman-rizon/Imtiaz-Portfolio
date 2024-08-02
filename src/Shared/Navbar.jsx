import { useState } from 'react';
import { FaHome, FaBlog, FaUser, FaEnvelope, FaBars, FaTimes, FaArchive, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiagramProject } from 'react-icons/fa6';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Achivement', path: '/achivement', icon: <FaMedal/> },
  { name: 'Project', path: '/project', icon: <FaDiagramProject /> },
  { name: 'Blog', path: '/blog', icon: <FaBlog /> },
  { name: 'About', path: '/about', icon: <FaUser /> },
  { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Sayem Hossen</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white flex items-center space-x-2 hover:text-yellow-400 transition duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-4 mt-2 shadow-lg rounded-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white py-2 text-center hover:bg-blue-600 rounded-lg transition duration-300"
                onClick={toggleDropdown}
              >
                <div className="flex items-center justify-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
