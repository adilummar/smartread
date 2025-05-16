import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  // FiFacebook,
  // FiInstagram,
  // FiTwitter,
} from "react-icons/fi";
import { useOnScreen } from "./useOnScreen"; // import the hook from above

const ContactLocation = () => {
  // Setup intersection for map and details separately
  const [mapRef, mapVisible] = useOnScreen();
  const [detailsRef, detailsVisible] = useOnScreen();

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container containers mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Contact & Location
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We’re conveniently located in Sharjah. Visit us to learn more about
          our programs or get in touch through any of our contact channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map with fade-left animation */}
          <div
            ref={mapRef}
            className={`w-full mx-auto h-64 mb-10 lg:h-full md:h-96 col-span-3 rounded-lg animate-fade-left ${
              mapVisible ? "active" : ""
            }`}
            role="region"
            aria-label="Map showing location of Smart Read Academy"
          >
            <iframe
              title="Smart Read Academy Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7669280786885!2d55.4533333!3d25.3466666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ4LjAiTiA1NcKwMjcnMTIuMCJF!5e0!3m2!1sen!2sae!4v1715847777777"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              aria-label="Google Maps showing Smart Read Academy location"
            ></iframe>
          </div>

          {/* Contact Details with fade-right animation */}
          <div
            ref={detailsRef}
            className={`bg-gray-50 w-full p-6 rounded-lg shadow-md space-y-4 animate-fade-right ${
              detailsVisible ? "active" : ""
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#4f46e5] text-white p-2 rounded-lg">
                  <FiMapPin size={20} />
                </div>
                <address className="not-italic">
                  <p className="font-medium text-gray-700">Address</p>
                  <p className="text-gray-600 text-sm">
                    Qasmia building, Muwailah, Sharjah, UAE
                  </p>
                </address>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4f46e5] text-white p-2 rounded-lg">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+971545896922" className="hover:underline">
                      +971 54 589 6922
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4f46e5] text-white p-2 rounded-lg">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <p className="text-gray-600 text-sm">
                    <a
                      href="mailto:contact@smartreadacademy.com"
                      className="hover:underline"
                    >
                      contact@smartreadacademy.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4f46e5] text-white p-2 rounded-lg">
                  <FiClock size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday – Thursday: 8:00 AM – 6:00 PM <br />
                    Friday: 8:00 AM – 12:00 PM <br />
                    Saturday: Closed
                  </p>
                </div>
              </div>

              {/* Social icons can be added here similarly */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;


