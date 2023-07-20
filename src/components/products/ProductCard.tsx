import { Product } from "@/types.d";
import StarIcon from "@mui/icons-material/Star";
import { ButtonBase, Grid, Paper, Typography, capitalize } from "@mui/material";
import Link from "next/link";
import { useCartStore } from "../../stores/useCartStore";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
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
          width: 400,
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
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {renderRatingStars(product.rating)}
                </Typography>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <Link
                      href={{
                        pathname: "/[id]",
                        query: { id: product.id },
                      }}
                      style={{
                        textDecoration: "none",
                        fontSize: "15px",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      See more...
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "6px ",
                      height: "26px",
                      cursor: "pointer",
                      width:"93px"
                    }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    
  );
}
