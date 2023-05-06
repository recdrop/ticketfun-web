import React from 'react';

interface EventCardProps {
  image: string;
  eventName: string;
  eventDescription: string;
  eventLocation: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventName,
  eventDescription,
  eventLocation,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={eventName} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{eventName}</h2>
      <p className="text-gray-700 mb-2">{eventDescription}</p>
      <p className="text-indigo-500">{eventLocation}</p>
    </div>
  );
};

export default EventCard;