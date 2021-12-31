import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
const dateTime = document.getElementById('datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
let timerId = null;
buttonStart.setAttribute("disabled","disabled");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    setDatas(selectedDates[0]);
    //  console.log(selectedDates[0]);
    //  console.log(new Date())
  },
};
//render();
flatpickr(dateTime, options);
function setDatas(pastTime) {
    if (pastTime > new Date()) {
        buttonStart.removeAttribute("disabled");
    }
    else {
        window.alert("Please choose a date in the future");

    }
    buttonStart.addEventListener('click', () => {
        timerId = setInterval(() => {
            if (timerId) {
                const timerTime = pastTime - new Date();
                if (timerTime <= 1000) {
                    clearInterval(timerId)
                    timerId = null
                    location.reload();
                }
            console.log(timerTime)
                const convert = convertMs(timerTime);
          
                // if (convert.days < 10) {
                //     dataDays.textContent = "0" + convert.days;
                // }
                // else {
                //     dataDays.textContent = convert.days;
                // }
                // if (convert.hours < 10) {
                //     dataHours.textContent = "0" + convert.hours;
                // }
                // else {
                //     dataHours.textContent = convert.hours;
                // }
                // if (convert.minutes < 10) {
                //     dataMinutes.textContent = "0" + convert.minutes;
                // }
                // else {
                //     dataMinutes.textContent = convert.minutes;
                // }
                // if (convert.seconds < 10) {
                //     dataSeconds.textContent = "0" + convert.seconds;
                // }
                // else {
                //     dataSeconds.textContent = convert.seconds;
                // }
                dataDays.textContent = convert.days
                dataHours.textContent = convert.hours
                dataMinutes.textContent = convert.minutes
                dataSeconds.textContent = convert.seconds
           

             };
           
            
            }, 1000);
    
    });
};
 
function addLeadingZero(value) { 
return String(value).padStart(2,"0")
}




function convertMs(ms) {
  buttonStart.setAttribute("disabled","disabled");
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours =addLeadingZero(Math.floor((ms % day) / hour)) ;
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    
    return { days, hours, minutes, seconds };
}

//console.log(convertMs(123123123))
// function render() {
//     console.log(options.selectedDates[0])
//     // if (options.selectedDates[0] < options.Date()) { 
//     //     return window.alart();


    // }

//render();
