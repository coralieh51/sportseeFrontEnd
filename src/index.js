import React from 'react';
import ReactDOM from 'react-dom';
import "./style/scss/main.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Returns the main app on the div with the id "root" of your index.html file in public folder
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
