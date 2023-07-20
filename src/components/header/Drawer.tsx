import {
	Box,
	Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIconClick: () => void;
}

const Drawer = ({ children, isOpen, onCartIconClick }: Props) => {
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-white transition duration-700 ease-in-out transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}`,
        }}
      >
        <aside className="h-full overflow-y-auto">
          <div
            style={{
              marginTop: "-23px",
              backgroundColor: "#1E1E1E",
              height: "88px",
            }}
          >
            <List>
              <IconButton
               onClick={onCartIconClick}
                style={{ float: "right", margin: "28px 18px 0px 0px" }}
              >
                <p style={{ color: "white", fontSize:"1.3rem" }} > Close</p>
              </IconButton>
            </List>

          </div>
          <Divider />
          <main className="bg-white p-4 text-black">{children}</main>
        </aside>
      </div>
    </div>

  );
};

export default Drawer;

// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import {
//   Box,
//   Button,
//   ButtonBase,
//   Divider,
//   Grid,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemText,
//   Paper,
//   Typography,
// } from "@mui/material";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Link from "next/link";
// import * as React from "react";

// const style = {
//   width: "100%",
//   maxWidth: 360,
//   bgcolor: "background.paper",
// };
// interface Props {
//   isOpen: boolean;
//   children?: React.ReactNode;
//   onCartIconClick: () => void;
// }
// export default function Drawer(
//   { children, isOpen, onCartIconClick }: Props,
//   props: any
// ) {
//   const [state, setState] = React.useState({
//     right: false,
//   });
//   const [close, setClose] = React.useState(false);

//   const handlecloseIcon = () => {
//     if (close) {
//       setClose(false);
//     } else {
//       setClose(true);
//     }
//   };

//   React.useEffect(() => {
//     if (props.open) {
//       setState({ right: true });
//     } else {
//       setState({ right: false });
//     }
//   }, [props.open, props.setOpen]);

//   const toggleDrawer = (anchor: any, open: any) => (event: any) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//     props.setOpen(false);
//   };
//   const list = (anchor: any) => (
//     <Box
//       sx={{
//         width: anchor === "top" || anchor === "bottom" ? "auto" : 450,
//         position: "relative",
//         paddingBottom: "100px",
//       }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <div
//         style={{
//           marginTop: "-23px",
//           backgroundColor: "#1E1E1E",
//           height: "98px",
//         }}
//       >
//         <List>
//           <IconButton
//             onClick={onCartIconClick}
//             style={{ float: "right", margin: "20px 18px 0px 0px" }}
//           >
//             <CloseOutlinedIcon style={{ color: "white" }} />
//           </IconButton>
//         </List>
//         <List>
//           <ListItemButton>
//             <ShoppingBagOutlinedIcon
//               style={{ marginTop: "2px", color: "white" }}
//             />
//             <ListItemText
//               primary="2 items"
//               style={{ textAlign: "left", marginTop: "10px", color: "white" }}
//             />
//           </ListItemButton>
//         </List>
//       </div>
//       <Divider />
//       <div style={{ marginLeft: "27px" }}>
//         <List
//           style={{ color: "black", backgroundColor: "white", padding: "4px" }}
//         >
//           {children}
//         </List>
//       </div>

//       <List
//         style={{ position: "absolute", bottom: "30px", left: "20px" }}
//         className="w-100 flex-row"
//       >
//         <Button
//           variant="outlined"
//           color="error"
//           type="submit"
//           style={{ marginTop: "30px", marginLeft: "70px" }}
//         >
//           <Link href="/page/checkoutPage" style={{ color: "red" }}>
//             Checkout Now ($1448.00)
//           </Link>
//         </Button>
//       </List>
//       <List
//         style={{ position: "absolute", bottom: "-20px", left: "20px" }}
//         className="w-100 flex-row"
//       >
//         <Button
//           variant="outlined"
//           color="error"
//           type="submit"
//           style={{ marginLeft: "145px" }}
//         >
//           View Cart
//         </Button>
//       </List>
//     </Box>
//   );
//   return (
//     <div>
//       <React.Fragment key="right">
//         <SwipeableDrawer
//           anchor="right"
//           open={state["right"]}
//           onClose={toggleDrawer("right", false)}
//           onOpen={toggleDrawer("right", true)}
//         >
//           {list("right")}
//         </SwipeableDrawer>
//       </React.Fragment>
//     </div>
//   );
// }
