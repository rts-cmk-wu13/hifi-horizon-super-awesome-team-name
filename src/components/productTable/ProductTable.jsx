import { useLoaderData } from "react-router";

export default function ProductTable() {
  const items = useLoaderData();
  // console.log(items);
  const item = items.specifications;
  // console.log(products);
  
  return (
    <section className="product__table">
      <h2>PRODUCT SPECIFICATIONS</h2>
      <table>      
      <tbody> 
        {Object.entries(item).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
}
