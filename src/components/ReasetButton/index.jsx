import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { createBoomsArr, createBord } from "../../functions/utils";
import "./style.css";

function index() {
  const { setBooms, XandY, board, setBoard, setClicks } =
    useContext(GlobalContext);

  function hndleClick() {
    // TO DO -- CHENGE THE X AND Y TO RANDOM OR  USER CHOISE --
    setBoard(createBord(XandY.x, XandY.y));
    setBooms(createBoomsArr(board.length - 1));
    setClicks(0);
  }
  return (
    <button className="reaset-button" onClick={hndleClick}>
      Reaset Game
    </button>
  );
}

export default index;
