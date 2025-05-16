import React from 'react';
import { motion } from 'framer-motion';
import { FaLanguage, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

import classwithTeacher from "../assets/classwithteacher.jpg";

const points = [
  {
    title: 'Bilingual Education',
    description: 'Instruction available in both English and Urdu/Arabic to better serve learning needs.',
    icon: <FaLanguage />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Certified Scholars',
    description: 'Our teachers are certified Islamic scholars with extensive teaching experience.',
    icon: <FaUserGraduate />,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Modern Facilities',
    description: 'Smart classrooms, interactive boards, and updated education technology.',
    icon: <FaChalkboardTeacher />,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Caring Environment',
    description: 'Environment of discipline and character that promotes student well-being.',
    icon: <FaHandsHelping />,
    color: 'bg-pink-100 text-pink-600',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-16">
      <div className="container containers mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text & Features */}
        <div className="order-2 md:order-1">
          <motion.h2
            className="text-3xl font-bold text-[#4f46e5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At Smart Read Academy, we combine traditional values with modern education to provide a unique learning experience.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <div className={`p-2 rounded-full text-xl ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={classwithTeacher}
            alt="Why Choose Us"
            className="rounded-lg shadow-md w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
