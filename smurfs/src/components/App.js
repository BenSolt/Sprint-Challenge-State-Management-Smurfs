import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Navbar from './Navbar';

import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';

import RecipeTest from './RecipeTest';
import Test2 from './Test2';

import ReactHook from './reactexample/ReactHook';




class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <Navbar/>
        </div>
        <Route exact path="/" component={RecipeTest}/>
        
        <Route path="/smurfs" component={SmurfForm}/>
        <Route path="/smurfs" component={SmurfCard }/>

        <Route path="/test" component={Test2}/>

        <Route path="/reacthook" component={ReactHook}/>

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
