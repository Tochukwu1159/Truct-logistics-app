import React, { useState } from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import axios from "axios";
import { notifyuser } from "../util";

// import { Link } from "react-router-dom"

const CustomerSignUp = () => {
  const url = "https://webappexpressnew.herokuapp.com/customer/signup";
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password1: "",
    password2: "",
  });

  const style = {
    color: "#5E54A4",
  };
  const loginBtnStyle = {
    width: "100%",
    bordeRadius: "2px",
    color:'white',
    marginTop:10
  };

  function submit(e) {
    e.preventDefault();

    if (data.password1 !== data.password2)
      return notifyuser(
        `Password does not match`,
        "Enter a valid password",
        "error",
        "error"
      );
    const body = {
      name: data.name.trim(),
      address: data.address.toLowerCase().trim(),
      phone: data.phone.trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password1,
    };

    console.log(body); 

    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data.response["name"]);
        // alert(`${res.data.response['name']} has successfully registered`)
        notifyuser(
          `${res.data.response["name"]} has successfully registered`,
          "Please wait...",
          "success",
          "./login"
        );
      })
      .catch((error) => {
        notifyuser(
          `Opps! registration failed`,
          "Please try again later",
          "error",
          "error"
        );
        // alert(error)
      });
  }

  function handle(e) {
    console.dir(e.value, 'value')
    e.target.value = e.target.value.toLowerCase()
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="form__container">
            <form
              onSubmit={(e) => submit(e)}
              className="login__form"
              style={{ backgroundColor: "white", borderRadiusadius: "5px" }}
              id="myformstyle"
            >
              <h4 className="text-center" style={style}>
                Customer signup
              </h4>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full name
                </label>
                <input
                  onChange={(e) => handle(e)}
                  id="name"
                  value={data.name}
                  type="text"
                  name="fullname"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      id="email"
                      value={data.email}
                      type="email"
                      name="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Phone number
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      value={data.phone}
                      id="phone"
                      name="phone"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  House Address
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.address}
                  id="address"
                  name="address"
                  type="text"
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
                  value={data.password1}
                  type="password"
                  name="password1"
                  id="password1"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.password2}
                  type="password"
                  name="password2"
                  id="password2"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  name="register"
                  type="submit"
                  className="btn btn-primary submitbtncustom"
                  style={{ width: "100%", bordeRadius: "2px" }}
                >
                  Sign Up
                </button>
              </div>
              <a href="/login" className="btn btn-success" style={loginBtnStyle}>
                Login
              </a>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default CustomerSignUp;
