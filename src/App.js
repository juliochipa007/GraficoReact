import React from 'react';
import './assets/css/App.css';
import './assets/materialize/css/materialize.min.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import {info} from './data/data';
import Scope from './components/Scope';

function App() {
  return (
    <div className="App lighten-5">
      <Header />

      <header className="container">
      <Inputs />
      <Scope
        cursos={info.cursos}
      />

      </header>


    </div>
  );
}

export default App;
