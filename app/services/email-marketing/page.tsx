import Header from '@/components/Header/Header'
import React from 'react'
import Hero from './Hero'
import Emaila from './Emaila'
import Emailb from './Emailb'
import Footer from '@/components/Footer/Footer'
import Questions from '@/components/FAQS/Questions'

const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Emaila />
        <Emailb /><Questions />
        <Footer />
        
    </div>
  )
}

export default page