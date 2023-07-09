import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center w-full h-20 px-6 text-black bg-blue-400">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            © {currentYear} Enve Engineering Consults (U) Ltd. All rights
            reserved.
          </div>
          <a href="https://github.com/JovanMwesigwa">
            <div className="flex space-x-4 txet-sm">
              Crafted with 🖤 by Jovan
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
