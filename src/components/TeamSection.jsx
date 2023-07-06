import React from 'react'
import TabCard from './TabCard'
import Image from 'next/image'

import team from '../../assets/team.jpeg'

function TeamSection() {
  return (
    <div className="flex flex-row items-center justify-center h-screen text-black bg-neutral-50 ">
      <div className="flex flex-row items-center justify-center w-2/3 h-full ">
        <div className="flex flex-col justify-center w-1/2 h-full">
          <h1 className="text-2xl font-medium text-black">
            Meet the Engineers
          </h1>

          <h3 className="my-6 font-light">
            We are a team of engineers, product developers, creatives, and
            customer service experts working together to build you the best
            constructions the industry.
          </h3>

          <button className="w-1/2 p-2 bg-yellow-400 rounded-full">
            Meet the team
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-2/3 overflow-hidden rounded-lg h-1/2 bg-neutral-300">
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
