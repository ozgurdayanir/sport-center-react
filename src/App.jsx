import { useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/header';
import Hero from './components/hero';
import Classes from './components/classes';
import BmiCalculator from './components/bmi-calculator';
import Trainers from './components/trainers';
import Products from './components/products';
import Review from './components/review';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <BmiCalculator />
      <Trainers />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}

export default App
