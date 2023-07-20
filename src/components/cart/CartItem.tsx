import { FaTrashAlt } from "react-icons/fa";

import { Product } from "../../types";
import Image from "next/image";
import { useCartStore } from "../../stores/useCartStore";
import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  product: Product;
}

export default function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const renderRatingStars = (rating: any) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon
            key={`star-${index}`}
            style={{ color: "grey", fontSize: "16px" }}
          />
        ))}
        {hasHalfStar && (
          <StarIcon style={{ opacity: 0.5, color: "grey", fontSize: "16px" }} />
        )}
      </>
    );
  };
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
          <Typography variant="body2" gutterBottom>
            {renderRatingStars(product.rating)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="flex flex-col">
            <span>Quantity: {product.quantity}</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" component="div">
            ${product.price}
          </Typography>
          <div style={{ marginLeft: "0.5rem" }}>
            <button
              title="Remove Item"
              className="text-red-500 hover:text-red-600"
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
