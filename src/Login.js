import React, { useState } from "react";
// import { Container, Paper, TextField , Button } from '@material-ui/core';
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
// import Layout from './Layout'
import "./css/stylingpage.css";
import "../src/css/index.css";
import "../src/css/style.css";
import "../src/css/styletwo.css";
import { notifyuser } from "./util";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }
  // console.log(data);
  let body = {
    email: data.email,
    password: data.password,
  };

  /* sign in function starts */
  async function signIn(e) {
    e.preventDefault();
    // console.log(body);
    if (JSON.parse(localStorage.getItem("user"))) {
      localStorage.clear();
    }
    if (!body.email)
      return notifyuser(
        "Email is Required",
        "Please enter valid credentials",
        "error",
        "error"
      );

    if (!body.password)
      return notifyuser(
        "Password Required",
        "Please enter valid credentials",
        "error",
        "error"
      );

    try {
      let result = await fetch(
        "https://webappexpressnew.herokuapp.com/users/login",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let response = await result.json();
      console.log(response);
      let usertoken = JSON.stringify({
        accesstoken: response.data.token,
        user_type: response.data["user_type"],
      });
      localStorage.setItem("logistics", usertoken);
      localStorage.setItem("logisticsuser", JSON.stringify(response.data));
      let value = JSON.parse(localStorage.getItem('logisticsuser'))
      console.log(value)
      console.log(response.data);
      if (response.loginStatus === "Incorrect Credentials") {
        // alert('Incorrect Credentials')
        notifyuser(
          "Incorrect Credentials",
          "Please enter valid credentials",
          "warning",
          "error"
        );
      } 
      else {
        switch (response.data["user_type"]) {
          case 10:
            // notifyuser(
            //   "Authorizing Account!",
            //   "Please wait...",
            //   "success",
            //   `/customer-profile`
            // );
            console.log('hello world')
            break;
          case 20:
            notifyuser(
              "Authorizing Account!",
              "Please wait...",
              "success",
              `/driver-vieworders`
            );
            break;
          case 30:
            notifyuser(
              "Authorizing Account!",
              "Please wait...",
              "success",
              `/admin-vieworders`
            );
            break;
          default:
        }
      }
    } catch (err) {
      alert(err);
    }
  }
  /* sign in function ends */

  return (
    <div className="main">
      <Header />
      <br/>
      <br/>
      <main>
        <div className="container">
          <div className="form__container" style={{ height: "55vh" }}>
            <form
              className="login__form"
              style={{ backgroundColor: "white", borderRadius: "5px" }}
              id="myformstyle"
            >
              <div className="row">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.email}
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.password}
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={signIn}
                  name="login"
                  type="submit"
                  className="btn btn-primary submitbtncustom"
                  style={{ width: "100%", borderRadius: "2px" }}
                >
                  Login
                </button>
              </div>
              <br />

              <a
                href="/signup-customer"
                id="crt_btn"
                className="btn btn-primary"
                role="button"
                style={{
                  width: "100%",
                  borderRadius: "2px",
                  margin: "0px 0px 10px",
                }}
              >
                Create Customer Account
              </a>

              <a
                href="signup-driver"
                id="crt_btn"
                className="btn btn-primary"
                role="button"
                style={{ width: "100%", borderRadius: "2px" }}
              >
                Create Driver Account
              </a>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
