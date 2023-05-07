import Link from 'next/link';
import React from 'react';
import MyAvatarGroup from '../MyAvatarGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface EventCardProps {

  image: string;
  eventDate:string;
  eventName: string;
  eventDescription: string;
  eventLocation: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventDate,
  eventName,
  eventDescription,
  eventLocation,
}) => {
    const avatars = [
    { id: 1, name: 'John Doe', imageSrc: 'https://bit.ly/dan-abramov' },
    { id: 2, name: 'Jane Doe', imageSrc: 'https://bit.ly/dan-abramov' },
    { id: 3, name: 'Bob Doe', imageSrc: 'https://bit.ly/dan-abramov' },
    { id: 4, name: 'Alice Doe', imageSrc: 'https://bit.ly/dan-abramov' },
    { id: 5, name: 'Alice Doe', imageSrc: 'https://bit.ly/dan-abramov' },
    { id: 5, name: 'Alice Doe', imageSrc: 'https://bit.ly/dan-abramov' },
   
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg  transform transition-transform duration-300 hover:scale-105 relative">
     <div className="relative w-full">
      <img src={image} alt={eventName} className="w-full h-48 object-cover mb-4 rounded-t-md" />
      <div className="absolute top-0 right-0 p-4">
        <div className="bg-red-600 text-white p-2 rounded-md">
          <p className="font-bold text-2xl">16</p>

        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4 flex justify-center items-center">
        <div className="flex items-center bg-purple-700 text-white h-10 w-10 pl-3 rounded-md">
          <FontAwesomeIcon
            icon={faHeart}
            className='text-white text-lg cursor-pointer'
          />
        </div>
      </div>
    </div>

      <div className='p-4'>
          <h3 className="text-date-card">{eventDate}</h3>
          <h1 className="text-title-card">{eventName}</h1>
          {/* <p className="description ">{eventDescription}</p> */}
          <p className="place-card">{eventLocation}</p>
          <div className='flex flex-row mt-6'>
            <div className='flex flex-1'>
                <Link href="#" 
                  className="
                  border 
                  border-black 
                  border-opacity-20 
                  backdrop-filter 
                  backdrop-blur-lg 
                  rounded-xl 
                  px-6 py-3 
                  text-white
                  bg-purple-700 
                  hover:bg-purple-800
                  hover:text-white
                  text-xl
                  "
                  >
                    Buy Tickets
                  </Link>

            </div>
            <div className='flex flex-1'>
             <MyAvatarGroup avatars={avatars} maxVisible={4} />
            </div>
          </div>
      </div>

    </div>
  );
};

export default EventCard;
