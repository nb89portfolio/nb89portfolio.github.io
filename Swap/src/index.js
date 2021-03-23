import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './navBar/NavBar';
import Home from './home/Home';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
