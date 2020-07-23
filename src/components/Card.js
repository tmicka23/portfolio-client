import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ name, date, image, tags, id }) => {
  return (
    <Link to={`/projet/${id}`} className='card-link'>
      <div className='mt-card'>
        <h3 className='mt-card-title'>{name}</h3>
        <span className='date'>{date}</span>
        {image.url && (
          <img src={process.env.REACT_APP_API_BASEURL + image.url} alt={name} />
        )}
        <span className='tags'>
          {tags.length > 0 && tags.map((t) => ` ${t.name}`)}
        </span>
      </div>
    </Link>
  );
};

export default Card;
