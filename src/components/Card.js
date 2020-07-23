import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ name, date, image, tags, id }) => {
  return (
    <div className='mt-card'>
      <h3 className='mt-card-title'>{name}</h3>
      {image.url && (
        <img src={process.env.REACT_APP_API_BASEURL + image.url} alt={name} />
      )}
      {tags.length > 0 && tags.map((t) => ` ${t.name}`)}
      <Link to={`/projet/${id}`}>Voir le projet</Link>
    </div>
  );
};

export default Card;
