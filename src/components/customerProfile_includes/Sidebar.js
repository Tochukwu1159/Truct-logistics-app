import React from "react";

import { logOut } from "../../util";

const Sidebar = () => {

  return (
    <div className='rendermobile' >
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href='/'>
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Customer dashboard</div>
        </a>

        <hr className="sidebar-divider my-0" />
        <br />
        <div className="sidebar-heading">Delivery</div>

        <li className="nav-item">
          <p className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Track current delivery</span>
          </p>
        </li>

        <li className="nav-item ">
          <a className="nav-link" href="customer-vieworders">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>View orders</span>
          </a>
        </li>

        <li className="nav-item ">
          <a className="nav-link" href="customer-bookorder">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Book Order</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Customer service</div>

        <li className="nav-item">
          <p className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <span>View profile</span>
          </p>
        </li>
        <li className="nav-item ">
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

export default Sidebar;
