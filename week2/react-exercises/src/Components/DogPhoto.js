import React from 'react';
export default function DogPhoto({ DogSrc, text }) {
  return (
    <div>
      <img src={DogSrc} alt={text} />
    </div>
  );
}
