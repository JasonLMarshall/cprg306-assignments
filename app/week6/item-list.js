"use client";

import { useState } from "react";
import Item from "./item";


export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState ("name");
 
  
 
const itemsCopy = items;

itemsCopy.sort((a, b) => {
  if (sortBy === "name") {
    return a.name.localeCompare(b.name);
  } else {
    return a.category.localeCompare(b.category);
  }
});


const handleNameSorted = () => {
    setSortBy("name");
  };
    
  const handleCategorySorted = () => {
    setSortBy("category");
  };
  //---------------------in progress
  // const handleGroupedByCategory = () => {
  //   setSortBy("groupedByCategory");
  // }
  
  //---------------------in progress
  // items.reduce((groupedItems, item) => {
  //   if (!groupedItems[item.category]) {
  //     groupedItems[item.category] = [];
  //   }
  //   groupedItems[item.category].push(item);
  //   return groupedItems;
  // }, "")
  
      

            
  return (
    <>

      <div class = "mt-8">
        <label for="sort"className = "m-2 p-2">Sort by:</label>
      </div>

      <div>                
        <button type="submit" className={`m-4 w-25 p-2 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"} rounded-md text-white font-bold`} onClick={handleNameSorted}>Name</button>

        <button type="submit" className={`m-2 w-25 p-2 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`} onClick={handleCategorySorted}>Category</button>

        <button type = "submit" className = {`m-4 w-25 p-2 ${sortBy === "groupedByCategory" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`}>Grouped by Category</button>
      </div>
            
      {itemsCopy.map((item) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          id={item.id}
          key = {item.id}
        />
      ))}
    
    </>
  );
    
}

