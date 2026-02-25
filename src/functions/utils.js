export function createBord(x, y) {
  const arr = [];
  for (let i = 1; i <= x * y; i++) {
    arr.push({ text: "", class: "" });
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

export function lost(setBoard, arr, boomsArr, setbooms) {
  setBoard(
    arr.map((v, i) => (boomsArr.includes(i) ? { text: "💣", class: "" } : v)),
  );
  setbooms([]);
}

function openEmpty(index, arr, setArr,booms,XandY) {
const newArr = [...arr]
const currentIndex = countTouchingBooms(index);
newArr[index].text = currentIndex
  if (currentIndex) return;
// TO DO -- create a function that clicks all boxes sresder her

  // openEmpty(index)
}

// function recors(index, arr, setArr,booms,XandY) {
// // export function countTouchingBooms(arr, index, x, y) {
//   let num;
//   // שןרה עליונה
//   if (index < x) {
//     console.log("top");
//     // פינה שמאלית
//     if (index === 0) return topLeft(arr, index, y);
//     //פינה ימנית
//     else if (index === x - 1) return topRight(arr, index, y);
//     // לא בפינה
//     else return top(arr, index, y);
//   }

//   //   שורה תחתונה
//   else if (x * y - x  <= index) {
//     console.log('bottom');
//     console.log((x * y - x) ,index);

//     //פינה ימנית
//     if (x * y - x === index) return bottomLeft(arr, index, y);
//     // פינה שמאלית
//     else if (x * y - 1 === index) return bottomRight(arr, index, y);
//     // לא בפינה
//     else return bottom(arr, index, y);
// }}