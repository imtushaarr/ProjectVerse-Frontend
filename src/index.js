import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Keep BrowserRouter here
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
  <ToastContainer 
    position="bottom-right" 
    autoClose={5000} 
    hideProgressBar={false} 
    newestOnTop={false} 
    closeOnClick 
    rtl={false} 
    pauseOnFocusLoss 
    draggable 
    pauseOnHover 
    theme="colored" 
  />
    <BrowserRouter>  {/* Only here in index.js */}
      <App />
    </BrowserRouter>
  </div>
);