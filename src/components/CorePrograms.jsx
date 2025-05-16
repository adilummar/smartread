import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";

import girlswithquran from  '../assets/girlswithquran.jpg';
import acadamic from  '../assets/acadamic.jpg';
import boy from  '../assets/boy.jpg';
import last from  '../assets/last.jpg';


const programs = [
  {
    title: 'Arabic & Islamic Studies',
    icons: <FiBookOpen size={24} className='text-[#4f46e5]' />,
    description:
      'Comprehensive 5-month+ program combining Qur’an memorization, Arabic language, and Islamic studies.',
    image: girlswithquran,
  },
  {
    title: 'Academic Support Plus',
    icons: <RiGraduationCapLine size={24} className='text-[#4f46e5]' />,
    description:
      'English, Math & Science with school-based learning support in small batches for Grades 1–6.',
    image: acadamic,
  },
  {
    title: 'Skill Development',
    icons: <FaRegLightbulb size={24} className='text-[#4f46e5]' />,
    description:
      'Activities like coding, robotics, mental math, public speaking, and more to build 21st-century skills.',
    image: boy,
  },
  {
    title: 'Youth Development',
    icons: <GrGroup size={24} className='text-[#4f46e5]' />,
    description:
      'Programs designed for teenagers to enhance personal development, leadership, and resilience.',
    image: last,
  },
];

const CorePrograms = () => {
  return (
    <section id="programs" className="bg-gray-50 py-16">
      <div className="container containers mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-4 text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Core Programs
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our comprehensive programs are designed to nurture both academic excellence and strong moral values, providing your child with a balanced education.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-2 flex flex-col items-start">
                <div className="text-2xl bg-[#4f46e51a] p-4 rounded-full">
                  {program.icons}
                </div>
                <h3 className="text-lg font-semibold text-[#4f46e5]">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
                <a
                  href="#"
                  className="inline-block text-[#4f46e5] text-sm font-medium mt-2"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrograms;
