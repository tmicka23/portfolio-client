import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const [data, loading, error] = useFetch('/projects.json');
  return (
    <div className='app'>
      <aside className='app-sidebar'>coucou !</aside>
      <main className='app-main'>
        {!error && (loading ? <p>Chargement ...</p> : JSON.stringify(data))}
      </main>
    </div>
  );
}

export default App;
