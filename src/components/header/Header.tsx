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
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <header>
      <div
        style={{
          height: "75px",
          backgroundColor: "black",
        }}
      >
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
          <IconButton
            edge="start"
            aria-label="open drawer"
            style={{ marginTop: "14px" }}
            onClick={onCartIconClick}
          >
            <Badge badgeContent={cart?.length} color="error">
              <FiShoppingCart style={{ color: "white", marginTop: "0px" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </header>
  );
}
