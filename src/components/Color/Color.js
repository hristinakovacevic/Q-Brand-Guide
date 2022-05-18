import "./Color.css";
function Color() {
  return (
    <div className="stack-container ">
      <h2>Color in typography</h2>
      <p className="stack__p">
        The interface colors are the main sets of colors for a general website
        layout. Colors that pertain to navigations, section modules, general
        typography, and footers are in the realm of “interface colors.”
      </p>
      <div className="stack__options-wrap">
        <div className="stack__option margin">
          <div className="color__wrap">
            <p className="label">HEADLINES, PARAGRAPHS</p>
            <div className="color rec-white">
              <p>Quantox</p> <p>#000000</p>
            </div>
          </div>
        </div>

        <div className="stack__option margin">
          <div className="color__wrap">
            <p className="label">FOOTER</p>
            <div className="color rec-gray">
              <p>Quantox </p>
              <p>#6E6F72</p>
            </div>
          </div>
        </div>

        <div className="stack__option margin">
          <div className="color__wrap">
            <p className="label">CAPTIONS</p>
            <div className="color rec-opacity">
              <p>Quantox</p>
              <p>#B5B5B5</p>
            </div>
          </div>
        </div>

        <div className="stack__option margin">
          <div className="color__wrap">
            <p className="label">CAPTIONS</p>
            <div className="color rec-green">
              <p>Quantox </p>
              <p>#B5B5B5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Color;
