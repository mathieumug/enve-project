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
      className="flex flex-col items-center justify-center h-screen p-10 text-black bg-neutral-50 px-28"
    >
      <h1 className="w-1/2 text-3xl font-medium text-center text-black">
        We provide the right solutions instead of the easy solutions
      </h1>

      {/* Tabs */}
      <div className="flex flex-row justify-between w-full h-full px-8">
        <div className="flex flex-col items-center justify-center w-1/2 h-full p-5">
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
        <div className="flex items-center justify-center w-full h-full p-2 ">
          <div className="w-2/3 overflow-hidden rounded-lg h-2/3 bg-neutral-600">
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
