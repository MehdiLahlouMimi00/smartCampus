import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Restauration1 from './Restauration1';
import Restauration2 from './Restauration2';
import Restauration3 from './Restauration3';
import Restauration4 from './Restauration4';
import Restauration5 from './Restauration5';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/resto1" element={<Restauration1/>}/>
      <Route path="/resto2" element={<Restauration2/>}/>
      <Route path="/resto3" element={<Restauration3/>}/>
      <Route path="/resto4" element={<Restauration4/>}/>
      <Route path="/resto5" element={<Restauration5/>}/>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
  </React.StrictMode>
);

