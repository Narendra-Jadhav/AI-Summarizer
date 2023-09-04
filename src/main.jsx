import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// React Redux Toolkit has been used to integrate the API

import App from './App.jsx'
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
