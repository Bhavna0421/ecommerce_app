import CartItem from "../cart/CartItem";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "../../hooks/useFromStore";
import Link from "next/link";
import WishlistItem from "./wishlistItem";

function WishlistCart() {
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
        Wishlist Cart
      </h3>
      <ul style={{ marginLeft: "1px", paddingLeft: "0px" }}>
        {cart?.map((product) => {
          return <WishlistItem key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
}

export default WishlistCart;
