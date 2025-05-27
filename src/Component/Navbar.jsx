import React from 'react'
import { Link } from 'react-router'
Link
function Navbar() {
  return (


<nav className="bg-white border-b-1 border-amber-700 shadow-lg shadow-amber-900/50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://cdn-icons-png.flaticon.com/128/4228/4228952.png" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-amber-900 text-2xl font-semibold whitespace-nowrap ">Articlely</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li>
            <Link to="/">
          <p  className="block py-2 px-3 text-white bg-amber-700 rounded-sm md:bg-transparent md:text-amber-700 md:p-0" aria-current="page">Home</p>
       </Link> </li>

        <li>
            <Link to="/aboutus">
          <p  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-700 md:p-0 ">About</p>
       </Link> </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar