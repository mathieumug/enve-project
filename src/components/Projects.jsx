import React from 'react'
import TabCard from './TabCard'
import { tabsData } from '../../data'
import Image from 'next/image'

function ProjectsTab() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center h-screen p-10 text-black bg-white px-28"
    >
      <h1 className="w-1/2 text-3xl font-medium text-center text-black">
        Projects
      </h1>
      <h4>Below are some of our services:</h4>

      {/* Tabs */}
      <ul className="flex flex-row justify-between w-2/3 p-2 my-4">
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Consultancy Services
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Water Development
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Surveying Works
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Civil Works
        </li>
      </ul>

      <div className="flex flex-row items-center justify-center w-full h-full gap-4 p-4 ">
        {tabsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full h-full p-10 bg-white rounded-lg justify-evenly"
          >
            <div className="w-full h-full overflow-hidden rounded-lg bg-neutral-300">
              <Image
                src={item.image}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="flex flex-col w-full py-5 h-2/3">
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
