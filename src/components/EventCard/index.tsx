import Link from 'next/link';
import React from 'react';
import MyAvatarGroup from '../MyAvatarGroup';

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
    <div className="bg-white shadow-lg rounded-lg  transform transition-transform duration-300 hover:scale-105">
      <div className='w-full'>
         <img src={image} alt={eventName} className="w-full h-48 object-cover mb-4 rounded-t-md" />
      </div>
      <div className='p-4'>
          <h3 className="text-date-card">{eventDate}</h3>
          <h2 className="text-title-card">{eventName}</h2>
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