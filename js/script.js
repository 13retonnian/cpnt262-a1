//programmed by Christopher Barber 
// attributions to Tony Grimes and Ashlyn Knox
// attributions to W3 schools 
const spookyButton = document.querySelector("button");
const htmlClass = document.querySelector("html");
const wordsClass = document.getElementsByClassName("autumn-class");
const imageGif = document.querySelector("img");
const navElements = document.querySelectorAll("a");
let castle = false;
let buttonIsSpooky = true;

const spookyButtonClick = function(event) {
  event.preventDefault();
  //changing the class of the html element for the background image
  htmlClass.classList.toggle("html-spooky");
  //changing the class of the word elements
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
  //change the colour of the nav elements
  for(let i = 0; i < navElements.length; i++)
  {
    navElements[i].classList.toggle("nav-elements");
  }
  //change the spooky button
  spookyButton.classList.toggle("halloween-button");
  if(buttonIsSpooky){
    spookyButton.textContent = "Normal Button";
    buttonIsSpooky = false;
  } else {
    spookyButton.textContent = "Spooky Button";
    buttonIsSpooky = true;
  }  
  

}

spookyButton.addEventListener("click", spookyButtonClick);