import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availiblesPlaces, setAvailablesPlaces] = useState([]);

  //this effect will be only runned when component built the first time, because there are no dependencies passed on the second paramter, in any case this effect will run again
  useEffect(() => {
    fetch("http://localhost:3000/places").then((response) => {
      return response.json();
    }).then((data) => {
      setAvailablesPlaces(data.places);
    });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availiblesPlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
