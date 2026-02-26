// const arr = ["x", "x", "x", "x", "n", "x", "x", "x", "x"];

export function countTouchingBooms(arr, index, x, y) {
  let num;
  // שןרה עליונה
  if (index < x) {
    // console.log("top");
    // פינה שמאלית
    if (index === 0) return topLeft(arr, index, y);
    //פינה ימנית
    else if (index === x - 1) return topRight(arr, index, y);
    // לא בפינה
    else return top(arr, index, y);
  }

  //   שורה תחתונה
  else if (x * y - x  <= index) {
    // console.log('bottom');
    // console.log((x * y - x) ,index);

    //פינה ימנית
    if (x * y - x === index) return bottomLeft(arr, index, y);
    // פינה שמאלית
    else if (x * y - 1 === index) return bottomRight(arr, index, y);
    // לא בפינה
    else return bottom(arr, index, y);
  }

  // שורה שמאלית
  else if (!(index % x)) {
    // console.log("left");
    return left(arr, index, y);
  }
  //  שורה ימנית
  else if (index % x === x - 1) {
    // console.log("right");
    return right(arr, index, y);
  }
  //   center
  else {
    // console.log("cener");
    // console.log(index % x);
    return center(arr, index, y);
  }
}

function topLeft(arr, index, y) {
  let n = 0;
  n += rightSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  n += bottomRightSweep(arr, index, y);
  return n;
}

function top(arr, index, y) {
  let n = 0;
  n += leftSweep(arr, index, y);
  n += rightSweep(arr, index, y);
  n += bottomLeftSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  n += bottomRightSweep(arr, index, y);
  return n;
}

function topRight(arr, index, y) {
  let n = 0;
  n += leftSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  n += bottomLeftSweep(arr, index, y);
  return n;
}

function left(arr, index, y) {
  let n = 0;
  n += topSweep(arr, index, y);
  n += topRightSweep(arr, index, y);
  n += rightSweep(arr, index, y);
  n += bottomRightSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  return n;
}

function center(arr, index, y) {
  let n = 0;
  n += topLeftSweep(arr, index, y);
  n += topRightSweep(arr, index, y);
  n += bottomRightSweep(arr, index, y);
  n += bottomLeftSweep(arr, index, y);
  n += topSweep(arr, index, y);
  n += leftSweep(arr, index, y);
  n += rightSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  return n;
}

function right(arr, index, y) {
  let n = 0;
  n += topSweep(arr, index, y);
  n += topLeftSweep(arr, index, y);
  n += leftSweep(arr, index, y);
  n += bottomLeftSweep(arr, index, y);
  n += bottomSweep(arr, index, y);
  return n;
}

function bottomLeft(arr, index, y) {
  let n = 0;
  n += topSweep(arr, index, y);
  n += topRightSweep(arr, index, y);
  n += rightSweep(arr, index, y);
  return n;
}

function bottom(arr, index, y) {
  let n = 0;
  n += topSweep(arr, index, y);
  n += topRightSweep(arr, index, y);
  n += topLeftSweep(arr, index, y);
  n += leftSweep(arr, index, y);
  n += rightSweep(arr, index, y);
  return n;
}
function topLeftSweep(arr, n, y) {
  return arr.includes(n - y - 1) && 1;
}

function topSweep(arr, n, y) {
  return arr.includes(n - y) && 1;
}

function topRightSweep(arr, n, y) {
  return arr.includes(n - y + 1) && 1;
}

function leftSweep(arr, n, y) {
  return arr.includes(n - 1) && 1;
}

function rightSweep(arr, n, y) {
  const x = arr.includes(n + 1) && 1;
  // console.log("x: ", x);
  return x;
}

function bottomLeftSweep(arr, n, y) {
  const x = arr.includes(n + y - 1) && 1;
  return x;
}

function bottomSweep(arr, n, y) {
  return arr.includes(n + y) && 1;
}

function bottomRightSweep(arr, n, y) {
  return arr.includes(n + y + 1) && 1;
}


function bottomRight(arr, index, y) {
  let n = 0;
  n += topLeftSweep(arr, index, y);
  n += topSweep(arr, index, y);
  n += leftSweep(arr, index, y);
  return n;
}





// function middleSweep(arr, n, y) {
//   return arr[n] === "boom" && 1;
// }





