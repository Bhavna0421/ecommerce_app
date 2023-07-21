import { Box, Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import Cart from "../components/cart/Cart";
import CustomDrawer from "../components/header/Drawer";
import Header from "../components/header/Header";
import CheckoutCart from "../components/checkoutCart/checkoutCart"
const RegisterForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}
  return (
    <React.Fragment>
      <Header onCartIconClick={handleCartIconClick} />
			<CustomDrawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
				<Cart />
			</CustomDrawer>
      <div style={{display:"flex"}}>
      <div>
      <form style={{ margin: "54px 205px 4px 46px" }}>
        <div
          style={{
            height: "150px",
            borderRadius: "4px",
            margin: "41px 10px 0px 10px",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Delivery Date and Time </p>
          <Stack
            spacing={2}
            direction="row"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Dellivery Date"
              required
              style={{ marginTop: "7px", display: "inline-flex" }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Delivery Time"
              required
              style={{ marginTop: "7px" }}
            />
          </Stack>
        </div>
        <div
          style={{
            height: "150px",
            borderRadius: "4px",
            margin: "0px 10px 0px 10px",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Delivery Address </p>
          <Stack
            spacing={2}
            direction="row"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Dellivery Address1"
              required
              style={{ marginTop: "7px" }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Delivery Address2"
              required
              style={{ marginTop: "7px" }}
            />
          </Stack>
        </div>
        <div
          style={{
            height: "400px",
            borderRadius: "4px",
            margin: "0px 10px 0px 10px",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Payment Details </p>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="card Number"
              required
              style={{ marginTop: "7px" }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="CVV"
              required
              style={{ marginTop: "7px" }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Expire Card Year"
              required
              style={{ marginTop: "7px" }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="error"
              label="Expire card Month"
              required
              style={{ marginTop: "7px" }}
            />
          </Stack>
          <div style={{ marginTop: "30px", marginLeft: "10px" }}>
            <Button variant="outlined" color="error" type="submit">
              Place order
            </Button>
          </div>
        </div>
      </form>
      </div>

      <div>
      <Box >
      <div style={{marginTop:"10px"}}> 
      <CheckoutCart/>
      </div>
      </Box>
      </div>
      </div>

    </React.Fragment>
  );
};

export default RegisterForm;
