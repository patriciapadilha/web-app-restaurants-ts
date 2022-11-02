import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { MagnifyingGlass } from 'phosphor-react';

function Search() {
  const { searchByName, setSearchByName, allRestaurants, setFilterRestaurants } = useContext(Context)

  useEffect(() => {
    const results = allRestaurants.filter(
      (el) => el.name.toLowerCase().includes(searchByName),
    );
    setFilterRestaurants(results);
  }, [searchByName]);

  return (
    <label>
      <MagnifyingGlass size={20}/>
      <input
        data-testid="input-seach-by-name"
        type="text"
        placeholder='Encontre um restaurante'
        onChange={ (event) => setSearchByName(event.target.value) } />
    </label>

  )
}

export default Search;
