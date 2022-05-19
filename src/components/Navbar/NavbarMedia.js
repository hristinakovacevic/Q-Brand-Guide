import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../assets/logo-footer.svg";
import Modal from "./Modal/Modal";

const NavbarMedia = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-media-container">
      <div className="navmedia-logo-wrap">
        <a href="https://quantox.com/" target="_blank">
          <img src={footerLogo} alt="quantox logo" />
        </a>
      </div>

      <div className="hamburger-container">
        <FontAwesomeIcon
          icon={faBars}
          className="fa fa-2x fa-bars hamburger"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && <Modal setOpen={setOpen} open={open} />}
    </div>
  );
};
export default NavbarMedia;
