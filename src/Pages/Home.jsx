import React from 'react'
import Banner from '../assets/Banner.jpg'
import { Blogs } from '../Conponents/Blogs'
import {Footer} from '../Conponents/Footer'


export const Home = () => {
  return (
    <div className='pt-[88px] w-full h-full min-h-[100vh] flex-col'>
        <div className="w-full  ">
          <img src={Banner} alt="banner" className='w-full  object-center h-[250px] md:h-[400px] ' />
        </div>
        <Blogs />
        <Footer />
    </div>
  )
}
