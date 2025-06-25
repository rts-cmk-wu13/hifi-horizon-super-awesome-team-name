import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaSearch } from "react-icons/fa";

export default function Search() {

  const searchData = useLoaderData();
  const [active, setActive] = useState(false);
      const handleClick = () => {
          setActive(!active);
      };

      const [search, setSearch] = useState("");
          console.log(searchData);
          const handleChange = e => {
              setSearch(e.target.value)
          }

  return (
    <div className="header__search">
      <input type="search" name="search" id="search" placeholder="Search product..." onChange={handleChange} onClick={handleClick} />
      <FaSearch
          onClick={handleClick}
          className={`search-icon${active ? ' search-icon--active' : ''}`}
      />
      <div className="search__show">
        {active && searchData && searchData
          .filter((itm) =>
              search.trim() !== '' && itm.type.toLowerCase().includes(search.toLowerCase())
          )
          .map((itm) => (
              <Link to={`/products/${itm.id}`} key={itm.id} className="search--list">{itm.type}</Link>
          ))}
      </div>
    </div>
  )
}