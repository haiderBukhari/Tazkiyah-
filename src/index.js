import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from "react-redux"
import { store } from "./store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </Router>
  // </React.StrictMode>
);