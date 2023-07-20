import { FaTrashAlt } from "react-icons/fa";

import { Product } from "../../types";
import Image from "next/image";
import { useCartStore } from "../../stores/useCartStore";
import { ButtonBase, Grid, Paper, Typography } from "@mui/material";

interface Props {
  product: Product;
}

export default function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
   
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Paper
        key={product.title}
        style={{
          padding: "7px",
          maxWidth: 400,
          flexGrow: 1,
          maxHeight: 300,
          marginTop: "1rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
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
          </Grid>
          <Grid item xs={12} sm={8} container direction="column">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${product.price}
              </Typography>
            </Grid>
            <div className="flex flex-col">
              <span>Quantity: {product.quantity}</span>
            </div>
            <div>
              <button
                title="Remove Item"
                className="text-red-500 hover:text-red-600 ml-4"
                onClick={() => removeFromCart(product)}
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
