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
        }}
      >
        Your Order
      </h1>

      <ul>
        {cart?.map((product) => (
          <CheckoutCartItem key={product.id} product={product} />
        ))}
      </ul>
      <Divider />
      <div className="flex flex-col mt-4">
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
              //added space between subtotal
              wordSpacing: "89px",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
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
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
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
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
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
          }}
        >
          <p
            style={{
              marginBottom: "16px",
              marginTop: "0px",
              fontSize: "14px",
              color: "grey",
              whiteSpace: "normal",
            }}
          >
            <span
              style={{
                lineHeight: 1.5,
                fontWeight: "bold",
                whiteSpace: "normal",
                textTransform: "none",
                color: "grey",
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

              whiteSpace: "normal",
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
