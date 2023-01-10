import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  });
};

const form = document.querySelector(`.form`);

form.addEventListener(`submit`, submitForm);
let delay = 0;
let position = 0;
function submitForm(e) {
  e.preventDefault();
  const formItem = e.currentTarget.elements;
  const firstDelay = Number(formItem.delay.value);
  const step = Number(formItem.step.value);
  const amount = Number(formItem.amount.value);
  makePromises(firstDelay, step, amount);
};
function makePromises(firstDelay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      delay = firstDelay;
    } else {
      delay += step;
    };
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      });
  };
};

