import { Product } from "@/types.d";
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  ButtonBase,
  CardActions,
  Grid,
  IconButton,
  Paper,
  Typography,
  capitalize,
} from "@mui/material";
import cogoToast from "cogo-toast";
import Link from "next/link";
import { useCartStore } from "../../stores/useCartStore";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Icon } from "@material-ui/core";
import styles from "./product.module.css";

interface Props {
  product: Product | any;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => {
    return state.addToCart;
  });
  const [toggleHeart, settoggleHeart] = React.useState<Boolean>(false);
  const [displayedQuantity, setDisplayedQuantity] = React.useState<number>(
    (product.quantity as number) || 0
  );

  const incrementQuantity = () => {
    useCartStore.getState().increment(product.id);
    setDisplayedQuantity((prevQuantity) => (prevQuantity as number) + 1);
  };

  const changeToggle = React.useCallback(() => {
    settoggleHeart(!toggleHeart);
  }, []);
  // { logic for disable increment button according to need , Check if the product is in the cart to enable or disable the button}

  // const isInCart = useCartStore
  //   .getState()
  //   .cart.some((item) => item.id === product.id);

  const renderRatingStars = (rating: any) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon
            key={`star-${index}`}
            style={{ color: "rgb(250, 175, 0)", fontSize: "16px" }}
          />
        ))}
        {hasHalfStar && (
          <StarIcon
            style={{
              opacity: 0.5,
              color: "rgba(0, 0, 0, 0.26)",
              fontSize: "16px",
            }}
          />
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
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold", fontStyle: "normal" }}
              >
                {`${capitalize(product.title)}`}
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
              <Typography variant="body2" color="text.secondary">
                {renderRatingStars(product.rating)}
              </Typography>
            </Grid>
            <div
              style={{ marginLeft: "17px", display: "flex", columnGap: "67px" }}
            >
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold", fontStyle: "normal" }}
              >
                ${product.price}
              </Typography>
              <button
                style={{
                  color: "black",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  width: "32px",
                  height: "26px",
                  border: "1px solid grey",
                  fontStyle: "normal",
                }}
                onClick={() => {
                  cogoToast.info("quantity added successfully!");
                  return incrementQuantity();
                }}

                // disabled={!isInCart}
              >
                +<span>{displayedQuantity}</span>
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
                  width: "98px",
                  height: "28px",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
                variant="outlined"
                onClick={() => {
                  cogoToast.success("Product added successfully!");
                  return addToCart(product), incrementQuantity();
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
                  width: "80px",
                  height: "28px",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
                variant="outlined"
                onClick={() => {
                  return addToCart(product);
                }}
              >
                <Link
                  href="/checkoutPage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <span style={{ textAlign: "center" }}>Buy Now</span>
                </Link>
              </Button>

              <FavoriteBorderIcon
                className={styles.heart}
                fontSize="small"
                onClick={() => {
                  return addToCart(product);
                }}
              />
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
