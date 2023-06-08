import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Importe o CSS do Swiper
import "swiper/swiper-bundle.min.css";

// Ative os plugins do Swiper que você deseja usar
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner: React.FC = () => {
  const images = [
    "/assets/imgs/Banner.png",
    "/assets/imgs/Banner.png",
    "https://via.placeholder.com/1920x1080/FF6347/FFFFFF?text=Banner+1",
    "https://via.placeholder.com/1920x1080/008080/FFFFFF?text=Banner+2",
    "https://via.placeholder.com/1920x1080/FFD700/FFFFFF?text=Banner+3",
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[600px] relative"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent py-10 px-4">
            <div className="flex justify-between items-center container mx-auto">
              <h3 className="not-italic pb-16 font-bold text-6xl text-white">
                Blackartel Festival
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
