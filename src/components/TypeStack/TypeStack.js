import "./TypeStack.css";
import montBold from "../../assets/montserrateBold.png";
import montRegular from "../../assets/montserrateRegular.png";
const TypeStack = () => {
  return (
    <div className="stack-container">
      <h2>Type stack</h2>
      <p className="stack__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non commodo, id
        et eu augue. Id semper eget vel faucibus tortor elementum amet.
        Penatibus feugiat metus purus, habitant vitae commodo phasellus
        habitasse sed. Leo dolor elit sed orci nulla ullamcorper.
      </p>
      <div className="stack__options-container">
        <div className="stack__options-wrap">
          <p className="label">TYPE STACK</p>
          <div className="stack__option">
            <div>
              <p>
                <b>MONTSERRAT BOLD</b>
              </p>
              <p>This font is used for headlines</p>
            </div>
            <div className="image-wrap">
              <img src={montBold} alt="mont bold" />
            </div>
          </div>
        </div>
        <div className="stack__options-wrap">
          <p className="label">TYPE STACK</p>
          <div className="stack__option">
            <div>
              <p>MONTSERRAT REGULAR</p>
              <p>This font is used for headlines</p>
            </div>
            <div className="image-wrap">
              <img src={montRegular} alt="mont regular" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TypeStack;
