import React, { Component } from "react";
import ReactDOM from 'react-dom';
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';



function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/second-page" component={SecondPage} />
        </Router>
    </div>
  );
}

export default App;
