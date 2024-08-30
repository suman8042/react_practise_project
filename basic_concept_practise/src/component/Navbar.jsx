import React from 'react'

const Navbar = () => {
  return (
 <nav className="bg-gray-800 p-4">
 <div className="container mx-auto flex justify-between items-center">
   <a href="#" className="text-white text-xl font-bold">Brand</a>
   <div className="space-x-4">
     <a href="#" className="text-gray-300 hover:text-white">Home</a>
     <a href="#" className="text-gray-300 hover:text-white">About</a>
     <a href="#" className="text-gray-300 hover:text-white">Services</a>
     <a href="#" className="text-gray-300 hover:text-white">Contact</a>
   </div>
</div>
</nav>
   
  )
}

export default Navbar

