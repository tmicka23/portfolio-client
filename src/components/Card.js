import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default Card;
