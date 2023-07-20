import ProductCard from "./ProductCard";

import { Product } from "@/types.d";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <>
      <h2 style={{ marginLeft: "85px", fontSize:"1.5rem",lineHeight:1.4, margin: "1rem 0",fontWeight:"bold"}}>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
