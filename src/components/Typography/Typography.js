import "./Typography.css";
import rectangle from "../../assets/Rectangle4.jpg";
import TypeStack from "../TypeStack/TypeStack";
import TypeScale from "../TypeScale/TypeScale";
import Color from "../Color/Color";
import Example from "../Example/Example";
import Line from "../Line/Line";
import Footer from "../Footer/Footer";
import Fade from "react-reveal/Fade";

const Typography = () => {
  return (
    <div className="typo-container">
      {" "}
      <Fade>
        <div className="typo__wrap">
          <div className="typo__title">
            <p className="label nav-label">DESIGN</p>
            <h1>Typography</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              commodo, id et eu augue. Id semper eget vel faucibus tortor
              elementum amet. Penatibus feugiat metus purus, habitant vitae
              commodo phasellus habitasse sed. Leo dolor elit sed orci nulla
              ullamcorper.
            </p>
          </div>
          <div className="typo__image">
            <img
              src={rectangle}
              alt="rectangle"
              className="typo__image-rectangle"
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <TypeStack />
      </Fade>
      <Fade>
        <TypeScale />
      </Fade>
      <Fade>
        <Color />
      </Fade>
      <Fade>
        <Example />
      </Fade>
      <Line />
      <Footer />
    </div>
  );
};
export default Typography;
