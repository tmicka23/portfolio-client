import React from 'react';
import './App.css';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import Todo from './components/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './images/logo.png';
import micka from './images/micka.png';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <aside className='app-sidebar'>
          <Link to='/'>
            <header className='app-header'>
              <img src={logo} alt='Mickaël Thely' className='logo' />
            </header>
          </Link>
          <div className='mt-container'>
            <img src={micka} alt='Mickaël Thely' />
            <h1>
              Hello ! Je m’appelle <br /> <strong>Mickaël Thely</strong> <br />{' '}
              Je suis <strong>Développeur Web Front-End</strong>
            </h1>

            <p>
              J'ai découvert le développement web et plus largement le milieu de
              la tech fin 2017 pour le bien d'un projet entrepreneurial. Ce fût
              pour moi un coup de foudre ! C'est pourquoi je me forme depuis
              plus de 2 ans seul, et aujourd'hui à la Wild Code School de Lyon,
              afin de revenir plus fort pour affronter mes futurs projets !
              Actuellement en formation “Développeur web et web mobile” , je
              suis à la recherche d’un stage (de 4-6mois) ou d’un emploi au sein
              d’une entreprise qui valorise l’humain (à partir d’Août 2020).{' '}
            </p>

            <Link to='/todolist'>Voir le Crud !</Link>
          </div>
        </aside>
        <Switch>
          <main className='app-main'>
            <Route exact path='/' component={Home} />
            <Route exact path='/projet/:id' component={ProjectDetails} />
            <Route exact path='/todolist' component={Todo} />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
