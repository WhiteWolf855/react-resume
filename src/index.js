import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global styles (if any)
import App from './App';  // Main component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure performance
reportWebVitals();
