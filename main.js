const counterDisp = document.querySelector("#counter");
const playground = document.querySelector(".playground");
const audio = document.querySelector(".pop-voice");
let clicks = parseInt(counterDisp.textContent, 10);

function catToggle(event) {
  const catSwitch = document.querySelector("#cat-switch")
  if (event.target.matches('.cat')) {
    catSwitch.classList.toggle('cat-on')
    clicks++;
    counterDisp.textContent = clicks;
    audio.play();
    setTimeout(() => catSwitch.classList.toggle('cat-on'), 100);
  }
}
playground.addEventListener('click', catToggle);