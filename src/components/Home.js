import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

const Home = () => {
  const [data, loading, error] = useFetch('/projects.json');
  return (
    <>
      {!error && loading ? (
        <p>Chargement ...</p>
      ) : (
        <div className='cards'>
          {data.map((d) => (
            <Card key={d.id} {...d} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
