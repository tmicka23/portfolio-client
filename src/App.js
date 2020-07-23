import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import Card from './components/Card';

function App() {
  const [data, loading, error] = useFetch('/projects.json');
  return (
    <div className='app'>
      <aside className='app-sidebar'>coucou !</aside>
      <main className='app-main'>
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
    </div>
  );
}

export default App;
