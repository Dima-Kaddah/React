import React, { useState } from 'react';
import Button from './DogButton';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function getDog() {
    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogPhotos([...dogPhotos, data.message]);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  let Text = 'Get a dog!';
  if (!dogPhotos.length) Text = 'Get your first dog by clicking the button!';

  return (
    <div>
      <Button handleBtn={getDog} text={Text} />
      {hasError && <p>Something went wrong</p>}
      {isLoading && <p>Loading ....</p>}
      {!hasError &&
        dogPhotos.map((dog) => <DogPhoto DogSrc={dog} text={'Dogs'} />)}
    </div>
  );
}
