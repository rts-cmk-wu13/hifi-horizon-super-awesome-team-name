import { useState} from 'react'
import { useLoaderData } from 'react-router'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

export default function Sort() {

  const [typeList, setTypeList] = useState(null);
  const [selects, setSelects] = useState({ type:null, specifications:null  });

  const typeToggle = (list) => {
    setTypeList(typeList === list ? null : list)
  }

  const selectOption = (list, specifications) => {
    setSelections({
      ...selections,
      [list]: selections[list] === specification ? null : specification,
    })
  }

  const sortItems = useLoaderData();
  // console.log(sortItems[0].specifications);
  

  return (

    <section className="sort">
      <p className="sort--hedding">Sort by</p>
      {sortItems.slice(0,3).map(({ id, type, specifications  }) => (
        //  const sChassis = specifications.chassis;
        // console.log(sChassis)
        // console.log(specifications.chassis)
        
        <div key={id} className="sort__type">
          <button onClick={() => typeToggle()} >
            {type} <span>{typeList === type ? <FiChevronUp /> : <FiChevronDown />}</span>
          </button>

          {typeList === type && (
            <div>
              {/* {specifications.slice(0.3).map( (specific) => (                 */}
                <label>
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
            </div>
          )}
        </div>
      ))}
    </section>
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
  )
}