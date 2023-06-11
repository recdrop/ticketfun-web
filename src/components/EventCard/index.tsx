import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import MyAvatarGroup from "../MyAvatarGroup";
import { slugify } from "@/src/utils/slugify";

interface EventCardProps {
  image: string;
  eventId: number;
  eventAge?: number;
  eventDate: string;
  eventName: string;
  eventDescription: string;
  eventLocation: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventId,
  eventAge,
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
    <div className="bg-white shadow-lg rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:border-3 border-blue-tf-700 relative">
      <div className="relative w-full">
        <img
          src={image}
          alt={eventName}
          className="w-full h-48 object-cover rounded-t-2xl bg-blue-tf-700"
        />
        {eventAge && (
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-red-600 text-white p-2.5 rounded-xl w-[52px] h-[52px] text-center justify-center align-middle">
              <p className="font-bold text-2xl">{eventAge}</p>
            </div>
          </div>
        )}
        <div className="absolute bottom-[-44px] right-0 p-4 flex justify-center items-center">
          <div className="flex items-center bg-blue-tf-700 text-white p-2.5 rounded-xl w-[52px] h-[52px] text-center justify-center align-middle">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-white text-xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="not-italic font-bold text-base leading-5 text-blue-tf-700">
          {eventDate}
        </h3>
        <h1 className="text-gray-tf text-3xl font-medium">{eventName}</h1>
        {/* <p className="description ">{eventDescription}</p> */}
        <p className="not-italic font-normal text-base leading-5 text-gray-tf-600">
          {eventLocation}
        </p>
        <div className="flex flex-row mt-6 justify-between">
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
                  lg:text-base
                  xl:text-lg
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
