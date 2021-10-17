const button = document.querySelector("button");
const htmlClass = document.querySelector("html");
const autumnClass = document.getElementsByClassName("autumn-class");

const spookyButton = function(event) {
  event.preventDefault();
  htmlClass.classList.toggle("html-spooky");
  for(let i = 0; i < autumnClass.length; i++)
  {
    autumnClass[i].classList.toggle("spooky-class")  
  }
  
}

button.addEventListener("click", spookyButton);