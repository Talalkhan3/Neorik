import Header from '@/components/Header/Header'
import React from 'react'
import Hero from './Hero'
import Desc1 from './Desc1'
import Footer from '@/components/Footer/Footer'
import Questions from '@/components/FAQS/Questions'

const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Desc1 /><Questions />
        <Footer />
        
        
    </div>
  )
}

export default page