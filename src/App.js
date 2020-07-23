import React from 'react';
import './App.css';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import Todo from './components/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <aside className='app-sidebar'>coucou !</aside>
        <Switch>
          <main className='app-main'>
            <Route exact path='/' component={Home} />
            <Route exact path='/projet/:id' component={ProjectDetails} />
            <Route exact path='/todos' component={Todo} />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
