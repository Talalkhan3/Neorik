import Header from '@/components/Header/Header'
import React from 'react'
import Hero from './Hero'
import Designservices from './Designservices'
import Wireframe from './Wireframe'
import Userinterface from './Userinterface'
import Footer from '@/components/Footer/Footer'
import Questions from '@/components/FAQS/Questions'

const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Designservices />
        <Wireframe />
        <Userinterface /> <Questions />
        <Footer />
       
    </div>
  )
}

export default page