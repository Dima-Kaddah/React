import React from 'react';

//use props
const Hobbies = props => {
  const { hobby } = props;
  return <li>{hobby}</li>;
};

export default Hobbies;
