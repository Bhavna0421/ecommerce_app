import CartItem from "./CartItem";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "../../hooks/useFromStore";
import Link from "next/link";

function Cart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <section>
      <h3
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "4px",
          fontStyle: "normal",
          marginTop: "1px",
        }}
      >
        Shopping Cart
      </h3>
      <ul style={{ marginLeft: "20px", paddingLeft: "0px" }}>
        {cart?.map((product) => {
         
          return <CartItem key={product.id} product={product} />;
        })}
      </ul>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "4px" }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRadius: "4px",
            height: "43px",
            border: "none",
            fontStyle: "normal",
            fontSize: "16px",
          }}
        >
          <Link
            href="/checkoutPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Checkout Now ${total.toFixed(2)}
          </Link>
        </button>

        <button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRadius: "4px",
            marginTop: "4px",
            height: "43px",
            border: "none",
            fontStyle: "normal",
            fontSize: "16px",
          }}
        >
          View Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
