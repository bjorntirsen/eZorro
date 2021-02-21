import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/CurrencyStyles.scss'


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <HashRouter basename="/">
=======
    <BrowserRouter>
>>>>>>> parent of 81552a9 (✨Publish repo to gh-pages)
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
