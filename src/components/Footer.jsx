import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">About Us</h3>
                    <p class="text-gray-400">
                        Welcome to our pizza paradise! We deliver freshly baked pizzas made with love and the finest ingredients. Your satisfaction is our priority.
                    </p>
                </div>
    
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="#menu" class="text-gray-400 hover:text-white transition">Menu</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
    
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul class="space-y-2">
                        <li><span class="text-gray-400">📍 123 Pizza Street, Foodie City, Accra</span></li>
                        <li><span class="text-gray-400">📞 (123) 456-7890</span></li>
                        <li><span class="text-gray-400">📧 hello@pizzaparadise.com</span></li>
                    </ul>
                </div>
            </div>
    
            
            <div class="border-t border-gray-700 my-8"></div>
    
            
            <div class="flex flex-col md:flex-row items-center justify-between">
               
                <div class="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter"></i></a>
                </div>
    
                
                <p class="text-gray-400 text-sm">
                    <ion-icon name="home"></ion-icon>  © 2025 Pizza Paradise. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer