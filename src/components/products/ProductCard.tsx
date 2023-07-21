import { Product } from "@/types.d";
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  ButtonBase,
  CardActions,
  Grid,
  Paper,
  Typography,
  capitalize,
} from "@mui/material";
import cogoToast from "cogo-toast";
import Link from "next/link";
import { useCartStore } from "../../stores/useCartStore";
import React from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => {
    return state.addToCart;
  });
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  // function decrement() {
  //   setCount(function (prevCount) {
  //     if (prevCount > 0) {
  //       return (prevCount -= 1);
  //     } else {
  //       return (prevCount = 0);
  //     }
  //   });
  // }
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
            <div
              style={{ marginLeft: "17px", display: "flex", columnGap: "67px" }}
            >
              <Typography variant="subtitle1" component="div">
                ${product.price}
              </Typography>
              <button
                  // background-color: black;
                  // width: 43px;
                  // border-radius: 4px;
                  // color: white;
                  // height: 26px;
              
                style={{
                  color: "black",
                   backgroundColor: "lightgrey",
                  borderRadius:"4px",
                  textTransform: "capitalize",
                  width: "43px",
                  height:"26px",
                  fontWeight: 600,
                }}
                 
                onClick={increment}
              >
                + {count}
              </button>
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
