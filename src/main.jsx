import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from '../src/reportWebVitals'; // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
