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
      <h3 className="text-2xl font-bold mb-4">Wishlist Items</h3>
      <ul>
        {cart?.map((product) => {
        //   console.log("product?????????", product);
          return <WishlistItem key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
}

export default WishlistCart;
