import React, { useContext } from "react";
import { GlobalContext } from "../../App";
// import {  } from "../../functions/gameLogic";
import "./style.css";
import { countTouchingBooms } from "../../functions/gameLogic";
import { lost, openEmpty } from "../../functions/utils";

function index(e) {
  
  const { XandY, board, booms, setBoard, setBooms, setClicks,open,setOpen,clicks } =
    useContext(GlobalContext);
    function handleClick(i) {
      console.log(clicks);
      
      if (clicks?.class) return;
      //  console.log('out XandY: ',{i, board, setBoard, XandY, booms});
      console.log((board.length -1)- (booms.length-1));
    
    if (!booms.length) return;
    if (typeof board[i].text === "number") return;
    if (booms.includes(i)) return lost(setBoard, board, booms, setClicks);

    setClicks({text:'Well done keep searching',class:''});
    const touchingBoom = countTouchingBooms(booms, i, XandY.x, XandY.y);
    if (touchingBoom === 0) {
      // TO DO -- click on all box thet not booms

      return openEmpty(i, board, setBoard, XandY, booms,setOpen);
    }
    const newArr = [...board];
    newArr[i].text = touchingBoom;
    setBoard(newArr);
    setOpen(prev=>prev+1)
    
  }
  
  function handleDoubleClick(i) {
    console.log('dubla');
    
    const newArr = [...board]; 
    if (newArr[i].text === null) return newArr[i] ={text:'🏴',class:''}
     else if (newArr[i].text === '🏴') return newArr[i] ={text:'',class:''}
  }

  return (
    <section
      className={`board ${clicks.class}`}
      style={{
        gridTemplateColumns: `repeat(${XandY.y},1fr)`,
        gridTemplateRows: `repeat(${XandY.x},1fr)`,
      }}
    >
      {board.map((v, i) => (
        <div key={i} className={v.class} onDoubleClick={()=>handleDoubleClick(i)} onClick={() => handleClick(i)}>
          {v.text}
        </div>
      ))}
    </section>
  );
}

export default index;
