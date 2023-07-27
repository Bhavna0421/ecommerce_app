import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../pages/login.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSession } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession<any>();
  const user = session?.user;
  console.log("data>>>>>>>>", session?.user);
  console.log("user>>>>>",user)
  return (
    <>
      <div
        className={styles.container}
        // style={{  color: "white" }}
      >
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
                style={{ borderRadius: "1px solid #1976d2", color: "white" }}
                InputProps={{ style: { color: "black" } }} // To change the color of input text
                InputLabelProps={{ style: { color: "black" } }} // To change the color of placeholder/label
                placeholder="Username"
              />
            </div>
            <div className="input-group mb-3">
              <TextField
                type="password"
                style={{ borderRadius: "1px solid #1976d2", color: "white" }}
                InputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "blacks" } }}
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
