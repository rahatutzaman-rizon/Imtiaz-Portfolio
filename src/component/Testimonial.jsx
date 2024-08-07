import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    position: 'CTO',
    text: 'This product has revolutionized our workflow. The AI-powered features have saved us countless hours, and the interface is intuitive and user-friendly. Highly recommended for any tech company looking to boost productivity!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    company: 'Creative Designs Co.',
    position: 'Lead Designer',
    text: 'As a design studio, we needed a tool that could keep up with our creative process. This solution not only met but exceeded our expectations. The collaboration features are top-notch, and the support team is always ready to help.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Mike Johnson',
    company: 'StartUp Ventures',
    position: 'Founder & CEO',
    text: 'For a fast-growing startup, adaptability is key. This platform grows with us, offering scalable solutions that have significantly improved our productivity. The analytics dashboard is a game-changer for our decision-making process.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Emily Chen',
    company: 'Global Edu Solutions',
    position: 'Education Director',
    text: 'Implementing this system in our educational programs has transformed how we deliver content to students. The interactive features and progress tracking tools have made learning more engaging and effective.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Alex Rodriguez',
    company: 'HealthTech Innovations',
    position: 'Head of R&D',
    text: 'In the healthcare industry, precision and reliability are paramount. This solution has streamlined our research processes and data management, allowing us to focus more on breakthrough innovations.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const TestimonialsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-sky-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-center mb-4">Client Success Stories</h1>
        <p className="text-xl text-center mb-12">Discover how our solutions have transformed businesses across industries</p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedTestimonial(testimonial)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sky-400">{testimonial.position}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 line-clamp-3">{testimonial.text}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'} fill-current`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your company to the next level.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-6">
                <img src={selectedTestimonial.image} alt={selectedTestimonial.name} className="w-24 h-24 rounded-full" />
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold">{selectedTestimonial.name}</h3>
                  <p className="text-sky-400 text-lg">{selectedTestimonial.position}</p>
                  <p className="text-gray-400">{selectedTestimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{selectedTestimonial.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < selectedTestimonial.rating ? 'text-yellow-400' : 'text-gray-600'} fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <button
                  className="text-sky-400 hover:text-sky-300 transition-colors duration-300"
                  onClick={() => setSelectedTestimonial(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsPage;