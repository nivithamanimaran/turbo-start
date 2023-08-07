import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './containers/Navbar/navbar';
import Footer from './containers/Footer/footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          <Route path='footer' element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
