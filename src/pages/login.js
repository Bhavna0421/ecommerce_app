import React from "react";
import styles from "../pages/login.module.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <h1>Login Page</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.formbox}>
          <div className={styles.headerform}>
            <h4 style={{ textAlign: "center" }}>
              <AccountCircleRoundedIcon style={{ fontSize: "110px" }} />
            </h4>
          </div>
          <form style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                type="text"
                style={{ borderRadius: "1px solid black" }}
                placeholder="Username"
              />
            </div>
            <div className="input-group mb-3">
              <TextField
                type="text"
                style={{ borderRadius: "1px solid black" }}
                placeholder="Password"
              />
            </div>
            <Button
              type="button"
              style={{ marginTop: "30px" }}
              variant="outlined"
            >
              <Link href="/main">LOGIN</Link>
              
            </Button>

            <div style={{ marginTop: "20px" }}>
              <Typography>
                <input type="checkbox" /> Remember ME
              </Typography>
            </div>
          </form>
          
        </div>
      </div>
      {/* <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
