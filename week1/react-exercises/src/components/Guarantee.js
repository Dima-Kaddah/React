import React from 'react';

function Guarantee({ img, title, description }) {
  return (
    <div className="AllGuarantee">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;
