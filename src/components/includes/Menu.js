import React from "react";

export const Loginlink = (props) => {
  return (
    <div>
      <li className="nav-item active truck-nav " onClick={props.onClick}>
        <p className="nav-link truck-link">login</p>
      </li>
    </div>
  );
};
export const Logoutlink = (props) => {
  return (
    <div>
      <li className="nav-item active truck-nav truck-link">
        <p className="nav-link truck-link" onClick={props.onClick}>
          logout
        </p>
      </li>
    </div>
  );
};

export const Customlink = (props) => {
  return (
    <div>
      <li className="nav-item active truck-nav truck-link">
        <a className="nav-link truck-link" href={props.link}>
          {props.name}
        </a>
      </li>
    </div>
  );
};
