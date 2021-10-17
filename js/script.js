const button = document.querySelector("button");
const htmlClass = document.querySelector("html");

const spookyButton = function(event) {
  event.preventDefault();
  htmlClass.classList.toggle("spookyClass");
}

button.addEventListener("click", spookyButton);