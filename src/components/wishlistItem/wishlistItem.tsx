import { usewishlistStore } from "@/stores/usewishlistcart";
import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import cogoToast from "cogo-toast";
import { Product } from "../../types";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function WishlistItem({ product }: Props) {
  const removeFromCart = usewishlistStore((state) => state.removeFromCart);

  console.log("productquantity", product.id);
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
              <Link
                href={{
                  pathname: "/[id]",
                  query: { id: product.id },
                }}
                style={{ textDecoration: "none", color: "grey" }}
              >
                {product.description}
              </Link>
            </Typography>
            <div style={{ marginLeft: "6.5rem" }}>
              <Typography
                style={{
                  cursor: "pointer",
                  fontSize: "11.5px",
                  color: "red",
                }}
                onClick={() => {
                  cogoToast.info("Removed from the wishlist");
                  return removeFromCart(product);
                }}
              >
                Remove from wishlist
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
