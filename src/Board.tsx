import Element from "./Element";
import "./Board.css";

export default function Board(props) {
  const { board } = props;
  return (
    <>
      {board.map((line: []) => {
        return (
          <div className="line">
            {line.map((element) => {
              return <Element element={element}></Element>;
            })}
          </div>
        );
      })}
    </>
  );
}
