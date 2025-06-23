import { useState} from 'react'
import { useLoaderData } from 'react-router'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";


const uniqueBrands = [...new Set(sortItems.map((item) => item.brand))];
const uniqueColors = [
  ...new Set(cdPlayers.flatMap((item) => item.colors)),
];

export default function Sort() {
  
  const sortItemsz = useLoaderData();
  
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    

  const filteredList = sortItems.filter((player) => {
    const matchBrand = selectedBrand ? player.brand === selectedBrand : true;
    const matchColor = selectedColor
      ? player.colors.includes(selectedColor)
      : true;
    return matchBrand && matchColor;
  });

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sort by</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Colors</option>
          {uniqueColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {filteredList.map((player) => (
          <li
            key={player.id}
            className="p-4 border rounded shadow-sm bg-white"
          >
            <div className="font-semibold">{player.type}</div>
            <div className="text-sm text-gray-500">
              Brand: {player.brand} | Price: {player.price} kr
            </div>
            <div className="text-sm text-gray-400">
              Colors: {player.colorOptions.join(", ")}
            </div>
          </li>
        ))}
        {filteredList.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No CD players match your filters.
          </div>
        )}
      </ul>
    </div>
  );



//   const [typeList, setTypeList] = useState(null);
//   const [selects, setSelects] = useState({ type:null, specifications:null  });

//   const typeToggle = (list) => {
//     setTypeList(typeList === list ? null : list)
//   }

//   const selectOption = (list, specifications) => {
//     setSelections({
//       ...selections,
//       [list]: selections[list] === specification ? null : specification,
//     })
//   }

//   console.log(sortItems);  

//   return (

//     <section className="sort">
//       <p className="sort--hedding">Sort by</p>
      
      {/* {sortItems.slice(0,3).map(({ id, colors }) => ( */}
        //  const sChassis = specifications.chassis;
        // console.log(sChassis)
        // console.log(specifications.chassis)        
    //     <div key={id} className="sort__type">
    //       <button onClick={() => typeToggle(color)} >
    //         Color <span>{typeList === color ? <FiChevronUp /> : <FiChevronDown />}</span>
    //       </button>
    //       {typeList === colors && (
    //   <div className="sort__color-list">
    //     {colors.map((color, idx) => (
    //       <span
    //         key={idx}
    //         className="sort__color-circle"
    //         style={{
    //           display: 'inline-block',
    //           width: '24px',
    //           height: '24px',
    //           borderRadius: '50%',
    //           border: '2px solid #ccc',
    //           background: color,
    //           margin: '0 4px'
    //         }}
    //         title={color}
    //       />
    //     ))}
    //   </div>
    // )}
          /* {typeList === type && (
            <div>
              /* {specifications.slice(0.3).map( (specific) => (                 */
                /* <label>
                  <input
                    type="checkbox"
                    name={type}
                    value={specifications.chassis}
                    checked={selections[type] === specifications.chassis}
                    onChange={() => selectOption(type, specifications.chassis)}
                    // className="mr-2"
                  />
                  {specifications.chassis}
                </label>              
            </div> */
          /* )} */
      //   </div>
      // ))}
    // </section>
    // <section className="sort">
    //   <p>Sort by</p> 
    //   <div className="sortlayout">
    //     <div className="sort__brand">
    //       <p className="sort--name">Brand <span><FiChevronDown /></span></p>
    //       <form className="sortsForm">
    //         <div className="sortForm">
    //         <label for="teelseries">Steelseries</label>
    //         <input type="radio" id="teelseries" name="band" value="Steelseries"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="logitech">Logitech</label>
    //         <input type="radio" id="logitech" name="band" value="logitech"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="apple">Apple</label>
    //         <input type="radio" id="apple" name="band" value="apple"/>
    //         </div>
    //       </form>      
    //     </div>     
    //     <div className="sort__color">
    //       <p className="sort--name">Color <span><FiChevronDown /></span></p>
    //       <form className="sortsForm">
    //         <div className="sortForm">
    //         <label for="white">White</label>
    //         <input type="radio" id="white" name="color" value="White"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="black">Black</label>
    //         <input type="radio" id="black" name="color" value="Black"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="grey">Grey</label>
    //         <input type="radio" id="grey" name="color" value="Grey"/>
    //         </div>
    //       </form>         
    //     </div>     
    //     <div className="sort__price">
    //       <p className="sort--name">Price <span><FiChevronDown /></span></p>
    //       <form className="sortsForm">
    //         <div className="sortForm">
    //         <label for="low">0-499</label>
    //         <input type="radio" id="low" name="price" value="Low"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="medium">500-999</label>
    //         <input type="radio" id="medium" name="price" value="Medium"/>
    //         </div>
    //         <div className="sortForm">
    //         <label for="heigh">1000-1500</label>
    //         <input type="radio" id="heigh" name="price" value="Heigh"/>
    //         </div>
    //       </form>      
    //     </div> 
    //   </div>
    // </section>
  /*)*/
}