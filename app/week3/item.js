// this component gets called by ItemList component from item-list.js

export default function Item({name, quantity, category}) {
    return (
        <ul className="border border-sky-500 bg-blue-900 w-96 m-4 p-2 rounded-xl" >
            <li><h3 className= "text-xl font-bold"> {name} </h3></li>
            <li>Buy {quantity} in {category}</li>            
        </ul>
    );
}
