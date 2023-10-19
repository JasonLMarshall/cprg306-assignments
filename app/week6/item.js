
export default function Item({name, quantity, category, id}) {
    return (
        <ul className="border border-sky-500 bg-blue-900 w-96 m-4 p-2 rounded-xl" >
            <li key={id}><h3 className= "text-xl font-bold"> {name} </h3></li>
            <li>Buy {quantity} in {category}</li>            
        </ul>
    );
}
