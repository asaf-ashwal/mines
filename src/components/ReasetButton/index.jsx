import React, { useContext, useRef } from "react";
import { GlobalContext } from "../../App";
import { createBoomsArr, createBord } from "../../functions/utils";
import "./style.css";

function index() {
  const { setBooms, XandY, board, setBoard, setClicks, setOpen, setXandY } =
    useContext(GlobalContext);

    const selectRef = useRef();
  function hndleClick() {
    console.log();
    const num = Number(selectRef.current.value)
    // TO DO -- CHENGE THE X AND Y TO RANDOM OR  USER CHOISE --
    setXandY({x:num,y:num})
    setBoard(createBord(num,num));
    setBooms(createBoomsArr(board.length - 1));
    setClicks({ text: "Wellcom !!!", class: "" });
    setOpen(0);
  }

  return (
    <nav>
      <button className="reaset-button" onClick={hndleClick}>
        Reset Game:
      </button>
      <select ref={selectRef} name="" id="">
        <option value="5">5</option>
        <option value="9">9</option>
        <option value="15">15</option>
      </select>
    </nav>
  );
}

export default index;
