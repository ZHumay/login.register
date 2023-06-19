import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './slices/rootReducer';

// Redux store'u oluşturun
const store = configureStore({
  reducer: rootReducer,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,

);
