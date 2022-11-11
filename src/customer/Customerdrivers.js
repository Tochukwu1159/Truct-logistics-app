import React from "react";
import Footer from "../components/includes/Footer";
import Header from "../components/includes/Header";
import { isLoggedin, notifyuser } from "../util";


class Customerdrivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAvailableDriver = this.getAvailableDriver.bind(this);
    this.bookDriver = this.bookDriver.bind(this);
    this.deleteTripOrder=this.deleteTripOrder.bind(this)
    isLoggedin()
  }

  getAvailableDriver() {
    let drivers = localStorage.getItem("user_orderDetails");
    console.log(drivers);
    return drivers;
  }
  async deleteTripOrder(order_id){
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order_id),
      };
      const response = await fetch(
        "https://webappexpressnew.herokuapp.com/customer/cancelorder",
        requestOptions
      );

      console.log(response);
      const res = await response.json();
    //   remove order from local storage
      localStorage.removeItem('bookeddriver');
      localStorage.removeItem('user_orderDetails')
      notifyuser('Canceling Order','Please wait...', 'success','/customer-bookorder')
      console.log(res);
  }

  async bookDriver(driver_id, order_id, truck_type) {
    console.log("enter now", driver_id, order_id, truck_type);
    let body = { driver_id, order_id, truck_type };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://webappexpressnew.herokuapp.com/customer/bookdriver",
      requestOptions
    );
    const res = await response.json();
    console.log(res);
    if (response.status === 201) {
      let data = JSON.parse(localStorage.getItem("user_orderDetails"));
      let driver = data.avalaible_drivers.find((a) => a.id === driver_id);
      console.log(driver, "chiderea");
      localStorage.setItem("bookeddriver", JSON.stringify(driver));
      this.setState({ driver_id: driver_id });
      console.log(this.state.driver_id);
      return notifyuser(
        "Confirming Driver!",
        "Please wait...",
        "success",
        `error`
      );
    }
    console.log(response);
  }

  render() {
    // console.log(this.state, "stater");
    let data = JSON.parse(this.getAvailableDriver());
    let bookedDriver = JSON.parse(localStorage.getItem("bookeddriver"));
    console.log(bookedDriver);
    // console.log(data.avalaible_drivers, data.new_order.id);
    if (bookedDriver) {
      return (
        <div>
          <Header />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="card text-center" style={{ margin: 20 }}>
                    <br />
                  <h3 className="text-center text-success">
                    Please wait your driver will arrive shortly
                  </h3>
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1641005399/undraw_profile_pic_ic5t_rkejzu.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-dark">
                    <h5 className="card-title fs-4 text-capitalize">
                      {bookedDriver.name}
                    </h5>
                    <p className="card-text fs-4 text-capitalize ">
                      {bookedDriver.truck_type}
                    </p>
                    <p className="card-text fs-4">{bookedDriver.phone}</p>
                    <p className="card-text fs-4">{bookedDriver.id}</p>
                    <button className="btn btn-danger def-btn fs-6" onClick={this.deleteTripOrder.bind(this, bookedDriver.order_id)}>
                      Cancel Trip
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (data.avalaible_drivers.length>0) {
      return (
        <div>
          <Header />
          <br />
          <div className="container">
            <div className="row">
              {data.avalaible_drivers.map((val) => (
                <div className="col-sm-4">
                  <div className="card text-center" style={{ margin: 20 }}>
                    <img
                      src="https://res.cloudinary.com/ckgraphics/image/upload/v1641005399/undraw_profile_pic_ic5t_rkejzu.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-dark">
                      <h5 className="card-title fs-4 text-capitalize">
                        {val.name}
                      </h5>
                      <p className="card-text fs-4 text-capitalize ">
                        {val.truck_type}
                      </p>
                      <p className="card-text fs-4">{val.phone}</p>
                      <p className="card-text fs-4">Driver Id: {val.id}</p>
                      <button
                        className="btn btn-primary def-btn fs-6"
                        onClick={this.bookDriver.bind(
                          this,
                          val.id,
                          data.new_order.id,
                          val.truck_type_id
                        )}
                      >
                        Book truck
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <br />
          <div className="container">
            <div className="card">
              <div className='card-body text-center'>
              <br/>
              <br/>
            <h3 className="text-center card-title text-dark">
              Sorry! no driver available at the moment 
              <br/>Please try again later
            </h3>
            <a href='/customer-bookorder' className="btn btn-primary def-btn col-4">Back</a>
            <br/>
            <br/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default Customerdrivers;
