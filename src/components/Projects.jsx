import React from 'react'
import TabCard from './TabCard'
import { tabsData } from '../../data'
import Image from 'next/image'

function ProjectsTab() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center p-5 text-black bg-white md:p-10 md:h-screen md:px-28"
    >
      <h1 className="w-1/2 text-3xl font-medium text-center text-black">
        Projects
      </h1>
      <h4 className="text-sm text-center">Below are some of our services:</h4>

      {/* Tabs */}
      <ul className="flex flex-row justify-between my-4 md:p-2 md:w-2/3">
        <li className="flex flex-row items-center p-2 text-xs font-medium text-center">
          <input
            type="radio"
            name=""
            id=""
            className="hidden p-2 mr-2 md:flex"
          />
          Consultancy Services
        </li>
        <li className="flex flex-row items-center p-2 text-xs font-medium text-center">
          <input
            type="radio"
            name=""
            id=""
            className="hidden p-2 mr-2 md:flex"
          />
          Water Development
        </li>
        <li className="flex flex-row items-center p-2 text-xs font-medium text-center">
          <input
            type="radio"
            name=""
            id=""
            className="hidden p-2 mr-2 md:flex"
          />
          Surveying Works
        </li>
        <li className="flex flex-row items-center p-2 text-xs font-medium text-center">
          <input
            type="radio"
            name=""
            id=""
            className="hidden p-2 mr-2 md:flex"
          />
          Civil Works
        </li>
      </ul>

      <div className="flex flex-col justify-center w-full h-full md:items-center md:gap-4 md:p-4 md:flex-row ">
        {tabsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center mb-5 bg-white rounded-lg md:w-full md:h-full md:p-10 md:justify-evenly"
          >
            <div className="w-full h-full overflow-hidden rounded-lg bg-neutral-300">
              <Image
                src={item.image}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="flex flex-col w-full py-5 md:h-2/3">
              <h1 className="font-bold">{item.title}</h1>
              <h1>{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsTab
