import React from "react";
import { Link } from "react-router-dom";

const Baradenav = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <li>
          <Link to={"/"}>
            <img src="img/logo.png" alt="logo" height={40} />
          </Link>
        </li>
      </div>
      <div className="nav_menu">
        <li>
          <Link to={"/"} className="nav_menu_links">
            Acasă
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="nav_menu_links">
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Baradenav;
