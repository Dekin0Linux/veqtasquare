import React from 'react'
import Image from 'next/image'

function Packages() {
    return (
        <div className=''>
            <div className="container mx-auto text-center p-5 md:p-10">
                <h1 className='md:text-5xl text-3xl text-center font-bold'>
                    The Credit  <span className="text-sky-500">Card</span> Options
                </h1>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa eaque tenetur totam repellat quo deleniti excepturi officiis laborum quisquam.</small>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-12 md:gap-5 md:my-32 my-20">
                    {/* card one */}
                    <div className="relative h-[500px]  shadow-2xl rounded-2xl ">
                        <div className="inset-10 absolute top-[-20px]">
                            <div className="rounded-lg overflow-hidden shadow-xl shadow-gray-300/50 md:animate-bounce">
                                <Image src='/images/standard.jpg' width={600} height={500} />
                            </div>
                            <div className="my-5">
                                <h3 className='md:text-4xl text-2xl text-center font-bold py-2'>Standard</h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque unde repellendus officia eveniet iste distinctio voluptas similique pariatur illo?</div>
                            <button className="px-5 py-3 rounded-full text-white shadow-xl hover:shadow-blue-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">PLACE ORDER</button>
                        </div>

                    </div>
                    {/* cardone */}

                    <div className="relative h-[500px]  shadow-2xl rounded-2xl ">
                        <div className="inset-10 absolute top-[-20px]">
                            <div className="rounded-lg overflow-hidden shadow-xl shadow-gray-300/50 md:animate-bounce">
                                <Image src='/images/platinum.jpg' width={600} height={500} />
                            </div>
                            <div className="my-5">
                                <h3 className='md:text-4xl text-2xl text-center font-bold py-2'>Gold</h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque unde repellendus officia eveniet iste distinctio voluptas similique pariatur illo?</div>
                            <button className="px-5 py-3 rounded-full text-white shadow-xl hover:shadow-blue-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">PLACE ORDER</button>
                        </div>

                    </div>

                    <div className="relative h-[500px]  shadow-2xl rounded-2xl ">
                        <div className="inset-10 absolute top-[-20px]">
                            <div className="rounded-lg overflow-hidden shadow-xl shadow-gray-300/50 md:animate-bounce">
                                <Image src='/images/gold.jpg' width={400} height={500} />
                            </div>
                            <div className="my-5">
                                <h3 className='md:text-4xl text-2xl text-center font-bold py-2'>Platinum</h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque unde repellendus officia eveniet iste distinctio voluptas similique pariatur illo?</div>
                            <button className="px-5 py-3 rounded-full text-white shadow-xl hover:shadow-blue-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">PLACE ORDER</button>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default Packages