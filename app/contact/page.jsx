import React from "react";
import Navbar from "../components/home/Navbar";
import Image from "next/image";

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
      <div className="container mx-auto p-6 py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="mb-3 py-5">
              We'd love to hear from you. Fill out the form below to send us a
              message.
            </p>
            <form className="p-10 bg-white shadow">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input w-full p-2 outline-none border"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full p-2 outline-none border"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea w-full outline-none border p-2"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="mb-3">
              Feel free to reach out to us using the following contact
              information:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1234567890
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
