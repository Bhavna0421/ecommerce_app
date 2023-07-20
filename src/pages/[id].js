import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import {useCartStore} from "../stores/useCartStore";
import useFromStore from "../hooks/useFromStore"
import { ButtonBase } from "@mui/material";
import Header from "../components/ui/Header"
import Drawer from "../components/ui/Drawer";
import Cart from "../components/minicart/Cart"

// import useFromStore from "../components/cart/useFormStore";
// import { useCartStore } from "../components/cart/usecartStore";
// import { siteTitle } from "../components/layout";
// import styles from "../components/layout.module.css";
// import Sidebar from "./page/drawer";

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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const cart = useFromStore(useCartStore, state => state.cart)

  const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

  console.log("cart>>>>>>",cart?.length)

  return (
    <>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <Header onCartIconClick={handleCartIconClick} />
      <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
      <Cart />
      </Drawer>
      <div >
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
                <ButtonBase
                  sx={{
                    margin: "-40px 79px -12px 1px",
                    width: 400,
                    height: 200,
                  }}
                >
                 
                  <Img alt="phone" src={post.thumbnail} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {post.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "6px ",
                        height: "41px",
                        cursor: "pointer",
                        width: "85px",
                        
                      }}
                      onClick={()=>{
                        console.log("post>>>>>>>",post)
                        return (
                        addToCart(post)
                        )
                      }}
                    >
                      <ShoppingCartOutlinedIcon />{" "}
                      <span style={{ fontSize: "30px", textAlign: "center" }}>
                        →
                      </span>
                    </button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
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
