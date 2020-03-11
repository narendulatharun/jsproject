var queen = {
  direction: "s",
  position: {
    x: 0,
    y: 4
  }
};

var input = prompt("Enter queen's direction and steps like N3 SW5....");
if (input.length == 3) {
  var steps = Number(input.slice(2));
  var direction = input.slice(0, 2).toUpperCase();
} else if (input.length == 2) {
  var steps = Number(input.slice(1));
  var direction = input.slice(0, 1).toUpperCase();
} else {
  var input = prompt("Enter queen's direction and steps like N3 SW5....");
}

changeDirection(steps, direction);

function changeDirection(steps, direction) {
  switch (direction) {
    case "S":
      temp = queen.position.r + steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        console.log(
          "Now queen's  position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "E":
      temp = queen.position.y + steps;
      if (boundaryCheck(temp)) {
        queen.position.y = temp;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the Boundary is not allowed....");
      }
      break;
    case "W":
      temp = queen.position.y - steps;
      if (boundaryCheck(temp)) {
        queen.position.y = temp;
        console.log(
          "Now queen's position is " + queen.position.r,
          queen.position.c
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "N":
      temp = queen.position.x - steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "SE":
      temp1 = queen.position.x - steps;
      temp2 = queen.position.y + steps;
      if (boundaryCheck2(temp1, temp2)) {
        queen.position.x = temp1;
        queen.position.y = temp2;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "NE":
      temp1 = queen.position.x + steps;
      temp2 = queen.position.y + steps;
      if (boundaryCheck2(temp1, temp2)) {
        queen.position.x = temp1;
        queen.position.y = temp2;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "SW":
      temp1 = queen.position.x - steps;
      temp2 = queen.position.y - steps;
      if (boundaryCheck2(temp1, temp2)) {
        queen.position.x = temp1;
        queen.position.y = temp2;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    case "NW":
      temp1 = queen.position.x + steps;
      temp2 = queen.position.y - steps;
      if (boundaryCheckrc(temp1, temp2)) {
        queen.position.x = temp1;
        queen.position.y = temp2;
        console.log(
          "Now queen's position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("Crossing the boundary is not allowed....");
      }
      break;
    default:
      console.log(
        "Your direction is invaild ...so please enter valid direction"
      );
  }
}

function boundaryCheck(rowNum) {
  if (
    rowNum == 0 ||
    rowNum == 1 ||
    rowNum == 2 ||
    rowNum == 3 ||
    rowNum == 4 ||
    rowNum == 5 ||
    rowNum == 6 ||
    rowNum == 7
  )
    return true;
  else return false;
}

function boundaryCheck2(rowNum, colNum) {
  if (
    ((rowNum == 0 ||
      rowNum == 1 ||
      rowNum == 2 ||
      rowNum == 3 ||
      rowNum == 4 ||
      rowNum == 5 ||
      rowNum == 6 ||
      rowNum == 7) &&
      colNum == 0) ||
    colNum == 1 ||
    colNum == 2 ||
    colNum == 3 ||
    colNum == 4 ||
    colNum == 5 ||
    colNum == 6 ||
    colNum == 7
  )
    return true;
  else return false;
}
