function display(button) {
  document.getElementById("screen").value += button;
}

function solve() {
  let a = document.getElementById("screen").value;
  let b = eval(a);
  document.getElementById("screen").value = b;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
