import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';
import './Home.css';

const Home = () => {
  const [data, loading, error] = useFetch('/projects.json');
  return (
    <main className='home'>
      <h2>Mes Projets</h2>
      {!error && loading ? (
        <p>Chargement ...</p>
      ) : (
        <div className='cards'>
          {data.map((d) => (
            <Card key={d.id} {...d} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
