"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  
  let displayItems = [...items];
  
  if (sortBy === "groupedByCategory") {   
    const groupedByCategory = displayItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    // Convert the grouped object into a sorted array
    const sortedCategories = Object.keys(groupedByCategory).sort();
    displayItems = sortedCategories.flatMap(category => 
      [category, ...groupedByCategory[category].sort((a, b) => a.name.localeCompare(b.name))]
    );
  } else {
    displayItems.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.category.localeCompare(b.category);
      }
    });
  }

  const handleNameSorted = () => setSortBy("name");
  const handleCategorySorted = () => setSortBy("category");
  const handleGroupedByCategory = () => setSortBy("groupedByCategory");
      
  return (
    <>
      <div className="mt-8">
        <label htmlFor="sort" className="m-2 p-2" >Sort by:</label>
      </div>
      <div>                
        <button type="submit" className={`m-4 w-25 p-2 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"} rounded-md text-white font-bold`} onClick={handleNameSorted}>Name</button>
        <button type="submit" className={`m-2 w-25 p-2 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`} onClick={handleCategorySorted}>Category</button>
        <button type="submit" className={`m-4 w-25 p-2 ${sortBy === "groupedByCategory" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`} onClick={handleGroupedByCategory}>Grouped by Category</button>
      </div>
            
      {displayItems.map((itemOrCategory, index) => {
        // If it's a string, then it's a category
        if (typeof itemOrCategory === 'string') {
          return <div key={index} className="capitalize text-xl font-bold text-slate-200 mt-4 pl-4">{itemOrCategory}</div>;
        } else {
          return (
            <Item
              name={itemOrCategory.name}
              quantity={itemOrCategory.quantity}
              category={itemOrCategory.category}
              id={itemOrCategory.id}
              key={itemOrCategory.id}
            />
          );
        }
      })}
    </>
  );
}


// ****Original code with no groupedByCategory functionality****
// "use client";

// import { useState } from "react";
// import Item from "./item";


// export default function ItemList({items}) {
//   const [sortBy, setSortBy] = useState ("name");
 
  
 
// const itemsCopy = items;

// itemsCopy.sort((a, b) => {
//   if (sortBy === "name") {
//     return a.name.localeCompare(b.name);
//   } else {
//     return a.category.localeCompare(b.category);
//   }
// });


// const handleNameSorted = () => {
//     setSortBy("name");
//   };
    
//   const handleCategorySorted = () => {
//     setSortBy("category");
//   };
//   //---------------------in progress
//   // const handleGroupedByCategory = () => {
//   //   setSortBy("groupedByCategory");
//   // }
  
//   //---------------------in progress
//   // items.reduce((groupedItems, item) => {
//   //   if (!groupedItems[item.category]) {
//   //     groupedItems[item.category] = [];
//   //   }
//   //   groupedItems[item.category].push(item);
//   //   return groupedItems;
//   // }, "")
  
      

            
//   return (
//     <>

//       <div class = "mt-8">
//         <label for="sort"className = "m-2 p-2">Sort by:</label>
//       </div>

//       <div>                
//         <button type="submit" className={`m-4 w-25 p-2 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"} rounded-md text-white font-bold`} onClick={handleNameSorted}>Name</button>

//         <button type="submit" className={`m-2 w-25 p-2 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`} onClick={handleCategorySorted}>Category</button>

//         <button type = "submit" className = {`m-4 w-25 p-2 ${sortBy === "groupedByCategory" ? "bg-orange-700" : "bg-orange-400"}  rounded-md text-white font-bold`}>Grouped by Category</button>
//       </div>
            
//       {itemsCopy.map((item) => (
//         <Item
//           name={item.name}
//           quantity={item.quantity}
//           category={item.category}
//           id={item.id}
//           key = {item.id}
//         />
//       ))}
    
//     </>
//   );
    
// }