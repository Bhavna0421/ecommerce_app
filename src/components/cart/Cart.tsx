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
      <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
      <ul>
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex flex-col mt-4">
        <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
		<Link href="/checkoutPage" >
          Checkout Now ${total.toFixed(2)}
		  </Link>
        </button>

        <button className="bg-black text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
          View Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
