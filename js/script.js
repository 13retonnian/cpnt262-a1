const button = document.querySelector("button");
const htmlClass = document.querySelector("html");
const wordsClass = document.getElementsByClassName("autumn-class");
const imageGif = document.querySelector("img");
const aClass = document.querySelectorAll("a");
let castle = false;

const spookyButton = function(event) {
  event.preventDefault();
  htmlClass.classList.toggle("html-spooky");
  for(let i = 0; i < wordsClass.length; i++)
  {
    wordsClass[i].classList.toggle("spooky-class")  
  }
  //if castle isn't there then switch to castle and vice versa
  if(castle) {
    imageGif.src = "img/Halloween2.gif"
    castle = false;
  } else {
    imageGif.src = "img/castle.gif";
    castle = true;
  }  

  for(let i = 0; i < aClass.length; i++)
  {
    aClass[i].classList.toggle("aClass");
  }
}

button.addEventListener("click", spookyButton);