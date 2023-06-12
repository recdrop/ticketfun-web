import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Importe o CSS do Swiper
import useEventCity from "@/src/hooks/useEventCity";
import classNames from "@/src/utils/classNames";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "swiper/swiper-bundle.min.css";
import CityDialog from "../Dialog/EventCityDialog";

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

  const dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const { eventCity, updateEventCity } = useEventCity();

  const updateCity = (city: string) => {
    updateEventCity(city);
    setCurrentCity(city);
  };

  useEffect(() => {
    if (eventCity) {
      setCurrentCity(eventCity);
    }
  }, [eventCity]);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
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
                <h3 className="text-center sm:text-left not-italic pb-16 font-bold text-6xl text-white">
                  Blackartel Festival
                </h3>
              </div>

              <div className="sm:flex container mx-auto" role="group">
                <button
                  type="button"
                  className="
                  border 
                  border-none 
                  border-opacity-20                  
                  backdrop-blur-lg 
                  w-full
                  sm:w-auto
                  mb-2
                  sm:mb-0
                  rounded-lg
                  sm:rounded-r-none
                  px-6 py-3 
                  text-white
                  bg-blue-tf-700 
                  hover:bg-blue-tf-800
                  hover:text-white
                  text-2xl
                  "
                >
                  Buy tickets
                </button>

                <button
                  type="button"
                  className="
                    border 
                    border-none 
                    border-opacity-20                
                    backdrop-blur-lg 
                    w-full
                    sm:w-auto
                    rounded-lg
                    sm:rounded-l-none
                    px-6 py-3 
                    text-white
                    bg-blue-tf-700 
                    bg-opacity-60
                    hover:bg-blue-tf-800
                    hover:text-white
                    text-xl
                    text-center
                    justify-center
                    flex"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="mt-1 text-sm sm:text-lg">
                    Evento destaque em
                  </span>
                  <b className="text-xl sm:text-3xl ml-1 sm:ml-4">
                    {currentCity}
                  </b>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={classNames(
                      "text-white",
                      "ml-2 sm:ml-3 mt-1 sm:mt-3"
                    )}
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <CityDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        update={updateCity}
      />
    </>
  );
};

export default Banner;
