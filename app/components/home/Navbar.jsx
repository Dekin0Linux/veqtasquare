import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="p-3 z-50">
        <div className="container mx-auto flex justify-between items-center text-white">
            <div>
                <Image src="/images/vetasquare2.png" width={250} height={50}/>
            </div>
            <div className="flex gap-10 items-center">
                <Link href={'/'} className='active:text-green-600 hover:text-green-600'>Home</Link>
                <Link href={'/about'} className='active:text-green-600 hover:text-green-600'>About Us</Link>
                <Link href={'/offer'} className='active:text-green-600 hover:text-green-600'>Packages</Link>
                <Link href={'contact'} className="bg-green-700  text-white px-4 py-3 rounded-full hover:bg-green-800 shadow">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar