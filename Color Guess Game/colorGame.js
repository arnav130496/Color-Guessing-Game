//CODE CAN BE MAJORLY REFACTORED REFER VIDEO 143 to refactor the code
var num =6; //THIS IS TO COUNT SQUARES B/W EASY AND HARD
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Background = document.querySelector("h1");
var retry= document.getElementById("retry");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
  num = 3;
  h1Background.style.background = "steelblue";
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors=generateRandomColors(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
    squares[i].style.background = colors[i];
    }
  else{
    squares[i].style.display = "none"; //DISPLAY ATTRIBUTE TO BE REFERENCED
    }
  }
})

hardBtn.addEventListener("click", function(){
  num =6;  
  h1Background.style.background = "steelblue";
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors=generateRandomColors(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
    } // IDK WTF THIS DOESSSSSS //THIS IS USED TO BRING BACK THE DELETED SQUARES FROM EASY MODE  }
})


//THIS EXECUTES FIRST
colorDisplay.textContent= pickedColor;
// retry.textContent = "New Colors";
for (var i = 0; i < squares.length; i++) {
  //add initial colors
	squares[i].style.background = colors[i];
  // add click listeners
  squares[i].addEventListener("click", function(){
  var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent="Correct!";
      changeColors(clickedColor);
       h1Background.style.background = pickedColor; 
       retry.textContent = "Play Again?";
    }
    else {
      this.style.background="#232323";
       messageDisplay.textContent="Try Again";
    }
 })
}

//"New Colors Button " 
retry.addEventListener("click", function(){
  colors = generateRandomColors(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1Background.style.background= "steelblue";
  messageDisplay.textContent = "";
  retry.textContent = "New Colors";
  for (var i = 0; i <squares.length; i++) {
   squares[i].style.background = colors[i];
  }
}) 




function changeColors(color){
  for(var i=0; i< squares.length; i++){
    squares[i].style.background=color;
  }

}
function pickColor(){
  var random= Math.floor(Math.random() * colors.length);
  return colors[random];   
}

function generateRandomColors(num){
  //Function to assign random colors to squares 
  var arr= [];
  //Put COde Here
  for (var i = 0; i < num; i++) {
    //arr[i]= randomColor();
    arr.push(randomColor());
  }

  return arr;

}

function randomColor(){
  //Function to generate random colors for each square
  var r= Math.floor(Math.random() * 256);
  var g= Math.floor(Math.random() * 256);
  var b= Math.floor(Math.random() * 256);
  // String manipulation for "rgb(x, x, x)" format
  return "rgb("+ r + ", " + g + ", " + b +")"; 
}
