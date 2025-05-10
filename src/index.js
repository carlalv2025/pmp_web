import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Optional

// 1. Get a reference to the div with ID root
const rootElement = document.getElementById('root');

// 2. Create a root.
const root = ReactDOM.createRoot(rootElement);

// 3. Initial render: Render your app to the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();