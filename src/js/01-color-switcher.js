const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
const bodyColor = document.querySelector(`body`);
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

stopBtn.setAttribute(`disabled`, true);
startBtn.addEventListener(`click`, changeBodyColor);

function changeBodyColor() {
    stopBtn.removeAttribute(`disabled`);
}
