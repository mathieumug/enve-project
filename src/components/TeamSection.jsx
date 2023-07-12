import React from 'react'
import TabCard from './TabCard'
import Image from 'next/image'

import team from '../../assets/team.jpeg'

function TeamSection() {
  return (
    <div className="flex flex-row items-center justify-center text-black md:h-screen bg-neutral-50 ">
      <div className="flex flex-col items-center justify-center w-full h-full md:w-2/3 md:flex-row ">
        <div className="flex flex-col justify-center h-full p-5 md:w-1/2">
          <h1 className="text-xl font-medium text-black md:text-2xl">
            Meet the Engineers
          </h1>

          <h3 className="text-sm font-light md:text-base ">
            We are a team of engineers, product developers, creatives, and
            customer service experts working together to build you the best
            constructions the industry.
          </h3>

          <button className="w-full p-2 my-5 text-white bg-blue-400 rounded-full md:w-1/2">
            Meet the team
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-full mx-6 overflow-hidden rounded-lg md:mx-0 md:w-2/3 h-1/2 bg-neutral-300">
            <Image
              src={team}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
