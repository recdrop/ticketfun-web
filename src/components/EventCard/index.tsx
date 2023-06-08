import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import MyAvatarGroup from "../MyAvatarGroup";
import { slugify } from "@/src/utils/slugify";

interface EventCardProps {
  image: string;
  eventId: number;
  eventDate: string;
  eventName: string;
  eventDescription: string;
  eventLocation: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventId,
  eventDate,
  eventName,
  eventDescription,
  eventLocation,
}) => {
  const avatars = [
    { id: 1, name: "John Doe", imageSrc: "https://bit.ly/dan-abramov" },
    { id: 2, name: "Jane Doe", imageSrc: "https://bit.ly/dan-abramov" },
    { id: 3, name: "Bob Doe", imageSrc: "https://bit.ly/dan-abramov" },
    { id: 4, name: "Alice Doe", imageSrc: "https://bit.ly/dan-abramov" },
    { id: 5, name: "Alice Doe", imageSrc: "https://bit.ly/dan-abramov" },
    { id: 5, name: "Alice Doe", imageSrc: "https://bit.ly/dan-abramov" },
  ];

  const eventUrl = slugify(`${eventId}-${eventName}`);

  return (
    <div className="bg-white shadow-lg rounded-lg  transform transition-transform duration-300 hover:scale-105 relative">
      <div className="relative w-full">
        <img
          src={image}
          alt={eventName}
          className="w-full h-48 object-cover mb-4 rounded-t-md"
        />
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-red-600 text-white p-2 rounded-md">
            <p className="font-bold text-2xl">16</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 flex justify-center items-center">
          <div className="flex items-center bg-blue-tf-700 text-white h-10 w-10 pl-3 rounded-md">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-white text-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="not-italic font-bold text-base leading-5 text-blue-tf-700">
          {eventDate}
        </h3>
        <h1 className="text-title-card">{eventName}</h1>
        {/* <p className="description ">{eventDescription}</p> */}
        <p className="not-italic font-normal text-base leading-5 text-gray-600">
          {eventLocation}
        </p>
        <div className="flex flex-row mt-6">
          <div className="flex flex-1">
            <Link
              href={`/Events/${eventUrl}`}
              className="
                  border 
                  border-black 
                  border-opacity-20 
                  backdrop-filter 
                  backdrop-blur-lg 
                  rounded-xl 
                  px-6 py-3 
                  text-white
                  bg-blue-tf-700 
                  hover:bg-blue-tf-800
                  hover:text-white
                  text-xl
                  "
            >
              Buy Tickets
            </Link>
          </div>
          <div className="flex flex-1">
            <MyAvatarGroup avatars={avatars} maxVisible={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
