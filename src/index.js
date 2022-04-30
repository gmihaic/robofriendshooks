import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOMClient from "react-dom/client"
import './index.css';
//import App from './App';
//import Hello from './Hello'
//import Card from './Card'
//import CardList from './CardList'
import App2 from "./containers/App2";
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //bootstrap like styles
//import { robots, cats } from './robots.js'

const rootElem = ReactDOMClient.createRoot(document.getElementById("root"));
rootElem.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
