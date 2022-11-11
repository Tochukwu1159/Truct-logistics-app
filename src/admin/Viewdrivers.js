import React from "react";
import Sidenav from "../components/admin_includes/Sidenav";
import Topbar from "../components/admin_includes/Topbar";


class Viewdrivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://webappexpressnew.herokuapp.com/admin/viewdrivers")
      .then((response) => response.json())
      .then((fetchData) => {
        this.setState({ data: fetchData.data });
      });
  }

  render() {
    const urlCurrent = window.location.href.split("/");
    let orderid = urlCurrent[urlCurrent.length - 1];
    console.log(orderid);
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
                    <h1 className="h3 mb-2 text-gray-800">Drivers </h1>
                    <p className="mb-4">
                      Below is a comprehensive list of all drivers orders
                      details
                    </p>

                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table">
                            <thead
                              style={{
                                backgroundColor: "darkmagenta",
                                color: "white",
                              }}
                            >
                              <tr>
                                <th scope="col">Driver ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Daily Order</th>
                                <th scope="col">Completed order</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.data.map((val, i) => (
                                <tr>
                                  <td>{val.id}</td>
                                  <td>{val.name}</td>
                                  <td>{i}</td>
                                  <td>{i}</td>
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
}

export default Viewdrivers;
