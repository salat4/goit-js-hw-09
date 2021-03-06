import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const delay = document.querySelector("input[name=delay]");
const step = document.querySelector("input[name=step]");
const amount = document.querySelector("input[name=amount]");
const form = document.querySelector('.form');
const button = document.querySelector('button')

button.setAttribute("disabled","disabled");

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
});
}
function qwe(e) {
  button.setAttribute("disabled","disabled");
  e.preventDefault();
  let  delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const  amountValue = Number(amount.value);
  let qwe = 0

  
  if (stepValue === 0) {
  
    for (let i = 0; i < amountValue; i++) {
      setTimeout(() => {
        createPromise(i + 1, delayValue)
          .then(value => {
            Notiflix.Notify.success(value);
          })
          .catch(error => {
            Notiflix.Notify.failure(error);
          });
        delayValue += stepValue
      }, delayValue)
    }
  }
  else {
    
    for (let i = 0; i < amountValue; i++) {
      qwe = qwe + stepValue;
      function time() { 
        if (i < 1) {
          
          return delayValue
        }
        else {
          return qwe + delayValue - stepValue
        }
      };
      setTimeout(() => {
        createPromise(i+1, delayValue )
          .then(value => {
            Notiflix.Notify.success(value);
          })
          .catch(error => {
            Notiflix.Notify.failure(error);
          });
        delayValue += stepValue
      }, time())
    }
  }
}
function examination() { 
if (button.hasAttribute("disabled")) {
    button.removeAttribute("disabled", "disabled");
  }
  else { 
button.setAttribute("disabled","disabled");
  }


}

form.addEventListener("submit", qwe)
delay.addEventListener("click",examination)