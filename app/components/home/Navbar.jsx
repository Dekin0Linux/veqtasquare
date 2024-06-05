import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="p-3 z-50">
        <div className="container mx-auto flex justify-between items-center text-white">
            <div className='hidden md:block'>
                <Image src="/images/vetasquare2.png" width={250} height={50}/>
            </div>
            <div className="flex md:gap-10 justify-between md:justify-end gap-3 items-center w-full">
                <Link href={'/'} className='active:text-green-600 hover:text-green-600'>Home</Link>
                <Link href={'/about'} className='active:text-green-600 hover:text-green-600'>About Us</Link>
                <Link href={'/offer'} className='active:text-green-600 hover:text-green-600'>Services</Link>
                <Link href={'/contact'} className="bg-green-700 text-xs md:text-md text-white md:px-4 md:py-3 p-2 rounded-full hover:bg-green-800 shadow">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar