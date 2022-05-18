import "./Line.css";
const Line = () => {
  return (
    <div className="stack-container border">
      <h2>Line width</h2>
      <p className="stack__p">
        Be conscious of the space between the beginning and end of a text box.
        It can be the difference between content that's easy to read and content
        that makes you cross-eyed.
      </p>
      <div className="stack__options-container">
        <div className="stack__options-wrap padding">
          <p className="line__p">
            <b>
              There’s an art to eating well and wisely, and membership service
              NatureBox saw an opportunity to make it easy. There’s an art to
              eating well and wisely, and membership service NatureBox saw an
              opportunity to make it easy.
            </b>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};
export default Line;
