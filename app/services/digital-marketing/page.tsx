import Header from '@/components/Header/Header'
import React from 'react'
import Hero from './Hero'
import Footer from '@/components/Footer/Footer'
import Questions from '@/components/Basictools/Basictools'
import Bundle from './Bundle'
import Content from './Content'
import Cta from '@/components/Cta/Cta'
const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Bundle />
        <Content />
        <Questions />
        <Cta />
        <Footer />
        
    </div>
  )
}

export default page