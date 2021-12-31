const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('.body');
let timerId = null;
function stopRandomHexColor() { 
   clearInterval(timerId);
    timerId = null
    buttonStart.removeAttribute("disabled");
}
buttonStart.addEventListener("click", () => {
    buttonStart.setAttribute("disabled","disabled");
    timerId = setInterval(() => {
            if (timerId) {
                document.body.style.backgroundColor = (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
            }
        }, 1000);
});
buttonStop.addEventListener('click', stopRandomHexColor);


