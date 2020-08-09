import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBall from './components/NavBall';
import Active from './components/Active';
import Reports from './components/Reports';
import Search from './components/Search';
import AddReferal from './components/AddReferal';
import Referral from './components/Referral';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/active' component={Active}/>
        <Route exact path='/reports' component={Reports}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/add' component={AddReferal}/>
        <Route exact path='/referral' component={Referral}/>
      </Switch>
      <NavBall/>
    </div>
  );
}

export default App;
