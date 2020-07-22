import React, { useEffect, useState } from 'react';
import './App.css';
import API from './service/API';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    API.get('/projects.json')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className='app'>
      <aside className='app-sidebar'>coucou !</aside>
      <main className='app-main'>
        {loading ? <p>Chargement ...</p> : JSON.stringify(data)}
      </main>
    </div>
  );
}

export default App;
