import { createContext, useState } from "react";
import "./App.css";
import { createBoomsArr, createBord, createRandom } from "./functions/utils";
import Board from "./components/Board/index";
import ReasetButton from "./components/ReasetButton/index";

export const GlobalContext = createContext();

function App() {
  const [XandY, setXandY] = useState({
    x: 5, //createRandom(3, 10),
    y: 5, // createRandom(3, 10),
  });
  const [board, setBoard] = useState(createBord(XandY.x, XandY.y));
  const [booms, setBooms] = useState(createBoomsArr(board.length - 1));
  const [clicks, setClicks] = useState(0);
  return (
    <GlobalContext.Provider
      value={{ booms, setBooms, XandY, board, setBoard, setClicks }}
    >
      Clickted: {clicks}
      <br />
      Booms: {booms.length}
      <Board />
      <ReasetButton />
    </GlobalContext.Provider>
  );
}

export default App;
