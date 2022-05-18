import "./TypeScale.css";

function TypeScale() {
  return (
    <div className="stack-container ">
      <h2>Type scale</h2>
      <p className="stack__p">
        Montserrat typographic scale for our website has different weights and
        styles to lay out responsive compositions for both desktop and mobile,
        as well as supporting our Montserrat brand narrative, voice, and tone.
      </p>
      <h3>4px system</h3>
      <p>
        The scale is based on an 8px system, where the type is largely divisible
        by 4. This mathematical approach to typography allows for clean
        relationships between headers, sub-heads, and body copy. When it comes
        to smaller sizes, the system is a little looser to allow for precise
        type specifications.
      </p>
      <div className="stack__options-container">
        <div className="stack__options-wrap">
          <p className="label">FONT SIZE / LINESPACING – CLASSIFICATION</p>
          <div className="stack__option margin">
            <div>
              <p className="label">42px - Headline 1 - H1</p>
              <div>
                <h1>
                  <b>
                    Quantox builds software for better customer relationships
                  </b>
                </h1>
              </div>
            </div>
          </div>

          <div className="stack__option margin">
            <div>
              <p className="label">32px - Headline 2 - H2</p>
              <div>
                <h2>
                  <b>
                    Quantox builds software for better customer relationships
                  </b>
                </h2>
              </div>
            </div>
          </div>

          <div className="stack__option margin">
            <div>
              <p className="label">24px - Headline 3 - H3</p>
              <div>
                <h3>
                  <b>
                    Quantox builds software for better customer relationships
                  </b>
                </h3>
              </div>
            </div>
          </div>

          <div className="stack__option margin">
            <div>
              <p className="label">16px - Paragraph / Navigation</p>
              <div>
                <p>Quantox builds software for better customer relationships</p>
                <p>
                  <b>
                    Quantox builds software for better customer relationships
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="stack__option margin">
            <div>
              <p className="label">12px - Caption</p>
              <p className="caption">
                <b>Quantox builds software for better customer relationships</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeScale;
