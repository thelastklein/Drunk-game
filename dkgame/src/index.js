import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CardGame1} from './components/card/cardGame1.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardGame2 } from './components/card2/cardGame2';


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App/>} />
        <Route path="Card" element={<CardGame1/>} />
        <Route path="Card2" element={<CardGame2/>} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


