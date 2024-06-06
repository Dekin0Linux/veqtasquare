import React from "react";
import Navbar from "../components/home/Navbar";
import Image from "next/image";

function AboutPage() {
  return (
    <div>
      <div className="bg-slate-950">
        <Navbar />
      </div>
      <div className="relative w-full h-64 mb-6">
        <img
          src="https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg" // Placeholder image URL from Unsplash
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 inset-0 bg-black opacity-50 "></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          About Us
        </h1>
      </div>
      <div className="container mx-auto p-6 md:py-48">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2">
            <img
              src={"/images/why-img.png"} // Placeholder image URL from Unsplash
              alt="About Us"
              width={600}
              height={400}
              // className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">We are VeqtaSquare</h1>
            <p className="mb-4">
              We started as a private Centralized Exchange services providing
              small scale p2p crypto transactions across Africa. Our vision,
              Evolved into a new whole Crypto Experience.
            </p>
            <p className="mb-4">
              At VeqtaSquare, We are the Crypto Experts and Creative Explorers
              in digital assets holdings in Africa. VeqtaSquare brings
              Captivating Expedition to the frontiers of finance, powered by
              Cryptocurrency and Blockchain technology!
            </p>
            <p className="mb-4">
              We offer small and large scale purchases, Sales and Transfers of
              BTC and USDT only. We serve business, organizations, and
              individuals that need to make urgent large transactions of the two
              major cryptocurrencies (BTC & USDT) at a fee.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Vision:</h2>
            <p className="mb-4">
              Unleashing the full potential of cryptocurrency Technology with
              next generation tools, support, and opportunities.
            </p>
            <p className="mb-4">
              We provide Tokenized flash Coins, that is only meant to serve as
              security deposit for collateral or POF purposes only. Tokens are
              digital assets that are built on a Blockchain network, typically
              using smart contracts. The Tokens we provide can represent the
              value or utility of a variety of things, such as ownership in a
              company, access to a service or platform, or even physical assets
              like real estate or precious commodities. These tokens can be
              created, transferred, and managed using Blockchain technology on a
              decentralized system, ensuring transparency and security.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 md:p-10 p-3 my-5">
          <p className="text-center font-semibold text-xl text-blue-400">
            Difference between Crypto Tokens and Cryptocurrencies
          </p>
          <small className="block text-center text-gray-600 py-4">
            While both crypto tokens and cryptocurrencies are based on
            Blockchain technology, they are distinct in a few ways.
          </small>

          <div className="overflow-auto text-xs md:text-base">
            <table class="table-auto w-full bg-white rounded-md">
              <thead>
                <tr className="">
                  <th className="md:p-3 px-1 border">Currency</th>
                  <th className="md:p-3 px-1 border">Token</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="md:p-3 px-1 border">Ripple,bitcoin,etherium </td>
                  <td className="md:p-3 px-1 border">Brick-block,BCap,Polygon</td>
                </tr>
                <tr>
                  <td className="md:p-3 px-1 border">Acts as digital currency</td>
                  <td className="md:p-3 px-1 border">Act as digital project asset</td>
                </tr>
                <tr>
                  <td className="md:p-3 px-1 border">Operates on it own Blockchain and can not be moved </td>
                  <td className="md:p-3 px-1 border"> Is Blockchain agnostic</td>
                </tr>
                <tr>
                  <td className="md:p-3 px-1 border">Used as a source of digital payment  </td>
                  <td className="md:p-3 px-1 border">Used as a source of digital payment and for agreements.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
