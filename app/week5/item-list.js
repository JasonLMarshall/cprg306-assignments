"use client";
import { useState } from "react";

import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState ("name");

  let items = itemsData;
    
  items = (sortBy === "name") ? items.sort((a, b) => a.name.localeCompare(b.name)) : items.sort((a, b) => a.category.localeCompare(b.category));
    
  const handleNameSorted = () => {
    setSortBy("name");
  };
    
  const handleCategorySorted = () => {
    setSortBy("category");
  };

  
      

            
  return (
    <>

      <div>
        <label for="sort"className = "m-2 p-2">Sort by:</label>
      </div>

      <div>                
        <button type="submit" className={`m-4 w-25 p-2 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"} rounded-md text-white font-bold`} onClick={handleNameSorted}>Name</button>

        <button type="submit" className={`m-2 w-25 p-2 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`} onClick={handleCategorySorted}>Category</button>

        <button type = "submit" className = {`m-4 w-25 p-2 ${sortBy === "groupedByCategory" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`}>Grouped by Category</button>
      </div>
            
      {items.map((item) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          id={item.id}
        />
      ))}
    
    </>
  );
    
}
