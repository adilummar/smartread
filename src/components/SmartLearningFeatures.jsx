import React from "react";
import { motion } from "framer-motion";
import { RiComputerLine, RiGlobalLine } from "react-icons/ri";
import { BiLayer } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";

const features = [
  {
    title: "Smart Boards",
    icons: <RiComputerLine size={24} className="text-[#4f46e5]" />,
    description: "Interactive digital boards for engaging visual learning.",
  },
  {
    title: "E-learning Portals",
    icons: <RiGlobalLine size={24} className="text-[#4f46e5]" />,
    description: "Track lessons & resources for consistent academic revision.",
  },
  {
    title: "Blended Methods",
    icons: <BiLayer size={24} className="text-[#4f46e5]" />,
    description:
      "Combination of traditional and digital classroom approaches for optimal results.",
  },
  {
    title: "Gamified Content",
    icons: <IoGameControllerOutline size={24} className="text-[#4f46e5]" />,
    description:
      "Educational games and activities to improve memory and memorization.",
  },
];

const SmartLearningFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="container containers mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/src/assets/class.jpg"
            alt="Smart Learning"
            className="rounded-lg shadow-md w-full"
          />
        </motion.div>

        {/* Features List */}
        <div className="order-1 md:order-2">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Smart Learning Features
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We integrate modern technology with traditional teaching methods to
            create an engaging and effective learning environment that enhances
            knowledge retention.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4 bg-white rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-2xl w-fit h-fit bg-[#4f46e51a] p-4 rounded-full">
                  {feature.icons}
                </div>
                <div>
                  <h4 className="font-semibold text-[#4f46e5]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLearningFeatures;
