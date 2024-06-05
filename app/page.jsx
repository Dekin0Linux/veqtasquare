import React from 'react'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Partners from './components/home/Partners'
import Getcard from './components/home/Getcard'
import Try from './components/home/Try'
import Packages from './components/home/Packages'
import Values from './components/home/Values'
import Contact from './components/home/Contact'

function page() {
  return (
   <main>
    <Hero/>
    <Partners/>
    <Getcard/>
    <Values/>
    <Packages/>
    <Try/ >
    <Contact/>
   </main>
  )
}

export default page