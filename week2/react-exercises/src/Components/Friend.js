import React, { useState, useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend() {
  const [friend, setFriend] = useState({
    name: '',
    location: { street: '', city: '', postcode: '' },
    email: '',
    phone: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [getFriend, setGetFriend] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const [item] = data.results;
      setFriend(item);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [getFriend]);

  return (
    <div>
      <Button
        handleBtn={() => {
          setGetFriend(!getFriend);
        }}
        text={'Get Frind!'}
      />
      {hasError && <p>Something went wrong</p>}
      {isLoading && <p>Loading ....</p>}
      {friend && !hasError && <FriendProfile {...friend} />}
    </div>
  );
}
