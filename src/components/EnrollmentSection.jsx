import React from "react";
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

const EnrollmentSection = () => {
  return (
    <section id="enrollment" className="bg-gray-50 py-16">
      <div className="container lg:w-[70%] mx-auto px-4 flex flex-col md:flex-row items-stretch">
        {/* Left - Enrollment Info Box */}
        <motion.div
          className="flex-1 flex flex-col justify-between bg-[#4f46e5] text-white px-12 py-16 rounded-tl-lg rounded-bl-lg shadow-md min-h-full gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold max-w-xs">Limited Seats Available!</h3>
          <p className="text-lg">
            Enrollment is now open for Arabic & Islamic studies. Secure your
            child’s place in our comprehensive educational programs.
          </p>
          <div>
            <p className="font-semibold text-xl mb-4">Why Enroll Now:</p>
            <div className="space-y-4 text-sm">
              {[
                "Limited seats available for 2025–2026",
                "Early enrollment discounts",
                "Personalized learning support",
                "Access to all learning facilities",
              ].map((item, index) => (
                <p key={index} className="flex gap-2 text-lg items-center">
                  <IoMdCheckmark size={20} /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="text-sm pt-4 bg-[#ffffff1a] p-4 rounded-lg space-y-4">
            <p>Visit us at: Building, Muwailah, Sharjah</p>
            <p className="flex gap-4 items-center">
              <FiPhone size={15} /> +971 54 589 6922
            </p>
          </div>
        </motion.div>

        {/* Right - Inquiry Form */}
        <motion.div
          className="flex-1 flex flex-col justify-between bg-white px-6 py-16 rounded-tr-lg rounded-br-lg shadow-md min-h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4 px-8">
            Inquire Now
          </h3>
          <form className="space-y-4 px-8">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="program"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Program Of Interest
              </label>
              <select
                id="program"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a program</option>
                <option value="arabic">Arabic & Islamic Studies</option>
                <option value="academic">Academic Support Plus</option>
                <option value="skills">Skill Development</option>
                <option value="youth">Youth Development</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" required />
                I agree to receive information about the program of interest.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4f46e5] text-white py-2 rounded-md hover:bg-blue-800 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
