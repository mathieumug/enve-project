import React from 'react'

function TabCard() {
  return (
    <div className="flex flex-col w-full p-3 py-6 my-5 bg-white border-l-8 shadow-lg cursor-pointer rounded-2xl hover:border-l-blue-400 hover:pl-4">
      <h1 className="font-bold">Crop diagnostic </h1>
      <h3 className="text-sm font-extralight">
        Prognosis per plot of pests and disease
      </h3>
    </div>
  )
}

export default TabCard
