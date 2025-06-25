import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaSearch } from "react-icons/fa";

export default function Search() {

  const [active, setActive] = useState(false);

  console.log(active);
  
  const handleClick = () => {
    setActive(!active);
  };
  
  const searchData = useLoaderData();
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="header__search">
      <input type="search" name="search" id="search" placeholder="Search product..." onChange={handleChange} className="search--input"/>
      <FaSearch
          onClick={handleClick}
          className={`search-icon${active ? ' search-icon--active' : ''}`}
      />
      {active && (<input type="search" name="search" id="search" placeholder="Search product..." onChange={handleChange} className="search--inputActive"/> )}
      <div className="search__show">
        {searchData && searchData
          .filter((itm) =>
              search.trim() !== '' && itm.type.toLowerCase().includes(search.toLowerCase())
          )
          .map((itm) => (
              <Link to={`/products/${itm.id}`} key={itm.id} className="search--list" onClick={() => {
                setSearch('');
                setActive(false);
              }}>
                {itm.type} 
              </Link>
          ))}
      </div>
    </div>
  )
}