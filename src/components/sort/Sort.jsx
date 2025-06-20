import { FiChevronDown } from "react-icons/fi";

export default function Sort() {

  return (
    <section className="products__sort">
      <p>Sort by</p> 
      <div>
        <div className="products__brand">
          <div>
            <p>Brand</p> <span><FiChevronDown /></span>
          </div>
          <form>
            <div className="form">
            <label for="teelseries">Steelseries</label>
            <input type="radio" id="teelseries" name="band" value="Steelseries"/>
            </div>
            <div className="form">
            <label for="logitech">Logitech</label>
            <input type="radio" id="logitech" name="band" value="logitech"/>
            </div>
            <div className="form">
            <label for="apple">Apple</label>
            <input type="radio" id="apple" name="band" value="apple"/>
            </div>
          </form>      
        </div>     
        <div className="products__brand"></div>     
        <div className="products__brand"></div> 
      </div>
    </section>
  )
}