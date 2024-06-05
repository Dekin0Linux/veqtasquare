import React from 'react'

function Getcard() {
  return (
    <div>
      <div className="container mx-auto text-center p-5 md:p-10">
        <h1 className='md:text-5xl text-3xl text-center font-bold'>
          How to Place your <span className="text-sky-500">Order</span>
        </h1>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa eaque tenetur totam repellat quo deleniti excepturi officiis laborum quisquam.</small>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:my-10 my-5">
          {/* card one */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">1</div>
            <div className="my-4 shadow-2xl shadow-sky-100 p-5 md:p-20 rounded-md">
              <h3 className="text-2xl font-semibold">Select A Package</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque iusto facere ut. Minus maxime et culpa placeat veniam expedita!
              </p>
            </div>
          </div>
          {/* cardone */}

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">2</div>
            <div className="my-4 hover:shadow-2xl hover:shadow-sky-100 p-5 md:p-20  rounded-md">
              <h3 className="text-2xl font-semibold">Fill in form</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque iusto facere ut. Minus maxime et culpa placeat veniam expedita!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-l from-sky-500 to-blue-800 rounded-full flex justify-center items-center text-white text-3xl font-bold">2</div>
            <div className="my-4 hover:shadow-2xl hover:shadow-sky-100 p-5 md:p-20 rounded-md">
              <h3 className="text-2xl font-semibold">Send Invoice Request</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque iusto facere ut. Minus maxime et culpa placeat veniam expedita!
              </p>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Getcard