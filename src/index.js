import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './utils/store';
import {Provider} from "react-redux"
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>

<Body/>
 </Provider>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
