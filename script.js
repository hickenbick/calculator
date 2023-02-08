const btns = document.querySelectorAll(".btn");
const visor = document.querySelector(".visor")
let visorContent = "";

// listen to all buttons clicked
btns.forEach(function(btn){
  btn.addEventListener("click", function() {
    console.log(btn.textContent)
    updateVisor(btn.textContent)
  })
})

// update visor on every button clicked
function updateVisor(input) {
  visorContent += input
  visor.textContent = visorContent;
}

// operate numbers
function add(n0, n1) {
  return (+n0 + +n1);
} 

function subtract(n0, n1) {
  return (n0 - n1);
}

function multiply(n0, n1) {
  return (n0 * n1);
}

function divide(n0, n1) {
  return (n0 / n1);
}

// round numbers to 2 digits
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 2);
  return Math.round(value * multiplier) / multiplier;
}

// return right operator
function operate(op, n0, n1) {
  if (op === "+") {
    return round(add(n0, n1));
  }
  if (op === "-") {
    return round(subtract(n0, n1));
  }
  if (op === "*") {
    return round(multiply(n0, n1));
  }
  if (op === "/") {
    return round(divide(n0, n1));
  }
  else {
    return "ERR"
  }
}

console.log("test")

// tests
// let plus = operate("+", 2.5555555, 2);
// let minus = operate("-", 2.545, 2);
// let multi = operate("*", 5324, 2.12);
// let div = operate("/", 10.2234, 2);
// console.log(plus)
// console.log(minus)
// console.log(multi)
// console.log(div)