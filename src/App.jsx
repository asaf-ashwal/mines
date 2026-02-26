import { createContext, useEffect, useState } from "react";
import "./App.css";
import { createBoomsArr, createBord, createRandom } from "./functions/utils";
import Board from "./components/Board/index";
import ReasetButton from "./components/ReasetButton/index";

export const GlobalContext = createContext();

function App() {
  const [XandY, setXandY] = useState({
    x: 5, //createRandom(5, 10),
    y: 5, // createRandom(3, 10),
  });
  const [board, setBoard] = useState(createBord(XandY.x, XandY.y));
  const [booms, setBooms] = useState(createBoomsArr(board.length - 1));
  const [clicks, setClicks] = useState({ text: "Wellcom !!!", class: "" });
  const [open, setOpen] = useState(0);
  useEffect(() => {
    console.log("in EFFECT");
    if (open === board.length  - (booms.length ))
      setClicks({ text: "Victory !!!", class: "von" });
  }, [board]);
  // useEffect(() => {
  //   setBoard()
  // }, [XandY]);
  return (
    <main>
      
    <GlobalContext.Provider
      value={{
        setXandY,
        booms,
        setBooms,
        XandY,
        board,
        setBoard,
        setClicks,
        clicks,
        open,
        setOpen,
      }}
      >
      {clicks.text}
<section className="pSection">

      <p>Open: {open}</p>
      <p>Booms: {booms.length}</p>
</section>
      <Board />
      <ReasetButton />
    </GlobalContext.Provider>
      </main>
  );
}

export default App;
