import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import Drawer from "../components/header/Drawer";
import Cart from "../components/cart/Cart";
import ProductList from "../components/products/ProductList";

import { useProductsStore } from "@/stores/useProductsStore";
import CustomDrawer from "../components/header/Drawer";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { products, isLoading, error, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header onCartIconClick={handleCartIconClick} />
      <CustomDrawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
        <Cart />
      </CustomDrawer>
      <main style={{ marginLeft: "81px", marginRight: "20px" }}>
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
