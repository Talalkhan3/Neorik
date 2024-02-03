import Header from '@/components/Header/Header'
import React from 'react'
import Hero from './Hero'
import Discussa from './Discussa'
import Discussb from './Discussb'
import Footer from '@/components/Footer/Footer'
import Questions from '@/components/FAQS/Questions'


const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Discussa />
        <Discussb /><Questions />
        <Footer />
        
    </div>
  )
}

export default page