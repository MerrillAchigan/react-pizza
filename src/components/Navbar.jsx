import React from 'react'

const Navbar = () => {
  return (
    <section class="w-full h-full bg-red-900">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <a class="text-neutral-400 text-4xl font-bold hover:text-white py-4">Pizzaiolo</a>

                <button id="menuButton" class="lg:hidden text-neutral-400 hover:text-white focus:outline-none">i
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

              
                <ul class="hidden lg:flex space-x-6 items-center">
                    <li><a href="#home" class="text-neutral-400 hover:text-white">Home</a></li>
                    <li><a href="#about" class="text-neutral-400 hover:text-white">About</a></li>
                    <li><a href="#cards" class="text-neutral-400 hover:text-white">Services</a></li>
                    <li><a href="#" class="text-neutral-400 hover:text-white">Contact</a></li>
                </ul>

              
                <div id="mobileMenu" class="absolute hidden top-16 left-0 right-0 bg-slate-800 lg:hidden">
                    <ul class="flex flex-col gap-4 p-5 text-white">
                        <li><a href="#" class="text-neutral-400 hover:text-white">Home</a></li>
                        <li><a href="#" class="text-neutral-400 hover:text-white">About</a></li>
                        <li><a href="#" class="text-neutral-400 hover:text-white">Services</a></li>
                        <li><a href="#" class="text-neutral-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar