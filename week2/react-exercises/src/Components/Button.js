import React from 'react';

function Button({ handleBtn, text }) {
  return <button onClick={handleBtn}> {text} </button>;
}

export default Button;
