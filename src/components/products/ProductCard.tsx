import { Product } from "@/types.d";
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  capitalize,
} from "@mui/material";
import Link from "next/link";
import { useCartStore } from "../../stores/useCartStore";
import cogoToast from "cogo-toast";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => {
    return state.addToCart;
  });
  
 
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
    <Paper
      key={product.id}
      style={{
        padding: "7px",
        width: "100%",
        maxWidth: "400px",
        margin: "10px",
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
                {`${capitalize(product.title)}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Link
                  href={{
                    pathname: "/[id]",
                    query: { id: product.id },
                  }}
                >
                  {product.description}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {renderRatingStars(product.rating)}
              </Typography>
            </Grid>
            <div style={{ marginLeft: "17px" }}>
              <Typography variant="subtitle1" component="div">
                ${product.price} 
              </Typography>
            </div>

            <CardActions>
              <Button
                size="small"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid rgba(34, 34, 34, 0.5)",
                  textTransform: "capitalize",
                  minWidth: 0,
                  minHeight: 0,
                  fontWeight: 600,
                }}
                variant="outlined"
                onClick={() => {
                  cogoToast.success("Product added successfully!");
                  return addToCart(product);
                }}
              >
                Add to cart
              </Button>
              <Button
                size="small"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid rgba(34, 34, 34, 0.5)",
                  textTransform: "capitalize",
                  minWidth: 0,
                  minHeight: 0,
                  fontWeight: 600,
                }}
                variant="outlined"
                onClick={() => {
                  return addToCart(product);
                }}
              >
                <Link href="/checkoutPage">
                  {" "}
                  <span style={{ textAlign: "center" }}>Buy Now</span>
                </Link>
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
