import { useLoaderData } from "react-router";

export default function ProSpecific() {
  const items = useLoaderData();
  console.log(items);
  
  return (
    <section className="specifications">
      <h3>PRODUCT SPECIFICATIONS</h3>
      <div>

      </div>

    </section>

  )
}