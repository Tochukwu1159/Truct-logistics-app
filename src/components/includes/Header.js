import React from "react";
import {
  checkLoggedinDisplay,
  isAdminStatus,
  isCustomerStatus,
  isDriverStatus,
  logOut,
} from "../../util";
import { Customlink, Loginlink, Logoutlink } from "./Menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      isadmin: false,
      isdriver: false,
      iscustomer: false,
    };
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    let status = checkLoggedinDisplay();
    let isadminval = isAdminStatus();
    let isdriverval = isDriverStatus();
    let iscustval = isCustomerStatus();
    console.log(status);
    this.setState({
      islogin: status,
      isadmin: isadminval,
      isdriver: isdriverval,
      iscustomer: iscustval,
    });

  }

  login() {
    window.location.href = "/login";
  }

  render() {
    let logbutton;
    let dashboard;
    let othermenu;
    let othermenu2

    if (this.state.islogin === true) {
      logbutton = <Logoutlink onClick={logOut} />;
    } else {
      logbutton = <Loginlink onClick={this.login} />;
      othermenu = <Customlink name={'Become a driver'}  link={`signup-driver`}/>;
      othermenu2 = <Customlink name={'Book a truck'}  link={`signup-customer`}/>;
    }

    if (this.state.isadmin === true) {
      dashboard = <Customlink link={`/admin-vieworders`} name={'Dashboard'}/>;
    }
    if (this.state.isdriver === true) {
      dashboard = <Customlink link={`/driver-vieworders`} name={'Dashboard'}/>;
    }
    if (this.state.iscustomer === true) {
      dashboard = <Customlink link={`/customer-profile`} name={'Dashboard'} />;
    }


    console.log(this.state, "cgiderejjfgm");
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


          <div className="container-fluid">
            <a className="navbar-brand mt-2 mt-lg-0" href="./">
              <h2 className="trucklogo">TRUCKS</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                {othermenu}
                {othermenu2}
                <li className="nav-item active truck-nav">
                  <p className="nav-link truck-link" href="#">
                    Our Team
                  </p>
                </li>
                <li className="nav-item active truck-nav">
                  <p className="nav-link truck-link" href="#">
                    How it Works
                  </p>
                </li>
                {logbutton}
                {dashboard}
              </ul>
            </div>

            <div className="d-flex align-items-center collapse navbar-collapse"></div>
          </div>
          {/* <br />
        <br /> */}
        </nav>
        {console.log(this.state)}
      </div>
    );
  }
}

export default Header;
