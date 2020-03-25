import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login"
import Register from "./Components/Register"
import Articles from "./Components/Articles"
import PrivateRoute from "./Components/PrivateRoute"


function App() {

  return (
    <Router>
    <div className="App">
      <Link to="/Login"> <h2> Login</h2></Link>
      <Link to="/Register"> <h2> Register</h2></Link>

      <Route path = "/Login" component ={Login}/>
      <Route path = "/Register" component = {Register}/>
      <PrivateRoute path = "/Articles" component = {Articles}/>
      
    </div>
    </Router>
    
  );
}

export default App;
