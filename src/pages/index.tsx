import { useEffect, useState } from "react";

import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";
import ProductList from "../components/products/ProductList";

import WishlistCart from "@/components/wishlistItem/wishlist";
import { useProductsStore } from "@/stores/useProductsStore";
import CustomDrawer from "../components/header/Drawer";
import Topcontent from "@/components/topcontent/top";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  const { products, isLoading, error, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleWishlistCart = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <>
      <Header
        onCartIconClick={handleCartIconClick}
        oncartClick={handleWishlistCart}
        onCloseIcon={handleCartIconClick}
      />
      <CustomDrawer
        isOpen={isDrawerOpen}
        onCartIconClick={handleCartIconClick}
        onCloseIcon={handleCartIconClick}
      >
        <Cart />
      </CustomDrawer>
      <CustomDrawer
        isOpen={isCartOpen}
        oncartClick={handleWishlistCart}
        onCloseIcon={handleWishlistCart}
      >
        <WishlistCart />
      </CustomDrawer>
      <Topcontent/>
      <main style={{ marginLeft: "56px" }}>
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              fontWeight: "14px",
              // marginTop: "15px",
            }}
          >
            Loading...
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
