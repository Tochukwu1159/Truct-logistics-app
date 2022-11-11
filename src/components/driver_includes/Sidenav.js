import React from "react";
import { logOut } from "../../util";

const Sidenav = () => {
  return (
    <div className='rendermobile' >
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="../"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">DRIVER DASHBOARD</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <br />

      <li className="nav-item">
        <a className="nav-link" href="/driver-vieworders">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>View Orders</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="driver-wallet">
          <i className="fa fa-fw fa-envelope"></i>
          <span>View wallet</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <a className="nav-link collapsed" href="driver-transaction">
          <i className="fas fa-fw fa-cog"></i>
          <span>Transaction history</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="driver-profile">
          <i className="fas fa-fw fa-cog"></i>
          <span>Profile</span>
        </a>
      </li>

      <li className="nav-item">
        <p className="nav-link collapsed" onClick={logOut}>
          <i className="fas fa-fw fa-user-minus"></i>
          <span>Logout</span>
        </p>
      </li>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>

    </div>
  );
};

export default Sidenav;
