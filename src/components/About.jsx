import React from "react";
import aboutImage from "../assets/about.png";

function About() {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <p className="text-center mb-8 text-2xl font-bold  uppercase ">
        About Us
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right: Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl max-h-[500px]">
          <img
            src={aboutImage}
            alt="Smart classroom"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Where Smart Learning Meets Strong Values
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            At Smart Read Academy, we blend faith, academic excellence, and
            essential life skills. Our unique approach bridges traditional
            values with innovative teaching tools.
          </p>

          {/* Mission & Vision Boxes */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-indigo-700 text-lg font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm">
                To inspire students through value-based education that empowers
                academic success, strong character, and real-world skills.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-green-700 text-lg font-semibold mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm">
                To be a beacon of balanced education—blending traditional wisdom
                with modern innovation for future-ready learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
