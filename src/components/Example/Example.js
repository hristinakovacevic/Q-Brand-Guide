import "./Example.css";
const Example = () => {
  return (
    <div className="stack-container">
      <h2>Example pairings</h2>
      <p className="stack__p">
        Here are some examples of typographic pairs that we commonly use on our
        marketing website.
      </p>
      <div className="stack__options-container">
        <div className="stack__options-wrap">
          <div className="stack__option">
            <p className="label">HEADLINE 1 + HEADLINE 3</p>

            <div className="text-wrap">
              <h1>
                <b>Watch it in real time or on your own time</b>
                <br />
              </h1>
              <h3>
                <b>Quantox builds software for better customer relationships</b>
              </h3>
            </div>
          </div>
        </div>

        <div className="stack__options-wrap">
          <div className="stack__option">
            <p className="label">HEADLINE 2 + PARAGRAPH</p>

            <div className="text-wrap">
              <h2>
                <b>Watch it in real time or on your own time</b>
                <br />
              </h2>
              <p>
                <b>Quantox builds software for better customer relationships</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Example;
