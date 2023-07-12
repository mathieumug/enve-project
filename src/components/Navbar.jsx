import React, { useState } from 'react'
import NavServicesTab from './NavServicesTab'
import Image from 'next/image'

import logo from '../../assets/logo.png'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const scrollToPosition = (item) => {
    const aboutSection = document.getElementById(item)
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 z-40 flex items-center w-full h-20 bg-white shadow-lg md:h-24 rounded-b-3xl">
      <div className="container flex flex-row items-center px-8 mx-auto md:px-16">
        <div className="flex">
          <div className="w-10 h-10 rounded-full md:w-20 md:h-20 bg-neutral-200">
            <Image
              src={logo}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>

        <div className="items-center flex-1 hidden px-12 md:flex">
          <ul className="flex items-center justify-end flex-1 py-4">
            <li>
              <div
                onClick={() => scrollToPosition('home')}
                className="mr-12 font-medium text-gray-800 cursor-pointer hover:text-gray-400"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToPosition('about')}
                className="mr-12 font-medium text-gray-800 cursor-pointer hover:text-gray-400"
              >
                About
              </div>
            </li>

            {/* Services tab */}
            <NavServicesTab
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
            />

            {/*  */}
            <li>
              <div
                onClick={() => scrollToPosition('contact')}
                className="font-medium text-gray-800 cursor-pointer hover:text-gray-400"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button
            onClick={() => scrollToPosition('projects')}
            className="p-2 px-6 text-sm text-white bg-blue-400 rounded-full"
          >
            Learn more
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
