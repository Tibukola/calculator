
function insertValue(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  var currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculateResult() {
  var currentValue = document.getElementById("result").value;
  var result = eval(currentValue);
  document.getElementById("result").value = result;
}
function calculateResult() {
  var currentValue = document.getElementById("result").value;
  
  
  if (currentValue.includes("Math.")) {
    var result = eval(currentValue);
    document.getElementById("result").value = result;
  }
 
  else {
    var result = Function('"use strict";return (' + currentValue + ')')();
    document.getElementById("result").value = result;
  }
}
function calculateResult() {
  var currentValue = document.getElementById("result").value;
  
  if (currentValue.includes("%")) {
    
    var operands = currentValue.split("%");
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);

    
    var result = (operand1 * operand2) / 100;

    
    document.getElementById("result").value = result;
  } else if (currentValue.includes("Math.")) {
    
    var result = eval(currentValue);
    document.getElementById("result").value = result;
  } else {
    
    var result = Function('"use strict";return (' + currentValue + ')')();
    document.getElementById("result").value = result;
  }
}



