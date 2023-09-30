"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    
    const handleSubmit = (event) => {
    event.preventDefault();

    
    const item = {
        name,
        quantity,
        category,
    };
    
    
    console.log(item);

    
    alert("Added Item: " + name + ", quantity: " + quantity + ", category: " + category)

    
    setName("");
    setQuantity(1);
    setCategory("produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
      const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    
      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };  



    return (
        <div>
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">               
                <div>
                
                    <form onSubmit={handleSubmit}>
                        
                        <div className="block mb-4">                            
                            <input
                                type = "text"
                                placeholder = "Item name"
                                required
                                onChange = {handleNameChange}
                                value = {name}
                                className="mt-1 p-2 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            />
                        </div>

                        
                        <div className="block mb-4">                            
                            <input
                                type = "number"
                                min = "1"
                                max = "99"                                
                                required
                                onChange = {handleQuantityChange}
                                value = {quantity}
                                className="mt-1 p-2 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            />                        
                        </div>

                        
                        <div className="block mb-4">
                            
                            <select className = "mt-1 p-2 block w-full rounded-md text-black bg-gray-100 focus:bg-white" value={category} onChange={handleCategoryChange}>                               
                                                          
                                <option value = "produce">Produce</option>
                                <option value = "dairy">Dairy</option>
                                <option value = "bakery">Bakery</option>
                                <option value = "meat">Meat</option>
                                <option value = "frozen foods">Frozen Foods</option>
                                <option value = "canned goods">Canned Goods</option>
                                <option value = "dry goods">Dry Goods</option>
                                <option value = "beverages">Beverages</option>
                                <option value = "snacks">Snacks</option>
                                <option value = "household">Household</option>
                                <option value = "other">Other</option>
                                
                            </select>                        
                        </div>


                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md text-white">+</button>
                    

                    </form> 
                </div>
            </div>
        </div>
    );
}

