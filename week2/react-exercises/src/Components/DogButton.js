import React from 'react';

export default function Button({ handleBtn, text }) {
  return <button onClick={handleBtn}> {text} </button>;
}
