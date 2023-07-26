/* eslint-disable */

import type { NextPage } from 'next'
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import State from "../components/State";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";





const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <State/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Home