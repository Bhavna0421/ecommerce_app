import useFromStore from "../../hooks/useFromStore";
import { Badge, IconButton } from "@mui/material";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "../../stores/useCartStore";
import React from "react";

interface Props {
  onCartIconClick: () => void;
}

export default function Header({ onCartIconClick }: Props) {
  const cart:any = useFromStore(useCartStore, (state) => state.cart);

  
// let sum = cart?.reduce(function(acc: any[], curr: { title: any; quantity: any; }) {
//   let findIndex = acc.findIndex((item: { title: any; }) => item.title === curr.title);

//   if (findIndex === -1) {
//     acc.push(curr)
//   } else {

//     acc[findIndex].quantity += curr.quantity
//   }
//   return acc;
// }, [])

let total = 0;
if (cart) {
  total = cart.reduce(
    (acc: number, product: { price: number; quantity: number; }) => (product.quantity as number) + 1 ,
    0
  );
}


  return (
    <header style={{ height: "75px", backgroundColor: "black", position: "sticky", top: -1, zIndex: 100 }}>
    <div
      style={{
        marginLeft: "100px",
        display: "flex",
        columnGap: "3rem",
        alignItems: "flex-end",
        marginTop: "-10px",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>
      <Link href="/" style={{ textDecoration: "none", color: "white" }}>
        Details
      </Link>
      <div style={{ display: "flex" }}>
        
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={onCartIconClick}
          style={{ marginTop: "14px" }}
        >
          <Badge badgeContent={cart?.length} color="error">
            <FiShoppingCart style={{ color: "white" }} />
          </Badge>
        </IconButton>
      </div>
    </div>
  </header>
  );
}
