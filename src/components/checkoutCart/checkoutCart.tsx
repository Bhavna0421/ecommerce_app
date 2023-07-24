import { useCartStore } from "../../stores/useCartStore";

import { Divider } from "@mui/material";
import useFromStore from "../../hooks/useFromStore";
import CheckoutCartItem from "./checkoutItems";

function CheckoutCart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <section>
      <h1
        style={{
          marginBottom: "16px",
          marginTop: "30px",
          fontSize: "20px",
          color: "black",
          fontWeight: "700",
          whiteSpace: "normal",
          fontStyle: "normal",
        }}
      >
        Your Order
      </h1>

      <ul style={{ marginLeft: "-39px" }}>
        {cart?.map((product) => (
          <CheckoutCartItem key={product.id} product={product} />
        ))}
      </ul>
      <Divider />
      <div
        style={{ display: "flex", marginTop: "4px", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
              fontStyle: "normal",
              //added space between subtotal
              wordSpacing: "100px",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
                fontStyle: "normal",
              }}
            >
              SubTotal: ${total.toFixed(2)}
            </span>
          </p>
          {/* maybe need for future */}
          {/* <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "black",
              
            }}
          >
            ${total.toFixed(2)}
          </p> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            fontStyle: "normal",
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
              fontStyle: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
                fontStyle: "normal",
              }}
            >
              Shipping:
            </span>
          </p>
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "black",
              fontStyle: "normal",
              whiteSpace: "normal",
            }}
          >
            -
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            fontStyle: "normal",
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
              fontStyle: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
                fontStyle: "normal",
              }}
            >
              Discount:
            </span>
          </p>
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "black",
              fontStyle: "normal",
              whiteSpace: "normal",
            }}
          >
            -
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            fontStyle: "normal",
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
              fontStyle: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
                fontStyle: "normal",
              }}
            >
              Total:
            </span>
          </p>
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "black",
              fontStyle: "normal",
              whiteSpace: "normal",
              fontWeight: "bold",
            }}
          >
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CheckoutCart;
