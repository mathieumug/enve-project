import React from 'react'

function NavServicesTab({ toggleDropdown, isDropdownOpen }) {
  return (
    <li className="relative mr-12 group">
      <button
        onClick={toggleDropdown}
        className="flex items-center font-medium text-black hover:text-gray-400 focus:outline-none"
      >
        Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 13l6-6H4l6 6z" />
        </svg>
      </button>
      <ul
        className={`absolute right-0 ${
          isDropdownOpen ? 'block' : 'hidden'
        } mt-2 space-y-2 text-black bg-white rounded-md shadow-lg w-64 top-12 py-5`}
      >
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            Consultancy Services
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            Civil Works
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            Water Development
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            Electrical Works
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            Mechanical Works
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
            General Service & Supplies
          </a>
        </li>
      </ul>
    </li>
  )
}

export default NavServicesTab
