import React from 'react';
import Navbar from '../components/home/Navbar';
import Image from 'next/image';

function ServicesPage() {
  return (
    <div>
      <div className="bg-slate-950">
        <Navbar />
      </div>
      <div className="relative w-full h-64 mb-6">
        {/* <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Placeholder image URL from Unsplash
          alt="Services Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        /> */}
        <div className="absolute top-0 inset-0 bg-black opacity-50 rounded-lg"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">Our Services</h1>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Service 1</h2>
            <p className="text-gray-700">Description of Service 1.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Service 2</h2>
            <p className="text-gray-700">Description of Service 2.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Service 3</h2>
            <p className="text-gray-700">Description of Service 3.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Service 4</h2>
            <p className="text-gray-700">Description of Service 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
