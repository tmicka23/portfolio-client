import React from 'react';
import useFetch from '../hooks/useFetch';
import './Details.css';
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {
  const [data, loading, error] = useFetch(
    `/projects/${parseInt(props.match.params.id)}.json`
  );

  return (
    <>
      {!error && loading ? (
        <p>Chargement ...</p>
      ) : (
        <main className='details'>
          <h2>{data.name}</h2>
          <Link to='/'> &#8592; Retour </Link>
          <img
            src={
              data.image && process.env.REACT_APP_API_BASEURL + data.image.url
            }
            alt={data.name}
          />
          <span className='tags'>
            {data.tags && data.tags.map((t) => ` ${t.name}`)}
          </span>
          <span className='date'>{data.date}</span>
          <span className='client'>Client : {data.client}</span>
          <p>{data.content}</p>
          <div className='links'>
            <a href={data.link} target='_blank' rel='noopener noreferrer'>
              Voir le site
            </a>
            <a href={data.repository} target='_blank' rel='noopener noreferrer'>
              Voir le Github
            </a>
          </div>
        </main>
      )}
    </>
  );
};

export default ProjectDetails;
