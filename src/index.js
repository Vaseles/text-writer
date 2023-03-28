import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './assets/styles/style.scss'
import ThemeProvider from './components/ThemeChanger/ThemeChanger';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

