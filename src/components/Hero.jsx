import React from 'react'
import hero from '../assets/hero-bg.jpeg'

const Hero = () => {
  return (
    <section href="#home" style={{backgroundImage: `url(${hero})`}} class="w-full h-screen flex items-center justify-center bg-cover bg-center">
        <div class="text-center space-y-6 bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 class="text-4xl lg:text-7xl font-bold text-white">Delicious Pizza, Freshly Baked</h1>
            <p class="text-white text-lg">Experience the taste of authentic pizza made with love</p>
            <div>
                <a href="#" 
                   class="bg-red-600 text-white px-6 py-3 inline-block rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                   Order Now
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero