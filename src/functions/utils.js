import { countTouchingBooms } from "./gameLogic";

export function createBord(x, y) {
  const arr = [];
  for (let i = 1; i <= x * y; i++) {
    arr.push({ text: null, class: "" });
  }
  return arr;
}
export function createBoomsArr(boardLength) {
  const arr = [];

  // handle same random number
  for (let i = 1; i <= Math.floor(boardLength * 0.13); i++) {
    arr.push(createRandom(0, boardLength - 1));
  }
  return arr;
}

export function createRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function lost(setBoard, arr, boomsArr, setClicks) {
  setClicks({text:'Opss you step on the boom',class:'lost'})
  // console.log(setClicks);
  
  setBoard(
    arr.map((v, i) => (boomsArr.includes(i) ? { text: "💣", class: "" } : v)),
  );
  // setbooms([]);
}

export function openEmpty(index, arr, setArr, XandY, booms, setOpen) {
  if (arr[index].text !== null) return;

  // console.log("befor: ", { index, arr, setArr, XandY, booms });
  const newArr = [...arr];

  const currentIndex = countTouchingBooms(booms, index, XandY.x, XandY.y);
  newArr[index].text = currentIndex;
  setArr(newArr);
  setOpen((prev) => prev + 1);
  if (currentIndex) return;
  // console.log("after: ", { index, arr, setArr, XandY, booms });

  // TO DO -- create a function that clicks all boxes sresder her
  return recors(index, arr, setArr, XandY, booms,setOpen);
}

function recors(index, arr, setArr, XandY, booms, setOpen) {
  //   // שןרה עליונה
  if (index < XandY.x) {
        // console.log("top");
    //     // פינה שמאלית
    if (index === 0) {
      // console.log("top left");
      return (
        // rightSweep
        (
          openEmpty(index + 1, arr, setArr, XandY, booms, setOpen),
          // bottomSweep
          openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen),
          // bottomRightSweep
          openEmpty(index + XandY.y + 1, arr, setArr, XandY, booms, setOpen)
        )
      );
    }
    //     //פינה ימנית
    else if (index === XandY.x - 1) {
      // console.log("top right");

      return (
        //   // leftSweep
        //   (
        (
          openEmpty(index - 1, arr, setArr, XandY, booms, setOpen),
          //     // bottomLeftSweep
          openEmpty(index + XandY.y - 1, arr, setArr, XandY, booms, setOpen),
          //     // bottomSweep
          openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen)
        )
        //   )
      );
    }
    //     // לא בפינה
    else
      return (
        //   // leftSweep
        (
          openEmpty(index - 1, arr, setArr, XandY, booms, setOpen),
          //     // rightSweep
          openEmpty(index + 1, arr, setArr, XandY, booms, setOpen),
          //     // bottomLeftSweep
          openEmpty(index + XandY.y - 1, arr, setArr, XandY, booms, setOpen),
          //     // bottomSweep
          openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen),
          //     // bottomRightSweep
          openEmpty(index + XandY.y + 1, arr, setArr, XandY, booms, setOpen)
        )
      );
  }

  //   שורה תחתונה
  else if (XandY.x * XandY.y - XandY.x <= index) {
    //     //פינה שמאלית
    if (XandY.x * XandY.y - XandY.x === index) {
      // console.log("bottom left");

      return (
        openEmpty(index + 1, arr, setArr, XandY, booms, setOpen),
        openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
        openEmpty(index - XandY.y + 1, arr, setArr, XandY, booms, setOpen)
      );
    }
    //     // פינה ימנית
    else if (XandY.x * XandY.y - 1 === index) {
      // console.log("bottom right");
      return (
        // topSweep;
        (
          openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
          // topRightSweep;
          openEmpty(index - XandY.y - 1, arr, setArr, XandY, booms, setOpen),
          // rightSweep
          openEmpty(index - 1, arr, setArr, XandY, booms, setOpen)
        )
      );
    }
    //     // לא בפינה
    else {
      // console.log("bottom");

      return (
        // topLeftSweep;
        (
          openEmpty(index - XandY.y - 1, arr, setArr, XandY, booms, setOpen),
          // // topSweep;
          openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
          // // topRightSweep;
          openEmpty(index - XandY.y + 1, arr, setArr, XandY, booms, setOpen),
          // // leftSweep
          openEmpty(index - 1, arr, setArr, XandY, booms, setOpen),
          // // rightSweep
          openEmpty(index + 1, arr, setArr, XandY, booms, setOpen)
        )
      );
    }
  }
  // שורה שמאלית
  else if (!(index % XandY.x)) {
    // console.log("left");

    return (
      // topSweep;
      (
        openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
        // topRightSweep;
        openEmpty(index - XandY.y + 1, arr, setArr, XandY, booms, setOpen),
        // rightSweep
        openEmpty(index + 1, arr, setArr, XandY, booms, setOpen),
        // bottomRightSweep
        openEmpty(index + XandY.y + 1, arr, setArr, XandY, booms, setOpen),
        // bottomSweep
        openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen)
      )
    );
  }
  //  שורה ימנית
  else if (index % XandY.x === XandY.x - 1) {
    // console.log("right");

    return (
      // topLeftSweep;
      (
        openEmpty(index - XandY.y - 1, arr, setArr, XandY, booms, setOpen),
        // topSweep;
        openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
        // leftSweep
        openEmpty(index - 1, arr, setArr, XandY, booms, setOpen),
        // bottomLeftSweep
        openEmpty(index + XandY.y - 1, arr, setArr, XandY, booms, setOpen),
        // bottomSweep
        openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen)
      )
    );
  } else {
    // console.log("center");

    return (
      // topLeftSweep;
      (
        openEmpty(index - XandY.y - 1, arr, setArr, XandY, booms, setOpen),
        // topSweep;
        openEmpty(index - XandY.y, arr, setArr, XandY, booms, setOpen),
        // topRightSweep;
        openEmpty(index - XandY.y + 1, arr, setArr, XandY, booms, setOpen),
        // leftSweep
        openEmpty(index - 1, arr, setArr, XandY, booms, setOpen),
        // rightSweep
        openEmpty(index + 1, arr, setArr, XandY, booms, setOpen),
        // bottomLeftSweep
        openEmpty(index + XandY.y - 1, arr, setArr, XandY, booms, setOpen),
        // bottomSweep
        openEmpty(index + XandY.y, arr, setArr, XandY, booms, setOpen),
        // bottomRightSweep
        openEmpty(index + XandY.y + 1, arr, setArr, XandY, booms, setOpen)
      )
    );
  }
}
