const btns = document.querySelectorAll(".btn");
const visor = document.querySelector(".visor");
const prevNumVisor = document.querySelector(".prevNum");
const currNumVisor = document.querySelector(".currNum");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const ac = document.querySelector(".ac");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
let prevNum = "";
let currNum = "";
let operator = "";


// function when number buttons clicked
numbers.forEach((e) => e.addEventListener("click", function(e){
    currNum += e.target.textContent;
    updateVisor();
}));

// function when dot button is clicked (works only once)
dot.addEventListener("click", function(){
  if (currNum.includes(".")) {
    return
  } else {
    currNum += ".";
    updateVisor();
  }
});


// function when operator buttons clicked
operators.forEach((e) => e.addEventListener("click", function(e) {
   if(operator === "") {
    operator = e.target.textContent;
    prevNum = currNum;
    prevNumVisor.textContent = prevNum;
    currNumVisor.textContent = operator;
    currNum = ""
  } else {
    prevNum = operate(operator, prevNum, currNum);
    currNum = e.target.textContent;
    updateVisor()
    currNum = "";
    operator = e.target.textContent;
  }
}))


// function when AC button clicked
ac.addEventListener("click", function() {
  resetData();
  updateVisor();
})


// function when del button clicked
del.addEventListener("click", function() {
  currNum = currNum.slice(0, -1);
  updateVisor();
})


// function when equal button clicked
equal.addEventListener("click", function() {
    currNum = operate(operator, prevNum, currNum);
    prevNum = "";
    updateVisor();

    prevNum = currNum;
    currNum = "";
})


// update visor when called
function updateVisor() {
  currNumVisor.textContent = currNum;
  prevNumVisor.textContent = prevNum;
}


function resetData() {
  prevNum = "";
  currNum = ""; 
  operator = "";
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
    return round(Number(prevNum) - Number(currNum));
  }
  if (op === "*") {
    return round(Number(prevNum) * Number(currNum));
  }
  if (op === "/") {
    if(prevNum == 0 || currNum == 0) {
      return "ERR"
    } else {
      return round(Number(prevNum) / Number(currNum));
    }
  } else {
      return "ERR"
  }
}