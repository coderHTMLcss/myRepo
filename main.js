const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".button");
const score = document.querySelector(".score");

let rabbitBox = Math.floor(Math.random() * boxes.length);

let scoreUser = 0;
let scoreRabbit = 0;

function startGame() {
  const imgRabbit = document.querySelectorAll(".box__img");
  imgRabbit.forEach((img) => {
    img.classList.add("hidden");
  });

  rabbitBox = Math.floor(Math.random() * boxes.length);

  const errorBox = document.querySelector(".error");
  if (errorBox) {
    errorBox.classList.remove("error");
  }
}

button.addEventListener("click", startGame);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    const img = box.querySelector(".box__img");
    const isRabbit = index === rabbitBox;

    if (isRabbit) {
      img.classList.remove("hidden");
      scoreUser++;
    } else {
      box.classList.add("error");
      scoreRabbit++;
    }

    score.textContent = `${scoreUser} : ${scoreRabbit}`;

    if (scoreUser === 5 || scoreRabbit === 5) {
      const winner = scoreUser === 5 ? "You win!" : "Rabbit win!";
      alert(winner);
      startGame();
      scoreUser = 0;
      scoreRabbit = 0;
      score.textContent = `${scoreUser} : ${scoreRabbit}`;
    }
  });
});
