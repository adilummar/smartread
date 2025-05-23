import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import image1 from "../assets/about.png";
import image2 from "../assets/acadamic.jpg";
import image3 from "/src/assets/boy.jpg";
import image4 from "../assets/class.jpg";
import image5 from "../assets/last.jpg";
import image6 from "../assets/stem.jpg";

const galleryImages = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  return (
    <section id="Gallery" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
        <p className="text-gray-600">
          Moments from our classrooms, events, and interactive learning sessions.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
