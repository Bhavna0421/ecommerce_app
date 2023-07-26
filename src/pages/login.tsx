import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../pages/login.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Login = () => {
  return (
    <>
      {/* <div style={{ textAlign: "center", marginTop: "25px" }}>
        <h1>Login Page</h1>
      </div> */}
      <div className={styles.container}>
        <div className={styles.formbox}>
          <h4 style={{ textAlign: "center" }}>
            <AccountCircleOutlinedIcon
              style={{ fontSize: "110px", color: "#1976d2" }}
            />
          </h4>

          <form style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                type="text"
                style={{ borderRadius: "1px solid #1976d2" }}
                placeholder="Username"
              />
            </div>
            <div className="input-group mb-3">
              <TextField
                type="password"
                style={{ borderRadius: "1px solid #1976d2" }}
                placeholder="Password"
              />
            </div>
            <Button
              type="submit"
              style={{ marginTop: "30px" }}
              variant="contained"
              color="primary"
            >
              <Link
                href="/main"
                style={{ textDecoration: "none", color: "white" }}
              >
                LOGIN
              </Link>
            </Button>

            <div style={{ marginTop: "20px" }}>
              <Typography style={{ color: "#1976d2" }}>
                <input type="checkbox" /> Remember Me
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
