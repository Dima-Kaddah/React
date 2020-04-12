import React, { useState, useEffect } from 'react';
import Joke from './Joke';

export default function RandomJoke() {
  const [joke, setJoke] = useState({
    id: 0,
    type: '',
    setup: '',
    punchline: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {hasError && <p>Something went wrong</p>}
      {isLoading && <p>Loading ....</p>}
      {!hasError && joke && (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      )}
    </div>
  );
}
