import React from 'react';
import { motion } from 'framer-motion';

import hero from '../assets/hero.jpg'

const HeroSection = () => {
  return (
    <section id='hero' className="bg-white">
      <div className="container containers mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Where Smart Learning <br className="hidden md:block" /> Meets Strong Values
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sharjah’s first smart madrassa + general academy combining strong Islamic education with modern learning to build faith, knowledge, and life skills under one roof.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="bg-[#4f46e5] text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Enroll Now
            </button>
            <button className="bg-white border border-[#4f46e5] text-[#4f46e5] px-6 py-3 rounded hover:bg-[#4f46e5] hover:text-[white] transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={hero}
            alt="Smart Learning Environment"
            className="rounded-lg w-full max-w-md md:max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
