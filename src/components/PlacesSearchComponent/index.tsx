import { useState } from 'react';
import { getAutocompletePlaces, getPlaceDetails } from '../../services/googlePlacesService';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const mapStyles = {
  height: "400px",
  width: "100%",
};

const PlacesSearchComponent: React.FC = () => {
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const handleInput = async (event:any) => {
    setInput(event.target.value);

    if (input.length > 2) {
      const predictions = await getAutocompletePlaces(input);
      setPlaces(predictions);
    }
  };

  const handlePlaceClick = async (placeId) => {
    const details = await getPlaceDetails(placeId);
    console.log(details)
    setSelectedPlace(details);
    setCoordinates(details.geometry.location);
    setPlaces([])
    setInput(details.name)
  };

  return (
    <div className='flex flex-1 flex-col'>
      <input 
        type="text"
        className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
        '  
        placeholder='Endereço ou Nome do Local'
        value={input} onChange={handleInput} 
      />
      {places.length > 0 && (
        <div>
          {places.map((place) => (
            <div 
              className='
                border-b 
                hover:bg-purple-300 
                active:bg-purple-300 
                h-8 
                bg-white 
                flex 
                flex-1 
                items-center 
                p-1
                '
              key={place.place_id} 
              onClick={() => handlePlaceClick(place.place_id)}>
              {place.description}
            </div>
          ))}
        </div>
      )}
    {selectedPlace && (
  <div>
    {/* <h2>{selectedPlace.name}</h2>
    <p>{selectedPlace.formatted_address}</p> */}

    <div className='flex flex-1 flex-col'>
      <label>CEP</label>
      <input 
        disabled
        type="text"
           className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '   
        value={selectedPlace.address_components.find(c => c.types.includes('postal_code'))?.long_name || ''} readOnly />
    </div>
    <div className='flex flex-1 flex-col mt-4'>
      <label>Rua</label>
      <input 
          type="text" 
          value={selectedPlace.address_components.find(c => c.types.includes('route'))?.long_name || selectedPlace.address_components.find(c => c.types.includes('sublocality'))?.long_name || ''} readOnly 
          disabled
          className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '  
          />
    </div>
    <div className='flex flex-1 flex-col mt-4'>
      <label>Logradouro</label>
      <input 
        type="text" 
          className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '  
        value={selectedPlace.address_components.find(c => c.types.includes('sublocality_level_1'))?.long_name || ''} readOnly />
    </div>
    <div className='flex flex-1 flex-col mt-4'>
      <label>Número</label>
      <input 
        type="text" 
           className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '  
        value={selectedPlace.address_components.find(c => c.types.includes('street_number'))?.long_name || ''} readOnly />
    </div>
   
    <div className='flex flex-1 flex-col mt-4'>
      <label>Bairro</label>
      <input 
        type="text" 
        className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '
        value={selectedPlace.address_components.find(c => c.types.includes('sublocality_level_1'))?.long_name ||''} readOnly />
    </div>
    <div className='flex flex-1 flex-col mt-4'>
      <label>Cidade</label>
      <input 
        disabled
        type="text" 
         className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '
        value={selectedPlace.address_components.find(c => c.types.includes('locality'))?.long_name || selectedPlace.address_components.find(c => c.types.includes('administrative_area_level_4'))?.long_name || selectedPlace.address_components.find(c => c.types.includes('administrative_area_level_2'))?.long_name || ''} readOnly />
    </div>
    <div className='flex flex-1 flex-col mt-4'>
      <label>Estado</label>
      <input 
        disabled
        type="text" 
         className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        '
        value={selectedPlace.address_components.find(c => c.types.includes('administrative_area_level_1'))?.short_name || ''} readOnly />
    </div>
    <div className='flex flex-1 flex-col mt-4 mb-4'>
      <label>País</label>
      <input 
         disabled
        type="text" 
         className=' 
          appearance-none 
          rounded-md 
          h-16 
          relative 
          block 
          w-full 
          px-3 
          py-2 
          border 
          border-gray-200 
          placeholder-gray-500 
          text-gray-900 
          focus:outline-none 
          focus:ring-purple-500 
          focus:border-purple-500
          focus:z-10 
          disabled:bg-gray-100
        ' 
        value={selectedPlace.address_components.find(c => c.types.includes('country'))?.short_name || ''} readOnly />
    </div>

    <LoadScript
      googleMapsApiKey={'AIzaSyCChapqfxcu9GbU3VpPBNE9h1GK5ortbBo'}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={selectedPlace.geometry.location}
      >
        <Marker
          position={selectedPlace.geometry.location}
        />
      </GoogleMap>
    </LoadScript>
  </div>
)}
    </div>
  );
};

export default PlacesSearchComponent;
