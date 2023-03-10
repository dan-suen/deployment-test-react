import React from 'react';
//import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter basename='/'>
        <App />
      </HashRouter> 
  </React.StrictMode>
);

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
