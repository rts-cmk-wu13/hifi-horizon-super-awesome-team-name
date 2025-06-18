import { FiSliders } from "react-icons/fi";

export default function Compare({ comStyle }) {

  return (
    <section className={`compare ${comStyle}`}>
      <p>Compare</p>
      <FiSliders className="compare-icon" />
    </section>
  )
}