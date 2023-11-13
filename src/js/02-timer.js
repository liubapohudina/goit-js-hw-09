import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const inputDate = document.querySelector("#datetime-picker")
const buttonStart = document.querySelector("button[data-start]")
const day = document.querySelector('span[data-days]')
const hour = document.querySelector('span[data-hours]')
const minute = document.querySelector('span[data-minutes]')
const second = document.querySelector('span[data-seconds]')
//const currentDate = new Date()
//inputDate.textContent = currentDate
//console.log(inputDate)
buttonStart.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
     Notiflix.Notify.failure("Please choose a date in the future.")
      buttonStart.disabled = true;
    }  else {
      buttonStart.disabled = false;
    }
  },
};
flatpickr(inputDate, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
buttonStart.addEventListener('click', handleClick)
function handleClick() {
    const targetDate = new Date(inputDate.value);
    let timerId = setInterval(() => {
        let betweenDate = targetDate - new Date();
        if (betweenDate >= 0) {
              let time = convertMs(betweenDate)
            day.textContent = addLeadingZero(time.days)
            hour.textContent = addLeadingZero(time.hours)
            minute.textContent = addLeadingZero(time.minutes)
            second.textContent = addLeadingZero(time.seconds)  
            buttonStart.disabled = true;
        } else {
          Notiflix.Report.info('Your time is finished')
          clearInterval(timerId);
        } 
    }, 1000);
}