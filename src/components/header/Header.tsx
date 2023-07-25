import useFromStore from "../../hooks/useFromStore";
import { Badge, IconButton } from "@mui/material";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "../../stores/useCartStore";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { usewishlistStore } from "@/stores/usewishlistcart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  onCartIconClick: () => void;
  oncartClick: () => void;
  onCloseIcon: () => void;
}

export default function Header({ onCartIconClick, oncartClick }: Props) {
  const cart: any = useFromStore(useCartStore, (state) => state.cart);
  const whishlist: any = useFromStore(usewishlistStore, (state) => state.cart);

  return (
    <header
      style={{
        height: "75px",
        backgroundColor: "black",
        position: "sticky",
        top: -1,
        zIndex: 100,
        marginLeft: "-8px",
        marginRight:"-8px"
        
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
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontStyle: "normal",
          }}
        >
          Home
        </Link>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontStyle: "normal",
          }}
        >
          Details
        </Link>
        <div style={{ display: "flex" }}>
          <IconButton
            title="open cart"
            edge="start"
            aria-label="open drawer"
            onClick={onCartIconClick}
          >
            <Badge badgeContent={cart?.length} color="error">
              <FiShoppingCart style={{ color: "white" }} />
            </Badge>
          </IconButton>
        </div>
        <IconButton
          title="open wishlist"
          edge="start"
          aria-label="open drawer"
          onClick={oncartClick}
          style={{ marginTop: "14px" }}
        >
          <Badge badgeContent={whishlist?.length} color="error">
            <FavoriteBorderIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
}
