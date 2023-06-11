import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Importe o CSS do Swiper
import classNames from "@/src/utils/classNames";
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
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

  const dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
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
                  <b className="text-xl sm:text-3xl ml-1 sm:ml-4">Salvador</b>
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

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-white/70 backdrop-blur-md"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6">
            <Dialog.Title className="mb-4 flex justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Selecionar estado
              </h2>

              <button
                className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className={classNames("text-2xl")}
                />
              </button>
            </Dialog.Title>

            <div className="py-4 block w-full">
              <label htmlFor="underline_select" className="sr-only">
                Underline select
              </label>
              <select
                id="underline_select"
                className="border-0 cursor-pointer rounded drop-shadow-md bg-blue-200 w-72 duration-300 hover:bg-blue-400 focus:bg-gray-300 p-4"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="text-right">
              <button
                className="border 
                  border-black 
                  border-opacity-20 
                  backdrop-filter 
                  backdrop-blur-lg 
                  rounded-l-xl 
                  px-4 py-2
                  text-white
                  bg-blue-tf-700 
                  hover:bg-blue-tf-800
                  hover:text-white
                  text-md"
                onClick={() => setIsOpen(false)}
              >
                Selecionar
              </button>

              <button
                className="border 
                border-black 
                border-opacity-20 
                backdrop-filter 
                backdrop-blur-lg 
                rounded-r-xl 
                px-4 py-2
                text-white
                bg-gray-700 
                hover:bg-gray-800
                hover:text-white
                text-md"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Banner;
