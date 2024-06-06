'use client'
import React from "react";
import Navbar from "../components/home/Navbar";
import Image from "next/image";
import Contact from "../components/home/Contact";

function ContactPage() {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="relative w-full h-64 mb-6">
        <img
          src="https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg" // Placeholder image URL from Unsplash
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Contact Us
        </h1>
      </div>
      <div className="container mx-auto p-6 py-36">
      <Contact/>
        
      </div>
    </div>
  );
}

export default ContactPage;
