import React from 'react'
import TabCard from './TabCard'

function TabsSection() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen p-10 text-black bg-neutral-50 px-28"
    >
      <h1 className="w-1/2 text-3xl font-medium text-center text-black">
        We provide the right solutions instead of the easy solutions
      </h1>

      {/* Tabs */}
      <div className="flex flex-row justify-between w-full h-full px-8">
        <div className="flex flex-col items-center justify-center w-1/2 h-full p-5">
          {/* Cards */}

          <TabCard />
          <TabCard />
          <TabCard />
        </div>

        {/* Image / Laptop */}
        <div className="flex items-center justify-center w-full h-full p-2 ">
          <div className="w-2/3 rounded-lg h-2/3 bg-neutral-600"></div>
        </div>
      </div>
    </div>
  )
}

export default TabsSection
