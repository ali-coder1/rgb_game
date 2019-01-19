// Array of the colors
var numSquares = 6;
var colors = [];
var pickedColor;

// All of the selector for the IDs and Classes in HTML file
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//var easyButton = document.querySelector("#easyButton");
//var hardButton = document.querySelector("#hardButton");

init(); // This function is the first thing will run when the page load

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // Here to put two buttons in one function as shortcut
  for (var i = 0; i < modeButtons.length; i++) {

    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if (this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }

      reset();

    });

  }

}

function setupSquares() {
  // add initial colors to squares
  for (var i = 0; i < squares.length; i++) {
    //squares[i].style.backgroundColor = colors[i];

    // add click event to squares
    squares[i].addEventListener("click", function() {

      // grab a color of clicled square
      var clickedColor = this.style.backgroundColor;

      // compare color to the picked color
      if (clickedColor === pickedColor) {
        messageDispaly.textContent = "Correct👏😍";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "🔁Play Again"
      } else {
        this.style.backgroundColor = "#232323";
        messageDispaly.textContent = "Try Again🤦‍";

      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDispaly.textContent = "";
}

// easyButton.addEventListener("click", function() {
//
//   easyButton.classList.add("selected");
//   hardButton.classList.remove("selected");
//
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//
//   pickedColor = pickColor();
//
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//
//   }
//
//   h1.style.backgroundColor = "steelblue";
//   messageDispaly.textContent = "";
// });
//
// hardButton.addEventListener("click", function() {
//
//   hardButton.classList.add("selected");
//   easyButton.classList.remove("selected");
//
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//
//   pickedColor = pickColor();
//
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
//
//   h1.style.backgroundColor = "steelblue";
//   messageDispaly.textContent = "";
//
// });

resetButton.addEventListener("click", function() {

  reset();

});

// This function will change all squares once its Correct
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// This function will pick a color
function pickColor() {

  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// colors will be stored at this function
function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repate num times
  for (var i = 0; i < num; i++) {

    arr.push(randomColor());
  }

  return arr;
}

// This function to give random color everytime for the (above) function
function randomColor() {

  // Red color
  var red = Math.floor(Math.random() * 256);
  // Green color
  var green = Math.floor(Math.random() * 256);
  // Blue color
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
