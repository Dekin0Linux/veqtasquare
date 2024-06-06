import React from 'react'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Partners from './components/home/Partners'
import Getcard from './components/home/Getcard'
import Try from './components/home/Try'
import Packages from './components/home/Packages'
import Values from './components/home/Values'
import Contact from './components/home/Contact'
import Currency from './components/home/Currency'
import Chart from './components/home/Chart'
import CryptoChart from './components/home/Chart'
import { Toaster } from 'sonner'

function page() {
  return (
    <main>
      <Toaster richColors  />
     <Currency/>
    <Hero/>
    {/* <Partners/> */}
    <CryptoChart coinId={'ethereum'}/>
    <Getcard/>
    <Values/>
    {/* <Packages/> */}
    <Try/ >
    <Contact/>
   </main>
  )
}

export default page