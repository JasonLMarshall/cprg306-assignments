"use client";
import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState (itemsData);
  
  
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
      <main>
        <h1 className="text-4xl font-bold p-3 mb-2 text-left text-white">Shopping List </h1>
        <h3 className="text-2xl font-bold pl-4 text-left text-white">Add New Item</h3>       
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items = {items}/>        
      </main>
  );
}

