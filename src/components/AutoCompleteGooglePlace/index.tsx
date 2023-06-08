import { getPlaces } from '@/src/pages/api/getPlaces';
import { useState } from 'react';



const AutoCompleteGooglePlace: React.FC = () => {
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState([]);

  const handleInput = async (event) => {
    setInput(event.target.value);

    if (input.length > 2) {
      const predictions = await getPlaces(input);
      setPlaces(predictions);
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      {places.length > 0 && (
        <div>
          {places.map((place) => (
            <div key={place.place_id}>
              {place.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteGooglePlace;