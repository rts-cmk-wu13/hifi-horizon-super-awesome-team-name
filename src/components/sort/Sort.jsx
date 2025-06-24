import { useState} from 'react'
import { useLoaderData } from 'react-router'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import ProductCard from '../productCard/ProductCard';

export default function Sort() {
  
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const sortItems = useLoaderData();

  const uniqueBrands = [...new Set(sortItems.map((item) => item.brand))];
  const uniqueColors = [
    ...new Set(sortItems.flatMap((item) => item.colors)),
  ];
  
  const filteredList = sortItems.filter((player) => {
  const matchBrand =
    selectedBrands.length > 0 ? selectedBrands.includes(player.brand) : true;
  const matchColor =
    selectedColors.length > 0
      ? player.colors.some((color) => selectedColors.includes(color))
      : true;
  return matchBrand && matchColor;
});

  return (
    <>
      <div className="sort__style">
      <h1 className="">Sort by</h1>
      <div className="sort__brands">
  <p>Brands:</p>
  {uniqueBrands.map((brand) => (
  <label key={brand} style={{ marginRight: '1rem' }}>
    {brand}
    <input
      type="checkbox"
      name="brand"
      value={brand}
      checked={selectedBrands.includes(brand)}
      onChange={() => {
        setSelectedBrands((prev) =>
          prev.includes(brand)
            ? prev.filter((b) => b !== brand)
            : [...prev, brand]
        );
      }}
    />
  </label>
))}
<button onClick={() => setSelectedBrands([])}>Clear</button>
</div>
        {/* <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className=""
        >
          <option value="">Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select> */}
<div className="sort__colors">
  <p>Colors:</p>
  {uniqueColors.map((color) => (
  <label key={color} style={{ marginRight: '1rem' }}>
    {color}
    <input
      type="checkbox"
      name="color"
      value={color}
      checked={selectedColors.includes(color)}
      onChange={() => {
        setSelectedColors((prev) =>
          prev.includes(color)
            ? prev.filter((c) => c !== color)
            : [...prev, color]
        );
      }}
      // style={{ display: 'none' }}
    />    
    
  </label>
))}
<button onClick={() => setSelectedColors([])}>Clear</button>
</div>
      </div>
      <ProductCard filteredList={ filteredList } />
     
    </>
  );

}