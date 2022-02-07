import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Style/custom.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);