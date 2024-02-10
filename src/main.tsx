import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.tsx';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
