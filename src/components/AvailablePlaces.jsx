import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availiblesPlaces, setAvailablesPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //this effect will be only runned when component built the first time, because there are no dependencies passed on the second paramter, in any case this effect will run again
  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/places");
      const data = await response.json();
      setAvailablesPlaces(data.places);
      setIsLoading(false);
    }

    fetchPlaces();

    // fetch("http://localhost:3000/places").then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   setAvailablesPlaces(data.places);
    // });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availiblesPlaces}
      isLoading={isLoading}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
