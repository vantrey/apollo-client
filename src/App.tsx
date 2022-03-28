import React from 'react';
import './App.css';
import AppRoutes from './Routes';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
