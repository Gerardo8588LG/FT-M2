 function SearchBar({onsearch}) {
   return (
      <div>
         
         <input type='search' />
         <button onClick = {onsearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;