import React from 'react'

function TabCard({ item, selected, handleSelect }) {
  return (
    <div
      onClick={() => handleSelect(item)}
      className={`flex flex-col w-full p-3 py-6 my-3 md:my-5 bg-white border-l-8 shadow-lg cursor-pointer rounded-2xl ${
        selected.id === item.id && 'border-l-blue-400'
      } hover:border-l-blue-400 hover:pl-4`}
    >
      <h1 className="text-sm font-bold md:text-base">{item.title}</h1>
      <h3 className="text-xs md:text-sm font-extralight">{item.description}</h3>
    </div>
  )
}

export default TabCard
