import  { useState } from 'react';
import { FaHome,  FaBlog, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Achivement', path: '/achivement', icon: <FaProjectDiagram /> },
  { name: 'Blog', path: '/blog', icon: <FaBlog /> },
  
  { name: 'About', path: '/about', icon: <FaUser /> },
  { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">Imtiaz</div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white flex items-center space-x-2"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-white">
            &#9776;
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-sky-900 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-white py-2"
              onClick={toggleDropdown}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
