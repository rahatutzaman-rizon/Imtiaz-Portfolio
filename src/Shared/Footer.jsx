import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sayem Hossen</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating efficient and innovative solutions.
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 mb-4">
              <FaEnvelope className="inline mr-2" />
              sayemhossen874@gmail.com
            </p>
            <p className="text-gray-400 mb-4">
              <FaPhoneAlt className="inline mr-2" />
              +8801886441152
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yourusername" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yourusername/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Designed and built with ❤️ by Sayem Hossen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
