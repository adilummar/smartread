import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info Panel */}
        <div className="relative bg-[#4f46e5] text-white rounded-3xl p-10 shadow-xl overflow-hidden">
          {/* Decorative Blur Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />

          <h3 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h3>

          <div className="space-y-6 text-sm relative z-10">
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FiMapPin size={20} className="text-[#4f46e5]" />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-indigo-100">
                  Qasmia Building, Muwailah, Sharjah, UAE
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FiPhone size={20} className="text-[#4f46e5]" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+971545896922" className="text-indigo-100 hover:underline">
                  +971 54 589 6922
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FiMail size={20} className="text-[#4f46e5]" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:contact@smartreadacademy.com" className="text-indigo-100 hover:underline">
                  contact@smartreadacademy.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FiClock size={20} className="text-[#4f46e5]" />
              </div>
              <div>
                <p className="font-semibold">Office Hours</p>
                <p className="text-indigo-100">
                  Mon–Thu: 8 AM – 6 PM<br />
                  Fri: 8 AM – 12 PM<br />
                  Sat–Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-[#4f46e5] text-white font-semibold py-3 rounded-xl hover:bg-indigo-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
