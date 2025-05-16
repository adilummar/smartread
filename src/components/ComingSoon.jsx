import React from "react";
import { motion } from "framer-motion";
import { LuBell } from "react-icons/lu";

import kg from "../assets/kg.jpg";
import stem from "../assets/stem.jpg";
import spoken from "../assets/spoken.jpg";

const comingPrograms = [
  {
    title: "Preschool & KG",
    description:
      "Early learning experience designed specifically for young students with age-appropriate activities and learning.",
    image: kg,
  },
  {
    title: "STEM & Robotics",
    description:
      "Hands-on learning experience in Science, Technology, Engineering, and Mathematics with robotics integration.",
    image: stem,
  },
  {
    title: "Spoken Arabic",
    description:
      "Conversational Arabic program focused on everyday use and cultural understanding.",
    image: spoken,
  },
];

const ComingSoon = () => {
  return (
    <section id="coming-soon" className="bg-white py-16">
      <div className="container containers mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Coming Soon
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We’re consistently expanding our programs to provide more
          opportunities for your child’s growth and development.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {comingPrograms.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-3">
                <p className="text-xs w-fit text-yellow-600 bg-yellow-100 py-1 px-3 rounded-lg font-medium">
                  Coming Soon
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {program.description}
                </p>
                <a
                  href="#"
                  className="text-[#4f46e5] text-sm font-medium mt-3 inline-block hover:underline"
                >
                  Notify Me <LuBell className="inline-block ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
