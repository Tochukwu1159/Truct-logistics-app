import React from "react";
import Sidenav from "../components/admin_includes/Sidenav";
import Topbar from "../components/admin_includes/Topbar";
import { notifyuser } from "../util";


class Pendingorders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.confirmOrder=this.confirmOrder.bind(this)
  }
  componentDidMount() {
    fetch("https://webappexpressnew.herokuapp.com/admin/pendingorder")
      .then((response) => response.json())
      .then((fetchData) => {
        this.setState({ data: fetchData.data });
      });
    }
    async confirmOrder(id) {
      console.log(id,'inside func');
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: `${id}` })     
      };
      const response= await fetch('https://webappexpressnew.herokuapp.com/admin/confirmorder', requestOptions)
          const res = await response.json();
          if (response.status===200) {
            notifyuser(
              "Confirming Order!",
              "Please wait...",
              "success",
              `/admin-pendingorders`
            );

          }
          console.log(response);
          this.setState({ postId: res.id })
    }



  render() {
    const urlCurrent = window.location.href.split("/");
    let orderid = urlCurrent[urlCurrent.length - 1];
    console.log(orderid);
    if (orderid.length > 9 && orderid[8] === "-") {
      console.log("id is valid");
      let singleData = this.state.data.filter((a) => a.id === orderid);
      console.log(singleData[0]);
      return (
        <div>
          <body id="page-top">
            <div id="wrapper">
              <Sidenav />

              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Topbar />

                  <div className="container-fluid">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <h1 className="h3 mb-2 text-gray-800 text-center">
                          Order Details
                        </h1>

                        <div className="row">
                          {singleData.map((val) => (
                            <div className="col-sm-6">
                              <p>
                                <strong>Order Id:</strong> {val.id}
                              </p>
                              <hr />
                              <p>
                                <strong>Customer Id:</strong> {val.customer_id}
                              </p>
                              <hr />
                              <p>
                                <strong>Orders Name:</strong> {val.product_name}
                              </p>
                              <hr />
                              <p>
                                <strong>Order Category:</strong>{" "}
                                {val.product_category}
                              </p>
                              <hr />
                              <p>
                                <strong>Pickup address :</strong>{" "}
                                {val.pick_address}
                              </p>
                              <hr />
                              <p>
                                <strong>Delivery address :</strong>{" "}
                                {val.delivery_address}
                              </p>
                              <hr />
                              <p>
                                <strong>Recipient name :</strong>{" "}
                                {val.recipient_name}
                              </p>
                              <hr />
                              <p>
                                <strong>Order Status :</strong>{" "}
                                {val.order_status}
                              </p>
                              <button className="btn btn-primary"
                              onClick={this.confirmOrder.bind(this,val.id)}
                              >
                                confirm order
                              </button>
                              <button className="btn btn-danger">
                                cancel order
                              </button>
                              <button className="btn btn-success">
                                close order
                              </button>
                            </div>
                          ))}

                          <div className="col-sm-6">
                            <iframe
                              title={"map"}
                              height="500"
                              width="100%"
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>

            <div
              className="modal fade"
              id="logoutModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Ready to Leave?
                    </h5>
                    <button
                      className="close"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Select "Logout" below if you are ready to end your current
                    session.
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <a className="btn btn-primary" href="login.html">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      );
    } else {
      console.log("id is invalid");
      return (
        <div>
          <body id="page-top">
            <div id="wrapper">
              <Sidenav />

              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Topbar />

                  <div className="container-fluid">
                    <h1 className="h3 mb-2 text-gray-800">Pending Orders</h1>
                    <p className="mb-4">
                      Below is a comprehensive list of all customer orders
                      details
                    </p>

                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table class="table">
                            <thead style={{backgroundColor:'darkmagenta',color:'white'}}>
                              <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Pickup Address</th>
                                <th scope="col">Delivery Address</th>
                                <th scope="col">Recipient Name</th>
                                <th scope="col">Recipient Phone</th>
                                <th scope="col">Order weight</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">#</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.data.map((val) => (
                                <tr>
                                  <td>{val.id}</td>
                                  <td>{val.product_name}</td>
                                  <td>{val.product_category}</td>
                                  <td>{val.pick_address}</td>
                                  <td>{val.delivery_address}</td>
                                  <td>{val.recipient_name}</td>
                                  <td>{val.recipient_phone}</td>
                                  <td>{val.weight}kg</td>
                                  <td>{val.order_status}</td>
                                  <td>
                                    <a href={`/admin-pendingorders/${val.id}`}>
                                    <button className="btn btn-primary">
                                      View more
                                    </button>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>

            <div
              className="modal fade"
              id="logoutModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Ready to Leave?
                    </h5>
                    <button
                      className="close"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Select "Logout" below if you are ready to end your current
                    session.
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <a className="btn btn-primary" href="login.html">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      );
    }
    // const { userName } = this.props.match.params;
  }
}

export default Pendingorders;
