import React from "react";
import Navbar from "../components/home/Navbar";
import Image from "next/image";

function ServicesPage() {
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
        <div className="absolute top-0 inset-0 bg-black opacity-50 rounded-lg"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Our Services
        </h1>
      </div>
      <div className="container mx-auto p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:py-48">
          <div className="flex flex-col">
            <div className="w-fit h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded px-4 flex justify-center items-center text-white md:text-3xl font-bold">
              Tokenized Real-World Assets (RWAs)
            </div>
            <div className="mb-4 shadow-2xl shadow-sky-100 p-5 md:p-10 rounded-md">
              <h3 className="text-2xl font-semibold"></h3>
              <p className="text-gray-400 pt-4">
                One of the promises of crypto and its underlying Blockchain
                technology is the ability to transform the use and exchange of
                real-world assets (RWAs). Since their inception, early digital
                asset pioneers and visionaries have long set their sights on
                revolutionizing the storage, and circulation of physical goods
                through tokenization. So far, the most successful execution of
                this concept has been the creation and use of stable-coins:
                digital assets pegged on a 1:1 basis with a fiat currency. Going
                forward, we aim to extend this functionality to other financial
                instruments, as well as collectibles, art, and even real estate.
              </p>
              <p className="text-gray-400 pt-4">
                Tokenized RWAs are digital representations of existing goods or
                value. Unlike BTC or ETH, which are discovered through network
                functions on their respective blockchains, Tokenized RWAs help
                bridge traditional or tangible assets for digital exchange.
                These relationships can exist on a one-to-one basis, such as
                stable-coins, or through the fractionalization of larger assets
                into Tokenized shares.{" "}
              </p>
              <p className="text-gray-400 pt-4">
                In addition to physical goods, Tokenized RWAs can also help
                digitize intangible financial instruments such as bonds and
                debt. While these value representations themselves only exist on
                paper or databases, tokenization can help ease their transfer,
                and circumvent costly third-party fees. For champions of
                expanding access to financial markets, such a practice could
                help put historically exclusionary markets within reach for a
                greater swath of the global population
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-fit h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded px-4 flex justify-center items-center text-white md:text-3xl font-bold">
              WALLET DEVELOPMENT
            </div>
            <div className="mb-4 shadow-2xl shadow-sky-100 p-5 md:p-10 rounded-md">
              <h3 className="text-2xl font-semibold"></h3>
              <p className="text-gray-400 pt-4">
                One of the promises of crypto and its underlying Blockchain
                technology is the ability to transform the use and exchange of
                real-world assets (RWAs). Since their inception, early digital
                asset pioneers and visionaries have long set their sights on
                revolutionizing the storage, and circulation of physical goods
                through tokenization. So far, the most successful execution of
                this concept has been the creation and use of stable-coins:
                digital assets pegged on a 1:1 basis with a fiat currency. Going
                forward, we aim to extend this functionality to other financial
                instruments, as well as collectibles, art, and even real estate.
              </p>
              <p className="text-gray-400 pt-4">
                Tokenized RWAs are digital representations of existing goods or
                value. Unlike BTC or ETH, which are discovered through network
                functions on their respective blockchains, Tokenized RWAs help
                bridge traditional or tangible assets for digital exchange.
                These relationships can exist on a one-to-one basis, such as
                stable-coins, or through the fractionalization of larger assets
                into Tokenized shares.{" "}
              </p>
              <p className="text-gray-400 pt-4">
                In addition to physical goods, Tokenized RWAs can also help
                digitize intangible financial instruments such as bonds and
                debt. While these value representations themselves only exist on
                paper or databases, tokenization can help ease their transfer,
                and circumvent costly third-party fees. For champions of
                expanding access to financial markets, such a practice could
                help put historically exclusionary markets within reach for a
                greater swath of the global population
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-fit h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded px-4 flex justify-center items-center text-white md:text-3xl font-bold">
              CRYPTO CREDIT/DEBIT CARDS
            </div>
            <div className="mb-4 shadow-2xl shadow-sky-100 p-5 md:p-10 rounded-md">
              <h3 className="text-2xl font-semibold"></h3>
              <p className="text-gray-400 pt-4">
                VeqtaSquare offers Crypto Credit and Debit card technology, that
                works exceptionally in today's growing digital payment
                infrastructure Market. Crypto debit cards share some
                similarities to prepaid credit cards. Where both can be linked
                to a crypto wallet, prepaid cards are loaded with a set amount,
                while crypto debit cards draw from portfolio holdings as a
                funding source. In other words, once a prepaid card is depleted
                of funds, it often cannot be topped up; crypto debit cards enjoy
                repeated use as long as digital assets remain available to
                complete purchases. Our Crypto credit cards will function
                identically to traditional credit cards issued by Banks. in
                that, transactions are completed in exchange for debt to be paid
                off at a later date. Purchases made on products or services with
                our crypto credit cards, can be deferred over a certain period,
                allowing for payment at a later date. Typically, participants
                who opt for our crypto credit card options, must pay off a
                portion of their balance every month, or risk incurring late
                fees and interest…. Why use a crypto debit or credit card There
                are many possible advantages for using a crypto debit card, such
                as:
              </p>
              <p className="text-gray-400 pt-4">
              Additional security: Crypto debit cards often employ standard security measures, like chip-and-pin technology, and demand multi-factor authentication before completing transactions;<br /><br />
              Cashback and rewards: Some crypto debit cards offer rewards or cashback programs, offering users the opportunity to save money, or receive additional cryptocurrency;
              </p>
              <p className="text-gray-400 pt-4">
              Greater digital asset mobility: Eligible participants can spend their cryptocurrency wherever and whenever card-issuing payments are accepted, allowing greater latitude to utilize digital assets for daily purchases
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 md:p-10 p-2 my-5">
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

export default ServicesPage;
