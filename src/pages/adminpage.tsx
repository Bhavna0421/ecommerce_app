import AdminHeader from "@/components/header/AdminHeader";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
import StarIcon from "@mui/icons-material/Star";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AdminPage = () => {
  const user = "admin";
  const cart = useFromStore(useCartStore, (state) => state.cart);
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
    <>
      <AdminHeader />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>welcome Admin</h1>
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 60 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Price&nbsp;($)</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Quantity&nbsp;(no.)</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="right">&nbsp;${product.price}</TableCell>
                  <TableCell align="right">
                    {renderRatingStars(product.rating)}
                  </TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default AdminPage;
