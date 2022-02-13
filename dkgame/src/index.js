import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Card} from './components/card/card.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App/>} />
        <Route path="Card" element={<Card/>} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


