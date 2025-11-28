import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeteoNavBar from './components/MeteoNavBar';
import './index.css'
import './App.css'
import SearchForm from "./components/SearchForm";
import MeteoFooter from './components/TheFooter';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <div className="layout-wrapper defaultbg">
      {/* Colonna sinistra */}
      <div className="sidebar sidebar-left bg-body-tertiary"></div>

      {/* Colonna centrale */}
      <div className="main-content">
        <BrowserRouter>
          <MeteoNavBar />
         
           <Routes>

        {/* HOME */}
        <Route path="/" element={<SearchForm />} />

        {/* PAGINA DETTAGLI */}
        <Route path="/city/:city" element={<CityDetails />} />

      </Routes>
       <MeteoFooter />
        </BrowserRouter>
      </div>

      {/* Colonna destra */}
      <div className="sidebar sidebar-right bg-body-tertiary"></div>
    </div>
  );
}

export default App
