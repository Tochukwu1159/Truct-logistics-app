import React from "react";
import Sidenav from "../components/driver_includes/Sidenav";
import Topbar from "../components/driver_includes/Topbar";

import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/stylesheets/sb-admin-2.min.css";
import "./vendor/datatables/dataTables.bootstrap4.min.css";


const Wallet = () => {
  return (
    <div>
      <body id="page-top">
        <div id="wrapper">
          <Sidenav />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />

              <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">All orders lists</h1>
                <p className="mb-4">
                  Below is a comprehensive list of all previous successfull
                  delivery transactions
                </p>

                <div className="mb-4">
                 
                <div className="row">
      <div className="col-sm-4 card shadow container">
        <div className="card-body">
          <i className="fa fa-home"></i>
          <h1>Account balance</h1>
          <p>$60000</p>
        </div>
      </div>
      <div className="col-sm-4 card shadow container">
        <div className="card-body">
          <i className="fa fw-large fa-home"></i>
          <h1>Account balance</h1>
          <p>$60000</p>
        </div>
      </div>
      <div className="col-sm-4 card shadow container">
        <div className="card-body">
          <i className="fa fa-home"></i>
          <h1>Account balance</h1>
          <p>$60000</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2020</span>
                </div>
              </div>
            </footer>
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
};

export default Wallet;
