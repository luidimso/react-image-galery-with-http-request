import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { getPlaces } from '../https.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availiblesPlaces, setAvailablesPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serviceError, setError] = useState();

  //this effect will be only runned when component built the first time, because there are no dependencies passed on the second paramter, in any case this effect will run again
  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const data = await getPlaces();

        setAvailablesPlaces(data.places);
      } catch (e) {
        setError(e);
      }
      
      setIsLoading(false);
    }

    fetchPlaces();

    // fetch("http://localhost:3000/places").then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   setAvailablesPlaces(data.places);
    // });
  }, []);

  if(serviceError) {
    return <Error title="Error" message={serviceError.message}></Error>
  }

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
