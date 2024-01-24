export default function getInitialBoard() {
  const boardArray: number[][] = [];
  // const horizontalArray: number[] = [];
  // boardArray.fill(horizontalArray.fill(0, 0, 11), 0, 19);
  // console.log("boardArray", boardArray);

  for (let i = 0; i < 20; i++) {
    boardArray.push([]);
    for (let j = 0; j < 12; j++) {
      boardArray[i].push(0);
    }
  }
  return boardArray;
}
