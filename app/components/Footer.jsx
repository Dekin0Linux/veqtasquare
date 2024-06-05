import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-gray-950 p-10">
      <div className="container mx-auto md:flex text-white">
        <div>
          <Image src="/images/vetasquare2.png" width={200} height={50} />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="text-center text-white">© 2004 - 2024 Vetasquare all copyright reserved</p>
    </div>
  )
}

export default Footer