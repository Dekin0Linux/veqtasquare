import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-gray-950 p-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
        <div className="mb-4 md:mb-0">
          <Image src="/images/vetasquare2.png" width={200} height={50} />
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <p className="mr-4">About</p>
          <p className="mr-4">Services</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Email: business@veqtasquare.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <p className="text-center text-white mt-6">© 2004 - 2024 Vetasquare. All rights reserved.</p>
    </div>
  );
}

export default Footer;
