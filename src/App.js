import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/todos' component={TodosContainer} />
      </Switch>
    </div>
  );
}

export default App;
