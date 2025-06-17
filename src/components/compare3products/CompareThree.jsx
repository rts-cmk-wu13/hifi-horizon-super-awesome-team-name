import Compare from "../compare/Compare";

export default function CompareThree() {
  return (
    <section className="compare-three">
      <p>Compare Three Products</p>
      <div className="compare-three__products">
        {/* Placeholder for product comparison cards */}
        <div className="compare-three__product-card">Product 1</div>
        <div className="compare-three__product-card">Product 2</div>
        <div className="compare-three__product-card">Product 3</div>
      </div>
      <Compare className="compare-three__compare" />
    </section>
  )
}