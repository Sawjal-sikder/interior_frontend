import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Bannar from '../component/bannar/Bannar'
import Services from './Services'
import Products from './Products'
import Portfolio from './Portfolio'
import ContactUs from './ContactUs'
import Clients from './Clients'
import Reviews from './Reviews'
import LatestPoject from './LatestPoject'
import Call from '../component/Call'
import ChooesUs from '../component/ChooesUs'
import Footer from '../component/Footer/Footer'




function home() {
  return (
    <>
      <Navbar />
      <Bannar />
      <Services />
      <Products />
      <Portfolio />
      <ContactUs />
      <Clients />
      <Reviews />
      <LatestPoject />
      <Call />
      <ChooesUs />
      <Footer />

    </>
  )
}

export default home
