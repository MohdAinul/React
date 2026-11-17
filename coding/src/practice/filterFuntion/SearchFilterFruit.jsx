import { useState } from "react";

function SearchFilterFruit() {
  const [search, setSearch] = useState("");
  const fruits = ["Apple", "banana", "orange", "Grapes"];

  const searchFilter = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h1>Fruit Search</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchFilter.length === 0 ? (
        <p> No fruit food</p>
      ) : (
        <ul>
          {searchFilter.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SearchFilterFruit;
