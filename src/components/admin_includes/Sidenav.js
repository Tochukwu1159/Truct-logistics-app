import React from "react";
import { logOut } from "../../util";


const Sidenav = () => {
  return (
    <div className='rendermobile'>
    <ul
      className="navbar-nav  sidebar sidebar-dark accordion"
      id="accordionSidebar"
      style={{ backgroundColor: "#3a0049" }}
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="../"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <br />
      <div className="sidebar-heading">Orders</div>

      <li className="nav-item">
        <a className="nav-link" href="/admin-trackorders">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Track orders</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/admin-vieworders">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>View orders</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/admin-pendingorders">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Pending orders</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Customers</div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-transactionhistory">
          <i className="fas fa-fw fa-cog"></i>
          <span>Transaction history</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-viewcustomers">
          <i className="fas fa-fw fa-cog"></i>
          <span>View Customers</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Drivers</div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-viewdriver">
          <i className="fas fa-fw fa-cog"></i>
          <span>View drivers</span>
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
