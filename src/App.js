import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Componnents/Home';

//לינקים

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /></Routes>
    </div>
  );
}
export default App;
