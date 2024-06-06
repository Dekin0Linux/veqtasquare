import React from 'react'

function Getcard() {
  return (
    <div>
      <div className="container mx-auto text-center p-5 md:p-20">
        <h1 className='md:text-5xl text-3xl text-center font-bold'>
          WHAT WE <span className="text-sky-500">OFFER</span>
        </h1>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa eaque tenetur totam repellat quo deleniti excepturi officiis laborum quisquam.</small>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mt-20 my-5">
          {/* card one */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">1</div>
            <div className="my-4 shadow-2xl shadow-sky-100 p-5 md:p-20 rounded-md">
              <h3 className="text-2xl font-semibold">Tokenized Real-World Assets (RWAs)</h3>
              <p className="text-gray-400 pt-4">
              One of the promises of crypto and its underlying Blockchain technology is the ability to transform the use and exchange of real-world assets
              </p>
            </div>
          </div>
          {/* cardone */}

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">2</div>
            <div className="my-4 hover:shadow-2xl hover:shadow-sky-100 p-5 md:p-20  rounded-md">
              <h3 className="text-2xl font-semibold">WALLET DEVELOPMENT</h3>
              <p className="text-gray-400 pt-4">
                VeqtaSquare developments, offers a Comprehensive Cryptocurrency Wallet Development Services, which cater to diverse user and business needs
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">2</div>
            <div className="my-4 hover:shadow-2xl hover:shadow-sky-100 p-5 md:p-20 rounded-md">
              <h3 className="text-2xl font-semibold">CRYPTO CREDIT/DEBIT CARDS</h3>
              <p className="text-gray-400 pt-4">
              VeqtaSquare offers Crypto Credit and Debit card technology, that works exceptionally in today's growing digital payment infrastructure Market.
              </p>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Getcard