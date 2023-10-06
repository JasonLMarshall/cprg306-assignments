"use client";
import { useState } from "react";

import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState ("name");

    let items = itemsData;
    
    items = (sortBy === "name") ? items.sort((a, b) => b.name - a.name) : items.sort((a, b) => b.category - a.category);





    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
      
      // "Item" below refers to Item Component from item.js 
      // the above item object property values are passed to the Item component to render each item
      // 
      return (
        <>

            <div>
                <label for="sort"className = "m-2 p-2">Sort by:</label>
            </div>

            <div>                
                <button type="submit" className="m-4 w-25 p-2  bg-orange-400 hover:bg-orange-700  rounded-md text-white font-bold">Name</button>

                <button type="submit" className="m-2 w-25 p-2  bg-orange-500 hover:bg-orange-700 rounded-md text-white font-bold">Category</button>

                <button type = "submit" className = "m-4 w-25 p-2 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-bold">Grouped by Category</button>
            </div>

            <Item                           // "Item" is a call to the component on item.js
                name={item1.name}
                quantity={item1.quantity}
                category={item1.category}
            />
        
            <Item
                name={item2.name}
                quantity={item2.quantity}
                category={item2.category}
            />

            <Item
                name={item3.name}
                quantity={item3.quantity}
                category={item3.category}
            />

            <Item
                name={item4.name}
                quantity={item4.quantity}
                category={item4.category}
            />

            <Item
                name={item5.name}
                quantity={item5.quantity}
                category={item5.category}
            />

            <Item
                name={item6.name}
                quantity={item6.quantity}
                category={item6.category}
            />

            <Item
                name={item7.name}
                quantity={item7.quantity}
                category={item7.category}
            />

            <Item
                name={item8.name}
                quantity={item8.quantity}
                category={item8.category}
            />

            <Item
                name={item9.name}
                quantity={item9.quantity}
                category={item9.category}
            />

            <Item
                name={item10.name}
                quantity={item10.quantity}
                category={item10.category}
            />

            <Item
                name={item11.name}
                quantity={item11.quantity}
                category={item11.category}
            />

            <Item
                name={item12.name}
                quantity={item12.quantity}
                category={item12.category}
            />
        </>
      );
    
}