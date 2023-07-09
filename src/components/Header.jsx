import Image from 'next/image'
import bg from '../../assets/bg.jpeg'
import React from 'react'

function Header() {
  return (
    <div id="home" className="relative flex w-full h-screen">
      {/* Image */}
      <Image
        src={bg}
        layout="fill"
        objectFit="cover"
        style={{
          zIndex: -1,
        }}
      ></Image>
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
