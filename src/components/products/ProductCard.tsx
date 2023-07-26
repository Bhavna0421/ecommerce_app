import { Product } from "@/types.d";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
import React from "react";
import { useCartStore } from "../../stores/useCartStore";
import styles from "./product.module.css";
import { usewishlistStore } from "@/stores/usewishlistcart";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  product: Product | any;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => {
    return state.addToCart;
  });
  const addtowishlist = usewishlistStore((state) => {
    return state.wishlist;
  });

  const [toggleHeart, settoggleHeart] = React.useState<Boolean>(false);
  const [addcartclick, setAddcartclick] = React.useState<Boolean>(false);
  const [displayedQuantity, setDisplayedQuantity] = React.useState<
    number | any
  >((product.quantity as number) || 1);

  const incrementQuantity = () => {
    useCartStore.getState().increment(product.id);

    setDisplayedQuantity((prevQuantity: any) => (prevQuantity as number) + 1);
  };
  const decrementQuantity = () => {
    useCartStore.getState().decrement(product.id);
    setDisplayedQuantity((prevQuantity: any) => (prevQuantity as number) - 1);
  };

  const changeToggle = React.useCallback(() => {
    settoggleHeart(!toggleHeart);
  }, []);

  const changequantitybutton = React.useCallback(() => {
    setAddcartclick(!addcartclick);
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
              className={styles.images}
              alt="complex"
              src={product.images[0]}
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
            </div>
            <CardActions>
              {addcartclick ? (
                <>
                  <button
                    style={{
                      color: "black",
                      borderRadius: "4px",
                      backgroundColor: "white",
                      textTransform: "capitalize",
                      width: "25px",
                      height: "23px",
                      border: "1px solid grey",
                      fontStyle: "normal",
                      cursor: "pointer",
                    }}
                    id="decrease"
                    onClick={() => {
                      decrementQuantity();
                    }}
                  >
                    -
                  </button>
                  <span style={{ marginLeft: "5px" }} id="value">
                    {" "}
                    {displayedQuantity}
                  </span>
                  <button
                    style={{
                      color: "black",
                      borderRadius: "4px",
                      backgroundColor: "white",
                      textTransform: "capitalize",
                      width: "25px",
                      height: "23px",
                      border: "1px solid grey",
                      fontStyle: "normal",
                      cursor: "pointer",
                    }}
                    id="increase"
                    onClick={() => {
                      incrementQuantity();
                    }}
                  >
                    +
                  </button>
                </>
              ) : (
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
                    return addToCart(product), changequantitybutton();
                  }}
                >
                  Add to cart
                </Button>
              )}

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

              {toggleHeart ? (
                <FavoriteIcon
                  className={styles.heartred}
                  fontSize="small"
                  onClick={() => {
                    changeToggle();
                    return addtowishlist(product);
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  className={styles.heart}
                  fontSize="small"
                  onClick={() => {
                    changeToggle();
                    return addtowishlist(product);
                  }}
                />
              )}
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
