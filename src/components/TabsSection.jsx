import React, { useState } from 'react'
import TabCard from './TabCard'
import { maniTabsData, tabsData } from '../../data'
import Image from 'next/image'

function TabsSection() {
  const [selected, setSelected] = useState(tabsData[0])

  const handleSelect = (selectedTab) => {
    setSelected(selectedTab)
  }

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center p-5 text-black md:p-10 md:h-screen bg-neutral-50 md:px-28"
    >
      <h1 className="text-2xl font-medium text-center text-black md:text-3xl md:w-1/2">
        We provide the right solutions instead of the easy solutions
      </h1>

      {/* Tabs */}
      <div className="flex flex-col justify-between w-full h-full md:flex-row md:px-8">
        <div className="flex flex-col items-center justify-center w-full h-full my-5 md:p-5 md:w-1/2">
          {/* Cards */}

          {maniTabsData.map((item) => (
            <TabCard
              key={item.id}
              item={item}
              selected={selected}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        {/* Image / Laptop */}
        <div className="flex items-center justify-center w-full h-full p-2 my-5">
          <div className="w-full h-full overflow-hidden rounded-lg md:w-2/3 md:h-2/3 bg-neutral-600">
            <Image
              src={selected.image}
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

export default TabsSection
