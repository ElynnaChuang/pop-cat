let clicks = parseInt(document.querySelector(".counter").textContent, 10);
const playground = document.querySelector(".playground");
const audio = document.querySelector(".pop-voice");

function catToggle(event) {
  const catSwitch = document.querySelector(".playground").firstElementChild;
  let counter = document.querySelector(".counter");
  const target = event.target;
  console.log(target);
  if (target.className === "cat-off") {
    catSwitch.className = "cat-on";
    clicks++;
    counter.innerHTML = clicks;
    audio.play();
    setTimeout(function () {
      catSwitch.className = "cat-off";
    }, 100);
  }
}

playground.addEventListener("click", catToggle);
