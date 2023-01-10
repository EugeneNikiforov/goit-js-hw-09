import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const dataDays = document.querySelector(`span[data-days]`);
const dataHours = document.querySelector(`span[data-hours]`);
const dataMinutes = document.querySelector(`span[data-minutes]`);
const dataSeconds = document.querySelector(`span[data-seconds]`);
const input = document.querySelector(`input#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);


startBtn.setAttribute(`disabled`, true);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          return Notify.failure("Please choose a date in the future");
      };
      startBtn.removeAttribute(`disabled`);
      startBtn.addEventListener(`click`, (() => {
          const timer = selectedDates[0].getTime();
          const timerStart = setInterval(() => {
              const deltaTime = timer - new Date();
              const time = convertMs(deltaTime);
              if (timer - new Date() > 0) {
                  updateTime(time);
                  startBtn.setAttribute(`disabled`, true);
                  input.setAttribute(`disabled`, true);
              } else {
                  clearInterval(timerStart);
                  return Notify.success('Done  (O_O)');
              }
          }, 1000)
      }))
  },
};
flatpickr(`input`, options);

function updateTime({ days, hours, minutes, seconds }) {
    dataDays.textContent = `${days}`;
    dataHours.textContent = `${hours}`;
    dataMinutes.textContent = `${minutes}`;
    dataSeconds.textContent = `${seconds}`;
};

function addLeadingZero(value) {
    return String(value).padStart(2, `0`);
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};
// const fieldEl = document.querySelectorAll('.field')
// refs.fieldEl.forEach(el => {
//   el.style.display = 'flex';
//   el.style.flexDirection = 'column';
//   el.style.justifyContent = 'center';
// });