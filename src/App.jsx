import { useState } from 'react'
import { Route, Routes, HashRouter, Navigate, useNavigate, useLocation } from "react-router-dom";

// from elements
import Head from "./components/elements/Head";
// from layout
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Scripts from "./components/layout/Scripts";
// from pages
import Review from "./components/pages/Review";

import Mainpage from './components/pages/Mainpage';

function App() {

  return (
    <>
    <HashRouter>
      <Head/>
      <Navbar/>
      <Routes>
        <Route path="/review" element={<Review />} />
        <Route path="/" element={<Mainpage/>} />
      </Routes>
      <Footer/>
      <Scripts/>
    </HashRouter>
      
    </>
  )
}

export default App
