import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'ottm-modal-feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.ModalOttm.launch("http://localhost");