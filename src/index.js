import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import './assets/styles/reset.css';
import App from './compounds/App/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.querySelector(".root"));

reportWebVitals();
