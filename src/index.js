import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ListContextProvider } from './Store/ListContext'

ReactDOM.render(

   <ListContextProvider>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
    </ListContextProvider>,
   
  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

