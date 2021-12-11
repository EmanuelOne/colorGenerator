// generate a random color whch is a number between 0 and 255

function generateNumber() {
  var randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}
// Math.random() returns a random number between 0 and 1
function generateColor(alpha = undefined) {
  var red = generateNumber(); //reusable function
  var green = generateNumber();
  var blue = generateNumber();
  if (alpha === undefined) {
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  } else {
    var color = 'rgb(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }
  return color;
}
var color1 = generateColor();
var color2 = generateColor();
var color3 = generateColor();
var color4 = generateColor();
// console.log(color1);
var h1 = document.getElementsByTagName('h1')[0];
// console.log(h1);
// h1.textContent = 'New Color is generating ...';
h1.style.color = generateColor();
var boxes = document.getElementsByClassName('box');
// var firstBox = boxes[0];
// var secondBox = boxes[1];
// var thirdBox = boxes[2];
// var fouthBox = boxes[3];
// firstBox.style.backgroundColor = color1;
// secondBox.style.backgroundColor = color2;
// thirdBox.style.backgroundColor = color3;
// fouthBox.style.backgroundColor = color4;

var btn = document.getElementsByTagName('button')[0];
var colorHandler = function () {
  for (var boxIndex = 0; boxIndex < boxes.length; boxIndex = boxIndex + 1) {
    var box = boxes[boxIndex];
    var color = generateColor(Math.random());
    box.style.backgroundColor = color;
  }
};
colorHandler();
btn.addEventListener('click', colorHandler);

// console.log(firstBox, secondBox, thirdBox);
// DOM
// DOCUMENT OBJECT MODEL
