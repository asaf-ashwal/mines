import React, { useContext } from "react";
import { GlobalContext } from "../../App";
// import {  } from "../../functions/gameLogic";
import "./style.css";
import { countTouchingBooms } from "../../functions/gameLogic";
import { lost } from "../../functions/utils";

function index() {
  const { XandY, board, booms, setBoard, setBooms, setClicks } =
    useContext(GlobalContext);
  //   console.log(XandY);
  //   console.log(booms);
  function handleClick(i) {
      
    if (!booms.length) return;
    if (typeof board[i].text === "number") return;
    if (booms.includes(i)) return lost(setBoard, board, booms, setBooms);
    
    setClicks((prev) => prev + 1);
    const touchingBoom = countTouchingBooms(booms, i, XandY.x, XandY.y);
    if (touchingBoom === 0) {
     // TO DO -- click on all box thet not booms   
    }
    const newArr = [...board];
    newArr[i].text = touchingBoom;
    setBoard(newArr);
  }
  return (
    <section
      className="board"
      style={{
        gridTemplateColumns: `repeat(${XandY.y},1fr)`,
        gridTemplateRows: `repeat(${XandY.x},1fr)`,
      }}
    >
      {board.map((v, i) => (
        <div key={i} className={v.class} onClick={() => handleClick(i)}>
          {/* {i} */}
          {v.text}
        </div>
      ))}
    </section>
  );
}

export default index;
