import React from 'react';
import Hobbies from './Hobbies';

function HobbyList() {
  const arrayOfHobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];
  return (
    <ul className="HobbyList">
      {arrayOfHobbies.map(hob => (
        <Hobbies hobby={hob} />
      ))}
    </ul>
  );
}
export default HobbyList;
