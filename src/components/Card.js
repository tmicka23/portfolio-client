import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, date, image, tags, id }) => {
  return (
    <Link to={`/projet/${id}`} className="mt-card-link">
      <div className="mt-card">
        <div className="mt-card-header">
          <h3 className="mt-card-title">{name}</h3>
          <span className="mt-card-date">{date}</span>
        </div>
        {image.url && (
          <img
            src={
              process.env.REACT_APP_API_BASEURL +
              (process.env.NODE_ENV === "production"
                ? image.url.substring(1)
                : image.url)
            }
            alt={name}
          />
        )}
        <div className="mt-card-footer">
          <span className="tags">
            {tags?.length > 0 && tags?.map((t) => ` ${t.name}`)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
