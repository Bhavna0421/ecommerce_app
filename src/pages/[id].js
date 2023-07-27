import { Button, ButtonBase, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Cart from "../components/cart/Cart";
import {
  default as CustomDrawer,
  default as Drawer,
} from "../components/header/Drawer";
import Header from "../components/header/Header";
import WishlistCart from "../components/wishlistItem/wishlist";
import { useCartStore } from "../stores/useCartStore";
import MuiImageSlider from "mui-image-slider";
import styles from "./id.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { usewishlistStore } from "../stores/usewishlistcart";
import cogoToast from "cogo-toast";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const addToCart = useCartStore((state) => state.addToCart);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isCartOpen, setisCartOpen] = React.useState(false);
  const [toggleHeart, settoggleHeart] = React.useState(false);
  const [addcartclick, setAddcartclick] = React.useState(false);
  const [displayedQuantity, setDisplayedQuantity] = React.useState(
    post.quantity || 1
  );

  const addtowishlist = usewishlistStore((state) => {
    return state.wishlist;
  });

  const changeToggle = React.useCallback(() => {
    settoggleHeart(!toggleHeart);
  }, []);

  const changequantitybutton = React.useCallback(() => {
    setAddcartclick(!addcartclick);
  });

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleWishlistCart = () => {
    setisCartOpen(!isCartOpen);
  };

  const incrementQuantity = () => {
    useCartStore.getState().increment(post.id);
    setDisplayedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    useCartStore.getState().decrement(post.id);
    setDisplayedQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <>
      <Header
        onCartIconClick={handleCartIconClick}
        oncartClick={handleWishlistCart}
        onCloseIcon={handleCartIconClick}
      />
      <Drawer
        isOpen={isDrawerOpen}
        onCartIconClick={handleCartIconClick}
        onCloseIcon={handleCartIconClick}
      >
        <Cart />
      </Drawer>
      <CustomDrawer
        isOpen={isCartOpen}
        oncartClick={handleWishlistCart}
        onCloseIcon={handleWishlistCart}
      >
        <WishlistCart />
      </CustomDrawer>
      <div>
        <div style={{ marginTop: "3rem" }}>
          <Paper
            sx={{
              p: 10,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: "white",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                {/* <ButtonBase
                  sx={{
                    margin: "-40px 79px -12px 1px",
                    width: 400,
                    height: 200,
                  }}
                > */}
                {/* <MuiImageSlider
                 className={styles.images}
                  images={post.images}
                /> */}
                <Img
                  alt="phone"
                  src={post.images[0]}
                  className={styles.images}
                />
                {/* </ButtonBase> */}
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {post.description}
                    </Typography>
                  </Grid>

                  <CardActions>
                    <Button
                      size="small"
                      className={styles.button}
                      variant="outlined"
                      onClick={() => {
                        return addToCart(post);
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
                            opacity: displayedQuantity === 1 ? 0.3 : 1,
                            pointerEvents:
                              displayedQuantity === 1 ? "none" : "auto",
                          }}
                          id="decrease"
                          disabled={displayedQuantity === 1}
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
                        className={styles.button}
                        variant="outlined"
                        onClick={() => {
                          cogoToast.success("Product added successfully!");
                          return addToCart(post), changequantitybutton();
                        }}
                      >
                        Add to cart
                      </Button>
                    )}

                    {toggleHeart ? (
                      <FavoriteIcon
                        className={styles.heartred}
                        fontSize="small"
                        onClick={() => {
                          changeToggle();
                          return addtowishlist(post);
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className={styles.heart}
                        fontSize="small"
                        onClick={() => {
                          changeToggle();
                          return addtowishlist(post);
                        }}
                      />
                    )}
                  </CardActions>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    ${post.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(
    `https://dummyjson.com/products/${params.id}`
  );
  const post = data;

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get("https://dummyjson.com/products");
  const posts = data.products;
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};
