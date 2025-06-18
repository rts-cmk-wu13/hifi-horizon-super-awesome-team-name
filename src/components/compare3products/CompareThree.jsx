import Compare from "../compare/Compare";
import CompareProduct from "./CompareProduct";

export default function CompareThree() {
  return (
    <section className="compare-three">
      <CompareProduct />
      <Compare comStyle="compare-three__compare" />
    </section>
  )
}