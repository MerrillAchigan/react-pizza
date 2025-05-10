import React from 'react'
import about from '../assets/about-pic.jpeg'

const About = () => {
  return (
    <section id="about" class="w-full h-auto flex items-center bg-gray-200 py-12 px-6">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            
            <div class="space-y-6">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Welcome to our pizza paradise! We are passionate about delivering the freshest, tastiest pizza made with love. 
                    Our mission is to bring joy to your taste buds with every bite. Experience the difference with our handcrafted 
                    recipes and finest ingredients.
                </p>
                <a href="#" 
                   class="bg-red-600 text-white px-6 py-3 inline-block rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                   Order Now
                </a>
            </div>
            
            
            <div class="flex justify-center">
                <img src={about} alt="About Us" class="rounded-lg shadow-lg w-full lg:w-4/5" />
            </div>
        </div>
    </section>
  )
}

export default About