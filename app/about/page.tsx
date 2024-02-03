import Header from '@/components/Header/Header'
import React from 'react'
import Hero  from './Hero'
import Ourstory from './Ourstory'
import Image from 'next/image'
import Ourvalue from './Ourvalue'
import Getintouch from './Getintouch'
import Footer from '@/components/Footer/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Ourstory />
      <Image src="/About/bgimg.jpg" alt='bg Pic' width={1920} height={640} className='mt-32' />
      <Ourvalue />
      <Getintouch />
      <Footer />
      </div>
  )
}

export default page