import { FaTrashAlt } from "react-icons/fa";

import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { useCartStore } from "../../stores/useCartStore";
import { Product } from "../../types";
import cogoToast from "cogo-toast";

interface Props {
  product: Product;
}

export default function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  console.log("productquantity", product.quantity);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "1rem" }}>
      <Paper
        key={product.title}
        sx={{
          display: "flex",
          padding: "7px",
          maxWidth: 400,
        }}
      >
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <img
            style={{
              margin: "auto",
              display: "block",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="complex"
            src={product.thumbnail}
          />
        </ButtonBase>

        <Grid container spacing={2} sx={{ marginLeft: "1rem", flexGrow: 1 }}>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" component="div">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="div">
              ${product.price}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <span style={{ fontWeight: "bold" }}>
                Quantity: {product.quantity}
              </span>
            </Typography>
            <div style={{ marginLeft: "6.5rem" }}>
              <button
                title="Remove Item"
                style={{
                  color: "red",
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  cogoToast.info("Removed from the cart");
                  return removeFromCart(product);
                }}
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
