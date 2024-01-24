import { useEffect, useState } from "react";
import "./App.css";
import getInitialBoard from "./util/util";
import Board from "./Board";

function App() {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(getInitialBoard());
  const [activePiece, setActivePiece] = useState([1, 1, 1, 1]);
  console.log("count", count);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((line, index) => {
        if (index === count) {
          return line.map((element, index) => {
            if (index > 3 && index < 8) {
              return 1;
            } else return element;
          });
        } else {
          return line.map(() => 0);
        }
      });
      console.log("updatedBoard", updatedBoard);
      console.log("count", count);

      return updatedBoard;
    });
  }, [count]);

  return (
    <>
      <span>Count: {count}</span>
      <div>
        Current piece:{" "}
        {activePiece.map((piece) => (
          <span>{piece}</span>
        ))}
      </div>
      <Board
        activePiece={activePiece}
        board={board}
        setBoard={(e) => setBoard(e)}
      ></Board>
    </>
  );
}

export default App;
