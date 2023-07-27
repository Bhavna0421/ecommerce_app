import { useEffect, useState } from "react";
import { NextPage } from "next";
import { SessionProviderProps, signOut, useSession } from "next-auth/react";
import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";
import ProductList from "../components/products/ProductList";

import WishlistCart from "@/components/wishlistItem/wishlist";
import { useProductsStore } from "@/stores/useProductsStore";
import CustomDrawer from "../components/header/Drawer";
import Topcontent from "@/components/topcontent/top";
import Link from "next/link";
import AdminPage from "./adminpage";

const Home: NextPage = () => {
  // const {data:session} = useSession<any>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  const { products, isLoading, error, fetchData } = useProductsStore();

  // const user = session?.user
  const user = "user";

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
      {user?.includes("admin") ? (
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
          <Topcontent />
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
      ) : (
        <Link href="/adminpage">
          <AdminPage />
        </Link>
      )}
    </>
  );
};

export default Home;
