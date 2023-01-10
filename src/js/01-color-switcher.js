const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
const bodyColor = document.querySelector(`body`);
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let colorId;
stopBtn.setAttribute(`disabled`, true);
startBtn.addEventListener(`click`, changeBodyColor);

function changeBodyColor() {
    stopBtn.removeAttribute(`disabled`);
    colorId = setInterval(() => {
        bodyColor.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startBtn.setAttribute(`disabled`, true);
};
stopBtn.addEventListener(`click`, stopChangeColor);
function stopChangeColor() {
    clearInterval(colorId);
    stopBtn.setAttribute(`disabled`, true);
    startBtn.removeAttribute(`disabled`, true);
};