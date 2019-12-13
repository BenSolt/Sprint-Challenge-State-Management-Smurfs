import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//import CreateStore and Provider
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
