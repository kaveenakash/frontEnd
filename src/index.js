import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {AuthContextProvider} from './store/auth-context'
ReactDOM.render(
  <React.StrictMode>
   <AuthContextProvider><App/></AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);