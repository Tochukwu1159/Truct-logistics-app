import React, { useState } from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import { notifyuser } from "../util";

function DriverSignUp() {
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
  async function submit(e) {
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



    try {
      let result = await fetch(
        "https://webappexpressnew.herokuapp.com/driver/signup",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let res = await result.json();
      if (res.response==='duplicate email found') {
         return notifyuser(
          `Email Already exists`,
          "try again",
          "error",
          "error"
        );
      }
      else{
        console.log(res)
        return notifyuser(
          `Driver registration successfully`,
          "Please wait...",
          "success",
          "./login"
        );
      }
   
    } catch (err) {
      alert(err);
    }

  }

  function handle(e) {
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
                Driver signup
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
              <a
                href="/login"
                className="btn btn-success"
                style={{
                  width: "100%",
                  bordeRadius: "40px",
                  marginTop: "10px",
                }}
              >
                Login
              </a>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default DriverSignUp;
