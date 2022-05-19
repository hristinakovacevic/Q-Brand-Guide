import "./Footer.css";
import footerLogo from "../../assets/logo-footer.svg";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import lin from "../../assets/lin.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__img-wrap">
        <a href="https://quantox.com/" target="_blank">
          <img src={footerLogo} alt="quantox logo" />
        </a>
      </div>
      <div className="footer__media-icons-wrap">
        <div className="footer__icons-wrap">
          <img src={fb} alt="facebook" />
          <img src={ig} alt="instagram" />
          <img src={lin} alt="linkedIn" />
        </div>
        <p className="footer-rights-reserved">
          Quantox Technology 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
