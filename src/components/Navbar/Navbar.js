import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-container">
      <div>
        <img src={logo} alt="quantox-logo" className="nav__logo" />
      </div>

      <div className="nav__wrap">
        <div className=" nav nav__brand">
          <p className="label nav-label">THE BRAND</p>
          <h6>The basics</h6>
        </div>
        <div className="nav nav__design">
          <p className="label nav-label">THE DESIGN</p>
          <h6> Brand identity</h6>

          <h6 onClick={(e) => setToggle(!toggle)}> Typography</h6>
          {toggle && (
            <ul className="dropdown-typography">
              <li>Type stack</li>
              <li>Type scale</li>
              <li>Color in typography</li>
              <li> Example pairings</li>
              <li>Line width</li>
            </ul>
          )}

          <h6>Color</h6>
          <h6>Layout</h6>
        </div>
        <div className=" nav nav__presentation">
          <p className="label nav-label">PRESENTATIONS</p>
          <h6>Presentation design</h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
