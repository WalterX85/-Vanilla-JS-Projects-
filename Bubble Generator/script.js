const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {

  const bubble =  document.createElement("span");
  // createElement injecte une balise (span) à partir de js.
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  //  appenChild indique au body qu'il a désormais un enfant qui s'appelle bubble, nous retrouvons maintenant notre balise dans le dom.

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(bubbleMaker, 300);