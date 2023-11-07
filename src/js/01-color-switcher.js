const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
btnStop.disabled = true
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let timerId = null;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});
btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = truestar;
});
