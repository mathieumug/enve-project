import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center w-full h-20 px-3 text-white bg-blue-400 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm ">
            © {currentYear} Enve Engineering Consults (U) Ltd. All rights
            reserved.
          </div>
          <a href="https://github.com/JovanMwesigwa" className="hidden md:flex">
            <div className="flex space-x-4 text-xs md:text-sm">
              Crafted with 🖤 by Jovan
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
