import AdminHeader from "@/components/header/AdminHeader";
import useFromStore from "@/hooks/useFromStore";
import { usewishlistStore } from "@/stores/usewishlistcart";
import StarIcon from "@mui/icons-material/Star";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminPage = () => {
  const user = "admin";
  const cart = useFromStore(usewishlistStore, (state) => state.cart);
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
      <h1 style={{ textAlign: "center", marginTop: "80px" }}></h1>
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 60 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow
                style={{
                  // minWidth: column.minWidth,
                  backgroundColor: "grey",
                  color: "#fff",
                }}
              >
                <StyledTableCell style={{ fontWeight: "bold" }}>
                  Product Name
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontWeight: "bold" }}>
                  Price&nbsp;($)
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontWeight: "bold" }}>
                  Rating
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {cart?.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell component="th" scope="row">
                    {product.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    &nbsp;${product.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {renderRatingStars(product.rating)}
                  </StyledTableCell>
                  {/* <TableCell align="right">{product.quantity}</TableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default AdminPage;
