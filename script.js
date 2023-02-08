const btns = document.querySelectorAll(".btn");
const visor = document.querySelector(".visor");
let visorContent = "";


// update visor on every button clicked
function updateVisor(input) {
  
}

// operate numbers

// round numbers to 2 digits
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 5);
  return Math.round(value * multiplier) / multiplier;
}

// return right operator
function operate(op, prevNum, currNum) {
  if (op === "+") {
    return round((Number(prevNum) + Number(currNum)));
  }
  if (op === "-") {
    return round(prevNum - currNum);
  }
  if (op === "*") {
    return round(prevNum * currNum);
  }
  if (op === "/") {
    return round(prevNum / currNum);
  }
  else {
    return "ERR"
  }
}