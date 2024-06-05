'use client'
import React, { useEffect, useRef } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import Navbar from './Navbar';

function Hero() {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play()
        }, 3000)
    }, []);


    return (
        <div className="md:h-[100vh] h-[40vh] relative ">

            {/* <video class=" absolute inset-0 w-full h-full object-cover" src="/images/video1.mp4" autoplay loop muted></video> */}
            <video
                className=" absolute inset-0 w-full h-full object-cover"
                src="/images/video2.mp4"
                ref={videoRef}
                controls={false}
                width="250"
                loop
                autoPlay={true}
                muted>
            </video>
            <div className="absolute inset-0  bg-gradient-to-t from-gray-900/90 to-gray-900/70 "> </div>
            <div className="absolute inset-0  text-white container mx-auto text-center  z-30 overflow-hidden">
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="md:text-4xl lg:text-6xl leading-relaxed  font-bold w-[80%] relative text-transparent bg-gradient-to-b from-sky-500 to-blue-800 bg-clip-text">
                        <TypeWriterEffect
                            startDelay={100}
                            cursorColor="white"
                            text="The Best Choice for Online Credit Card Payment."
                            typeSpeed={100}
                            textStyle={{
                                fontWeight: 500,
                                fontSize: '1.5em',
                                textAlign: 'center',
                            }}
                        />
                    </div>
                <button className="my-5 bg-sky-600 px-5 py-3 rounded-full shadow-xl ">Make A Purchase</button>
                </div>
            </div>

        </div>
    )
}

export default Hero