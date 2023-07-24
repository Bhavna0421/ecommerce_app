import { Product } from "../../types";

interface Props {
  product: Product;
}

export default function CheckoutCartItem({ product }: Props) {
  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <p
          style={{
            marginBottom: "16px",
            marginTop: "0px",
            fontSize: "14px",
            color: "grey",
            whiteSpace: "normal",
          }}
        >
          <span
            style={{
              lineHeight: 1.5,
              fontWeight: "bold",
              whiteSpace: "normal",
              textTransform: "none",
              color: "black",
            }}
          >
            {product.quantity} x
          </span>{" "}
          {product.title}
        </p>
        <p
          style={{
            marginBottom: "16px",
            marginTop: "0px",
            fontSize: "14px",
            color: "black",
            wordSpacing: "10px",

            whiteSpace: "normal",
          }}
        >
          ${product.price}
        </p>
      </div>
    </div>
  );
}
