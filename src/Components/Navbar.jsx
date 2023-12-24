import React from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <>
     <header class="flex items-center bg-red  justify-between py-1 md:py-4 p-2">
   
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-2xl" aria-label="logo">
    
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 hover:text-dark text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        MyPortFolio
      </a>
    
      <nav class="hidden gap-12 lg:flex">
        <a href="/" class="text-lg font-semibold text-gray-600 hover:text-white hover:transition cursor-pointer transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
        <Link to="about" smooth={true} class="inline-flex hover:text-white hover:transition cursor-pointer items-center gap-1 text-lg font-semibold text-indigo-500">
          About
        </Link>
        <Link to="Experience" smooth={true} class="text-lg hover:text-white hover:transition cursor-pointer font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Experience</Link>
        <Link to="Project" smooth={true} class="text-lg hover:text-white hover:transition cursor-pointer font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Projects</Link>
      </nav>
      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
     
        <a href="https://github.com/nkrider7"  target='_blank' class="inline-block rounded-lg bg-transparent border px-8 py-3 text-center text-sm font-semibold text-white  hover:text-dark hover:bg-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Github</a>
      </div>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
   
    </header>
    </>
  )
}
