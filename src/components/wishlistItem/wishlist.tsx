import { usewishlistStore } from "@/stores/usewishlistcart";
import useFromStore from "../../hooks/useFromStore";
import WishlistItem from "./wishlistItem";

function WishlistCart() {
  const cart = useFromStore(usewishlistStore, (state) => state.cart);

  console.log("cart>>>>>>>>?whishlist", cart);

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
      <ul style={{ marginLeft: "10px", paddingLeft: "0px" }}>
        {cart?.map((product) => {
          return <WishlistItem key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
}

export default WishlistCart;
