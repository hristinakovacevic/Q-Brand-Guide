import "./Modal.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ setOpen, open }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="modal-container">
      <div className="modal__wrap">
        <div className="x-mark">
          <FontAwesomeIcon
            icon={faXmark}
            className="fa-2x "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className=" nav nav__brand">
          <p className="label nav-label">THE BRAND</p>
          <h6>The basics</h6>
        </div>
        <div className="nav nav__design">
          <p className="label nav-label">THE DESIGN</p>
          <h6> Brand identity</h6>

          <h6 onClick={(e) => setToggle(!toggle)}> Typography</h6>
          {toggle && (
            <ul className="dropdown-typography modal-dropdown">
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

export default Modal;
