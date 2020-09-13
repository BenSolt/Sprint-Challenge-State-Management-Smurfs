import React, { Component } from "react";
import "./App.css";

import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';

import RecipeTest from './RecipeTest';

import Navbar from './Navbar';

import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <Navbar/>
        </div>
        <Route exact path="/" component={RecipeTest}/>
        
        <Route path="/smurfs" component={SmurfForm}/>
        <Route path="/smurfs" component={SmurfCard}/>

        {/* <div className='FormContainer'>
        <SmurfForm/>
        </div>

        <div className='cardContainer'>
        <SmurfCard/>
        </div> */}

        {/* <div className='cardContainer'>
        <RecipeTest/>
        </div> */}


      </div>
    );
  }
}

export default App;
