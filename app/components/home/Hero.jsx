'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar';

function Hero() {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            videoRef?.current?.play()
        }, 3000)
    }, []);


    return (
        <div className="md:h-[100vh] h-[40vh] relative ">

            {/* <video class=" absolute inset-0 w-full h-full object-cover" src="/images/video1.mp4" autoplay loop muted></video> */}
            <video
                className=" absolute inset-0 w-full h-full object-cover"
                src="/images/videos3.mp4"
                ref={videoRef}
                controls={false}
                width="250"
                loop
                autoPlay={true}
                muted>
            </video>
            <div className="absolute inset-0  bg-gradient-to-t from-gray-900/40 to-gray-900/70 "> </div>
            <div className="absolute inset-0  text-white container mx-auto text-center  z-30 overflow-hidden">
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="md:text-4xl lg:text-6xl  font-bold w-[80%] relative text-transparent bg-gradient-to-b from-sky-500 to-blue-800 bg-clip-text">
                        <p className='text-white leading-relaxed '>Send, Buy or Sell crypto vs Cash all over the world with Flash Transfer</p>
                    </div>
                {/* <button className="my-5 bg-sky-600 px-5 py-3 rounded-full shadow-xl text-xs">Make A Purchase</button> */}
                        <p className='md:text-base text-xs text-white '>VeqtaSquare, offers a reliable Exchange services for your cryptocurrency vs cash or buy cryptocurrency with cash from our approved partners.</p>
                </div>
            </div>

        </div>
    )
}   

export default Hero