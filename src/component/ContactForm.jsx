import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie-player';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Import your Lottie animation JSON file
import contactAnimation from './contact.json';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('service_t14ijf2', 'template_s1dxxj8', form.current, 'Y4FN7ZSrW0VCQal-t')
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setSubmitStatus('error'))
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-sky-800 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" mt-12 w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 p-6 bg-gradient-to-br from-black to-sky-800">
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-300 mb-6"
            >
              Open to new opportunities and collaborations. Reach out anytime!
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-6"
            >
              <div className="flex items-center text-sm text-gray-300">
                <FaUser className="mr-2 text-purple-400" />
                <span>Sayem Hossen</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <FaEnvelope className="mr-2 text-purple-400" />
                <span>sayemhossen874@gmail.com</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-4 mb-6"
            >
              {[FaLinkedin, FaGithub, FaTwitter].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
            <Lottie
              loop
              animationData={contactAnimation}
              play
              style={{ width: '100%', height: 150 }}
            />
          </div>
          <div className="md:w-3/5 p-6">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              {[
                { icon: FaUser, name: 'name', placeholder: 'Your Name', type: 'text' },
                { icon: FaEnvelope, name: 'email', placeholder: 'Your Email', type: 'email' },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileTap="focus"
                >
                  <field.icon className="absolute top-2.5 left-3 text-gray-400 text-sm" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full pl-9 pr-3 py-2 bg-gray-700 text-sm text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
                whileTap="focus"
              >
                <FaCommentAlt className="absolute top-2.5 left-3 text-gray-400 text-sm" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full pl-9 pr-3 py-2 bg-gray-700 text-sm text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 bg-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane className="inline mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            {submitStatus && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`mt-4 text-center text-sm ${
                  submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'An error occurred. Please try again.'}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;