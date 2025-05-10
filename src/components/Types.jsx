import React from 'react'
import bbg from '../assets/bbg-pizz.jpeg'
import margherita from '../assets/margherita-pizz.jpeg'
import veggie from '../assets/veggie-pizz.jpeg'
import bbq from '../assets/bbq-pizz.jpeg'

const Types = () => {
  return (
    <section class="w-full h-auto py-12 px-6">
        <div class="max-w-7xl mx-auto">
            
            <div class="text-center mb-8">
                <h2 class="text-4xl font-bold text-gray-800">Types of Pizzas</h2>
                <p class="text-gray-600 text-lg mt-2">Explore our variety of freshly baked pizzas, made with the finest ingredients!</p>
            </div>
    
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div class="card rounded-lg shadow-lg bg-white p-4">
                    <img src={margherita} alt="Margherita Pizza" class="w-full h-48 object-cover rounded-t-lg" />
                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-semibold text-gray-800">Margherita Pizza</h3>
                        <p class="text-gray-600 mt-2">A classic pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.</p>
                    </div>
                    <div class="flex justify-between items-center py-5">
                        
                        <button class="bg-red-800 text-white p-4 shadow-lg rounded-lg mx-auto hover:bg-red-900 transition-all duration-300"><ion-icon name="cart-outline"></ion-icon>Shop now</button>
                    </div>
                </div>
    
                
                <div class="card rounded-lg shadow-lg bg-white p-4">
                    <img src={bbg} alt="Chicken Pizza" class="w-full h-48 object-cover rounded-t-lg" />
                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-semibold text-gray-800">Chicken Pizza</h3>
                        <p class="text-gray-600 mt-2">A hearty pizza topped with grilled chicken, mozzarella, and tangy BBQ sauce.</p>
                    </div>
                    <div class="flex justify-between items-center py-5">
                        
                        <button class="bg-red-800 text-white p-4 shadow-lg rounded-lg mx-auto hover:bg-red-900 transition-all duration-300"><ion-icon name="cart-outline"></ion-icon>Shop now</button>
                    </div>
                </div>
    
                
                <div class="card rounded-lg shadow-lg bg-white p-4">
                    <img src={bbq} alt="BBQ Pizza" class="w-full h-48 object-cover rounded-t-lg" />
                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-semibold text-gray-800">BBQ Pizza</h3>
                        <p class="text-gray-600 mt-2">A smoky and savory pizza with BBQ sauce, mozzarella, and fresh toppings.</p>
                    </div>
                    <div class="flex justify-between items-center py-5">
                        
                        <button class="bg-red-800 text-white p-4 shadow-lg rounded-lg mx-auto hover:bg-red-900 transition-all duration-300"><ion-icon name="cart-outline"></ion-icon>Shop now</button>
                    </div>
                </div>
    
                
                <div class="card rounded-lg shadow-lg bg-white p-4">
                    <img src={veggie} alt="Veggie Pizza" class="w-full h-48 object-cover rounded-t-lg" />
                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-semibold text-gray-800">Veggie Pizza</h3>
                        <p class="text-gray-600 mt-2">A vibrant mix of fresh veggies, mozzarella, and a flavorful tomato base.</p>
                    </div>
                    <div class="flex justify-between items-center py-5">
                        
                        <button class="bg-red-800 text-white p-4 shadow-lg rounded-lg mx-auto hover:bg-red-900 transition-all duration-300"><ion-icon name="cart-outline"></ion-icon>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Types