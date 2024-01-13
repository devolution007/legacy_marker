"use client"
import Image from 'next/image';
import Head from "next/head";
import NavBar from './components/header';
import Mainsection from './components/homepage';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gift from './components/gift';
import Legacyplaque from './components/Legacy Plaque';
import LegacyGift from './components/Legacy Gift';
import Checkout from './components/checkout';

export default function Home() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path='/' element={<Mainsection />} />
            <Route path='/Gift' element={<Gift />} />
            <Route path='/Legacyplaque' element={<Legacyplaque />} />
            <Route path='/LegacyGift' element={<LegacyGift />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}
