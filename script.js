const btns = document.querySelectorAll(".btn");
const visor = document.querySelector(".visor");
const prevNumVisor = document.querySelector(".prevNum");
const currNumVisor = document.querySelector(".currNum");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let prevNum = "";
let currNum = "";
let operator = "";


// listen to numbers clicked
numbers.forEach((e) => e.addEventListener("click", function(e){
  updateVisor(e.target.textContent);
}));


// listen to operators clicked
operators.forEach((e) => e.addEventListener("click", function(e) {
  operator = e.target.textContent;
  prevNum = currNum;
  prevNumVisor.textContent = prevNum;
  currNumVisor.textContent = operator;
  currNum = ""
}))


// update visor on every button clicked
function updateVisor(input) {
  currNum += input
  currNumVisor.textContent = currNum
}


// round numbers to 2 digits
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 5);
  return Math.round(value * multiplier) / multiplier;
}


// return number operated
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