import React, { useState } from "react";
import { useRouter } from "next/router";
import useUserStore from "../stores/useUserStore";
import { checkUserCredentials } from "../utils/useAuthenticationUtil";
import styles from "../pages/login.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUserRole } = useUserStore();

  // const handleLogin = async () => {
  //   try {
  //     const userRole = checkUserCredentials(email, password);

  //     if (userRole) {
  //       // Update the user role using the state management hook (Zustand)
  //       setUserRole(userRole);

  //       // Redirect to appropriate page based on the user role
  //       if (userRole === "admin") {
  //         router.push("/adminpage");
  //       } else {
  //         router.push("/main");
  //       }
  //     } else {
  //       router.push("/main");
  //     }
  //   } catch (error) {
  //     setError("An error occurred. Please try again later.");
  //   }
  // };
  const userRole = checkUserCredentials(email, password);
  console.log("userRole>>>>", userRole);

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: "1px solid #1976d2", color: "white" }}
                InputProps={{ style: { color: "black" } }} // To change the color of input text
                InputLabelProps={{ style: { color: "black" } }} // To change the color of placeholder/label
                placeholder="example@gmail.com"
              />
            </div>
            <div className="input-group mb-3">
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              // onClick={handleLogin}
            >
              {userRole === "admin" ? (
                <Link
                  href="/adminpage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  LOGIN
                </Link>
              ) : (
                <Link
                  href="/main"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  LOGIN
                </Link>
              )}
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
