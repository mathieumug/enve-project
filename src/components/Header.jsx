'use client'
import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import bg1 from '../../assets/bg.jpeg'
import bg2 from '../../assets/enlarge_solar.png'

function Header() {
  return (
    <div id="home" className="relative flex w-full h-screen">
      {/* Image */}
      <Image
        src={bg1}
        layout="fill"
        objectFit="cover"
        style={{
          zIndex: -1,
        }}
      ></Image>
      {/* <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000} // Interval between slides in milliseconds (5 seconds in this example)
        transitionTime={500} // Transition duration in milliseconds
      >
        <div>
          <Image
            src={bg1}
            objectFit="cover"
            fill={true}
            style={{
              zIndex: -1,
            }}
          />
        </div>
        <div>
          <Image
            src={bg2}
            fill={true}
            objectFit="cover"
            style={{
              zIndex: -1,
            }}
          />
        </div>
      </Carousel> */}

      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          mixBlendMode: 'multiply',
        }}
      ></div>

      {/* text */}
      <div className="absolute inset-0 flex flex-col justify-center flex-1 w-1/2 px-8 mx-16 ">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white">
            Enve Engineering Consults
          </h1>

          <h5 className="my-6 text-2xl">
            Building trusted relationships by serving our clients through
            integrity, honesty, hardwork and accountability.
          </h5>
        </div>

        <div className="flex">
          {/* button */}
          <button className="p-3 text-white bg-blue-400 rounded-full px-14">
            Learn more
          </button>
        </div>
      </div>

      {/* Right header */}
    </div>
  )
}

export default Header
