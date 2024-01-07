const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".button");
const rabbitBox = Math.floor(Math.random() * boxes.length);
const score = document.querySelector(".score");

let scoreUser = 0;
let scoreRabbit = 0;

function startGame() {
  const imgRabbit = document.querySelectorAll(".box__img");

  imgRabbit.forEach((img) => {
    img.classList.add("hidden");
  });

  const errorBox = document.querySelector(".error");
  errorBox.classList.remove("error");
}

button.addEventListener("click", startGame);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (index === rabbitBox) {
      box.children[0].classList.remove("hidden");
      scoreUser++;
    } else {
      box.classList.add("error");
      scoreRabbit++;
    }
    score.textContent = `${scoreUser} : ${scoreRabbit}`;
    if (scoreUser === 5) {
      alert("You win!");
    }
    if (scoreRabbit === 5) {
      alert("Rabbit win!");
    }
  });
});
