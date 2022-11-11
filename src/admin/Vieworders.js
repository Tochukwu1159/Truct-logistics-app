import React from "react";

import Sidenav from "../components/admin_includes/Sidenav";
import Topbar from "../components/admin_includes/Topbar";

import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/stylesheets/sb-admin-2.min.css";
import "./vendor/datatables/dataTables.bootstrap4.min.css";
import Tabledata from "../components/admin_includes/Orderdata"

const Vieworders = () => {

  return (
    <div>
      <div id="page-top">
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

                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="table-responsive">
                      <Tabledata/>
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

      </div>
    </div>
  );
};

export default Vieworders;
