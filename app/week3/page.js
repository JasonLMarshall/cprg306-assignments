import ItemList from "./item-list";

// this is the output page for week3
// "ItemList" <below> is making a call to the ItemList component on item-list.js

export default function Page() {
    
  return (
      <main>
        <h1 className="text-4xl font-bold m-6 text-left text-white">Shopping List </h1>
        <ItemList/>        
      </main>
    );
  }
  