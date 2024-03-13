import Header from '@/components/Header/Header'
import React from 'react'
import Hero  from './Hero'
import Ourstory from './Ourstory'
import Image from 'next/image'
import Ourvalue from './Ourvalue'
import Footer from '@/components/Footer/Footer'
import Cta from '@/components/Cta/Cta'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Ourstory />
      <Image src="/About/bgimg.jpg" alt='bg Pic' width={1920} height={640} />
      <Ourvalue />
      <Cta />
      <Footer />
      </div>
  )
}

export default page